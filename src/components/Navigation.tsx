import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  useScrollTrigger,
  Slide
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon
} from '@mui/icons-material';

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar 
          position="fixed" 
          sx={{ 
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            height: { xs: '70px', sm: '80px' }, // Increased mobile height
            minHeight: { xs: '70px', sm: '80px' } // Ensure minimum height
          }}
        >
          <Toolbar 
            sx={{ 
              height: '100%',
              px: { xs: 2, sm: 3, md: 4 }, // Better mobile padding
              py: { xs: 1, sm: 1.5 }, // Better mobile padding
              justifyContent: 'space-between'
            }}
          >
            {/* Logo and Company Name */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center',
              flex: { xs: '1 1 auto', sm: '0 0 auto' } // Better mobile flex behavior
            }}>
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
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1a202c',
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size
                  lineHeight: 1.2,
                  display: { xs: 'none', sm: 'block' } // Hide on very small screens
                }}
              >
                Sunectrix Solar & Electrical Services
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700, 
                  color: '#1a202c',
                  fontSize: '1rem',
                  lineHeight: 1.2,
                  display: { xs: 'block', sm: 'none' } // Show on small screens only
                }}
              >
                Sunectrix
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
              {['home', 'services', 'projects', 'benefits', 'contact'].map((item) => (
                <Button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: '#1a202c',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 107, 53, 0.1)',
                      color: '#ff6b35'
                    }
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ 
                display: { xs: 'flex', md: 'none' },
                color: '#1a202c',
                ml: 'auto' // Push to right side
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Slide>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 280,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.2)'
          },
        }}
      >
        <Box sx={{ 
          p: 3,
          pt: { xs: 4, sm: 5 } // Better top padding for mobile
        }}>
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 3
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a202c' }}>
              Menu
            </Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#1a202c' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          
          <List sx={{ pt: 2 }}>
            {['home', 'services', 'projects', 'benefits', 'contact'].map((item) => (
              <ListItem key={item} sx={{ px: 0 }}>
                <ListItemText
                  primary={item.charAt(0).toUpperCase() + item.slice(1)}
                  onClick={() => scrollToSection(item)}
                  sx={{
                    cursor: 'pointer',
                    '& .MuiTypography-root': {
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      color: '#1a202c',
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 107, 53, 0.1)',
                        color: '#ff6b35'
                      }
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      
      {/* Toolbar spacer to prevent content from being hidden behind fixed header */}
      <Toolbar sx={{ height: { xs: '70px', sm: '80px' } }} />
    </>
  );
};

export default Navigation;
