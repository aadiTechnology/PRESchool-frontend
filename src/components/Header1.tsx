import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SidebarMenu from './SidebarMenu';
import Header from './Header';// 👈 Make sure this file exists and is implemented

const schoolName = "Greenfield International School";
const logoUrl = "/logo.png"; // Replace with actual logo path

const Header1: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: 1,
          color: 'black',
          height: 64,
          justifyContent: 'center',
          
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: 2,
            height: '100%',
          }}
        >
          {/* LEFT: Menu Icon + Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 120 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open sidebar"
              onClick={handleDrawerOpen}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <img src={"/images/happy_kids1.png"} alt="School Logo" style={{ height: 40 }} />
          </Box>

          {/* CENTER: School Name */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            <Typography
              variant={isMobile ? 'subtitle1' : 'h6'}
              fontWeight={600}
              noWrap
            >
              {schoolName}
            </Typography>
          </Box>

          {/* RIGHT: Profile Menu */}
          <Box sx={{ minWidth: 48 }}>
            <Header />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: 220,
            bgcolor: '#f5f5f5',
            borderRight: '1px solid #ddd',
          },
        }}
      >
        <SidebarMenu userRole="admin" />
      </Drawer>
    </>
  );
};

export default Header1;
