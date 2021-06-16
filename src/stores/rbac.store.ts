import create from 'zustand';
import { success } from '../components/Toast/Success';
import { error } from '../components/Toast/Error';

import { api } from '../services/api.service';

type Permission = {
  userId: number;
  system: string;
  role: string;
};

type State = {
  loading: boolean;
  error: boolean;
  hasPermission: boolean;

  checkPermission: ({ userId, system, role }: Permission) => Promise<boolean>;
  getPermission: () => boolean;
};

const rbacStore = create<State>((set, get) => ({
  loading: false,
  error: false,
  hasPermission: false,

  checkPermission: async ({ userId, system, role }: Permission): Promise<boolean> => {
    set({ loading: true });

    // Call api passing parameters
    // console.log(userId, system, role);
    try {
      const hasPermission = await api.post('rbac/check-permission', {
        userId: String(userId),
        system,
        role,
      });

      // console.log(hasPermission.data);

      set({ hasPermission: hasPermission.data });
      return hasPermission.data;
    } catch (err) {
      error('Permission denied.');
      console.log(err);
      console.log(err);

      set({ error: err, hasPermission: false });
      return false;
    } finally {
      set({ loading: false });
    }
  },

  getPermission: (): boolean => {
    return get().hasPermission;
  },
}));

export default rbacStore;
