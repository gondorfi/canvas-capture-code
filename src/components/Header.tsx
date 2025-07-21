
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`absolute z-10 w-full ${className}`}>
      {/* Logo */}
      <div className="absolute left-[585px] top-10 max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-10 max-sm:top-10">
        <img
          src="/lovable-uploads/0ec0c153-fceb-42a6-844f-1dad3e15829c.png"
          alt="Gondor Logo"
          className="h-10 w-auto max-md:h-8 max-sm:h-6"
        />
      </div>

    </header>
  );
};
