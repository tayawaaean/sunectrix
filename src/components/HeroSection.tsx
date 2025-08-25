import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  TextField
} from '@mui/material';
import {
  Phone as PhoneIcon,
  WhatsApp as WhatsAppIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const HeroSection: React.FC = () => {
  return (
    <Box id="home" sx={{
      minHeight: '100vh',
      background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/hero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      pt: { xs: '70px', sm: '80px' } // Add top padding to account for fixed header
    }}>
      {/* Main Content Container */}
      <Box sx={{ 
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 3, md: 6 }, // Add vertical padding for better mobile spacing
        display: 'flex', 
        flexDirection: { xs: 'column', lg: 'row' }, 
        gap: { xs: 4, md: 6 }, // Reduced gap on mobile
        alignItems: 'center' 
      }}>
        {/* Left Side - Content */}
        <Box component="section" sx={{ flex: 1, color: 'white', textAlign: { xs: 'center', lg: 'left' } }}>
          {/* Main Headline */}
          <Typography 
            variant="h1" 
            component="h1"
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: { xs: 1.5, md: 2 }, // Reduced margin on mobile
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, // Better mobile font sizing
              lineHeight: 1.2,
              textAlign: { xs: 'center', lg: 'left' }
            }}
          >
            Switch to Solar and Achieve{' '}
            <span style={{ color: '#ffa726' }}>Zero Electric Bill</span> Today!
          </Typography>

          {/* Sub-headline */}
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              mb: { xs: 2, md: 3 }, // Reduced margin on mobile
              fontWeight: 800, // Much bolder for better visibility
              opacity: 0.9,
              lineHeight: 1.4,
              color: '#ffa726', // Much lighter orange that's easier to see
              textAlign: { xs: 'center', lg: 'left' },
              fontSize: { xs: '1rem', md: '1.25rem' }, // Better mobile font sizing
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' // Stronger shadow for better contrast
            }}
          >
            Expert installation for a sustainable future
          </Typography>

          {/* Description */}
          <Typography 
            variant="body1" 
            component="p"
            sx={{
              color: 'white',
              mb: { xs: 3, md: 4 }, // Reduced margin on mobile
              fontSize: { xs: '1rem', md: '1.1rem' }, // Better mobile font sizing
              lineHeight: 1.6,
              opacity: 0.9,
              textAlign: { xs: 'center', lg: 'left' },
              maxWidth: '500px',
              mx: { xs: 'auto', lg: '0' } // Center on mobile
            }}
          >
            Professional solar PV installation in <strong>Region 1 Philippines</strong>. Quality service + net metering assistance with no hidden costs. Serving <strong>Ilocos Norte, Ilocos Sur & Abra</strong> with expert solar solutions.
          </Typography>

          {/* Trust Signals */}
          <Box component="section" sx={{ 
            mb: { xs: 3, md: 4 }, // Reduced margin on mobile
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' }, 
            gap: { xs: 1.5, md: 2 }, // Reduced gap on mobile
            justifyContent: { xs: 'center', lg: 'flex-start' } 
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckIcon sx={{ color: '#10b981', fontSize: { xs: 18, md: 20 } }} />
              <Typography variant="body2" sx={{ 
                color: 'white', 
                opacity: 0.9,
                fontSize: { xs: '0.875rem', md: '0.875rem' } // Better mobile font sizing
              }}>
                Trusted by 500+ <strong>Ilocos families</strong>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckIcon sx={{ color: '#10b981', fontSize: { xs: 18, md: 20 } }} />
              <Typography variant="body2" sx={{ 
                color: 'white', 
                opacity: 0.9,
                fontSize: { xs: '0.875rem', md: '0.875rem' } // Better mobile font sizing
              }}>
                Free consultation & quote
              </Typography>
            </Box>
          </Box>

          {/* Urgency & Social Proof */}
          <Box component="section" sx={{ mb: { xs: 3, md: 4 }, textAlign: { xs: 'center', lg: 'left' } }}>
            <Typography variant="body2" sx={{ 
              color: '#ffa726', // Much lighter orange that's easier to see
              fontWeight: 800, // Much bolder for better visibility
              mb: 1,
              fontSize: { xs: '0.875rem', md: '1rem' }, // Better mobile font sizing
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)' // Stronger shadow for better contrast
            }}>
              ⚡ Limited Time Offer: Free Solar Assessment
            </Typography>
            <Typography variant="body2" sx={{ 
              color: 'white', 
              opacity: 0.8,
              fontSize: { xs: '0.875rem', md: '0.875rem' } // Better mobile font sizing
            }}>
              Join 100+ families who switched this month
            </Typography>
          </Box>

          {/* CTA Buttons */}
          <Box component="section" sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1.5, md: 2 }, // Reduced gap on mobile
            justifyContent: { xs: 'center', lg: 'flex-start' }
          }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PhoneIcon />}
              href="tel:+639610357748"
              aria-label="Call Sunectrix for solar consultation"
              sx={{
                backgroundColor: '#ff6b35',
                color: 'white',
                px: { xs: 4, md: 6 }, // Reduced padding on mobile
                py: { xs: 1.5, md: 2 }, // Reduced padding on mobile
                fontSize: { xs: '1rem', md: '1.1rem' }, // Better mobile font sizing
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
              Call Now
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/639610357748"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Sunectrix on WhatsApp"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: { xs: 4, md: 6 }, // Reduced padding on mobile
                py: { xs: 1.5, md: 2 }, // Reduced padding on mobile
                fontSize: { xs: '1rem', md: '1.1rem' }, // Better mobile font sizing
                fontWeight: 600,
                borderRadius: '50px',
                borderWidth: 2,
                '&:hover': {
                  borderColor: '#ff6b35',
                  backgroundColor: 'rgba(255, 107, 53, 0.1)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              WhatsApp
            </Button>
          </Box>
        </Box>

        {/* Right Side - Lead Capture Form */}
        <Box component="aside" sx={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%' // Ensure full width on mobile
        }}>
          <Paper component="section" sx={{ 
            p: { xs: 3, md: 4 }, // Reduced padding on mobile
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            maxWidth: 400,
            width: '100%',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
          }}>
            <Typography variant="h3" component="h2" sx={{ 
              mb: { xs: 2, md: 3 }, // Reduced margin on mobile
              color: 'text.primary', 
              textAlign: 'center',
              fontWeight: 600,
              fontSize: { xs: '1.25rem', md: '1.5rem' } // Better mobile font sizing
            }}>
              Get Your Free Quote
            </Typography>
            <Typography variant="body2" component="p" sx={{ 
              mb: { xs: 2, md: 3 }, // Reduced margin on mobile
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: { xs: '0.875rem', md: '0.875rem' } // Better mobile font sizing
            }}>
              Fill out the form below and we'll contact you within 24 hours
            </Typography>
            <Box component="form" action="#" method="POST" sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 2, md: 3 } }}>
              <TextField 
                fullWidth 
                placeholder="Your Name" 
                variant="outlined" 
                size="medium"
                name="name"
                aria-label="Your full name"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
              <TextField 
                fullWidth 
                placeholder="Phone Number" 
                variant="outlined" 
                size="medium"
                name="phone"
                aria-label="Your phone number"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
              <TextField 
                fullWidth 
                placeholder="Property Type" 
                variant="outlined" 
                size="medium"
                select
                name="propertyType"
                SelectProps={{ native: true }}
                aria-label="Select your property type"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              >
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
              </TextField>
              <TextField 
                fullWidth 
                placeholder="Monthly Electric Bill (PHP)" 
                variant="outlined" 
                size="medium"
                name="monthlyBill"
                aria-label="Your monthly electric bill in Philippine Peso"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2
                  }
                }}
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                aria-label="Submit your solar quote request"
                sx={{
                  backgroundColor: '#ff6b35',
                  py: { xs: 1.25, md: 1.5 }, // Reduced padding on mobile
                  fontSize: { xs: '1rem', md: '1.1rem' }, // Better mobile font sizing
                  fontWeight: 600,
                  borderRadius: 2,
                  '&:hover': { 
                    backgroundColor: '#e64a19',
                    transform: 'translateY(-1px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Get Free Quote
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>

      {/* Scroll Indicator */}
      <Box sx={{ 
        position: 'absolute', 
        bottom: { xs: 10, md: 20 }, // Reduced bottom spacing on mobile
        left: '50%', 
        transform: 'translateX(-50%)',
        textAlign: 'center'
      }}>
        <Typography variant="body2" sx={{ 
          color: 'white', 
          mb: 1, 
          opacity: 0.8,
          fontSize: { xs: '0.75rem', md: '0.875rem' } // Better mobile font sizing
        }}>
          Scroll to explore
        </Typography>
        <Box sx={{ 
          width: 2, 
          height: { xs: 20, md: 30 }, // Smaller on mobile
          backgroundColor: 'white', 
          mx: 'auto',
          opacity: 0.6,
          animation: 'bounce 2s infinite'
        }} />
      </Box>
    </Box>
  );
};

export default HeroSection;
