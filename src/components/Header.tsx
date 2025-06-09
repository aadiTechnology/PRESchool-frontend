import React, { useState } from 'react';
import SidebarMenu from '../components/SidebarMenu';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tooltip,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Header: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
      {/* Top Header Bar */}
      <AppBar position="static" color="default" elevation={1} sx={{ bgcolor: '#1976d2', color: '#fff' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open sidebar"
              onClick={handleDrawerOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              ERP System
            </Typography>
          </Box>
          <Box>
            <Tooltip title="Profile">
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Logout">
              <IconButton color="inherit">
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: { width: 220, bgcolor: '#f5f5f5', borderRight: '1px solid #ddd' },
        }}
      >
        <Box sx={{ width: 220, minHeight: '100vh' }}>
          <SidebarMenu userRole="admin" />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  );
};

export default Header;