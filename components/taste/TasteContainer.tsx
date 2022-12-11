import React, { useEffect, useState } from 'react';

import getSwrAuthResult from '../../utils/getSwrAuthResult';
import Layout from '../../components/layout';

interface LikeTasteListType {
  [key: string]: number;
}

interface TASTE_RESULT_DESCRIPTION_TYPE {
  [key: string]: string;
}

const TASTE_RESULT_DESCRIPTION: TASTE_RESULT_DESCRIPTION_TYPE = {
  바디감: '맛도 맛이지만 입안에서 느껴지는 질감에 더욱 집중하시는 타입이시군요!',
  산미: '맛과 향이 어우러져 신선한 풍미가 느껴지는 신맛을 가장 즐기시는군요!',
  담백: '깔끔하고 부드러움을 가진 담백한 맛을 가장 즐기시는군요!',
  단맛: '기분전환과 스트레스 해소에는 달달한 술만한 게 없죠!',
  탄산: '톡 쏘는 감각에서 느껴지는 개운함을 즐기기엔 탄산이 최고죠!',
};

const TasteContainer = () => {
  const { data, error } = getSwrAuthResult('like-taste');
  const [firstRankedTaste, setFirstRankedTaste] = useState('');

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
      setFirstRankedTaste(TASTE_RESULT_DESCRIPTION[Object.keys(rankedTasteList)[0]]);
    }, 3900);
  }, []);

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
    <Layout
      user={'개발팀'}
      firstLine={'주문한'}
      keyword={'맛의 순위'}
      closingLine={'는?'}
      footerMessage={firstRankedTaste || '과연..? 😮'}
      footerImgUrl={'/images/layout/jungwook.png'}
      footerImgName="정욱"
    >
      <ul className="mt-6 [&>*:nth-child(odd)]:bg-pink-400 [&>*:nth-child(even)]:bg-pink-500">
        {Object.keys(rankedTasteList).map((key, i) => {
          return (
            <li
              key={`taste-${i}`}
              className="lists hidden justify-around items-center w-full h-[6.5vh] mb-5 rounded-lg text-[1.5rem]"
            >
              <div className="flex items-center w-10/12 text-pink-700 bg-white rounded-lg justify-evenly h-5/6">
                <div className="font-bold">{i + 1}위</div>
                <div className="font-bold">{key}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default TasteContainer;
