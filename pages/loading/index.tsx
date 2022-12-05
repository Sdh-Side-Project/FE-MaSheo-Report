import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Loading() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/most-ordered-beverage');
    }, 3000);
  }, []);

  return (
    <div className="h-screen bg-[url('/images/bg-image.jpeg')]">
      <div className="flex flex-col justify-center h-full px-10 py-20 mx-auto">
        <div className="mb-4 text-5xl font-bold text-white">2022년</div>
        <div className="flex mb-6 text-5xl font-bold text-white">
          <div className="animate-wiggle text-primary">자료 분석중</div>
          <div className="animate-[pulse_1s_infinite]">.</div>
          <div className="animate-[pulse_2s_infinite]">.</div>
          <div className="animate-[pulse_3s_infinite]">.</div>
          <div className="animate-[pulse_4s_infinite]">.</div>
        </div>
        <div className="text-3xl font-normal text-white">1월부터 11월 까지</div>
      </div>
    </div>
  );
}
