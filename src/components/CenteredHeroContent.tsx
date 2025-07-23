import React from 'react';
import { CTAButton } from './CTAButton';

interface CenteredHeroContentProps {
  onLaunchApp?: () => void;
}

export const CenteredHeroContent: React.FC<CenteredHeroContentProps> = ({ onLaunchApp }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        {/* Hero Title */}
        <h1 className="text-white text-center text-[74px] font-apple-garamond leading-[74px] tracking-[-1.48px] mb-6 max-md:text-5xl max-md:leading-[52.8px] max-sm:text-[32px] max-sm:leading-[38.4px]">
          Borrow against your Polymarket positions
        </h1>
        
        {/* Description */}
        <p className="text-white text-center text-base font-normal leading-[22.4px] mb-8 max-md:text-[15px] max-sm:text-sm">
          Building a DeFi layer for prediction markets.
        </p>
        
        {/* CTA Button with 32px spacing */}
        <div className="mt-8">
          <CTAButton onClick={onLaunchApp} className="relative left-0 top-0 transform-none" />
        </div>
      </div>
    </div>
  );
};