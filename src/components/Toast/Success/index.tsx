import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { CheckIcon } from '@heroicons/react/solid';

interface ToastProps {
  message: string;
}
const ToastSuccess: React.FC<ToastProps> = ({ message }) => {
  return (
    <div className="flex items-center w-full">
      <CheckIcon className="h-7 w-6  text-gray-200" aria-hidden="true" />
      <span className="pl-6">{message}</span>
    </div>
  );
};

export function success(message: string): React.ReactText {
  return toast.success(
    <div>
      <ToastSuccess message={message} />
    </div>
  );
}
