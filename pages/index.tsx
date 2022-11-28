import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const FROM_ZERO_TO_TEN = Array.from({ length: 10 }, (v, i) => i + 1);

  return (
    <div className="h-screen bg-[url('/images/bg-image.jpeg')] bg-cover animate-bg-ani">
      <div className="flex flex-col items-center justify-around h-full px-10 py-20 mx-auto">
        <section className="absolute top-0 left-0 w-full h-full">
          {FROM_ZERO_TO_TEN.map((num: number) => {
            let location = 'top-[50%] left-[50%]';
            if (num === 1) {
              location = 'top-0 right-0 left-[initial] transition duration-300 delay-2000';
            }
            if (num === 2) {
              location = 'top-[20px] right-[150px] left-[initial] transition delay-500';
            }
            if (num === 3) {
              location = 'top-[80px] right-0 left-[initial] delay-[0.4s] duration-[2s]';
            }
            if (num === 4) {
              location = 'top-0 right-[300px] left-[initial] delay-[0.6s] duration-[3s]';
            }
            // if (num === 5) {
            //   location = 'top-0 right-[400px] left-[initial] delay-[0.8s] duration-[2.5s]';
            // }
            // if (num === 6) {
            //   location = 'top-0 right-[600px] left-[initial] delay-[1s] duration-[3s]';
            // }
            // if (num === 7) {
            //   location = 'top-[300px] right-[0px] left-[initial] delay-[1.2s] duration-[1.75s]';
            // }
            // if (num === 8) {
            //   location = 'top-[0px] right-[700px] left-[initial] delay-[1.4s] duration-[1.25s]';
            // }
            // if (num === 9) {
            //   location = 'top-[0px] right-[1000px] left-[initial] delay-[0.75s] duration-[2.25s]';
            // }
            // if (num === 10) {
            //   location = 'top-[0px] right-[450px] left-[initial] delay-[2.75s] duration-[2.25s]';
            // }
            return (
              <span
                className={`absolute ${location} w-[4px] h-[4px] bg-white rounded-[50%] shadow-intro before:content-[''] before:absolute before:top-[50%] before:tranlate-y-[-50%] before:w-[300px] before:h-[1px] before:bg-[linear-gradient(90deg,#fff,transparent)] animate-star-ani`}
                key={num}
              ></span>
            );
          })}
        </section>
        <div>
          <div>
            <div className="mb-3 text-2xl text-white">2022</div>
            <div className="flex mb-3 text-2xl ml-9">
              {/* <div className="mr-1 font-medium text-white underline underline-offset-4">개발팀</div>
              <div className="text-white">님의</div> */}
            </div>
            <div className="flex mb-3 font-bold text-white text-7xl ju">
              <div className="text-gray-300">술</div>
              <div className="text-primary">담</div>
              <div className="text-blue-300">화</div>
            </div>
            <div className="mt-5 text-4xl font-medium text-center text-white">마셔보고서</div>
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
