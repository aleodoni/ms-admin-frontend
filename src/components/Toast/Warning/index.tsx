import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { ExclamationIcon } from '@heroicons/react/solid';

interface ToastProps {
  message: string;
}
const ToastWarning: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="flex items-center w-full">
      <ExclamationIcon className="h-7 w-6  text-gray-200" aria-hidden="true" />
      <span className="pl-6">{message}</span>
    </div>
  );
};

export function warning(message: string): React.ReactText {
  return toast.warning(
    <div>
      <ToastWarning message={message} />
    </div>
  );
}
