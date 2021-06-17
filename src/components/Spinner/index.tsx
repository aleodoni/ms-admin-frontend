import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner: React.FC = () => {
  return (
    <div className="flex bg-dark-blue items-center justify-center w-full h-screen">
      <ClipLoader loading={true} size={80} color="white" />
    </div>
  );
};

export default Spinner;
