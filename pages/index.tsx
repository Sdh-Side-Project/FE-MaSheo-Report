import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="h-screen bg-[url('/images/bg-image.jpeg')]">
      <div className="flex flex-col items-center justify-around h-full px-10 py-20 mx-auto">
        <div>
          <div className="mb-3 text-2xl text-white">2022</div>
          {/* <div className="flex mb-3 text-2xl ml-9">
            <div className="mr-1 font-medium text-white underline underline-offset-4">개발팀</div>
            <div className="text-white">님의</div>
          </div> */}
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
            onClick={() => router.push('/login')}
          >
            시작
          </button>
        </div>
      </div>
    </div>
  );
}
