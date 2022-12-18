import React from 'react';
import Layout from '../../components/layout';
import getSwrAuthResult from '../../utils/getSwrAuthResult';
import Image from 'next/image';
import { useRecoilValue } from 'recoil';
import { userNameState } from '../../states';

export default function index() {
  const { data, error } = getSwrAuthResult('compliment');
  const useName = useRecoilValue(userNameState);

  if (!data || error) {
    return <></>;
  }

  return (
    <Layout
      user={'개발팀'}
      firstLine={'2022년에 받은'}
      keyword={'칭찬'}
      closingLine={'입니다!'}
      footerMessage={`이렇게 많은 칭찬을 받은 ${useName}님은 2022년에 정말 알차게 잘보내셨군요👍`}
      footerImgUrl={'/images/layout/chunhee.png'}
      footerImgName="천희"
    >
      <div className="mt-5 overflow-scroll">
        {data.result[0].map((item: any) => (
          <div className="flex items-center mb-2" key={item.id}>
            <Image src="/icon/person-icon.png" alt="사람 프로필 아이콘" width="25" height="25" />
            <div className="flex items-center">
              <div className="w-0 h-0 border-8 border-transparent border-r-stone-200" />
              <div className="p-1 rounded bg-stone-200">{item.compliment}</div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
