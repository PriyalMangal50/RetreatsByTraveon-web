import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { loginApi, registerApi, meApi, sendOtpApi, verifyOtpApi, updateProfileApi } from './api';
import { useAuth } from '../../store/auth';

export function useLogin() {
  const setAuth = useAuth((s) => s.setAuth);
  const qc = useQueryClient();

  return useMutation({
    // If the credentials match the local admin fallback, skip the API and create an admin session locally.
    mutationFn: async (input: { email: string; password: string }) => {
      const ADMIN_EMAIL = 'retreatsbytraveon@gmail.com';
      const ADMIN_PASSWORD = 'Retreats@2025';

      if (input.email === ADMIN_EMAIL && input.password === ADMIN_PASSWORD) {
        // create a fake successful response matching AuthResponse
        const fakeUser = {
          id: 0,
          firstName: 'Admin',
          lastName: 'User',
          emailAddress: ADMIN_EMAIL,
          userType: 'Admin' as const,
        };
        return Promise.resolve({ data: { token: 'local-admin-token', user: fakeUser } });
      }

      return loginApi(input);
    },
    onSuccess: (res) => {
      const token = res?.data?.token;
      const user = res?.data?.user;
      if (token && user) {
        setAuth({ token, user });
        qc.invalidateQueries({ queryKey: ['me'] });
      }
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: registerApi,
  });
}

export function useMe(enabled = true) {
  return useQuery({
    queryKey: ['me'],
    queryFn: meApi,
    select: (res) => res.data,
    enabled,
  });
}

export function useSendOtp() {
  return useMutation({ mutationFn: sendOtpApi });
}

export function useVerifyOtp() {
  return useMutation({ mutationFn: verifyOtpApi });
}

export function useUpdateProfile() {
  const updateUser = useAuth((s) => s.updateUser);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateProfileApi,
    onSuccess: (res) => {
      const updated = res?.data;
      if (updated) {
        // Normalize avatar shape for UI
        updateUser({
          ...updated,
          avatarUrl: (updated as any).userAvatar || (updated as any).avatarUrl,
        });
      }
      qc.invalidateQueries({ queryKey: ['me'] });
    },
  });
}