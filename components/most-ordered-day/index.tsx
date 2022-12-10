import React, { useEffect, useState } from 'react';

import getSwrAuthResult from '../../utils/getSwrAuthResult';
import Layout from '../layout';

interface WEEK_DESCRIPTION_TYPE {
  [key: string]: string;
}

const WEEK_DESCRIPTION: WEEK_DESCRIPTION_TYPE = {
  월: '월요일은 꿀꿀하니 술마시기 딱이죠~!',
  화: '화장실 가는 척하면서 집가고 싶은 화요일 술 한잔 딱이죠~! ',
  수: '수틀리면 사직서 내고 싶은 수요일에 한 잔 너무 조타',
  목: '금요일인 줄 알고 있다가 빡쳤던 목요일, 그래도 금요일을 바라보며 한 잔 해야죠~!',
  금: '월요일의 나에게 토스후 만끽하는 금요일의 해방감 그 느낌 아니까~!',
  토: '나갈까 말까 고민하다가 결국 아무것도 안하는 토요일 그럴 때 혼술 기가 막히죠~!',
  일: '주말인데 괜히 심란한 일요일 그 꿀꿀함을 술로 달래셨군요 ? 진정한 술꾼입니다',
};

const WEEK_DAYS = [
  {
    id: 1,
    KO: '월',
    EN: 'MON',
    value: '월요일은 꿀꿀하니 술마시기 딱이죠~!',
  },
  {
    id: 2,
    KO: '화',
    EN: 'TUE',
    value: '화장실 가는 척하면서 집가고 싶은 화요일 술 한잔 딱이죠~! ',
  },
  {
    id: 3,
    KO: '수',
    EN: 'WED',
    value: '수틀리면 사직서 내고 싶은 수요일에 한 잔 너무 조타',
  },
  {
    id: 4,
    KO: '목',
    EN: 'THU',
    value: '금요일인 줄 알고 있다가 빡쳤던 목요일 그래도 금요일을 바라보며 한 잔 해야죠~!',
  },
  {
    id: 5,
    KO: '금',
    EN: 'FRI',
    value:
      '모든 일이 잘못 되가지만 월요일의 나에게 토스후 만끽하는 금요일의 해방감 그 느낌 아니까~!',
  },
  {
    id: 6,
    KO: '토',
    EN: 'SAT',
    value: '나갈까 말까 고민하다가 결국 아무것도 안하는 토요일 그럴 때 혼술 기가 막히죠~!',
  },
  {
    id: 7,
    KO: '일',
    EN: 'SUN',
    value: '주말인데 괜히 심란한 일요일 그 꿀꿀함을 술로 달래셨군요 ? 진정한 술꾼입니다',
  },
];

const MostOrderedDayComponent = () => {
  const { data, error } = getSwrAuthResult('most-ordered-day');

  if (error || !data?.MostOrderedDay) {
    return <></>;
  }

  const { MostOrderedDay } = data;

  const [mostOrderedDay, setMostOrderdedDay] = useState({
    day: '',
    count: '',
    value: '',
  });

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementsByClassName('day-cards');
      let n = 0;
      const interval = setInterval(() => {
        element[n]?.classList?.add('animate-rotate-effect');
        n = n + 1;

        if (n >= 7) {
          clearInterval(interval);
        }
      }, 400);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setMostOrderdedDay({
        ...MostOrderedDay,
        value: WEEK_DESCRIPTION[MostOrderedDay.day[0]],
      });
    }, 3900);
  }, []);

  return (
    <Layout
      user={'개발팀'}
      firstLine={'가장 많이'}
      keyword={'주문한 요일'}
      closingLine={'은?'}
      footerMessage={mostOrderedDay.value || '취향을 찾는 중 입니다'}
      footerImgUrl={'/images/layout/byeongsoo.png'}
      footerImgName="병수"
    >
      <div className="grid grid-cols-4 grid-rows-2">
        {WEEK_DAYS.map((day) => (
          <div
            className={`day-cards h-[100px] mr-[15px] text-center opacity-0 mb-5 rounded-lg`}
            key={day.id}
          >
            <div
              className={`${
                mostOrderedDay.day[0] === day.KO ? 'bg-pink-400 animate-bounce' : 'bg-white'
              } rounded-lg shadow-xl h-full`}
            >
              <div className="w-[60px] h-full flex-col flex justify-center items-center">
                <div
                  className={`${
                    mostOrderedDay.day[0] === day.KO ? 'text-white' : 'text-pink-300'
                  } text-[10px] font-medium`}
                >
                  {day.EN}
                </div>
                <div
                  className={`${
                    mostOrderedDay.day[0] === day.KO ? 'text-white' : 'text-pink-400'
                  }  text-[25px] font-bold`}
                >
                  {day.KO}
                </div>
                {mostOrderedDay.day[0] === day.KO && (
                  <div className="text-white text-[10px]">{mostOrderedDay.count}회</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default MostOrderedDayComponent;
