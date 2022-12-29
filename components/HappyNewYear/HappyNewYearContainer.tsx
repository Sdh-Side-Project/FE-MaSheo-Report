import React, { useEffect } from 'react';
import FireWorks from './FireWorks';
import HappyNewYear from './HappyNewYear';
import BottomNavigation from '../BottomNavigation/index';
import { useRouter } from 'next/router';

const HappyNewYearContainer = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/ending-credit');
    }, 10000);
  }, []);

  return (
    <div className="w-full max-w-md min-h-screen mx-auto p-5 bg-[url('/images/bg-image.jpeg')]">
      <FireWorks />
      <HappyNewYear />
      <BottomNavigation />
    </div>
  );
};

export default HappyNewYearContainer;
