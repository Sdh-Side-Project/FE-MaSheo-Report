import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WEEK_DAYS = [
  {
    id: 1,
    KO: '월',
    EN: 'MON',
  },
  {
    id: 2,
    KO: '화',
    EN: 'TUE',
  },
  {
    id: 3,
    KO: '수',
    EN: 'WED',
  },
  {
    id: 4,
    KO: '목',
    EN: 'THU',
  },
  {
    id: 5,
    KO: '금',
    EN: 'FRI',
  },
  {
    id: 6,
    KO: '토',
    EN: 'SAT',
  },
  {
    id: 7,
    KO: '일',
    EN: 'SUN',
  },
];

const MostOrderedDayComponent = () => {
  const [mostOrderedDay, setMostOrderdedDay] = useState({
    day: '',
    count: '',
  });

  useEffect(() => {
    const element = document.getElementsByClassName('day-cards');

    setTimeout(() => {
      let n = 0;
      const interval = setInterval(() => {
        element[n].classList.add('animate-rotate-effect');
        n = n + 1;

        if (n >= 7) {
          clearInterval(interval);
        }
      }, 400);
    }, 500);
  }, []);

  useEffect(() => {
    const getMostOrderedDay = async () => {
      try {
        const response = await axios(
          'http://api-side.sooldamhwa.com/masheo/most-ordered-day?userId=120'
        );
        setTimeout(() => {
          setMostOrderdedDay(response.data.data.MostOrderedDay);
        }, 3900);
      } catch (error) {
        console.error(error);
      }
    };
    getMostOrderedDay();
  }, []);

  return (
    <div className="flex flex-wrap">
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
  );
};

export default MostOrderedDayComponent;
