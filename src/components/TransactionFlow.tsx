import React, { useState } from 'react';
import LiquidGlass from 'liquid-glass-react';

interface TransactionFlowProps {
  className?: string;
}

interface TransactionData {
  depositAmount: number;
  borrowAmount: number;
  depositAsset: string;
  borrowAsset: string;
}

export const TransactionFlow: React.FC<TransactionFlowProps> = ({ className = '' }) => {
  const [transactionData, setTransactionData] = useState<TransactionData>({
    depositAmount: 200.16,
    borrowAmount: 130.10,
    depositAsset: 'Yes shares',
    borrowAsset: 'USDC'
  });

  const handleDepositChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    setTransactionData(prev => ({
      ...prev,
      depositAmount: numValue,
      borrowAmount: parseFloat((numValue * 0.65).toFixed(2))
    }));
  };

  const handleBorrowChange = (value: string) => {
    const numValue = parseFloat(value) || 0;
    setTransactionData(prev => ({
      ...prev,
      borrowAmount: numValue,
      depositAmount: parseFloat((numValue / 0.65).toFixed(2))
    }));
  };

  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulateTransaction = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      console.log('Transaction simulation completed');
    }, 2000);
  };

  return (
    <section className={`${className}`} aria-label="Transaction flow visualization">
      <div className="absolute left-[397px] top-[624px] max-md:left-[5%] max-md:top-[460px] max-sm:top-[350px]">
        <LiquidGlass>
          <div className="inline-flex items-center gap-[41px] w-[567px] h-[116px] bg-white/30 p-5 rounded-[20px] max-md:w-[90vw] max-md:h-auto max-md:gap-[25px] max-md:flex-col max-md:p-[15px] max-sm:gap-[15px] max-sm:p-3">
        
        {/* Deposit Section */}
        <div className="flex items-center gap-[18px] max-md:w-full">
          <div className="w-14 h-14 relative max-sm:w-[45px] max-sm:h-[45px]" aria-label="Deposit icon">
            <div className="w-14 h-14 bg-white rounded-full absolute left-0 top-0"></div>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 30 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] absolute left-[13px] top-[15px]"
            >
              <path 
                d="M15 12.7403C14.2948 12.7403 13.7019 12.5 13.2212 12.0194C12.7404 11.5385 12.5 10.9455 12.5 10.2403C12.5 9.53531 12.7404 8.9424 13.2212 8.46156C13.7019 7.98073 14.2948 7.74031 15 7.74031C15.7052 7.74031 16.2981 7.98073 16.7787 8.46156C17.2596 8.9424 17.5 9.53531 17.5 10.2403C17.5 10.9455 17.2596 11.5385 16.7787 12.0194C16.2981 12.5 15.7052 12.7403 15 12.7403ZM7.04311 16.7306C6.4879 16.7306 6.01259 16.5329 5.61717 16.1375C5.22176 15.7421 5.02405 15.2668 5.02405 14.7116V5.76937C5.02405 5.21396 5.22176 4.73854 5.61717 4.34312C6.01259 3.94771 6.4879 3.75 7.04311 3.75H22.9806C23.536 3.75 24.0114 3.94771 24.4069 4.34312C24.8023 4.73854 25 5.21396 25 5.76937V14.7116C25 15.2668 24.8023 15.7421 24.4069 16.1375C24.0114 16.5329 23.536 16.7306 22.9806 16.7306H7.04311ZM8.29311 15.4806H21.7306C21.7306 14.9215 21.9284 14.4451 22.324 14.0516C22.7195 13.6582 23.1948 13.4616 23.75 13.4616V7.01937C23.1906 7.01937 22.7143 6.82156 22.3209 6.42594C21.9274 6.03052 21.7306 5.55521 21.7306 5H8.29311C8.29311 5.55937 8.0954 6.03573 7.69999 6.42906C7.30457 6.8226 6.82926 7.01937 6.27405 7.01937V13.4616C6.83342 13.4616 7.30978 13.6593 7.70311 14.0547C8.09644 14.4501 8.29311 14.9254 8.29311 15.4806ZM14.375 23.9037L12.1681 21.6972C12.0512 21.5801 11.9119 21.5216 11.75 21.5216C11.5881 21.5216 11.4487 21.5801 11.3319 21.6972C11.2148 21.8141 11.1562 21.9589 11.1562 22.1316C11.1562 22.3041 11.2148 22.4461 11.3319 22.5578L14.309 25.535C14.4234 25.6496 14.5386 25.7289 14.6547 25.7728C14.7705 25.817 14.8947 25.8391 15.0272 25.8391C15.1597 25.8391 15.2828 25.817 15.3965 25.7728C15.5103 25.7289 15.6245 25.6496 15.739 25.535L18.7162 22.5578C18.8333 22.4461 18.8919 22.3041 18.8919 22.1316C18.8919 21.9589 18.8333 21.8141 18.7162 21.6972C18.5994 21.5801 18.4547 21.5216 18.2822 21.5216C18.1095 21.5216 17.9673 21.5801 17.8556 21.6972L15.649 23.9037V19.5672C15.649 19.3901 15.589 19.2417 15.469 19.1219C15.349 19.0021 15.2004 18.9422 15.0231 18.9422C14.8458 18.9422 14.6935 19.0021 14.5662 19.1219C14.4387 19.2417 14.375 19.3901 14.375 19.5672V23.9037Z" 
                fill="#2D4164"
              />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex w-[110px] flex-col items-start gap-1.5 max-sm:w-20">
              <label className="w-[110px] text-white text-sm font-light max-sm:text-xs">
                Deposit
              </label>
              <input
                type="number"
                value={transactionData.depositAmount}
                onChange={(e) => handleDepositChange(e.target.value)}
                className="bg-transparent text-white text-left text-2xl font-medium max-sm:text-xl border-none outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                step="0.01"
              />
              <div className="flex items-center gap-[7px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/801234e8fef88b819ad0fd326787841f3275129e?width=36"
                  alt="Asset icon"
                  className="w-[18px] h-[18px] rounded-[300px] max-sm:w-4 max-sm:h-4"
                />
                <span className="w-[110px] text-white text-sm font-light max-sm:text-xs">
                  {transactionData.depositAsset}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Transfer Arrow */}
        <div className="w-[77px] h-[76px] relative max-md:w-[50px] max-md:h-[50px] max-sm:w-10 max-sm:h-10">
          <button
            onClick={handleSimulateTransaction}
            disabled={isSimulating}
            className={`w-full h-full transition-transform duration-200 hover:scale-110 ${isSimulating ? 'animate-pulse' : ''}`}
            aria-label="Simulate transaction"
          >
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[40px] h-[40px] absolute left-[19px] top-[18px]"
            >
              <path 
                d="M19.8286 19.9995C19.8286 19.6953 19.9295 19.4501 20.1294 19.2504C20.3297 19.0505 20.5748 18.9496 20.8784 18.9496H32.0366L31.6958 18.6088L24.4429 11.3393L24.4419 11.3383C24.2514 11.1501 24.1548 10.9174 24.1548 10.6254C24.1548 10.3377 24.2572 10.0918 24.4692 9.87836C24.6554 9.69089 24.8918 9.59418 25.1948 9.59418C25.497 9.59421 25.7354 9.69137 25.9253 9.88129L35.0894 19.0864C35.1947 19.1919 35.2764 19.2996 35.3364 19.4086L35.3892 19.518C35.451 19.6668 35.4829 19.8278 35.4829 20.0024C35.4829 20.1767 35.4506 20.336 35.3892 20.4828C35.3433 20.5919 35.2769 20.7004 35.187 20.8071L35.0894 20.9135L25.9253 30.102C25.7343 30.293 25.4954 30.3931 25.1938 30.3979C24.8952 30.4023 24.6472 30.3088 24.439 30.1157L24.4399 30.1147C24.22 29.9039 24.117 29.6598 24.1216 29.3715C24.1261 29.0782 24.2313 28.8304 24.4429 28.6186L31.6802 21.3911L32.022 21.0502H20.8784C20.5749 21.0502 20.3297 20.9496 20.1294 20.7495C19.9293 20.5491 19.8286 20.3033 19.8286 19.9995ZM11.4946 19.9995C11.4947 19.6953 11.5955 19.4501 11.7954 19.2504C11.9958 19.0503 12.2416 18.9496 12.5454 18.9496H15.061C15.3595 18.9497 15.6002 19.0505 15.7974 19.2504C15.995 19.4506 16.0952 19.6959 16.0952 20.0004C16.0952 20.3045 15.9946 20.5497 15.7944 20.7495C15.5944 20.9494 15.3491 21.0502 15.0454 21.0502H12.5454C12.2417 21.0502 11.9958 20.9498 11.7954 20.7495C11.5953 20.5491 11.4946 20.3033 11.4946 19.9995ZM4.82861 19.9995C4.82864 19.6953 4.92947 19.4501 5.12939 19.2504C5.3297 19.0505 5.57476 18.9496 5.87842 18.9496H6.72803C6.98909 18.9497 7.20593 19.027 7.38818 19.1801L7.46436 19.2504C7.66192 19.4506 7.76221 19.6959 7.76221 20.0004C7.7622 20.3045 7.66065 20.5497 7.46045 20.7495C7.26042 20.9494 7.01517 21.0502 6.71143 21.0502H5.87842C5.57487 21.0502 5.3297 20.9496 5.12939 20.7495C4.92926 20.5491 4.82861 20.3033 4.82861 19.9995Z" 
                fill="white" 
                stroke="#7A8086" 
                strokeWidth="0.4"
              />
            </svg>
          </button>
        </div>

        {/* Borrow Section */}
        <div className="flex items-center gap-[18px] max-md:w-full">
          <div className="flex items-center gap-3">
            <div className="flex w-[110px] flex-col items-end gap-1.5 max-sm:w-20">
              <label className="w-[110px] text-white text-right text-sm font-light max-sm:text-xs">
                Borrow
              </label>
              <input
                type="number"
                value={transactionData.borrowAmount}
                onChange={(e) => handleBorrowChange(e.target.value)}
                className="bg-transparent text-white text-right text-2xl font-medium max-sm:text-xl border-none outline-none w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                step="0.01"
              />
              <div className="flex items-center gap-[7px]">
                <span className="text-white text-sm font-light max-sm:text-xs">
                  {transactionData.borrowAsset}
                </span>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/801234e8fef88b819ad0fd326787841f3275129e?width=36"
                  alt="Asset icon"
                  className="w-[18px] h-[18px] rounded-[300px] max-sm:w-4 max-sm:h-4"
                />
              </div>
            </div>
          </div>
          <div className="w-14 h-14 relative max-sm:w-[45px] max-sm:h-[45px]" aria-label="Borrow icon">
            <div className="w-14 h-14 bg-white rounded-full absolute left-0 top-0 transform rotate-180"></div>
            <svg 
              width="30" 
              height="30" 
              viewBox="0 0 30 30" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px] absolute left-[13px] top-[11px]"
            >
              <path 
                d="M14.9999 17.2597C15.7051 17.2597 16.298 17.5 16.7786 17.9806C17.2595 18.4615 17.4999 19.0545 17.4999 19.7597C17.4999 20.4647 17.2595 21.0576 16.7786 21.5384C16.298 22.0193 15.7051 22.2597 14.9999 22.2597C14.2947 22.2597 13.7018 22.0193 13.2211 21.5384C12.7403 21.0576 12.4999 20.4647 12.4999 19.7597C12.4999 19.0545 12.7403 18.4615 13.2211 17.9806C13.7018 17.5 14.2947 17.2597 14.9999 17.2597ZM22.9568 13.2694C23.512 13.2694 23.9873 13.4671 24.3827 13.8625C24.7781 14.2579 24.9758 14.7332 24.9758 15.2884V24.2306C24.9758 24.786 24.7781 25.2615 24.3827 25.6569C23.9873 26.0523 23.512 26.25 22.9568 26.25H7.01927C6.46385 26.25 5.98843 26.0523 5.59302 25.6569C5.1976 25.2615 4.99989 24.786 4.99989 24.2306V15.2884C4.99989 14.7332 5.1976 14.2579 5.59302 13.8625C5.98843 13.4671 6.46385 13.2694 7.01927 13.2694H22.9568ZM21.7068 14.5194H8.26927C8.26927 15.0785 8.07145 15.5549 7.67583 15.9484C7.28041 16.3418 6.8051 16.5384 6.24989 16.5384V22.9806C6.80927 22.9806 7.28562 23.1784 7.67895 23.5741C8.07249 23.9695 8.26927 24.4448 8.26927 25H21.7068C21.7068 24.4406 21.9045 23.9643 22.2999 23.5709C22.6953 23.1774 23.1706 22.9806 23.7258 22.9806V16.5384C23.1665 16.5384 22.6901 16.3407 22.2968 15.9453C21.9034 15.5499 21.7068 15.0746 21.7068 14.5194ZM15.6249 6.09625L17.8318 8.30281C17.9486 8.4199 18.088 8.47844 18.2499 8.47844C18.4118 8.47844 18.5511 8.4199 18.668 8.30281C18.7851 8.18594 18.8436 8.04115 18.8436 7.86844C18.8436 7.69594 18.7851 7.55386 18.668 7.44219L15.6908 4.465C15.5765 4.35042 15.4612 4.27115 15.3452 4.22719C15.2294 4.18302 15.1052 4.16094 14.9727 4.16094C14.8402 4.16094 14.7171 4.18302 14.6033 4.22719C14.4896 4.27115 14.3754 4.35042 14.2608 4.465L11.2836 7.44219C11.1666 7.55386 11.108 7.69594 11.108 7.86844C11.108 8.04115 11.1666 8.18594 11.2836 8.30281C11.4005 8.4199 11.5452 8.47844 11.7177 8.47844C11.8904 8.47844 12.0326 8.4199 12.1443 8.30281L14.3508 6.09625V10.4328C14.3508 10.6099 14.4108 10.7583 14.5308 10.8781C14.6508 10.9979 14.7995 11.0578 14.9768 11.0578C15.1541 11.0578 15.3064 10.9979 15.4336 10.8781C15.5611 10.7583 15.6249 10.6099 15.6249 10.4328V6.09625Z" 
                fill="#2D4164"
              />
            </svg>
          </div>
        </div>
          </div>
        </LiquidGlass>
      </div>
    </section>
  );
};
