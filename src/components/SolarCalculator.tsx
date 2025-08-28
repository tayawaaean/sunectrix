import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Slider, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem,
  Paper,
  Divider,
  Chip,
  Switch,
  FormControlLabel,
  Alert
} from '@mui/material';
import { 
  Calculate, 
  Park,
  Lightbulb,
  BatteryChargingFull,
  AttachMoney,
  TrendingUp,
  Nature,
  LocationOn,
  Roofing,
  ElectricBolt
} from '@mui/icons-material';

interface SolarCalculation {
  // System Specifications
  systemSize: number; // kW
  panelCount: number;
  usableArea: number; // m²
  panelEfficiency: number; // %
  
  // Energy Production
  dailyProduction: number; // kWh
  monthlyProduction: number; // kWh
  annualProduction: number; // kWh
  peakSunHours: number; // hours/day
  
  // Financial Analysis
  totalSystemCost: number; // PHP
  annualSavings: number; // PHP
  monthlySavings: number; // PHP
  paybackPeriod: number; // years
  roi: number; // %
  netPresentValue: number; // PHP
  
  // Environmental Impact
  carbonOffset: number; // kg CO2/year
  treesEquivalent: number;
  carsEquivalent: number;
  
  // System Performance
  performanceRatio: number;
  degradationRate: number;
  lifetimeProduction: number; // kWh over 25 years
}

const SolarCalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    // Site Information
    location: 'ilocos_norte',
    roofArea: 100, // m²
    roofTilt: 15, // degrees
    roofOrientation: 'south', // direction
    shading: 'minimal',
    
    // Energy Consumption
    monthlyBill: 5000, // PHP
    electricityRate: 12.5, // PHP/kWh
    monthlyConsumption: 400, // kWh/month
    rateIncrease: 5, // % per year
    
    // Financial Preferences
    budgetPreference: 'capex', // capex or financing
    systemCostPerKW: 65000, // PHP/kW
    financingInterest: 8, // % per year
    financingYears: 10,
    netMetering: true,
    governmentIncentives: true,
    
    // Technical Parameters
    panelEfficiency: 20, // %
    performanceRatio: 0.78,
    degradationRate: 0.5, // % per year
    systemLifespan: 25 // years
  });

  const [results, setResults] = useState<SolarCalculation | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Comprehensive solar data for Ilocos Norte (NREL-based)
  const locationData = {
    ilocos_norte: {
      name: 'Ilocos Norte',
      peakSunHours: 4.75, // NREL average: 4.5-5.0 kWh/m²/day
      seasonalVariation: { 
        summer: 5.2,    // March to May
        rainy: 4.3,     // June to October
        cool: 4.1       // November to February
      },
      electricityRate: 12.5, // PHP per kWh (INEC rates)
      solarIrradiance: 4.75, // kWh/m²/day (NREL average)
      latitude: 18.5046,
      longitude: 120.5906
    }
  };

  const shadingFactors = {
    none: 1.0,
    minimal: 0.95,
    moderate: 0.85,
    heavy: 0.70
  };

  const orientationFactors = {
    north: 0.85,
    northeast: 0.90,
    east: 0.95,
    southeast: 0.98,
    south: 1.0,
    southwest: 0.98,
    west: 0.95,
    northwest: 0.90
  };

  const tiltFactors = {
    0: 0.85,    // Flat roof
    5: 0.90,
    10: 0.95,
    15: 0.98,   // Optimal for Philippines
    20: 1.0,
    25: 0.98,
    30: 0.95,
    35: 0.90
  };

  const calculateSolarSystem = () => {
    const location = locationData[inputs.location as keyof typeof locationData];
    const shadingFactor = shadingFactors[inputs.shading as keyof typeof shadingFactors];
    const orientationFactor = orientationFactors[inputs.roofOrientation as keyof typeof orientationFactors];
    const tiltFactor = tiltFactors[Math.round(inputs.roofTilt / 5) * 5 as keyof typeof tiltFactors] || 0.98;
    
    // Calculate effective solar hours considering all factors
    const effectiveSunHours = location.peakSunHours * shadingFactor * orientationFactor * tiltFactor;
    
    // Calculate daily energy consumption from monthly bill
    const dailyConsumption = inputs.monthlyConsumption / 30;
    
    // Calculate required system size (kW) based on consumption
    const requiredSystemSize = dailyConsumption / (effectiveSunHours * inputs.performanceRatio);
    
    // Calculate maximum system size based on available roof area
    const maxSystemSize = (inputs.roofArea * inputs.panelEfficiency / 100) / 1000; // Convert to kW
    
    // Use the smaller of required vs available
    const systemSize = Math.min(requiredSystemSize, maxSystemSize);
    
    // Calculate number of panels (assuming 400W panels)
    const panelCount = Math.ceil(systemSize * 1000 / 400);
    
    // Calculate actual usable area
    const usableArea = (panelCount * 400) / (inputs.panelEfficiency / 100) / 1000; // m²
    
    // Calculate energy production
    const dailyProduction = systemSize * effectiveSunHours * inputs.performanceRatio;
    const monthlyProduction = dailyProduction * 30;
    const annualProduction = dailyProduction * 365;
    
    // Calculate system cost
    let totalSystemCost = systemSize * inputs.systemCostPerKW;
    
    // Apply government incentives (30% tax credit)
    if (inputs.governmentIncentives) {
      totalSystemCost = totalSystemCost * 0.7;
    }
    
    // Calculate financial metrics
    const annualSavings = annualProduction * inputs.electricityRate;
    const monthlySavings = annualSavings / 12;
    
    // Calculate payback period
    const paybackPeriod = totalSystemCost / annualSavings;
    
    // Calculate ROI over system lifespan
    const totalSavings = annualSavings * inputs.systemLifespan;
    const roi = ((totalSavings - totalSystemCost) / totalSystemCost) * 100;
    
    // Calculate NPV (simplified)
    const discountRate = 0.08; // 8% discount rate
    let npv = -totalSystemCost;
    for (let year = 1; year <= inputs.systemLifespan; year++) {
      const futureValue = annualSavings * Math.pow(1 + inputs.rateIncrease / 100, year);
      npv += futureValue / Math.pow(1 + discountRate, year);
    }
    
    // Calculate environmental impact
    const carbonOffset = annualProduction * 0.7; // 0.7 kg CO2 per kWh (PH grid)
    const treesEquivalent = carbonOffset / 22; // 1 tree absorbs ~22 kg CO2/year
    const carsEquivalent = carbonOffset / 4600; // 1 car emits ~4600 kg CO2/year
    
    // Calculate lifetime production considering degradation
    let lifetimeProduction = 0;
    for (let year = 1; year <= inputs.systemLifespan; year++) {
      const degradation = Math.pow(1 - inputs.degradationRate / 100, year - 1);
      lifetimeProduction += annualProduction * degradation;
    }

    setResults({
      systemSize,
      panelCount,
      usableArea,
      panelEfficiency: inputs.panelEfficiency,
      dailyProduction,
      monthlyProduction,
      annualProduction,
      peakSunHours: effectiveSunHours,
      totalSystemCost,
      annualSavings,
      monthlySavings,
      paybackPeriod,
      roi,
      netPresentValue: npv,
      carbonOffset,
      treesEquivalent,
      carsEquivalent,
      performanceRatio: inputs.performanceRatio,
      degradationRate: inputs.degradationRate,
      lifetimeProduction
    });
  };

  const handleInputChange = (field: string, value: number | string | boolean) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleMonthlyBillChange = (value: number) => {
    // Estimate monthly consumption based on bill amount
    const estimatedConsumption = (value / inputs.electricityRate);
    setInputs(prev => ({ 
      ...prev, 
      monthlyBill: value,
      monthlyConsumption: estimatedConsumption
    }));
  };

  return (
    <Box sx={{ py: 3, backgroundColor: '#ffffff' }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 700, color: '#263238' }}>
          <Calculate sx={{ mr: 2, color: '#ff6b35', verticalAlign: 'middle' }} />
          Advanced Solar System Calculator
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
          Comprehensive solar planning for Ilocos Norte with financial analysis and environmental impact
        </Typography>
      </Box>

             <Box sx={{ display: 'flex', gap: 3, maxWidth: '1200px', mx: 'auto', flexWrap: 'wrap', justifyContent: 'center' }}>
         {/* Input Panel */}
         <Box sx={{ flex: '1 1 500px', minWidth: '400px', maxWidth: '600px' }}>
          <Card elevation={3} sx={{ borderRadius: 3 }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#ff6b35' }}>
                Site & Energy Information
              </Typography>
              
              {/* Location */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  <LocationOn sx={{ mr: 1, fontSize: '1rem' }} />
                  Location
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={inputs.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                  >
                    <MenuItem value="ilocos_norte">Ilocos Norte (NREL: 4.5-5.0 kWh/m²/day)</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Energy Consumption */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  <ElectricBolt sx={{ mr: 1, fontSize: '1rem' }} />
                  Monthly Electricity Bill (PHP)
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  value={inputs.monthlyBill}
                  onChange={(e) => handleMonthlyBillChange(Number(e.target.value))}
                  InputProps={{
                    startAdornment: <Typography variant="body2" sx={{ mr: 1 }}>₱</Typography>
                  }}
                  sx={{ mb: 1 }}
                />
                <Slider
                  value={inputs.monthlyBill}
                  onChange={(_, value) => handleMonthlyBillChange(value as number)}
                  min={1000}
                  max={20000}
                  step={500}
                  marks={[
                    { value: 1000, label: '₱1k' },
                    { value: 10000, label: '₱10k' },
                    { value: 20000, label: '₱20k' }
                  ]}
                  sx={{ color: '#ff6b35' }}
                />
                <Typography variant="caption" color="text.secondary">
                  Estimated consumption: {inputs.monthlyConsumption.toFixed(0)} kWh/month
                </Typography>
              </Box>

              {/* Roof Specifications */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  <Roofing sx={{ mr: 1, fontSize: '1rem' }} />
                  Roof Specifications
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    size="small"
                    label="Area (m²)"
                    type="number"
                    value={inputs.roofArea}
                    onChange={(e) => handleInputChange('roofArea', Number(e.target.value))}
                    sx={{ flex: 1 }}
                  />
                  <TextField
                    size="small"
                    label="Tilt (°)"
                    type="number"
                    value={inputs.roofTilt}
                    onChange={(e) => handleInputChange('roofTilt', Number(e.target.value))}
                    sx={{ flex: 1 }}
                  />
                </Box>
                <FormControl fullWidth size="small">
                  <InputLabel>Orientation</InputLabel>
                  <Select
                    value={inputs.roofOrientation}
                    onChange={(e) => handleInputChange('roofOrientation', e.target.value)}
                    label="Orientation"
                  >
                    <MenuItem value="south">South (Optimal)</MenuItem>
                    <MenuItem value="southeast">Southeast</MenuItem>
                    <MenuItem value="southwest">Southwest</MenuItem>
                    <MenuItem value="east">East</MenuItem>
                    <MenuItem value="west">West</MenuItem>
                    <MenuItem value="northeast">Northeast</MenuItem>
                    <MenuItem value="northwest">Northwest</MenuItem>
                    <MenuItem value="north">North</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Shading */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" gutterBottom>
                  Shading Conditions
                </Typography>
                <FormControl fullWidth size="small">
                  <Select
                    value={inputs.shading}
                    onChange={(e) => handleInputChange('shading', e.target.value)}
                  >
                    <MenuItem value="none">No Shading (100% efficiency)</MenuItem>
                    <MenuItem value="minimal">Minimal Shading (95% efficiency)</MenuItem>
                    <MenuItem value="moderate">Moderate Shading (85% efficiency)</MenuItem>
                    <MenuItem value="heavy">Heavy Shading (70% efficiency)</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Advanced Options Toggle */}
              <Box sx={{ mb: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={showAdvanced}
                      onChange={(e) => setShowAdvanced(e.target.checked)}
                    />
                  }
                  label="Show Advanced Options"
                />
              </Box>

              {/* Advanced Options */}
              {showAdvanced && (
                <>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>
                    Advanced Parameters
                  </Typography>
                  
                  {/* Technical Parameters */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>Technical Parameters</Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <TextField
                        size="small"
                        label="Panel Efficiency (%)"
                        type="number"
                        value={inputs.panelEfficiency}
                        onChange={(e) => handleInputChange('panelEfficiency', Number(e.target.value))}
                        sx={{ flex: 1 }}
                      />
                      <TextField
                        size="small"
                        label="Performance Ratio"
                        type="number"
                        value={inputs.performanceRatio}
                        onChange={(e) => handleInputChange('performanceRatio', Number(e.target.value))}
                        sx={{ flex: 1 }}
                      />
                    </Box>
                  </Box>

                  {/* Financial Parameters */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>Financial Parameters</Typography>
                    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                      <TextField
                        size="small"
                        label="Cost per kW (₱)"
                        type="number"
                        value={inputs.systemCostPerKW}
                        onChange={(e) => handleInputChange('systemCostPerKW', Number(e.target.value))}
                        sx={{ flex: 1 }}
                      />
                      <TextField
                        size="small"
                        label="Rate Increase (%/year)"
                        type="number"
                        value={inputs.rateIncrease}
                        onChange={(e) => handleInputChange('rateIncrease', Number(e.target.value))}
                        sx={{ flex: 1 }}
                      />
                    </Box>
                  </Box>

                  {/* Incentives */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" gutterBottom>Incentives & Policies</Typography>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={inputs.netMetering}
                          onChange={(e) => handleInputChange('netMetering', e.target.checked)}
                        />
                      }
                      label="Net Metering Available"
                    />
                    <FormControlLabel
                      control={
                        <Switch
                          checked={inputs.governmentIncentives}
                          onChange={(e) => handleInputChange('governmentIncentives', e.target.checked)}
                        />
                      }
                      label="Government Incentives (30% tax credit)"
                    />
                  </Box>
                </>
              )}

              {/* Calculate Button */}
              <Button
                variant="contained"
                fullWidth
                size="large"
                onClick={calculateSolarSystem}
                startIcon={<Calculate />}
                sx={{ 
                  mt: 2, 
                  py: 1.5, 
                  backgroundColor: '#ff6b35',
                  '&:hover': { backgroundColor: '#e55a2b' }
                }}
              >
                Calculate Solar System
              </Button>
            </CardContent>
          </Card>
        </Box>

                 {/* Results Panel */}
         <Box sx={{ flex: '1 1 600px', minWidth: '400px', maxWidth: '700px' }}>
          {results ? (
            <Card elevation={3} sx={{ borderRadius: 3, height: 'fit-content' }}>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#1976d2' }}>
                  System Analysis Results
                </Typography>
                
                {/* System Specifications */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#263238', fontWeight: 600 }}>
                    System Specifications
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                    <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                      <Lightbulb sx={{ fontSize: '2rem', color: '#ff6b35', mb: 1 }} />
                      <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                        {results.systemSize.toFixed(2)} kW
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        System Size
                      </Typography>
                    </Paper>
                    
                    <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                      <BatteryChargingFull sx={{ fontSize: '2rem', color: '#1976d2', mb: 1 }} />
                      <Typography variant="h4" color="primary" sx={{ fontWeight: 700 }}>
                        {results.panelCount}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Solar Panels (400W)
                      </Typography>
                    </Paper>
                  </Box>
                </Box>

                {/* Energy Production */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#263238', fontWeight: 600 }}>
                    Energy Production
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                        {results.dailyProduction.toFixed(1)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Daily (kWh)
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                        {results.monthlyProduction.toFixed(0)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Monthly (kWh)
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                        {results.annualProduction.toFixed(0)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Annual (kWh)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Financial Analysis */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#263238', fontWeight: 600 }}>
                    Financial Analysis
                  </Typography>
                  
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
                    <Box>
                      <Typography variant="body2" color="text.secondary">System Cost:</Typography>
                      <Typography variant="h6" color="error.main" sx={{ fontWeight: 600 }}>
                        ₱{results.totalSystemCost.toLocaleString()}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Annual Savings:</Typography>
                      <Typography variant="h6" color="success.main" sx={{ fontWeight: 600 }}>
                        ₱{results.annualSavings.toLocaleString()}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Payback Period:</Typography>
                      <Typography variant="h6" color="warning.main" sx={{ fontWeight: 600 }}>
                        {results.paybackPeriod.toFixed(1)} years
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" color="text.secondary">ROI (25 years):</Typography>
                      <Typography variant="h6" color="info.main" sx={{ fontWeight: 600 }}>
                        {results.roi.toFixed(1)}%
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Environmental Impact */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ color: '#263238', fontWeight: 600 }}>
                    Environmental Impact
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
                                         <Box sx={{ textAlign: 'center' }}>
                       <Nature sx={{ fontSize: '2rem', color: '#2e7d32', mb: 1 }} />
                       <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                         {results.carbonOffset.toFixed(0)}
                       </Typography>
                       <Typography variant="caption" color="text.secondary">
                         kg CO₂ avoided/year
                       </Typography>
                     </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Park sx={{ fontSize: '2rem', color: '#2e7d32', mb: 1 }} />
                      <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                        {results.treesEquivalent.toFixed(0)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Trees equivalent
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" color="success.main" sx={{ fontWeight: 700 }}>
                        {results.carsEquivalent.toFixed(1)}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Cars removed
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Additional Info */}
                <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Peak Sun Hours:</strong> {results.peakSunHours.toFixed(2)} hours/day
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Performance Ratio:</strong> {(results.performanceRatio * 100).toFixed(1)}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Lifetime Production:</strong> {results.lifetimeProduction.toFixed(0)} kWh (25 years)
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Net Present Value:</strong> ₱{results.netPresentValue.toLocaleString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ) : (
            <Card elevation={3} sx={{ borderRadius: 3, height: 'fit-content' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Calculate sx={{ fontSize: '4rem', color: '#ccc', mb: 2 }} />
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Enter your parameters and click calculate to see results
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The calculator will provide comprehensive analysis including system size, 
                  financial projections, and environmental impact.
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default SolarCalculator;
