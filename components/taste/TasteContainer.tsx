import React, { useEffect, useState } from 'react';

import getSwrAuthResult from '../../utils/getSwrAuthResult';

interface LikeTasteListType {
  [key: string]: number;
}

const TasteContainer = () => {
  const { data, error } = getSwrAuthResult('like-taste');

  if (error || !data?.likeTaste) {
    return <></>;
  }

  const { likeTaste } = data;

  const [tasteList, setTasteList] = useState<LikeTasteListType>(likeTaste);

  const likeTasteList: LikeTasteListType = {};
  Object.keys(tasteList).forEach((key) => {
    if (key === 'sweetRate') likeTasteList['단맛'] = Number(tasteList[key]);
    if (key === 'acidityRate') likeTasteList['산미'] = Number(tasteList[key]);
    if (key === 'plainRate') likeTasteList['담백'] = Number(tasteList[key]);
    if (key === 'weightRate') likeTasteList['바디감'] = Number(tasteList[key]);
    if (key === 'carbonicRate') likeTasteList['탄산'] = Number(tasteList[key]);
  });

  const rankedTasteList = Object.fromEntries(
    Object.entries(likeTasteList).sort((a, b) => b[1] - a[1])
  );

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName('lists');
      let n = 0;
      const interval = setInterval(() => {
        element[n]?.classList?.remove('hidden');
        element[n]?.classList?.add('flex');
        element[n]?.classList?.add('animate-rotate-effect');
        n = n + 1;

        if (n >= 5) {
          clearInterval(interval);
        }
      }, 400);
    }, 500);
  }, []);

  return (
    <ul className="mt-6 [&>*:nth-child(odd)]:bg-yellow-300 [&>*:nth-child(even)]:bg-sky-400">
      {Object.keys(rankedTasteList).map((key, i) => {
        return (
          <li
            key={`taste-${i}`}
            className="lists hidden justify-around items-center w-full h-[6.5vh] mb-5 rounded-lg text-[1.5rem]"
          >
            <div className="flex items-center w-11/12 bg-white rounded-lg justify-evenly h-4/6">
              <div className="font-semibold">{i + 1}위</div>
              <div className="font-semibold">{key}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TasteContainer;
