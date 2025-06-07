import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import authService from '../services/authService';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const { setUser, setIsAuthenticated } = context;
  const [loading, setLoading] = useState(true);

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login({ email, password });
      setUser(response.user);
      setIsAuthenticated(true);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.user)); // <-- Add this line
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (userData: { firstName: string; lastName: string; email: string; phone: string; password: string; confirmPassword: string; role: string }) => {
    try {
      const response = await authService.register(userData);
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    if (token) {
      setIsAuthenticated(true);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
    setLoading(false);
  }, [setIsAuthenticated, setUser]);

  return { login, register, logout, loading };
};

export default useAuth;