interface types {
  children: React.ReactNode
}

export default function Layout({ children }: types) {
  return (
    <div className="w-96 h-screen mx-auto py-5 px-10 bg-[url('/images/bg-image.jpeg')]">
      <div className="text-white text-center mb-3 font-bold">2022 술담화 마셔보고서</div>
      <div className="bg-[url('/images/bg-content-image.jpg')] h-[90%] p-5">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-[1.2rem] font-bold mb-1 text-black">개발팀님이</div>
            <div className="text-3xl font-extrabold mb-1 text-black">가장 많이</div>
            <div className="text-3xl font-extrabold mb-1 flex">
              <div className="mr-[5px]">주문한</div>
              <div className="relative">
                <div>음식</div>
                <div className="absolute w-full top-[23px] h-[12px]  bg-pink-500 opacity-40 rounded"></div>
              </div>
              <div className="">은?</div>
            </div>
          </div>
          <div>{children}</div>
          <div className="relative w-full h-[60px] p-3 bg-gradient-to-r from-stone-200 via-stone-50 to-white rounded-md	">
            <div className="mr-[35px] text-sm font-semibold">
              한 해 동안 5회 이상 먹은 카테고리는 뱃지를 얻을 수 있어요!
            </div>
            <img
              src="/images/memoji2.png"
              width={80}
              height={80}
              className="absolute top-[-10px] right-[-30px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
