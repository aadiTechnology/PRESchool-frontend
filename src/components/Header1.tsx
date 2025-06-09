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
import ProfileMenu from './ProfileMenu'; // ProfileMenu component

const schoolName = 'Greenfield International School';
const logoUrl = '/images/happy_kids1.png'; // Corrected and simplified

const Header1: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // sm = 600px

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
          boxShadow: 1,
          height: 64,
          justifyContent: 'center',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: isMobile ? 1 : 2,
            height: '100%',
          }}
        >
          {/* LEFT: Drawer Icon + Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 100 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open sidebar"
              onClick={handleDrawerOpen}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logoUrl}
              alt="School Logo"
              style={{
                height: isMobile ? 30 : 40,
                maxWidth: '100%',
              }}
            />
          </Box>

          {/* CENTER: School Name */}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              textAlign: 'center',
              pointerEvents: 'none',
              px: 1,
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
            <ProfileMenu />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
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
