import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
// import ChatWidget from '../components/ChatWidget';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      p={2}
    >
      <Header />

      {/* Content should grow and take all remaining space */}
      <Box component="main" flex="1">
        {children}
      </Box>

      <Footer />
    </Box>
  );
};

export default AppLayout;
