import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const number = 5;
  const STARS_ARRAY = Array.from({ length: number }, (v, i) => i + 1);

  useEffect(() => {
    const element = document.getElementsByClassName('star');

    if (!element) return;

    setTimeout(() => {
      let n = 0;
      const interval = setInterval(() => {
        element[n]?.classList.remove('hidden');
        element[n]?.classList.add('animate-star-ani');
        n = n + 1;

        if (n >= number) {
          setTimeout(() => {
            for (let i = 0; i < element.length; i++) {
              element[i].classList.add('hidden');
            }
          }, 2000);

          clearInterval(interval);
        }
      }, 1000);
    }, 100);
  }, []);

  useEffect(() => {
    const element = document.getElementsByClassName('content');
    const titleElement = document.getElementsByClassName('title');

    setTimeout(() => {
      if (!element) return;

      element[0].classList.remove('hidden');
      titleElement[0].classList.add('animate-content-ani');
    }, 5000);
  }, []);

  return (
    <div className="h-screen bg-[url('/images/bg-image.jpeg')] bg-cover animate-bg-ani">
      <div className="flex flex-col items-center justify-around h-full px-10 py-20 mx-auto">
        <section className="absolute top-0 left-0 w-full h-full">
          {STARS_ARRAY.map((num: number) => {
            let location = '';
            if (num === 1) {
              location = 'top-[150px] right-[250px]';
            }
            if (num === 2) {
              location = 'top-[250px] right-[250px]';
            }
            if (num === 3) {
              location = 'top-[500px] right-[300px]';
            }
            if (num === 4) {
              location = 'top-[300px] right-[300px]';
            }
            if (num === 5) {
              location = 'top-[500px] right-[300px]';
            }
            return (
              <span
                className={`star absolute hidden ${location} w-[4px] h-[4px] bg-white rounded-[50%] shadow-intro before:content-[''] before:absolute before:top-[50%] before:tranlate-y-[-50%] before:w-[300px] before:h-[1px] before:bg-[linear-gradient(90deg,#fff,transparent)] `}
                key={num}
              ></span>
            );
          })}
        </section>
        <div className="hidden content">
          <div>
            <div className="mb-3 text-2xl text-white animate-up-ani">2022</div>
            <div className="flex mb-3 text-2 xl ml-9">
              {/* <div className="mr-1 font-medium text-white underline underline-offset-4">개발팀</div>
              <div className="text-white">님의</div> */}
            </div>
            <div className="flex mb-3 font-bold text-white text-7xl animate-content-ani title">
              <div className="text-gray-300">술</div>
              <div className="text-primary">담</div>
              <div className="text-blue-300">화</div>
            </div>
            <div className="mt-5 text-4xl font-medium text-center text-white animate-up-ani">
              마셔보고서
            </div>
          </div>
          <div className="flex justify-center mb-10 animate-pulse">
            <img src="/images/sooldamhwa-logo.png" width={150} height={150} />
          </div>
          <div className="flex justify-end w-full">
            <button
              className="w-24 h-24 text-2xl text-white rounded-full bg-primary animate-bounce"
              onClick={() => router.push('/loading')}
            >
              시작
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
