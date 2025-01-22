import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

export const Content: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="px-12 my-40">
      {children}
    </div>
  );
};

