import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { MenuProvider } from './contexts/MenuContext';
import AppLayout from './layouts/AppLayout';
import './assets/theme'; // Assuming theme is set up in this file

const App: React.FC = () => {
  return (
    <AuthProvider>
      <MenuProvider>
            <AppRouter />
      </MenuProvider>
    </AuthProvider>
  );
};

export default App;