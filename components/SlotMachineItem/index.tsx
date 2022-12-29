import React, { useEffect } from 'react';

import getSwrAuthResult from '../../utils/getSwrAuthResult';

const soolCategoryImages = [
  { type: '탁주', url: '/images/soolCategories/takju.png' },
  { type: '청주', url: '/images/soolCategories/cheongju.png' },
  { type: '와인', url: '/images/soolCategories/gwashilju.png' },
  { type: '소주', url: '/images/soolCategories/jeungryuju.png' },
  { type: '선물', url: '/images/soolCategories/gift.png' },
];

function SlotImage(src: string, idx: number) {
  return (
    <>
      <img
        key={`slot-image-${idx}`}
        className="absolute top-0 left-0 w-64 h-64 bg-white tranlsate-slot"
        src={src}
        alt="img"
      />
      <style jsx>
        {`
          .tranlsate-slot {
            transform: rotateX(${idx * 72}deg) translateZ(175px);
          }
        `}
      </style>
    </>
  );
}

function SlotMachineItem({ setSoolType }: { setSoolType: Function }) {
  const { data, error } = getSwrAuthResult('most-ordered-sool-type');

  if (error || !data?.soolType) {
    return <></>;
  }

  const { soolType } = data;

  useEffect(() => {
    if (soolType) {
      setSoolType(() => '');
    }
    setTimeout(() => setSoolType(() => soolType), 5000);
  }, []);

  const getSortedCategoryImages = (sourceArr: { type: string; url: string }[]) => {
    if (!soolType) {
      return [];
    }
    const targetIndex = sourceArr.findIndex(({ type }) => type === soolType);
    const targetArr = sourceArr.filter(({ type }) => type !== soolType);
    const sortedArr = targetArr.sort(() => Math.random() - 0.5);
    return [sourceArr[targetIndex], ...sortedArr];
  };

  return (
    <>
      <div className="h-[50vh] flex items-center">
        <div className="relative w-64 h-64 overflow-hidden rounded-lg">
          <div className="absolute top-0 left-0 w-64 h-64 m-0 inner-wrapper animate-rotate">
            {getSortedCategoryImages(soolCategoryImages).map(({ url }, idx: number) =>
              SlotImage(url, idx)
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .inner-wrapper {
            transform-style: preserve-3d;
            transform-origin: 50% 50%;
            // transform: rotateY(45deg);
          }
        `}
      </style>
    </>
  );
}

export default SlotMachineItem;
