import React, { useState } from 'react';

interface CTAButtonProps {
  className?: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ className = '', onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log('Launch App clicked');
      // Add navigation logic here
    }
  };

  return (
    <div className={`absolute left-1/2 transform -translate-x-1/2 top-[474px] max-md:top-[378px] max-sm:top-[278px] ${className}`}>
      <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex w-[215px] h-[60px] justify-between items-center cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:backdrop-blur-2xl transition-all duration-300 pl-[45px] pr-2.5 py-2.5 rounded-[130px] shadow-2xl shadow-black/20 hover:shadow-white/10 hover:shadow-lg max-md:w-[180px] max-md:h-[50px] max-md:pl-[35px] max-md:pr-2 max-md:py-2 max-sm:w-40 max-sm:h-[45px] max-sm:text-base"
          aria-label="Launch the application"
        >
      <div className="flex items-center gap-1.5">
        <span className="text-white text-lg font-medium">
          Launch App
        </span>
      </div>
      <div className={`transition-transform duration-200 ${isHovered ? 'translate-x-1 -rotate-45' : ''}`}>
        <svg 
          width="39" 
          height="38" 
          viewBox="0 0 39 38" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-[39px] h-[38px] flex-shrink-0"
        >
          <path 
            d="M19.5095 38C16.8135 38 14.2783 37.5015 11.904 36.5046C9.5296 35.5076 7.46435 34.1545 5.70823 32.4452C3.95174 30.736 2.56134 28.7262 1.53703 26.416C0.512342 24.1054 0 21.6365 0 19.0093C0 16.3824 0.511595 13.9122 1.53478 11.5987C2.55797 9.28525 3.9467 7.27296 5.70095 5.56187C7.4552 3.85041 9.51783 2.49566 11.8888 1.49761C14.2602 0.499205 16.7941 0 19.4905 0C22.1865 0 24.7217 0.498478 27.096 1.49543C29.4704 2.49239 31.5356 3.8455 33.2918 5.55477C35.0483 7.26404 36.4387 9.27378 37.463 11.584C38.4877 13.8946 39 16.3635 39 18.9907C39 21.6176 38.4884 24.0878 37.4652 26.4013C36.442 28.7148 35.0533 30.727 33.2991 32.4381C31.5448 34.1496 29.4822 35.5043 27.1112 36.5024C24.7398 37.5008 22.2059 38 19.5095 38ZM23.4784 19.7644L18.9397 24.1868C18.7902 24.3324 18.7249 24.4962 18.7435 24.6782C18.7622 24.8602 18.8463 25.0239 18.9957 25.1695C19.1451 25.3151 19.3257 25.3879 19.5375 25.3879C19.749 25.3879 19.9232 25.3151 20.0603 25.1695L25.2155 20.1466C25.5517 19.819 25.7198 19.4368 25.7198 19C25.7198 18.5632 25.5517 18.181 25.2155 17.8534L20.0043 12.7759C19.8549 12.6303 19.6868 12.5575 19.5 12.5575C19.3132 12.5575 19.1451 12.6303 18.9957 12.7759C18.8463 12.9215 18.7716 13.0974 18.7716 13.3038C18.7716 13.5098 18.8463 13.6796 18.9957 13.8132L23.4784 18.2356H12.7759C12.5536 18.2356 12.3672 18.3092 12.2166 18.4562C12.0665 18.6029 11.9914 18.7849 11.9914 19.0022C11.9914 19.2191 12.0665 19.4004 12.2166 19.546C12.3672 19.6916 12.5536 19.7644 12.7759 19.7644H23.4784Z" 
            fill="white"
          />
        </svg>
      </div>
      </button>
    </div>
  );
};
