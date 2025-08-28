import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { SolarPower } from '@mui/icons-material';
import InteractiveMap from './InteractiveMap';
import SolarCalculator from './SolarCalculator';

const MapSection: React.FC = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="xl">
        {/* Compact header */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ fontWeight: 700, color: '#263238', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}
          >
            <SolarPower sx={{ color: '#ff6b35', fontSize: '2rem' }} />
            Solar Rooftop Calculator
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Measure your rooftop and calculate solar potential in Ilocos Norte
          </Typography>
        </Box>

        {/* Full-width map in first row */}
        <Box sx={{ mb: 4 }}>
          <Paper elevation={4} sx={{ overflow: 'hidden', borderRadius: 2, backgroundColor: 'white', height: '700px' }}>
            <InteractiveMap />
          </Paper>
        </Box>
        
        {/* Visual separator */}
        <Box sx={{ 
          height: 2, 
          background: 'linear-gradient(90deg, #ff6b35, #1976d2)', 
          borderRadius: 1, 
          mb: 4,
          opacity: 0.7
        }} />
        
        {/* Solar calculator in second row */}
        <Box>
          <SolarCalculator />
        </Box>
      </Container>
    </Box>
  );
};

export default MapSection;
