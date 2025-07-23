
import React from 'react';
import { Header } from '@/components/Header';
import { CenteredHeroContent } from '@/components/CenteredHeroContent';
import { TransactionFlow } from '@/components/TransactionFlow';

const Index = () => {
  const handleLaunchApp = () => {
    console.log('Launching application...');
    // Add navigation logic here
  };

  return (
    <main className="w-full min-h-screen relative bg-white overflow-hidden px-10 py-10">
      <div className="w-[calc(100vw-80px)] h-[calc(100vh-80px)] relative bg-gray-900 rounded-[30px] overflow-hidden p-10" style={{
        backgroundImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/76df173f9b571f830a99295bba92a018e76d7e48?width=2720')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        
        {/* Header */}
        <Header />

        {/* Centered Hero Content */}
        <CenteredHeroContent onLaunchApp={handleLaunchApp} />

        {/* Transaction Flow */}
        <TransactionFlow />
      </div>
    </main>
  );
};

export default Index;
