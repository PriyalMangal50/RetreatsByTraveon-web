import { http } from '../../lib/http';
import type { AuthResponse, User } from '../../types/auth';

// POST /users/login
export async function loginApi(input: { email: string; password: string }) {
  return http<AuthResponse>('/users/login', {
    method: 'POST',
    body: { email: input.email, password: input.password },
    contentType: 'json',
  });
}

// POST /users/register
// Backend expects: firstName, lastName, emailAddress, phoneNumber, userPassword
export async function registerApi(input: {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  userPassword: string;
}) {
  return http<AuthResponse>('/users/register', {
    method: 'POST',
    body: input,
    contentType: 'json',
  });
}

// POST /users/send-otp
export async function sendOtpApi(input: { email: string }) {
  return http<{ status: string; message: string }>('/users/send-otp', {
    method: 'POST',
    body: input,
    contentType: 'json',
  });
}

// POST /users/verify-otp
export async function verifyOtpApi(input: { email: string; otp: number }) {
  return http<{ status: string; message: string }>('/users/verify-otp', {
    method: 'POST',
    body: input,
    contentType: 'json',
  });
}

// GET /users/me (Bearer)
export async function meApi() {
  return http<{ data: User }>('/users/me', { method: 'GET', auth: true });
}

// PUT /users/profile (Bearer)
export async function updateProfileApi(input: {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  userAvatar?: string; // backend expects 'userAvatar'
}) {
  return http<{ status: string; message: string; data: User }>('/users/profile', {
    method: 'PUT',
    auth: true,
    body: input,
    contentType: 'json',
  });
}