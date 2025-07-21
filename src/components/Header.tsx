
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
        <svg 
          width="190" 
          height="41" 
          viewBox="0 0 190 41" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="max-md:w-[150px] max-md:h-8 max-sm:w-[120px] max-sm:h-[26px]"
        >
          <path 
            d="M20 0L40 20L20 40L0 20L20 0Z" 
            fill="white" 
            fillOpacity="0.9"
          />
          <text 
            x="60" 
            y="25" 
            fill="white" 
            fontSize="16" 
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            GONDOR
          </text>
        </svg>
      </div>

      {/* Typing Animation */}
      <div className="absolute right-[100px] top-[50px] max-md:right-[5%] max-md:top-[70px] max-sm:right-[5%] max-sm:top-[60px]">
        <TypeAnimation
          preRenderFirstString={true}
          sequence={[
            500,
            'Borrow against your positions',
            1000,
            'Lend to earn yield',
            1000,
            'Borrow against your positions',
            1000,
            'Lend to earn yield',
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
