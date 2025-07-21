
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`absolute z-10 w-full ${className}`}>
      {/* Logo */}
      <div className="absolute left-[585px] top-10 max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[30px] max-sm:top-5">
        <img
          src="/lovable-uploads/0ec0c153-fceb-42a6-844f-1dad3e15829c.png"
          alt="Gondor Logo"
          className="h-10 w-auto max-md:h-8 max-sm:h-6"
        />
      </div>

      {/* Typing Animation */}
      <div className="absolute right-[100px] top-[50px] max-md:right-[5%] max-md:top-[70px] max-sm:right-[5%] max-sm:top-[60px]">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            'Borrow against your Polymarket positions',
            1000,
            'Lend against your Polymarket positions',
            1000,
            'Borrow against your Polymarket positions',
            1000,
            'Lend against your Polymarket positions',
            500,
          ]}
          speed={50}
          style={{ 
            fontSize: '1.2em',
            color: 'white',
            fontWeight: '500'
          }}
          className="max-md:text-base max-sm:text-sm"
          repeat={Infinity}
        />
      </div>
    </header>
  );
};
