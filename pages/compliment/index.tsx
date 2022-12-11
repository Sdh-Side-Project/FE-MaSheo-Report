import React from 'react';
import Layout from '../../components/layout';
import getSwrAuthResult from '../../utils/getSwrAuthResult';
import Image from 'next/image';

export default function index() {
  const { data, error } = getSwrAuthResult('compliment');

  if (!data || error) {
    return <></>;
  }

  return (
    <Layout
      user={'개발팀'}
      firstLine={'2022년에 받은'}
      keyword={'칭찬'}
      closingLine={'입니다!'}
      footerMessage={'개발팀님을 응원합니다. 올 한 해 수고 많으셨어요!'}
      footerImgUrl={'/images/layout/chunhee.png'}
      footerImgName="천희"
    >
      <div className="overflow-scroll mt-5">
        {data.result.result[0].map((item: any) => (
          <div className="flex items-center mb-2" key={item.id}>
            <Image src="/icon/person-icon.png" alt="사람 프로필 아이콘" width="25" height="25" />
            <div className="flex items-center">
              <div className="w-0 h-0 border-8 border-transparent border-r-stone-200" />
              <div className="rounded bg-stone-200 p-1">{item.compliment}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
