import React from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header children={undefined} />
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
      <ChatWidget />
      <Footer />
    </div>
  );
};

export default AppLayout;