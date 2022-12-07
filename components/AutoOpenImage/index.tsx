import React, { useEffect } from 'react';

import OpenCard from './components/OpenCard';
import getSwrAuthResult from '../../utils/getSwrAuthResult';

const cards = Array.from({ length: 25 })
  .map((v, i) => i + 1)
  .sort(() => Math.random() - 0.5);

function AutoOpenImage({ setSool }: { setSool: Function }) {
  const { data, error } = getSwrAuthResult('most-ordered-sool');

  if (!data || error) {
    return <></>;
  }

  const {
    MostOrderedSool: { thumbnail, productName },
  } = data;

  useEffect(() => {
    if (productName) {
      setSool(() => '');
    }

    setTimeout(() => {
      setSool(() => productName);
    }, 2500);
  }, []);

  return (
    <div className="w-full h-[50vh] p-2">
      <div className="relative w-full h-full">
        <div className="absolute z-20 grid w-full h-full grid-cols-5">
          {cards.map((v) => (
            <OpenCard key={`open-card-${v}`} idx={v} />
          ))}
        </div>
        {thumbnail && (
          <img
            className="z-10 w-full h-full absoulte"
            src={thumbnail?.replace(
              'https://sooldamhwa-static-files.s3.ap-northeast-2.amazonaws.com/admin_contents/origin/',
              'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/'
            )}
            alt="가장 많이 주문한 술 이미지"
          />
        )}
      </div>
    </div>
  );
}

export default AutoOpenImage;
