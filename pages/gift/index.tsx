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
  }

  return (
    <Layout>
      <div className="flex items-center justify-center h-full">
        {isGiftOpen ? (
          <img
            src="/images/gift/gift_open.png"
            alt="선물"
          />
        ) : (
          <img
            src="/images/gift/gift_close.png"
            alt="선물"
            className="animate__animated animate__shakeX animate__infinite animate__slower cursor-pointer"
            onClick={handleClickGift}
          />
        )}
      </div>
    </Layout>
  );
}
