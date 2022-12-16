import React, { useEffect, useRef, useState } from 'react';
import Layout from '../../components/layout';
import 'animate.css';
import getSwrAuthResult from '../../utils/getSwrAuthResult';

export default function index() {
  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [footerMessage, setFooterMessage] = useState(
    '올 한해 나는 선물을 얼마나 했을까요? 선물 꾸러미를 풀어봅시다!'
  );
  const countRef = useRef(0);
  const { data, error } = getSwrAuthResult('gift');

  if (!data || error) {
    return <></>;
  }

  const { giftPurchaseRate } = data.gift;

  const handleClickGift = () => {
    setIsGiftOpen(() => true);
  };

  const getFooterMessage = () => {
    if (isGiftOpen) {
      if (giftPurchaseRate >= 0) {
        setFooterMessage(
          '선물하기 보다는 자신에게 많이 사셨나봐요. 술은 자기가 먹는게 이득이죠 :D'
        );
      }
      if (giftPurchaseRate >= 30) {
        setFooterMessage(
          '선물도 하고 나도 마시고~ 주위 사람 뿐만 아니라 나까지 챙기는 마음 좋습니다! :D'
        );
      }
      if (giftPurchaseRate >= 60) {
        setFooterMessage(
          '선물을 많이 하셨네요, 산타 할아버지가 직장을 잃겠어요. 고마운 마음씨 감사합니다! :D'
        );
      }
    }
  };

  useEffect(() => {
    getFooterMessage();
  }, [isGiftOpen]);

  useEffect(() => {
    if (isGiftOpen) {
      const loop = setInterval(() => {
        countRef.current += 1;
        setCount(countRef.current);
        if (countRef.current >= giftPurchaseRate) {
          clearInterval(loop);
        }
      }, 25);
    }
  }, [isGiftOpen]);

  return (
    <Layout
      firstLine={'2022년 주문 중'}
      keyword={'선물하기'}
      closingLine={'의 비율은?'}
      footerMessage={footerMessage}
      footerImgUrl={'/images/layout/chunhee.png'}
      footerImgName="천희"
    >
      <div className="flex flex-col items-center justify-center my-[30%]">
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
