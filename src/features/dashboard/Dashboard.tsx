import React from 'react';
import { Box, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        borderRadius: 2,
        boxShadow: 1,
        p: 4,
        m: 10, // margin all around
        flex: 1, // optional if parent uses flex layout
        overflow: 'auto', // in case content grows
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" align="left">
        Welcome to the ERP Dashboard. Here you can manage users, view statistics, and access various features.
      </Typography>
    </Box>
  );
};

export default Dashboard;
