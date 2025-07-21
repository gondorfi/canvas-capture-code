import React from 'react';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section className={`text-center ${className}`}>
      <h1 className="w-[668px] text-white text-center text-[74px] font-normal leading-[74px] tracking-[-1.48px] absolute h-[148px] left-[346px] top-[182px] max-md:w-[90%] max-md:text-5xl max-md:h-auto max-md:leading-[52.8px] max-md:left-[5%] max-md:top-[120px] max-sm:text-[32px] max-sm:leading-[38.4px] max-sm:top-20">
        Borrow against your Polymarket positions
      </h1>
    </section>
  );
};
