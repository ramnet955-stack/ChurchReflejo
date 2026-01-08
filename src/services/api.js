const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function loginRequest({ email, password }) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    const message = errorBody.message || 'No se pudo iniciar sesión. Verifica tus datos.';
    throw new Error(message);
  }

  return response.json();
}
