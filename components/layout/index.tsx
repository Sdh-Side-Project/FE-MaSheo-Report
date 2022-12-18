import React, { useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { userNameState } from '../../states';
import BottomNavigation from '../BottomNavigation';
import { useRouter } from 'next/router';

interface types {
  user?: string;
  firstLine: string;
  keyword: string;
  children: React.ReactNode;
  footerMessage: string;
  closingLine: string;
  footerImgUrl: string;
  footerImgName: string;
}

export default function Layout({
  user,
  firstLine,
  keyword,
  children,
  footerImgUrl = '',
  footerMessage,
  closingLine = '',
  footerImgName = '',
}: types) {
  const useName = useRecoilValue(userNameState);
  const router = useRouter();

  useEffect(() => {
    if (!useName) {
      router.push('/login');
    }
  }, [useName]);
  return (
    <div className="w-full max-w-md min-h-screen mx-auto p-5 bg-[url('/images/bg-image.jpeg')]">
      <div className="mb-3 font-bold text-center text-white">2022 술담화 마셔보고서</div>
      <div className="bg-[url('/images/bg-content-image.jpg')] h-[90%] p-5">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-[1.2rem] font-bold mb-1 text-black">{useName} 님이</div>
            <div className="mb-1 text-3xl font-extrabold text-black">{firstLine}</div>
            <div className="flex mb-1 text-3xl font-extrabold">
              <div className="relative">
                <div>{keyword}</div>
                <div className="absolute w-full top-[23px] h-[12px]  bg-pink-500 opacity-40 rounded"></div>
              </div>
              <div className="">{closingLine}</div>
            </div>
          </div>
          <div className="min-h-[50vh] max-h-[50vh] flex flex-col justify-center">{children}</div>
          <div className="relative w-full h-16 p-3 rounded-md bg-gradient-to-r from-stone-200 via-stone-50 to-white ">
            <div className="mr-[35px] text-sm font-semibold">{footerMessage}</div>
            <div className="absolute top-[-17px] right-[-30px] flex flex-col items-center">
              <img src={footerImgUrl} width={70} height={70} />
              <span className="text-[12px] font-medium mr-[10px]">{`${footerImgName}`}</span>
            </div>
          </div>
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
}
