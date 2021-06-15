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
};

const authStore = create<State>((set, get) => ({
  loading: false,
  error: false,
  user: null,
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

      set({ user, access_token });
      success('Logged successfully.');

      // Save response data into local storage and store
      localStorage.setItem('@AUTH:access_token', access_token);
      localStorage.setItem('@AUTH:user', JSON.stringify(user));
    } catch (err) {
      error('Incorrect username/password.');
      console.log(err.response.status);
      console.log(err.response.data.error);

      set({ user: null, error: err });
    } finally {
      set({ loading: false });
    }
  },

  getUser: () => {
    return get().user;
  },
}));

export default authStore;
