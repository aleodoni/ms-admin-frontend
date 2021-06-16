import { useEffect } from 'react';
import Router from 'next/router';

import authStore from '../stores/auth.store';

export default function useLogged(): void {
  const getUser = authStore((state) => state.getUser);

  const user = getUser();

  useEffect(() => {
    if (!user) {
      Router.replace('/');
    }
  }, [user]);
}
