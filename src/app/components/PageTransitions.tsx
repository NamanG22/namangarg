'use client';
import { useEffect } from 'react';
import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return <LoadingScreen />;
  return (  
    <>
      {children}
    </>
  );
}
