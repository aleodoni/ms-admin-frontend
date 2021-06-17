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

export default function RbacShow({ children, system, roles, permission }: Props): JSX.Element {
  const user = authStore((state) => state.user);
  const checkPermission = rbacStore((state) => state.checkPermission);
  const [ret, setRet] = useState(<></>);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    async function outCheckPermission(id: number): Promise<void> {
      const hasPermission = await checkPermission({
        userId: id,
        system: system,
        roles: roles,
      });

      setHasPermission(hasPermission);
    }

    if (user !== null) {
      outCheckPermission(user.id);

      if (hasPermission) {
        setRet(children);
      }
    }
  }, [user, children, checkPermission, hasPermission, roles, system]);

  // console.log(ret);

  return ret;
}
