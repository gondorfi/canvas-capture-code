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
    <main className="w-full h-screen relative bg-white overflow-hidden">
      <div className="w-[calc(100%-80px)] h-[calc(100vh-80px)] relative left-10 top-10">
        
        {/* Background Image */}
        <div className="absolute inset-0 rounded-[30px] overflow-hidden">
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
