export default function Loading() {
  return (
    <div className="h-screen bg-[url('/images/bg-image.jpeg')]">
      <div className="mx-auto py-20 px-10 h-full flex flex-col justify-center">
        <div className="text-5xl text-white mb-4 font-bold">2022년</div>
        <div className="text-5xl  text-white mb-6 font-bold flex">
          <div className="animate-wiggle text-primary">자료 분석중</div>
          <div className="animate-[pulse_1s_infinite]">.</div>
          <div className="animate-[pulse_2s_infinite]">.</div>
          <div className="animate-[pulse_3s_infinite]">.</div>
          <div className="animate-[pulse_4s_infinite]">.</div>
        </div>
        <div className="text-3xl text-white font-normal">1월부터 11월 까지</div>
      </div>
    </div>
  )
}
