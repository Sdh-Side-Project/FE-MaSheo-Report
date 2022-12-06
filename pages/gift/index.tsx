import React, { useState } from 'react';
import Layout from '../../components/layout';
import 'animate.css';

const mockData = {
  success: true,
  data: {
    gift: {
      totalOrderCount: '139',
      generalPurchaseCount: '132',
      giftPurchaseCount: '7',
      giftPurchaseRate: '5',
    },
  },
};

export default function index() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const handleClickGift = () => {
    setIsGiftOpen(() => true);
  };

  return (
    <Layout
      user={'개발팀'}
      firstLine={'주문 대비'}
      keyword={'작성한 리뷰 비율'}
      closingLine={'은?'}
      footerMessage={``}
      footerImgUrl={''} // '/images/layout/chunhee.png' 천희
      footerImgName="천희"
    >
      <div className="flex items-center justify-center h-full">
        {isGiftOpen ? (
          <img src="/images/gift/gift_open.png" alt="선물" />
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
