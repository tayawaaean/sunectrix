import React from 'react';
import {
  Fab
} from '@mui/material';
import {
  Call as PhoneIcon
} from '@mui/icons-material';

const FloatingActionButton: React.FC = () => {
  return (
    <Fab
      color="primary"
      aria-label="contact"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        backgroundColor: '#ff6b35',
        '&:hover': {
          backgroundColor: '#e64a19'
        }
      }}
      href="tel:+639610357748"
    >
      <PhoneIcon />
    </Fab>
  );
};

export default FloatingActionButton;
