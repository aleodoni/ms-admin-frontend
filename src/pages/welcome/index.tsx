import { NextPage } from 'next';
import { CheckCircleIcon } from '@heroicons/react/solid';

import Menu from '../../components/Menu';
import authStore from '../../stores/auth.store';
import React, { useEffect, useState } from 'react';
import RbacChecker from '@/components/RbacChecker';
import RbacShow from '@/components/RbacShow';

const Welcome: NextPage = () => {
  const getUser = authStore((state) => state.getUser);
  const user = getUser();
  const [userComplete, setUserComplete] = useState('');

  useEffect(() => {
    if (user !== null) {
      setUserComplete(`${user.name} ${user.surname}`);
    }
  }, [user]);

  return (
    <>
      <RbacChecker system={'ADMIN_SYS'} role={'ADMIN'}>
        <div id="teste" className="flex flex-col items-center bg-white h-screen">
          <Menu />
          <div className="flex h-full w-full items-center px-10">
            <div className="flex flex-col justify-center items-center h-96 px-20 w-full bg-light-green border rounded-md border-medium-green">
              <CheckCircleIcon className="h-24 my-10 text-medium-green" aria-hidden="true" />
              <span className="text-5xl my-10">Welcome {userComplete} to Admin&apos;s Page</span>
              <RbacShow system={'ADMIN_SYS'} role={'ADMIN'}>
                <span>This message should be viewed only by ADMIN users.</span>
              </RbacShow>
              <RbacShow system={'ADMIN_SYS'} role={'SEMIGOD'}>
                <span>THis message should be viewed only by SEMIGOD users.</span>
              </RbacShow>
            </div>
          </div>
        </div>
      </RbacChecker>
    </>
  );
};

export default Welcome;
