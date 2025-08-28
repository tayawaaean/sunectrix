import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.tsx'
import './index.css'
import 'leaflet/dist/leaflet.css';

// Create a custom theme matching Sunectrix logo colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6b35', // Vibrant orange from the sun in the logo
      light: '#ff8a65',
      dark: '#e64a19',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#1976d2', // Blue from the solar panel elements
      light: '#42a5f5',
      dark: '#0d47a1',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2e7d32', // Green for success states
      light: '#4caf50',
      dark: '#1b5e20',
    },
    info: {
      main: '#0288d1', // Cyan blue for info elements
      light: '#29b6f6',
      dark: '#01579b',
    },
    warning: {
      main: '#f57c00', // Orange for warnings
      light: '#ff9800',
      dark: '#ef6c00',
    },
    error: {
      main: '#d32f2f', // Red for errors
      light: '#f44336',
      dark: '#c62828',
    },
    background: {
      default: '#ffffff',
      paper: '#fafafa',
    },
    text: {
      primary: '#263238', // Dark grey for primary text
      secondary: '#546e7a', // Medium grey for secondary text
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(255, 107, 53, 0.3)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(255, 107, 53, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
