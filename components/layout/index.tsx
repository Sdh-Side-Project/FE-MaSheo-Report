interface types {
  children: React.ReactNode;
}

export default function Layout({ children }: types) {
  return (
    <div className="w-full max-w-xl min-h-screen mx-auto py-5 px-10 bg-[url('/images/bg-image.jpeg')]">
      <div className="mb-3 font-bold text-center text-white">2022 술담화 마셔보고서</div>
      <div className="bg-[url('/images/bg-content-image.jpg')] p-5 rounded-lg">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-[1.2rem] font-bold mb-1 text-black">개발팀님이</div>
            <div className="mb-1 text-3xl font-extrabold text-black">가장 많이</div>
            <div className="flex mb-1 text-3xl font-extrabold">
              <div className="mr-[5px]">주문한</div>
              <div className="relative">
                <div>음식</div>
                <div className="absolute w-full top-[23px] h-[12px]  bg-pink-500 opacity-40 rounded"></div>
              </div>
              <div className="">은?</div>
            </div>
          </div>
          <div className="h-[50vh]">{children}</div>
          <div className="relative w-full h-full p-3 rounded-md bg-gradient-to-r from-stone-200 via-stone-50 to-white ">
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
  );
}
