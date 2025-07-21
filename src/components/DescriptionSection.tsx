import React from 'react';

interface DescriptionSectionProps {
  className?: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({ className = '' }) => {
  const handleLinkClick = (linkType: string) => {
    console.log(`${linkType} link clicked`);
    // Add navigation or modal logic here
  };

  return (
    <section className={`text-center ${className}`}>
      <div className="w-[642px] text-white text-center text-base font-normal leading-[22.4px] absolute h-[88px] left-[359px] top-[354px] max-md:w-[85%] max-md:text-[15px] max-md:h-auto max-md:left-[7.5%] max-md:top-[280px] max-sm:text-sm max-sm:top-[200px]">
        <p className="mb-4">
          We will become the DeFi layer for prediction markets. From loans to leverage, to new DeFi primitives like perps, insurance, indexes and parlays.
        </p>
        <p className="space-x-1">
          <span>We are</span>
          <button 
            onClick={() => handleLinkClick('raising')}
            className="underline hover:text-blue-200 transition-colors cursor-pointer"
            aria-label="Learn about our fundraising"
          >
            raising
          </button>
          <span>an angel round,</span>
          <button 
            onClick={() => handleLinkClick('hiring')}
            className="underline hover:text-blue-200 transition-colors cursor-pointer"
            aria-label="View open positions"
          >
            hiring
          </button>
          <span>and</span>
          <button 
            onClick={() => handleLinkClick('launching')}
            className="underline hover:text-blue-200 transition-colors cursor-pointer"
            aria-label="Learn about our MVP launch"
          >
            launching
          </button>
          <span>an MVP soon.</span>
        </p>
      </div>
    </section>
  );
};
