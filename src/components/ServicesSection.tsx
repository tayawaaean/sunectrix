import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  Button,
  Chip
} from '@mui/material';
import {
  Lightbulb as SolarPowerIcon,
  Build as EngineeringIcon,
  House as HomeIcon,
  Check as CheckCircleIcon,
  ArrowForward as ArrowIcon
} from '@mui/icons-material';

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 'home-improvement',
      image: '/home_improvment.jpg',
      icon: <HomeIcon sx={{ fontSize: 32, color: '#ff6b35' }} />,
      title: 'Home Improvement',
      subtitle: 'Solar Integration',
      description: 'Transform your home with solar integration that enhances both energy efficiency and aesthetic appeal.',
      features: ['Roof integration', 'Aesthetic design', 'Energy efficiency', 'Property value increase'],
      benefits: ['20% energy savings', 'Modern appearance', 'Increased home value'],
      cta: 'Learn More'
    },
    {
      id: 'installation',
      image: '/installation.jpg',
      icon: <SolarPowerIcon sx={{ fontSize: 32, color: '#ff6b35' }} />,
      title: 'Solar Installation',
      subtitle: 'Professional Setup',
      description: 'Complete solar panel installation for residential and commercial properties with expert engineering support.',
      features: ['Grid-tied systems', 'Hybrid solutions', 'Off-grid systems', 'Professional installation'],
      benefits: ['30% bill reduction', 'Professional warranty', 'Quick installation'],
      cta: 'Get Quote'
    },
    {
      id: 'net-metering',
      image: '/net_metering.jpg',
      icon: <EngineeringIcon sx={{ fontSize: 32, color: '#ff6b35' }} />,
      title: 'Net Metering',
      subtitle: 'Energy Management',
      description: 'Expert electrical engineering for solar system design, permitting, and net metering assistance.',
      features: ['System design', 'Permit assistance', 'Net metering setup', 'Technical consultation'],
      benefits: ['Grid credit system', 'Permit handling', 'Technical support'],
      cta: 'Setup Now'
    }
  ];

  return (
    <Box id="services" sx={{ 
      py: { xs: 6, md: 10 }, 
      backgroundColor: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Chip 
            label="Our Services" 
            sx={{ 
              backgroundColor: 'rgba(255, 107, 53, 0.1)', 
              color: '#ff6b35',
              fontWeight: 600,
              fontSize: '0.9rem',
              mb: 2,
              px: 2
            }} 
          />
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }, 
            fontWeight: 800, 
            mb: 3,
            color: '#1a202c',
            lineHeight: 1.2
          }}>
            Complete Solar{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #ff6b35 0%, #1976d2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Solutions
            </span>
          </Typography>
          <Typography variant="h6" sx={{ 
            color: '#64748b',
            maxWidth: 700,
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            From initial consultation to final installation, we provide comprehensive solar solutions 
            that maximize your energy savings and return on investment
          </Typography>
        </Box>
        
        {/* Services Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 4 
        }}>
          {services.map((service) => (
            <Box key={service.id}>
              <Card sx={{ 
                height: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-12px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                  borderColor: 'rgba(255, 107, 53, 0.2)'
                }
              }}>
                {/* Service Image */}
                <Box sx={{
                  height: 280,
                  background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {/* Icon Overlay */}
                  <Box sx={{
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    {service.icon}
                  </Box>
                </Box>

                <CardContent sx={{ p: 4 }}>
                  {/* Service Header */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ 
                      mb: 1, 
                      fontWeight: 700,
                      color: '#1a202c',
                      fontSize: '1.5rem'
                    }}>
                      {service.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      color: '#ff6b35',
                      fontWeight: 600,
                      fontSize: '1rem',
                      mb: 2
                    }}>
                      {service.subtitle}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: '#64748b',
                      lineHeight: 1.6,
                      fontSize: '1rem'
                    }}>
                      {service.description}
                    </Typography>
                  </Box>

                  {/* Features */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      color: '#1a202c',
                      mb: 2,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      What's Included
                    </Typography>
                    <Stack spacing={1.5}>
                      {service.features.map((feature, idx) => (
                        <Box key={idx} sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 1.5
                        }}>
                          <Box sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: '#10b981',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <CheckCircleIcon sx={{ fontSize: 14, color: 'white' }} />
                          </Box>
                          <Typography variant="body2" sx={{ 
                            color: '#64748b',
                            fontSize: '0.9rem'
                          }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  {/* Benefits */}
                  <Box sx={{ 
                    mb: 4,
                    p: 2,
                    backgroundColor: 'rgba(255, 107, 53, 0.05)',
                    borderRadius: 2,
                    border: '1px solid rgba(255, 107, 53, 0.1)'
                  }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      color: '#ff6b35',
                      mb: 1.5,
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Key Benefits
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {service.benefits.map((benefit, idx) => (
                        <Chip
                          key={idx}
                          label={benefit}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 107, 53, 0.1)',
                            color: '#ff6b35',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            height: 24
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {/* CTA Button */}
                  <Button
                    variant="outlined"
                    fullWidth
                    endIcon={<ArrowIcon />}
                    onClick={() => {
                      if (service.id === 'home-improvement') {
                        // Scroll to benefits section for home improvement
                        const element = document.getElementById('benefits');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      } else if (service.id === 'installation') {
                        // Call phone number for installation quote
                        window.location.href = 'tel:+639610357748';
                      } else if (service.id === 'net-metering') {
                        // Scroll to contact section for net metering setup
                        const element = document.getElementById('contact');
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    sx={{
                      borderColor: '#ff6b35',
                      color: '#ff6b35',
                      fontWeight: 600,
                      py: 1.5,
                      borderRadius: 2,
                      borderWidth: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        borderColor: '#ff6b35',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)'
                      }
                    }}
                  >
                    {service.cta}
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: { xs: 6, md: 8 },
          p: 4,
          backgroundColor: 'rgba(255, 107, 53, 0.05)',
          borderRadius: 4,
          border: '1px solid rgba(255, 107, 53, 0.1)'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            color: '#1a202c',
            mb: 2
          }}>
            Ready to Start Your Solar Journey?
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#64748b',
            mb: 3,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Get a free consultation and quote for your solar installation project
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="tel:+639610357748"
            sx={{
              backgroundColor: '#ff6b35',
              color: 'white',
              px: 6,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
              '&:hover': {
                backgroundColor: '#e64a19',
                transform: 'translateY(-2px)',
                boxShadow: '0 12px 35px rgba(255, 107, 53, 0.4)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            Get Free Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
