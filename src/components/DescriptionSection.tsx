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
      <div className="w-[642px] text-white text-center text-base font-normal leading-[22.4px] absolute left-1/2 transform -translate-x-1/2 top-[354px] max-md:w-[85%] max-md:text-[15px] max-md:top-[280px] max-sm:text-sm max-sm:top-[200px]">
        <p className="mb-4">
          Building a DeFi layer for prediction markets.
        </p>
      </div>
    </section>
  );
};
