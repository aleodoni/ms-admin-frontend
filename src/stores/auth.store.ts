import create from 'zustand';
import { success } from '../components/Toast/Success';
import { error } from '../components/Toast/Error';

import { api } from '../services/api.service';

type Credentials = {
  username: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  name: string;
  surname: string;
  cpf: string;
  createdAt: Date;
  updatedAt: Date;
};

type State = {
  loading: boolean;
  error: boolean;
  user: User | null;
  access_token: string | null;

  signIn: ({ username, password }: Credentials) => Promise<void>;
  getUser: () => User | null;
  setLoading: (status: boolean) => void;
  signOut: () => Promise<void>;
};

let restoredUser: string | null = null;

if (typeof window !== 'undefined') {
  restoredUser = localStorage.getItem('@AUTH:user');
}

let parsedUser: User | null = null;

if (restoredUser) {
  parsedUser = JSON.parse(restoredUser);
}

const authStore = create<State>((set, get) => ({
  loading: false,
  error: false,
  user: parsedUser,
  access_token: null,

  signIn: async ({ username, password }: Credentials) => {
    set({ loading: true });

    // Call api passing parameters
    try {
      const response = await api.post('auth', {
        username,
        password,
      });

      // Get response data
      const { access_token, user } = response.data;

      set({ user, access_token, loading: false });
      success('Logged successfully.');

      // Save response data into local storage and store
      localStorage.setItem('@AUTH:access_token', access_token);
      localStorage.setItem('@AUTH:user', JSON.stringify(user));
    } catch (err) {
      error('Incorrect username/password.');
      set({ user: null, error: err });
    } finally {
      set({ loading: false });
    }
  },

  getUser: () => {
    return get().user;
  },

  setLoading: (status) => {
    set({ loading: status });
  },

  signOut: async () => {
    set({ loading: true });

    localStorage.removeItem('@AUTH:user');
    localStorage.removeItem('@AUTH:access_token');

    set({ user: null });

    set({ loading: false });
  },
}));

export default authStore;
