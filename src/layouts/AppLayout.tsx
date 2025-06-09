import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Header1 from '../components/Header1';

const HEADER_HEIGHT = 54; // adjust if your header is taller
const FOOTER_HEIGHT = 80; // adjust if your footer is taller

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <CssBaseline />

      <Box
        sx={{
          height: '100vh',
          overflow: 'hidden', // 🔒 Prevent global scrolling
          bgcolor: '#fafbfc',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box>
         <Header1/>
        </Box>
        {/* Header */}
        {/* <Box sx={{ height: HEADER_HEIGHT, flexShrink: 0 }}>
          <Header />
        </Box> */}

        {/* Main content area */}
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'hidden', // No internal scroll
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 2,
          }}
        >
          {children}
        </Box>

        {/* Footer */}
        <Box sx={{ height: FOOTER_HEIGHT, flexShrink: 0 }}>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default AppLayout;
