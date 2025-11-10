export type User = {
  id: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber?: string;
  status?: 'Active' | 'Inactive';
  avatarUrl?: string;
  userType?: 'Admin' | 'User';
};

export type AuthResponse = {
  data: {
    token: string;
    user: User;
  };
  message?: string;
};