import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useSWR from 'swr';

import OpenCard from './components/OpenCard';
import swrAuthFetcher from '../../api/swrAuthFetcher';
import { accessTokenState } from '../../states';

function AutoOpenImage({ setSool }: { setSool: Function }) {
  const [accessToken] = useRecoilState(accessTokenState);

  const { data, error } = useSWR(
    accessToken ? ['most-ordered-sool', accessToken] : null,
    swrAuthFetcher,
    {
      suspense: true,
    }
  );

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
    setTimeout(() => setSool(() => productName), 2500);
  }, []);

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
