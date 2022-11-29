import React from 'react';
import useSWR from 'swr';

const soolCategoryImages = [
  { type: '탁주', url: '/images/soolCategories/takju.png' },
  { type: '청주', url: '/images/soolCategories/cheongju.png' },
  { type: '와인', url: '/images/soolCategories/gwashilju.png' },
  { type: '소주', url: '/images/soolCategories/jeungryuju.png' },
  { type: '선물', url: '/images/soolCategories/gift.png' },
];

const fetcher = async (url: any) => {
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
};

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

function SlotMachineItem() {
  const {
    data: { soolType },
    error,
  } = useSWR('http://api-side.sooldamhwa.com/masheo/most-ordered-sool-type?userId=120', fetcher, {
    suspense: true,
  });

  if (!soolType) {
    return <></>;
  }

  const getSortedCategoryImages = (sourceArr: { type: string; url: string }[]) => {
    const targetIndex = sourceArr.findIndex(({ type }) => type === soolType);
    const targetArr = sourceArr.filter(({ type }) => type !== soolType);
    const sortedArr = targetArr.sort(() => Math.random() - 0.5);
    return [sourceArr[targetIndex], ...sortedArr];
  };

  return (
    <>
      <div className="relative w-64 h-64 overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 w-64 h-64 m-0 inner-wrapper animate-rotate">
          {getSortedCategoryImages(soolCategoryImages).map(({ url }, idx: number) =>
            SlotImage(url, idx)
          )}
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
