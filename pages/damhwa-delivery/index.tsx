import React from 'react';
import DamhwaDeliveryContainer from '../../components/DamhwaDelivery/DamhwaDeliveryComponent';
import Layout from '../../components/layout';

const DamhwaDelivery = () => {
  return (
    <Layout
      user={'개발팀'}
      firstLine={'올해 이용한'}
      keyword={'담화배송 횟수'}
      closingLine={'는?'}
      footerMessage={`내년에도 담화배송을 잘 부탁해요!`}
      footerImgUrl={'/images/layout/hyeon.png'}
      footerImgName="현겸"
    >
      <DamhwaDeliveryContainer />
    </Layout>
  );
};

export default DamhwaDelivery;
