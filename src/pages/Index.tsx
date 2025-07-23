
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
    <main className="w-full min-h-screen relative bg-white overflow-hidden px-10 py-10">
      <div className="w-[calc(100vw-80px)] h-[calc(100vh-80px)] relative rounded-[30px] overflow-hidden p-10">
        {/* Background video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
        
        {/* Black overlay with 40% opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-40 rounded-[30px]"></div>
        
        {/* Content wrapper */}
        <div className="relative z-10 w-full h-full">
        
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
      </div>
    </main>
  );
};

export default Index;
