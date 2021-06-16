import authStore from '../../stores/auth.store';
import rbacStore from '../../stores/rbac.store';
import React, { useEffect, useState } from 'react';
import Login from '@/pages';
import Spinner from '../Spinner';

type Props = {
  system: string;
  role: string;
  permission?: string;
  children: JSX.Element;
};

export default function RbacShow({ children, system, role, permission }: Props): JSX.Element {
  const user = authStore((state) => state.user);
  const checkPermission = rbacStore((state) => state.checkPermission);
  const [ret, setRet] = useState(<></>);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    async function outCheckPermission(id: number): Promise<void> {
      const hasPermission = await checkPermission({
        userId: id,
        system: system,
        role: role,
      });

      setHasPermission(hasPermission);
    }

    if (user !== null) {
      outCheckPermission(user.id);

      if (hasPermission) {
        setRet(children);
      }
    }
  }, [user, children, checkPermission, hasPermission, role, system]);

  // console.log(ret);

  return ret;
}
