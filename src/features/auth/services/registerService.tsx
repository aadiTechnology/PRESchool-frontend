export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  role_id: number;
}

export interface Role {
  id: number;
  name: string;
}

export async function fetchRoles(): Promise<Role[]> {
  const res = await fetch('http://localhost:8000/api/v1/auth/roles');
  if (!res.ok) throw new Error('Failed to fetch roles');
  return res.json();
}

export async function registerUser(payload: RegisterPayload): Promise<void> {
  const res = await fetch('http://localhost:8000/api/v1/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    let msg = 'Registration failed';
    try {
      const data = await res.json();
      msg = data.detail || msg;
    } catch {}
    throw new Error(msg);
  }
}