import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { DescriptionSection } from '@/components/DescriptionSection';
import { CTAButton } from '@/components/CTAButton';
import { TransactionFlow } from '@/components/TransactionFlow';

const Index = () => {
  const handleLaunchApp = () => {
    console.log('Launching application...');
    // Add navigation logic here
  };

  return (
    <main className="w-full h-[900px] relative bg-white max-md:h-auto max-md:min-h-screen">
      <div className="w-[1360px] h-[820px] relative left-10 top-10 max-md:w-[calc(100%_-_40px)] max-md:h-auto max-md:min-h-[calc(100vh_-_80px)] max-md:left-5 max-md:top-5 max-sm:w-[calc(100%_-_20px)] max-sm:min-h-[calc(100vh_-_20px)] max-sm:left-2.5 max-sm:top-2.5">
        
        {/* Background Image */}
        <div className="absolute inset-0 rounded-[30px] max-md:rounded-[20px] max-sm:rounded-[15px] overflow-hidden">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/76df173f9b571f830a99295bba92a018e76d7e48?width=2720"
            alt="Background gradient"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Description Section */}
        <DescriptionSection />

        {/* CTA Button */}
        <CTAButton onClick={handleLaunchApp} />

        {/* Transaction Flow */}
        <TransactionFlow />
      </div>
    </main>
  );
};

export default Index;
