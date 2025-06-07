import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box
         
          sx={{
            mt: 'auto',
            p: 40
           
          }}
        >
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the ERP Dashboard. Here you can manage users, view statistics, and access various features.
      </Typography>
    </Box>
  );
};

export default Dashboard;