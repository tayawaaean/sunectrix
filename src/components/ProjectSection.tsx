import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  Button
} from '@mui/material';
import {
  House as HouseIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const ProjectSection: React.FC = () => {
  const projects = [
    {
      id: 'batac-project',
      image: '/project1.jpg',
      location: 'BATAC, ILOCOS NORTE',
      status: 'UPGRADE COMPLETED!',
      system: '5.67 KWP HYBRID SOLAR PV SYSTEM',
      description: 'A homeowner in Nalupta, Batac, Ilocos Norte upgraded to a hybrid solar PV system with a 280AH battery eliminating power interruptions. This investment ensures stable, renewable energy around the clock, providing comfort, savings and peace of mind.',
      type: 'Hybrid System',
      battery: '280AH Battery',
      benefits: ['Power backup during outages', '24/7 renewable energy', 'Eliminates interruptions', 'Peace of mind']
    },
    {
      id: 'vintar-project',
      image: '/project2.jpg',
      location: 'VINTAR, ILOCOS NORTE',
      status: 'PROJECT COMPLETED!',
      system: '6.30 KWP HYBRID SOLAR PV SYSTEM',
      description: 'A homeowner in Parut, Vintar, Ilocos Norte invested his retirement fund in a 6.30 KWP hybrid solar PV system with an 8 KW hybrid inverter. This decision allows him to enjoy reliable power, lower monthly bills, and future system expansion, ensuring peace of mind for years to come.',
      type: 'Hybrid System',
      inverter: '8 KW Hybrid Inverter',
      benefits: ['Reliable power', 'Lower monthly bills', 'Future expansion ready', 'Retirement investment']
    },
    {
      id: 'bangui-project',
      image: '/project3.jpg',
      location: 'BANGUI, ILOCOS NORTE',
      status: 'PROJECT COMPLETED!',
      system: '6.30 KWP HYBRID SOLAR PV SYSTEM',
      description: 'A sari-sari store in Bangui, Ilocos Norte, has implemented a hybrid solar PV system to attain a zero electric bill and provide power backup during brownouts and outages.',
      type: 'Commercial Hybrid',
      business: 'Sari-Sari Store',
      benefits: ['Zero electric bill', 'Power backup', 'Business continuity', 'Cost savings']
    },
    {
      id: 'bacarra-project',
      image: '/project4.jpg',
      location: 'BACARRA, ILOCOS NORTE',
      status: 'PROJECT COMPLETED!',
      system: '6.49 KWP GRIDTIE SOLAR PV SYSTEM',
      description: 'A residential home in Bacarra, Ilocos Norte, has installed a gridtie solar PV system to achieve a zero electric bill and an anticipated return on investment within four years all thanks to net metering.',
      type: 'Grid-Tied System',
      roi: '4-Year ROI',
      benefits: ['Zero electric bill', '4-year ROI', 'Net metering', 'Grid integration']
    }
  ];

  return (
    <Box id="projects" sx={{ 
      py: { xs: 6, md: 10 }, 
      backgroundColor: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
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
        background: 'radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.03) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(25, 118, 210, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Chip 
            label="Our Projects" 
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
            Completed Solar{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #ff6b35 0%, #1976d2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Installations
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
            Real projects completed across Ilocos Norte, showcasing our expertise in solar PV systems 
            and commitment to customer satisfaction
          </Typography>
        </Box>
        
        {/* Projects Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, 
          gap: 4 
        }}>
          {projects.map((project) => (
            <Box key={project.id}>
              <Paper sx={{ 
                height: '100%',
                borderRadius: 4,
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                  borderColor: 'rgba(255, 107, 53, 0.2)'
                }
              }}>
                {/* Project Image */}
                <Box sx={{
                  height: 300,
                  background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  p: 3
                }}>
                  {/* Status Badge */}
                  <Chip 
                    label={project.status}
                    sx={{
                      backgroundColor: '#10b981',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      height: 32
                    }}
                  />
                  
                  {/* Location */}
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    backdropFilter: 'blur(10px)'
                  }}>
                    <HouseIcon sx={{ fontSize: 18, color: '#ff6b35' }} />
                    <Typography variant="body2" sx={{ 
                      color: '#1a202c',
                      fontWeight: 600,
                      fontSize: '0.85rem'
                    }}>
                      {project.location}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ p: 4 }}>
                  {/* Project Header */}
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h5" sx={{ 
                      mb: 2, 
                      fontWeight: 700,
                      color: '#1a202c',
                      fontSize: '1.4rem',
                      lineHeight: 1.3
                    }}>
                      {project.system}
                    </Typography>
                    
                    {/* Project Type & Specs */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      <Chip
                        label={project.type}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 107, 53, 0.1)',
                          color: '#ff6b35',
                          fontWeight: 600,
                          fontSize: '0.75rem'
                        }}
                      />
                      {project.battery && (
                        <Chip
                          label={project.battery}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(25, 118, 210, 0.1)',
                            color: '#1976d2',
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      )}
                      {project.inverter && (
                        <Chip
                          label={project.inverter}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(25, 118, 210, 0.1)',
                            color: '#1976d2',
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      )}
                      {project.business && (
                        <Chip
                          label={project.business}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            color: '#10b981',
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      )}
                      {project.roi && (
                        <Chip
                          label={project.roi}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(16, 185, 129, 0.1)',
                            color: '#10b981',
                            fontWeight: 600,
                            fontSize: '0.75rem'
                          }}
                        />
                      )}
                    </Box>

                    <Typography variant="body1" sx={{ 
                      color: '#64748b',
                      lineHeight: 1.6,
                      fontSize: '0.95rem'
                    }}>
                      {project.description}
                    </Typography>
                  </Box>

                  {/* Key Benefits */}
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      color: '#1a202c',
                      mb: 2,
                      fontSize: '0.9rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Key Benefits
                    </Typography>
                    <Stack spacing={1.5}>
                      {project.benefits.map((benefit, idx) => (
                        <Box key={idx} sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 1.5
                        }}>
                          <Box sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            backgroundColor: '#10b981',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <CheckIcon sx={{ fontSize: 12, color: 'white' }} />
                          </Box>
                          <Typography variant="body2" sx={{ 
                            color: '#64748b',
                            fontSize: '0.9rem'
                          }}>
                            {benefit}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>

                  {/* CTA Button */}
                  <Button
                    variant="outlined"
                    fullWidth
                    endIcon={<TrendingUpIcon />}
                    onClick={() => {
                      // Scroll to contact section for project inquiries
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
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
                    Get Similar System
                  </Button>
                </Box>
              </Paper>
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
            Ready to Join Our Success Stories?
          </Typography>
          <Typography variant="body1" sx={{ 
            color: '#64748b',
            mb: 3,
            maxWidth: 600,
            mx: 'auto'
          }}>
            Get a free consultation and quote for your solar installation project, just like our satisfied customers
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

export default ProjectSection;
