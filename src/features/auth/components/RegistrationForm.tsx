import React from 'react';
import { TextField, Button, MenuItem, Typography, Box } from '@mui/material';

export interface Role {
  id: number;
  name: string;
}

export interface RegisterFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    role_id: number;
  };
  roles: Role[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void | Promise<void>;
  loading?: boolean;
  error?: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  formData,
  roles,
  onChange,
  onSubmit,
  loading,
  error,
}) => (
  <Box component="form" onSubmit={onSubmit}>
    <Typography variant="h4" gutterBottom>Register</Typography>
    {error && <Typography color="error">{error}</Typography>}
    <TextField
      fullWidth margin="normal" label="First Name" name="firstName"
      value={formData.firstName} onChange={onChange} required
    />
    <TextField
      fullWidth margin="normal" label="Last Name" name="lastName"
      value={formData.lastName} onChange={onChange} required
    />
    <TextField
      fullWidth margin="normal" label="Email" name="email" type="email"
      value={formData.email} onChange={onChange} required
    />
    <TextField
      fullWidth margin="normal" label="Phone" name="phone"
      value={formData.phone} onChange={onChange} required
    />
    <TextField
      fullWidth margin="normal" label="Password" name="password" type="password"
      value={formData.password} onChange={onChange} required
    />
    <TextField
      fullWidth margin="normal" label="Confirm Password" name="confirmPassword" type="password"
      value={formData.confirmPassword} onChange={onChange} required
    />
    <TextField
      select fullWidth margin="normal" label="Role" name="role_id"
      value={formData.role_id} onChange={onChange} required
    >
      {roles.map((role) => (
        <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
      ))}
    </TextField>
    <Button
      variant="contained"
      color="primary"
      type="submit"
      fullWidth
      disabled={loading}
      sx={{ mt: 2 }}
    >
      {loading ? 'Registering...' : 'Register'}
    </Button>
  </Box>
);

export default RegisterForm;