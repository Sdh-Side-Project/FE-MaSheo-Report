import getSwrAuthResult from '../../utils/getSwrAuthResult';
import { useState } from 'react';
import Layout from '../../components/layout';

const DamhwaDeliveryContainer = () => {
  const { data, error } = getSwrAuthResult('direct-purchase');

  if (error || !data) {
    return <></>;
  }

  const { directPurchase } = data;

  return (
    <Layout
      firstLine={'올해 이용한'}
      keyword={'담화배송 횟수'}
      closingLine={'는?'}
      footerMessage={`내년 담화배송도 잘 부탁해요!`}
      footerImgUrl={'/images/layout/hyeon.png'}
      footerImgName="현겸"
    >
      <div className="">
        <div className="my-[30%] flex items-center justify-center">
          <div className="flex items-center justify-center w-[250px] h-[250px] bg-[#00dc92] rounded-full animate-custom-pulse">
            <svg
              width="10em"
              height="7em"
              viewBox="0 -2 25 25"
              className="bi bi-play-fill"
              fill="currentColor"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="text-white"
              >
                {directPurchase[0].orderCount}회
              </text>
            </svg>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DamhwaDeliveryContainer;
