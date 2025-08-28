import React from 'react';
import { Box } from '@mui/material';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProjectSection from './components/ProjectSection';
import BenefitsSection from './components/BenefitsSection';
import MapSection from './components/MapSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import './App.css';

const App: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProjectSection />
      <BenefitsSection />
      <MapSection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
    </Box>
  );
};

export default App;
