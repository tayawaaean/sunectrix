import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Polyline, LayersControl } from 'react-leaflet';
import { Box, Card, CardContent, Typography, Button, Chip } from '@mui/material';
import {
  Add,
  Edit,
  Clear,
  Download,
  Map,
  Satellite,
  Layers
} from '@mui/icons-material';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface SolarData {
  id: string;
  area: number;
  peakSunHours: number;
  estimatedOutput: number;
  coordinates: [number, number][];
  timestamp: Date;
}

interface MapData {
  areas: SolarData[];
  totalArea: number;
  totalOutput: number;
}

const InteractiveMap: React.FC = () => {
  const [mapData, setMapData] = useState<MapData>({
    areas: [],
    totalArea: 0,
    totalOutput: 0
  });
  const [selectedArea, setSelectedArea] = useState<SolarData | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingPoints, setDrawingPoints] = useState<[number, number][]>([]);
  const [activeMapLayer, setActiveMapLayer] = useState<string>('Street Map');
  const [currentZoom, setCurrentZoom] = useState<number>(10);
  const mapRef = useRef<L.Map | null>(null);

  // Ilocos Norte coordinates and bounds
  const ilocosNorteCenter: [number, number] = [18.5046, 120.5906];
  const ilocosNorteBounds: [number, number][] = [
    [18.0, 120.0],   // Southwest
    [19.0, 121.0]    // Northeast
  ];

  // Solar data for Ilocos Norte (NREL-based)
  const ilocosNorteSolarData = {
    averagePeakSunHours: 4.75, // NREL average: 4.5-5.0 kWh/m²/day
    seasonalVariation: {
      summer: 5.2,    // March to May
      rainy: 4.3,     // June to October
      cool: 4.1       // November to February
    },
    efficiency: 0.75, // Solar panel efficiency
    degradation: 0.5  // Annual degradation percentage
  };

  const calculateSolarOutput = (area: number, peakSunHours: number): number => {
    // Formula: Area (m²) × Peak Sun Hours × Efficiency × 1000W/m²
    return area * peakSunHours * ilocosNorteSolarData.efficiency * 1000;
  };

  // Calculate area from line measurements (approximate rectangle)
  const calculateLineArea = (coordinates: [number, number][]): number => {
    if (coordinates.length < 2) return 0;
    
    // Calculate the bounding box area from the line points
    const lats = coordinates.map(coord => coord[0]);
    const lngs = coordinates.map(coord => coord[1]);
    
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);
    
    // Convert to square meters (approximate)
    // 1 degree ≈ 111,000 meters at the equator
    const metersPerDegree = 111000 * Math.cos(ilocosNorteCenter[0] * Math.PI / 180);
    const latDiff = (maxLat - minLat) * metersPerDegree;
    const lngDiff = (maxLng - minLng) * metersPerDegree * Math.cos(ilocosNorteCenter[0] * Math.PI / 180);
    
    return latDiff * lngDiff;
  };

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    if (!isDrawing) return;
    
    const newPoint: [number, number] = [e.latlng.lat, e.latlng.lng];
    setDrawingPoints(prev => [...prev, newPoint]);
  };

  const finishDrawing = () => {
    if (drawingPoints.length < 2) {
      alert('Please draw at least 2 points to create a line measurement');
      return;
    }

    const area = calculateLineArea(drawingPoints);
    const newSolarData: SolarData = {
      id: Date.now().toString(),
      area: area,
      peakSunHours: ilocosNorteSolarData.averagePeakSunHours,
      estimatedOutput: calculateSolarOutput(area, ilocosNorteSolarData.averagePeakSunHours),
      coordinates: drawingPoints,
      timestamp: new Date()
    };

    setMapData(prev => ({
      areas: [...prev.areas, newSolarData],
      totalArea: prev.totalArea + area,
      totalOutput: prev.totalOutput + newSolarData.estimatedOutput
    }));

    setSelectedArea(newSolarData);
    setIsDrawing(false);
    setDrawingPoints([]);
  };

  const cancelDrawing = () => {
    setIsDrawing(false);
    setDrawingPoints([]);
  };

  const clearAllAreas = () => {
    setMapData({ areas: [], totalArea: 0, totalOutput: 0 });
    setSelectedArea(null);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(mapData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'solar-rooftop-data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const deleteArea = (id: string) => {
    setMapData(prev => {
      const areaToDelete = prev.areas.find(area => area.id === id);
      if (!areaToDelete) return prev;
      
      const newAreas = prev.areas.filter(area => area.id !== id);
      const totalArea = newAreas.reduce((sum, area) => sum + area.area, 0);
      const totalOutput = newAreas.reduce((sum, area) => sum + area.estimatedOutput, 0);
      
      return { areas: newAreas, totalArea, totalOutput };
    });
    
    if (selectedArea?.id === id) {
      setSelectedArea(null);
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on('click', handleMapClick);
      
      // Listen for layer changes
      const handleLayerChange = (e: any) => {
        if (e.name) {
          setActiveMapLayer(e.name);
        }
      };
      
      // Listen for zoom changes
      const handleZoomChange = () => {
        if (mapRef.current) {
          setCurrentZoom(mapRef.current.getZoom());
        }
      };
      
      mapRef.current.on('baselayerchange', handleLayerChange);
      mapRef.current.on('zoomend', handleZoomChange);
      
      return () => {
        if (mapRef.current) {
          mapRef.current.off('click', handleMapClick);
          mapRef.current.off('baselayerchange', handleLayerChange);
          mapRef.current.off('zoomend', handleZoomChange);
        }
      };
    }
  }, [isDrawing, drawingPoints]);

  return (
    <Box sx={{ height: '700px', width: '100%', position: 'relative' }} className="map-container">
      <MapContainer
        center={ilocosNorteCenter}
        zoom={10}
        style={{ height: '100%', width: '100%', minHeight: '600px' }}
        ref={mapRef}
        bounds={ilocosNorteBounds}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        className="leaflet-container"
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Street Map">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Satellite">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            />
          </LayersControl.BaseLayer>
          
          <LayersControl.BaseLayer name="Hybrid">
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a> &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            />
            <TileLayer
              url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
              attribution='&copy; <a href="https://www.esri.com/">Esri</a>'
              opacity={0.8}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
        
        {/* Ilocos Norte boundary highlight */}
        <Polyline
          positions={ilocosNorteBounds}
          pathOptions={{
            color: '#ff6b35',
            weight: 3,
            fillColor: '#ff6b35',
            fillOpacity: 0.1
          }}
        >
          <Popup>
            <Typography variant="h6">Ilocos Norte</Typography>
            <Typography variant="body2">
              Solar potential: {ilocosNorteSolarData.averagePeakSunHours} peak sun hours/day
            </Typography>
            <Typography variant="caption" color="text.secondary">
              💡 Tip: Use satellite view for better rooftop identification
            </Typography>
          </Popup>
        </Polyline>

        {/* Drawing line preview */}
        {isDrawing && drawingPoints.length > 0 && (
          <Polyline
            positions={drawingPoints}
            pathOptions={{
              color: '#ff6b35',
              weight: 3,
              dashArray: '5, 5'
            }}
          />
        )}

        {/* Display existing areas as lines */}
        {mapData.areas.map((area) => (
          <Polyline
            key={area.id}
            positions={area.coordinates}
            pathOptions={{
              color: '#1976d2',
              weight: 3,
              fillColor: '#1976d2',
              fillOpacity: 0.4
            }}
            eventHandlers={{
              click: () => setSelectedArea(area)
            }}
          >
            <Popup>
              <Typography variant="h6">Rooftop Area</Typography>
              <Typography>Area: {area.area.toFixed(2)} m²</Typography>
              <Typography>Estimated Output: {(area.estimatedOutput / 1000).toFixed(2)} kW</Typography>
              <Button
                variant="outlined"
                size="small"
                onClick={() => deleteArea(area.id)}
                sx={{ mt: 1 }}
                color="error"
              >
                Delete
              </Button>
            </Popup>
          </Polyline>
        ))}
      </MapContainer>

             {/* Control Panel */}
       <Card sx={{ 
         position: 'absolute', 
         top: 15, 
         left: 15, 
         zIndex: 1000, 
         minWidth: 320,
         maxWidth: 380,
         backgroundColor: 'rgba(255, 255, 255, 0.95)'
       }}>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Add color="primary" />
            Solar Rooftop Calculator
          </Typography>
          
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">
              {isDrawing 
                ? `Click on the map to draw lines. Current points: ${drawingPoints.length}`
                : 'Click "Start Drawing" to measure rooftop areas with lines'
              }
            </Typography>
          </Box>

          {/* Drawing Controls */}
          {!isDrawing ? (
            <Button
              variant="contained"
              fullWidth
              onClick={() => setIsDrawing(true)}
              startIcon={<Add />}
              sx={{ mb: 2 }}
            >
              Start Drawing
            </Button>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Button
                variant="contained"
                onClick={finishDrawing}
                startIcon={<Edit />}
                disabled={drawingPoints.length < 2}
              >
                Finish
              </Button>
              <Button
                variant="outlined"
                onClick={cancelDrawing}
              >
                Cancel
              </Button>
            </Box>
          )}

          {/* Summary Stats */}
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" color="primary">
                {mapData.totalArea.toFixed(1)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Total Area (m²)
              </Typography>
            </Box>
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Typography variant="h6" color="primary">
                {(mapData.totalOutput / 1000).toFixed(1)}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Total Output (kW)
              </Typography>
            </Box>
          </Box>

          {/* Map Layer Info */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              <Map fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
              Map View
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Chip 
                label={activeMapLayer}
                size="small" 
                color="secondary"
                icon={activeMapLayer.includes('Satellite') ? <Satellite /> : <Map />}
              />
            </Box>
            <Typography variant="caption" color="text.secondary">
              Use layer control (top-right) to switch views
            </Typography>
            
            {/* Zoom Level Info */}
            <Box sx={{ mt: 1, p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant="caption" color="text.secondary" display="block">
                <strong>Current Zoom:</strong> {currentZoom}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                <strong>Tip:</strong> Draw lines along rooftop edges for area calculation
              </Typography>
            </Box>
          </Box>

          {/* Solar Data Info */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              <Layers fontSize="small" sx={{ mr: 1, verticalAlign: 'middle' }} />
              Ilocos Norte Solar Data
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <Chip 
                label={`${ilocosNorteSolarData.seasonalVariation.summer}h`} 
                size="small" 
                color="warning"
              />
              <Chip 
                label={`${ilocosNorteSolarData.seasonalVariation.rainy}h`} 
                size="small" 
                color="info"
              />
              <Chip 
                label={`${ilocosNorteSolarData.seasonalVariation.cool}h`} 
                size="small" 
                color="primary"
              />
            </Box>
            <Typography variant="caption" color="text.secondary">
              Summer • Rainy • Cool
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              size="small"
              onClick={clearAllAreas}
              startIcon={<Clear />}
            >
              Clear All
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={exportData}
              startIcon={<Download />}
            >
              Export Data
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={() => mapRef.current?.fitBounds(ilocosNorteBounds as any, { padding: [20, 20] })}
              sx={{ mt: 1 }}
              fullWidth
            >
              Zoom to Ilocos Norte
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Selected Area Details */}
      {selectedArea && (
        <Card sx={{ 
          position: 'absolute', 
          bottom: 20, 
          right: 20, 
          zIndex: 1000, 
          minWidth: 300,
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Selected Rooftop
            </Typography>
            <Typography variant="body2">
              <strong>Area:</strong> {selectedArea.area.toFixed(2)} m²
            </Typography>
            <Typography variant="body2">
              <strong>Peak Sun Hours:</strong> {selectedArea.peakSunHours} hours/day
            </Typography>
            <Typography variant="body2">
              <strong>Estimated Output:</strong> {(selectedArea.estimatedOutput / 1000).toFixed(2)} kW
            </Typography>
            <Typography variant="body2">
              <strong>Annual Energy:</strong> {(selectedArea.estimatedOutput * 365 * selectedArea.peakSunHours / 1000).toFixed(1)} kWh
            </Typography>
            <Button
              variant="outlined"
              size="small"
              onClick={() => setSelectedArea(null)}
              sx={{ mt: 1 }}
            >
              Close
            </Button>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default InteractiveMap;
