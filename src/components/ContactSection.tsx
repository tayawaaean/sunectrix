import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stack,
  Chip,
  TextField,
  Button
} from '@mui/material';
import {
  Call as PhoneIcon,
  Mail as EmailIcon,
  Place as LocationIcon,
  WhatsApp as WhatsAppIcon,
  Send as SendIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    monthlyBill: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        propertyType: '',
        monthlyBill: '',
        message: ''
      });
    }, 3000);
  };

  const serviceAreas = [
    'Ilocos Norte', 'Ilocos Sur', 'Abra', 'Paoay', 'Batac', 'Laoag', 'San Nicolas', 'Vintar', 'Bangui', 'Bacarra'
  ];

  const specializations = [
    'Residential Solar', 'Commercial Solar', 'Hybrid Systems', 'Grid-Tied Systems', 'Net Metering', 'Maintenance', 'Installation', 'Consultation'
  ];

  return (
    <Box id="contact" sx={{ 
      py: { xs: 4, md: 10 }, // Reduced mobile padding
      background: 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh'
    }}>
      {/* Background Pattern */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '100%',
        background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}> {/* Better mobile padding */}
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 8 } }}> {/* Reduced mobile margin */}
          <Chip 
            label="Get Started" 
            sx={{ 
              backgroundColor: 'rgba(255, 107, 53, 0.2)', 
              color: '#ff6b35',
              fontWeight: 600,
              fontSize: '0.9rem',
              mb: 2,
              px: 2
            }} 
          />
          <Typography variant="h2" sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }, // Better mobile font sizing
            fontWeight: 800, 
            mb: { xs: 2, md: 3 }, // Reduced mobile margin
            color: 'white',
            lineHeight: 1.2
          }}>
            Ready to Start Your{' '}
            <span style={{ 
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8a65 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Solar Journey?
            </span>
          </Typography>
          <Typography variant="h6" sx={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: 700,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.25rem' }, // Better mobile font sizing
            lineHeight: 1.6,
            fontWeight: 400
          }}>
            Get a free consultation and quote for your solar installation project. 
            Join hundreds of satisfied customers who have achieved zero electric bills!
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' }, 
          gap: { xs: 3, md: 4 } // Reduced mobile gap
        }}>
          {/* Lead Capture Form */}
          <Box>
            <Paper sx={{ 
              p: { xs: 3, md: 4 }, // Reduced mobile padding
              height: '100%',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
            }}>
              <Typography variant="h4" sx={{ 
                mb: { xs: 2, md: 3 }, // Reduced mobile margin
                fontWeight: 700,
                color: '#1a202c',
                textAlign: 'center',
                fontSize: { xs: '1.5rem', md: '2.125rem' } // Better mobile font sizing
              }}>
                Get Your Free Quote
              </Typography>
              
              {isSubmitted ? (
                <Box sx={{ textAlign: 'center', py: { xs: 3, md: 4 } }}> {/* Reduced mobile padding */}
                  <CheckIcon sx={{ fontSize: { xs: 48, md: 64 }, color: '#10b981', mb: 2 }} />
                  <Typography variant="h5" sx={{ color: '#10b981', mb: 2, fontWeight: 600 }}>
                    Thank You!
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#64748b' }}>
                    We'll contact you within 24 hours with your free solar consultation.
                  </Typography>
                </Box>
              ) : (
                <form onSubmit={handleSubmit}>
                  <Stack spacing={{ xs: 2, md: 3 }}> {/* Reduced mobile spacing */}
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Property Type"
                      select
                      value={formData.propertyType}
                      onChange={(e) => handleInputChange('propertyType', e.target.value)}
                      SelectProps={{ native: true }}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    >
                      <option value="residential">Residential Home</option>
                      <option value="commercial">Commercial Building</option>
                      <option value="industrial">Industrial Facility</option>
                      <option value="agricultural">Agricultural</option>
                    </TextField>
                    
                    <TextField
                      fullWidth
                      label="Monthly Electric Bill (PHP)"
                      value={formData.monthlyBill}
                      onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                      variant="outlined"
                      placeholder="e.g., 5,000"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                    
                    <TextField
                      fullWidth
                      label="Additional Message (Optional)"
                      multiline
                      rows={3}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      variant="outlined"
                      placeholder="Tell us about your energy goals..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2
                        }
                      }}
                    />
                    
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        py: { xs: 1.5, md: 2 }, // Reduced mobile padding
                        fontSize: { xs: '1rem', md: '1.1rem' }, // Better mobile font sizing
                        fontWeight: 600,
                        borderRadius: 2,
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
                  </Stack>
                </form>
              )}
            </Paper>
          </Box>

          {/* Contact Information & Service Areas */}
          <Box>
            <Stack spacing={{ xs: 3, md: 4 }}> {/* Reduced mobile spacing */}
              {/* Contact Information */}
              <Paper sx={{ 
                p: { xs: 3, md: 4 }, // Reduced mobile padding
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Typography variant="h5" sx={{ 
                  mb: { xs: 2, md: 3 }, // Reduced mobile margin
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { xs: '1.25rem', md: '1.5rem' } // Better mobile font sizing
                }}>
                  Contact Information
                </Typography>
                
                <Stack spacing={{ xs: 2, md: 3 }}> {/* Reduced mobile spacing */}
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                      width: { xs: 40, md: 50 }, // Smaller on mobile
                      height: { xs: 40, md: 50 }, // Smaller on mobile
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 107, 53, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <PhoneIcon sx={{ color: '#ff6b35', fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                        Phone
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        +63 961 035 7748
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                      width: { xs: 40, md: 50 }, // Smaller on mobile
                      height: { xs: 40, md: 50 }, // Smaller on mobile
                      borderRadius: '50%',
                      backgroundColor: 'rgba(25, 118, 210, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <EmailIcon sx={{ color: '#1976d2', fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        sunectrixph@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{
                      width: { xs: 40, md: 50 }, // Smaller on mobile
                      height: { xs: 40, md: 50 }, // Smaller on mobile
                      borderRadius: '50%',
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2
                    }}>
                      <LocationIcon sx={{ color: '#10b981', fontSize: { xs: 20, md: 24 } }} />
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: 'white', fontWeight: 600 }}>
                        Location
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                        Paoay, Ilocos Norte, Philippines
                      </Typography>
                    </Box>
                  </Box>
                </Stack>

                {/* Social Media & Quick Contact */}
                <Box sx={{ mt: { xs: 2, md: 3 }, pt: { xs: 2, md: 3 }, borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                  <Typography variant="body1" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                    Quick Contact
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}> {/* Stack vertically on mobile */}
                    <Button
                      variant="contained"
                      startIcon={<PhoneIcon />}
                      href="tel:+639610357748"
                      sx={{
                        backgroundColor: '#ff6b35',
                        '&:hover': { backgroundColor: '#e64a19' }
                      }}
                    >
                      Call Now
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<WhatsAppIcon />}
                      href="https://wa.me/639610357748"
                      target="_blank"
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        '&:hover': {
                          borderColor: '#ff6b35',
                          backgroundColor: 'rgba(255, 107, 53, 0.1)'
                        }
                      }}
                    >
                      WhatsApp
                    </Button>
                  </Stack>
                </Box>
              </Paper>

              {/* Service Areas */}
              <Paper sx={{ 
                p: { xs: 3, md: 4 }, // Reduced mobile padding
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: 4,
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Typography variant="h5" sx={{ 
                  mb: { xs: 2, md: 3 }, // Reduced mobile margin
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { xs: '1.25rem', md: '1.5rem' } // Better mobile font sizing
                }}>
                  Service Areas
                </Typography>
                
                <Box sx={{ mb: { xs: 2, md: 3 } }}> {/* Reduced mobile margin */}
                  <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
                    We proudly serve:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {serviceAreas.map((area, index) => (
                      <Chip 
                        key={index}
                        label={area} 
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 107, 53, 0.3)',
                            borderColor: '#ff6b35'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
                
                <Box>
                  <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255, 255, 255, 0.9)' }}>
                    Specializing in:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {specializations.map((spec, index) => (
                      <Chip 
                        key={index}
                        label={spec} 
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 107, 53, 0.2)',
                          color: '#ff6b35',
                          border: '1px solid rgba(255, 107, 53, 0.3)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 107, 53, 0.3)'
                          }
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Paper>
            </Stack>
          </Box>
        </Box>

        {/* Bottom CTA */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: { xs: 4, md: 8 }, // Reduced mobile margin
          p: { xs: 3, md: 4 }, // Reduced mobile padding
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          borderRadius: 4,
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 700, 
            color: 'white',
            mb: 2,
            fontSize: { xs: '1.25rem', md: '1.5rem' } // Better mobile font sizing
          }}>
            Don't Wait - Start Saving Today!
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'rgba(255, 255, 255, 0.9)',
            mb: { xs: 2, md: 3 }, // Reduced mobile margin
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '0.9rem', md: '1rem' } // Better mobile font sizing
          }}>
            Every day without solar is another day of high electric bills. 
            Get your free consultation and join the solar revolution!
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="tel:+639610357748"
            sx={{
              backgroundColor: '#ff6b35',
              color: 'white',
              px: { xs: 4, md: 6 }, // Reduced mobile padding
              py: { xs: 1.5, md: 2 }, // Reduced mobile padding
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
            Call Now - Free Consultation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactSection;
