import React from 'react';
import Header from '../components/Header';
import SidebarMenu from '../components/SidebarMenu';
import { Box } from '@mui/material';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header children={undefined} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Box sx={{ width: 220, bgcolor: '#f5f5f5', minHeight: '100vh', borderRight: '1px solid #ddd' }}>
          <SidebarMenu userRole="admin" /> {/* Pass the current user's role here */}
        </Box>
        <Box sx={{ flex: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;