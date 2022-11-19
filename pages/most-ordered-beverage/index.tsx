import React from 'react';
import Layout from '../../components/layout';
import SlotMachineItem from '../../components/SlotMachineItem';

function index() {
  return (
    <Layout>
      <div className="flex items-center justify-center w-full h-full">
        <SlotMachineItem />
      </div>
    </Layout>
  );
}

export default index;
