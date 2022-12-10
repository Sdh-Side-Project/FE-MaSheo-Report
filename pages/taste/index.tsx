import React from 'react';
import Layout from '../../components/layout';
import TasteContainer from '../../components/taste/TasteContainer';

const Taste = () => {
  return (
    <Layout
      user={'개발팀'}
      firstLine={'주문한'}
      keyword={'맛의 순위'}
      closingLine={'는?'}
      footerMessage={``}
      footerImgUrl={'/images/layout/jungwook.png'}
      footerImgName="정욱"
    >
      <TasteContainer />
    </Layout>
  );
};

export default Taste;
