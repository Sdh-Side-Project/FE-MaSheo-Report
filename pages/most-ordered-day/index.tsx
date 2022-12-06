import React from 'react';
import MostOrderedDayComponent from '../../components/most-ordered-day';
import Layout from '../../components/layout';

const MostOrderedDay = () => {
  return (
    <Layout
      user={'개발팀'}
      firstLine={'가장 많이'}
      keyword={'주문한 요일'}
      closingLine={'은?'}
      footerMessage={'여기다가 메시지를 쓰면 됩니다!'}
      footerImgUrl={'/images/layout/byeongsoo.png'}
      footerImgName="병수"
    >
      <MostOrderedDayComponent />
    </Layout>
  );
};

export default MostOrderedDay;
