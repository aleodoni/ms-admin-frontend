import authStore from '../../stores/auth.store';
import rbacStore from '../../stores/rbac.store';
import React, { useEffect, useState } from 'react';
import Login from '@/pages';
import Spinner from '../Spinner';

type Props = {
  system: string;
  roles: string[];
  permission?: string;
  children: JSX.Element;
};

export default function RbacChecker({ children, system, roles, permission }: Props): JSX.Element {
  const user = authStore((state) => state.user);
  const checkPermission = rbacStore((state) => state.checkPermission);
  const hasPermission = rbacStore((state) => state.getPermission);
  const [ret, setRet] = useState(<Spinner />);

  useEffect(() => {
    async function outCheckPermission(id: number): Promise<void> {
      await checkPermission({
        userId: id,
        system: system,
        roles: roles,
      });
    }

    async function outHasPermission(): Promise<boolean> {
      return hasPermission();
    }

    if (user !== null) {
      outCheckPermission(user.id);

      if (outHasPermission()) {
        setRet(children);
      } else {
        setRet(<Login />);
      }
    } else {
      setRet(<Login />);
    }
  }, [user, children, checkPermission, hasPermission, roles, system]);

  return ret;
}
