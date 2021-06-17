import React from 'react';
import Link from 'next/link';

import Avatar from '../Avatar';

const Menu: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-24 bg-dark-blue px-8">
        <Link href="/welcome">
          <a className="flex text-4xl items-center text-gray-100 font-bold w-56 h-full">
            Admin page
          </a>
        </Link>
        <div className="flex items-center justify-around px-10 text-lg w-2/5 h-full">
          <Link href="#">
            <a className="text-gray-100">Users</a>
          </Link>
          <Link href="#">
            <a className="text-gray-100">Systems</a>
          </Link>
          <Link href="#">
            <a className="text-gray-100">Roles</a>
          </Link>
          <Link href="#">
            <a className="text-gray-100">Permissions</a>
          </Link>
        </div>
        <Avatar />
      </div>
    </>
  );
};

export default Menu;
