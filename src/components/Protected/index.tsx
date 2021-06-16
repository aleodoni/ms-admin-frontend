import authStore from '../../stores/auth.store';
import React, { useEffect, useState } from 'react';
import Login from '@/pages';

type Props = {
  children: JSX.Element;
};

export default function Protected({ children }: Props): JSX.Element {
  const user = authStore((state) => state.user);
  const [ret, setRet] = useState(<Login />);

  useEffect(() => {
    if (user !== null) {
      setRet(children);
    }
  }, [user, children]);

  return ret;
}
