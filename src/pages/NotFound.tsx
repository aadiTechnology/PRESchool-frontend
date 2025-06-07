import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: 'url("/images/happy_kids1.png")', // Place your image in public/images/404-bg.jpg
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h1" component="h1" gutterBottom sx={{ color: '#fff', textShadow: '2px 2px 8px #000' }}>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#fff', textShadow: '1px 1px 6px #000' }}>
        Page Not Found
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;