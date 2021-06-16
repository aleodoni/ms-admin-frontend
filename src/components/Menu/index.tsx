import React from 'react';

const Menu: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-24 bg-dark-blue px-8">
        <span className="flex text-4xl items-center text-gray-100 font-bold w-56 h-full">
          Admin page
        </span>
        <div className="flex items-center justify-around px-10 text-lg w-2/5 h-full">
          <span className="text-gray-100">Users</span>
          <span className="text-gray-100">Systems</span>
          <span className="text-gray-100">Roles</span>
          <span className="text-gray-100">Permissions</span>
        </div>
        <div className="flex items-center justify-around px-20 h-full text-lg w-auto text-gray-100 bg-dark-blue">
          <span>avatar</span>
        </div>
      </div>
    </>
  );
};

export default Menu;
