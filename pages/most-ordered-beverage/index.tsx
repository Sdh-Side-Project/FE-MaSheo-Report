import React, { Suspense } from 'react';
import { useRecoilState } from 'recoil';

import Layout from '../../components/layout';
import SlotMachineItem from '../../components/SlotMachineItem';
import { soolTypeState } from '../../states';

function index() {
  const [soolType, setSoolType] = useRecoilState(soolTypeState);

  return (
    <Layout
      firstLine={'가장 많이'}
      keyword={'주문한 주종'}
      closingLine={'은?'}
      footerMessage={`${soolType ? `${soolType}를 선호하시는걸로..?` : '취향 찾는중...'}`}
      footerImgUrl={'/images/layout/yungi.png'}
      footerImgName="윤기"
    >
      <div className="flex items-center justify-center w-full h-full">
        <Suspense fallback={<div>loading...</div>}>
          <SlotMachineItem setSoolType={setSoolType} />
        </Suspense>
      </div>
    </Layout>
  );
}

export default index;
