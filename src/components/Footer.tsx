import React from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Place as LocationIcon
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ 
      backgroundColor: '#1a202c',
      color: 'white',
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
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Box sx={{ py: { xs: 4, md: 6 } }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
            gap: 3 
          }}>
            {/* Company Info */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <img
                  src="/logo.jpg"
                  alt="Sunectrix Logo"
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain',
                    marginRight: '16px'
                  }}
                />
                <Typography variant="h5" sx={{ fontWeight: 700, color: 'white' }}>
                  Sunectrix Solar & Electrical Services
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                mb: 3,
                lineHeight: 1.6
              }}>
                Your trusted partner in solar energy solutions. We specialize in residential and commercial 
                solar installations, helping families and businesses achieve energy independence and 
                significant cost savings.
              </Typography>
              
              {/* Social Media */}
              <Box sx={{ mb: 3 }}>
                <Typography variant="subtitle2" sx={{ 
                  color: 'white', 
                  fontWeight: 600, 
                  mb: 2,
                  fontSize: '0.9rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Follow Us
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton
                    href="https://www.facebook.com/p/Sunectrix-Solar-Electrical-Services-61565704990052/"
                    target="_blank"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#ff6b35'
                      }
                    }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    href="https://wa.me/639610357748"
                    target="_blank"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#25d366'
                      }
                    }}
                  >
                    <WhatsAppIcon />
                  </IconButton>
                  <IconButton
                    href="tel:+639610357748"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#ff6b35'
                      }
                    }}
                  >
                    <PhoneIcon />
                  </IconButton>
                  <IconButton
                    href="mailto:sunectrixph@gmail.com"
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#1976d2'
                      }
                    }}
                  >
                    <MailIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Box>

            {/* Quick Links */}
            <Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 700, 
                color: 'white',
                mb: 3
              }}>
                Quick Links
              </Typography>
              
              <Stack spacing={2}>
                <Link
                  href="#home"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ff6b35',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ff6b35',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  Our Services
                </Link>
                <Link
                  href="#projects"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ff6b35',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  Completed Projects
                </Link>
                <Link
                  href="#benefits"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ff6b35',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  Why Choose Solar
                </Link>
                <Link
                  href="#contact"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ff6b35',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  Get Started
                </Link>
              </Stack>
            </Box>

            {/* Services & Contact */}
            <Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 700, 
                color: 'white',
                mb: 3
              }}>
                Our Services
              </Typography>
              
              <Stack spacing={2} sx={{ mb: 4 }}>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  • Residential Solar Installation
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  • Commercial Solar Systems
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  • Hybrid Solar Solutions
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  • Net Metering Setup
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  • Maintenance & Support
                </Typography>
              </Stack>

              <Typography variant="h6" sx={{ 
                fontWeight: 700, 
                color: 'white',
                mb: 3
              }}>
                Contact Info
              </Typography>
              
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ fontSize: 20, color: '#ff6b35', mr: 2 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    +63 961 035 7748
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <MailIcon sx={{ fontSize: 20, color: '#ff6b35', mr: 2 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    sunectrixph@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationIcon sx={{ fontSize: 20, color: '#ff6b35', mr: 2 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                    Paoay, Ilocos Norte, Philippines
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Footer */}
        <Box sx={{ 
          py: 3,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ 
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: { xs: 'center', md: 'left' }
          }}>
            © {currentYear} Sunectrix Solar & Electrical Services. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              cursor: 'pointer',
              '&:hover': { color: '#ff6b35' }
            }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'rgba(255, 255, 255, 0.6)',
              cursor: 'pointer',
              '&:hover': { color: '#ff6b35' }
            }}>
              Terms of Service
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
