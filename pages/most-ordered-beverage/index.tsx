import React from 'react';
import Layout from '../../components/layout';
import SlotMachineItem from '../../components/SlotMachineItem';

function index() {
  return (
    <Layout
      user={'개발팀'}
      firstLine={'가장 많이'}
      keyword={'주문한 주종'}
      closingLine={'은?'}
      footerMessage={'여기다가 메시지를 쓰면 됩니다!'}
    >
      <div className="flex items-center justify-center w-full h-full">
        <SlotMachineItem />
      </div>
    </Layout>
  );
}

export default index;
