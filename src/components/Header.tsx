import React from 'react';

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`absolute z-10 ${className}`}>
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/c47d60218c679444d22adbe5bc1f8b3b0038a131?width=379"
        alt="Platform Logo"
        className="w-[190px] h-[41px] absolute left-[585px] top-10 max-md:w-[150px] max-md:h-8 max-md:-translate-x-2/4 max-md:left-2/4 max-md:top-[30px] max-sm:w-[120px] max-sm:h-[26px] max-sm:top-5"
      />
    </header>
  );
};
