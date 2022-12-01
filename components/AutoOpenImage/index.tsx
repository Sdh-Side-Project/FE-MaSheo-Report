import React from 'react';
import OpenCard from './components/OpenCard';

interface types {
  imgUrl: string;
}

function AutoOpenImage({ imgUrl }: types) {
  return (
    <div className="w-full h-full p-2">
      <div className="relative w-full h-full">
        <div className="absolute z-20 grid w-full h-full grid-cols-5">
          {Array.from({ length: 25 })
            .map((v, i) => i + 1)
            .sort(() => Math.random() - 0.5)
            .map((v) => (
              <OpenCard key={`open-card-${v}`} idx={v} />
            ))}
        </div>
        <img className="z-10 w-full h-full absoulte" src={imgUrl} alt="" />
      </div>
    </div>
  );
}

export default AutoOpenImage;
