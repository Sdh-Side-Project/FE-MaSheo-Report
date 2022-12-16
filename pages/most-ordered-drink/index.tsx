import React, { Suspense } from 'react';
import { useRecoilState } from 'recoil';

import AutoOpenImage from '../../components/AutoOpenImage';
import Layout from '../../components/layout';
import { soolState } from '../../states';

function index() {
  const [sool, setSool] = useRecoilState(soolState);

  return (
    <Layout
      firstLine={'가장 많이'}
      keyword={'주문한 전통주'}
      closingLine={'는?'}
      footerMessage={`${sool ? `${sool}을 사랑하시는군요?` : '알아보는중...'}`}
      footerImgUrl={'/images/layout/jihyun.png'}
      footerImgName="지현"
    >
      <Suspense fallback={<div>loading...</div>}>
        <AutoOpenImage setSool={setSool} />
      </Suspense>
    </Layout>
  );
}

export default index;
