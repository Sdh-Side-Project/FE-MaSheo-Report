import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/layout';
import 'animate.css';
import { GiftWrapper, GiftWrapper2 } from '../../components/gift/GiftWrapper';

const mockData = {
  success: true,
  data: {
    gift: {
      totalOrderCount: '139',
      generalPurchaseCount: '132',
      giftPurchaseCount: '7',
      giftPurchaseRate: 50,
    },
  },
};

export default function index() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClickGift = () => {
    setIsGiftOpen(() => true);
  };

  useEffect(() => {
    if (isGiftOpen) {
      const loop = setInterval(() => {
        countRef.current += 1;
        setCount(countRef.current);
        if (countRef.current >= mockData.data.gift.giftPurchaseRate) {
          clearInterval(loop);
        }
      }, 25);
    }
  }, [isGiftOpen]);

  return (
    <Layout
      user={'박천희'}
      firstLine={'2022년 주문 중'}
      keyword={'선물하기'}
      closingLine={'의 비율은?'}
      footerMessage={'여기다가 메시지를 쓰면 됩니다!'}
      footerImgUrl={'/images/layout/chunhee.png'}
      footerImgName="천희"
    >
      <div className="flex flex-col items-center justify-center h-full">
        {isGiftOpen ? (
          <>
            <div>
              <img src="/images/gift/gift_open.png" alt="선물" />
            </div>
            <div className="w-full">
              <div className="w-full bg-gray-200 rounded-full">
                <div
                  className="bg-red-600 text-xs rounded-full font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
                  style={{ width: `${count}%` }}
                >
                  {count}%
                </div>
              </div>
            </div>
          </>
        ) : (
          <img
            src="/images/gift/gift_close.png"
            alt="선물"
            className="cursor-pointer animate__animated animate__shakeX animate__infinite animate__slower"
            onClick={handleClickGift}
          />
        )}
      </div>
    </Layout>
  );
}
