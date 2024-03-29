import React, { createContext, useContext, useState } from 'react';

// Context 생성
const WalletContext = createContext();

// Context Provider 컴포넌트
export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(null);

  // walletAddress와 setWalletAddress를 value로 전달
  return (
    <WalletContext.Provider value={{ walletAddress, setWalletAddress }}>
      {children}
    </WalletContext.Provider>
  );
};

// Hook으로 Context 사용하기 용이하게 만들기
export const useWallet = () => useContext(WalletContext);
