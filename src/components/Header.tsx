
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`relative z-10 w-full ${className}`}>
      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-10">
        <img
          src="/lovable-uploads/0ec0c153-fceb-42a6-844f-1dad3e15829c.png"
          alt="Gondor Logo"
          className="h-10 w-auto max-md:h-8 max-sm:h-6"
        />
      </div>

    </header>
  );
};
