import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Stack
} from '@mui/material';
import {
  AccountBalance as SavingsIcon,
  TrendingUp as TrendingUpIcon,
  Park as EcoIcon,
  HelpOutline as SupportIcon
} from '@mui/icons-material';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <SavingsIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Zero Electric Bill',
      description: 'Generate your own electricity and eliminate monthly utility costs',
      features: ['No more monthly bills', 'Energy independence', 'Predictable costs', 'Long-term savings'],
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: 'Net Metering',
      description: 'Earn credits for excess energy sent back to the grid',
      features: ['Grid credit system', 'Energy banking', 'ROI optimization', 'Smart energy management'],
      color: '#1976d2',
      bgColor: 'rgba(25, 118, 210, 0.1)'
    },
    {
      icon: <EcoIcon sx={{ fontSize: 40, color: '#10b981' }} />,
      title: 'Clean Energy',
      description: 'Reduce carbon footprint and contribute to environmental sustainability',
      features: ['Carbon reduction', 'Renewable source', 'Environmental impact', 'Future generations'],
      color: '#10b981',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
      icon: <SupportIcon sx={{ fontSize: 40, color: '#ff6b35' }} />,
      title: 'No Hidden Costs',
      description: 'Transparent pricing with complete service packages',
      features: ['All-inclusive pricing', 'No surprises', 'Complete packages', 'Professional warranty'],
      color: '#ff6b35',
      bgColor: 'rgba(255, 107, 53, 0.1)'
    }
  ];

  return (
    <Box id="benefits" sx={{ 
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
        background: 'radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(25, 118, 210, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Chip 
            label="Benefits" 
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
            Why Choose{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #ff6b35 0%, #1976d2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Solar?
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
            Discover the advantages of switching to renewable solar energy and how it can transform 
            your home, finances, and environmental impact
          </Typography>
        </Box>
        
        {/* Benefits Grid */}
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, 
          gap: 4 
        }}>
          {benefits.map((benefit, index) => (
            <Box key={index}>
              <Card sx={{ 
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
                  borderColor: `${benefit.color}40`
                }
              }}>
                {/* Icon Header */}
                <Box sx={{
                  p: 3,
                  backgroundColor: benefit.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <Box sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
                    border: `2px solid ${benefit.color}20`
                  }}>
                    {benefit.icon}
                  </Box>
                </Box>

                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  {/* Title */}
                  <Typography variant="h5" sx={{ 
                    mb: 2, 
                    fontWeight: 700,
                    color: '#1a202c',
                    fontSize: '1.3rem',
                    lineHeight: 1.3
                  }}>
                    {benefit.title}
                  </Typography>

                  {/* Description */}
                  <Typography variant="body1" sx={{ 
                    color: '#64748b',
                    lineHeight: 1.6,
                    fontSize: '1rem',
                    mb: 3
                  }}>
                    {benefit.description}
                  </Typography>

                  {/* Features List */}
                  <Box sx={{ textAlign: 'left' }}>
                    <Typography variant="subtitle2" sx={{ 
                      fontWeight: 600, 
                      color: benefit.color,
                      mb: 2,
                      fontSize: '0.85rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      textAlign: 'center'
                    }}>
                      Key Features
                    </Typography>
                    <Stack spacing={1.5}>
                      {benefit.features.map((feature, idx) => (
                        <Box key={idx} sx={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: 1.5
                        }}>
                          <Box sx={{
                            width: 16,
                            height: 16,
                            borderRadius: '50%',
                            backgroundColor: benefit.color,
                            flexShrink: 0
                          }} />
                          <Typography variant="body2" sx={{ 
                            color: '#64748b',
                            fontSize: '0.85rem',
                            fontWeight: 500
                          }}>
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Bottom Stats Section */}
        <Box sx={{ 
          mt: { xs: 6, md: 8 },
          p: 4,
          backgroundColor: 'rgba(255, 107, 53, 0.05)',
          borderRadius: 4,
          border: '1px solid rgba(255, 107, 53, 0.1)'
        }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, 
            gap: 4,
            textAlign: 'center'
          }}>
            <Box>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#ff6b35',
                mb: 1,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}>
                500+
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#64748b',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Happy Families
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#1976d2',
                mb: 1,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}>
                100%
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#64748b',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                Zero Bills
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#10b981',
                mb: 1,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}>
                4-6 Years
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#64748b',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                ROI Period
              </Typography>
            </Box>
            <Box>
              <Typography variant="h3" sx={{ 
                fontWeight: 800, 
                color: '#ff6b35',
                mb: 1,
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}>
                25 Years
              </Typography>
              <Typography variant="body1" sx={{ 
                color: '#64748b',
                fontWeight: 600,
                fontSize: '1rem'
              }}>
                System Warranty
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;
