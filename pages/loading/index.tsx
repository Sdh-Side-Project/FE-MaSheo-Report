
export default function Loading() {

return (
  <div className="h-screen">
    <div className="mx-auto py-20 px-10 w-96 h-full bg-black flex flex-col justify-center">
      <div className="text-5xl text-primary mb-4 font-bold">
        2022년
      </div>
      <div className="text-5xl  text-white mb-6 font-bold flex">
        <div className="animate-wiggle text-primary">자료 분석중</div>
        <div className="animate-pulse">.</div>
        <div className="animate-pulse">.</div>
        <div className="animate-pulse">.</div>
        <div className="animate-pulse">.</div>
      </div>
      <div className="text-3xl text-primary font-normal">
        1월부터 11월 까지
      </div>
    </div>
  </div>
  )
}
