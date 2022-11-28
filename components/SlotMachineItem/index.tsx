import React from 'react';

const soolCategoryImages: string[] = [
  '/images/soolCategories/takju.png',
  '/images/soolCategories/cheongju.png',
  '/images/soolCategories/gwashilju.png',
  '/images/soolCategories/jeungryuju.png',
  '/images/soolCategories/gift.png',
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

function SlotMachineItem() {
  return (
    <>
      <div className="relative w-64 h-64 overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 w-64 h-64 m-0 inner-wrapper animate-rotate">
          {soolCategoryImages.map((src: string, idx: number) => SlotImage(src, idx))}
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
