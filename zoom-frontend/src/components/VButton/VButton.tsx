import React from 'react';

interface VButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
}

const VButton = ({ icon, onClick, isActive }:VButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full shadow-md ${
        isActive ? 'bg-green-500' : 'bg-gray-700'
      } hover:bg-gray-500`}
    >
      {icon}
    </button>
  );
};

export default VButton;
