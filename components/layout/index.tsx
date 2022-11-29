interface types {
  user: string;
  firstLine: string;
  keyword: string;
  children: React.ReactNode;
  footerMessage: string;
  closingLine: string;
}

export default function Layout({
  user,
  firstLine,
  keyword,
  children,
  footerMessage,
  closingLine = '',
}: types) {
  return (
    <div className="w-96 h-screen mx-auto p-5 bg-[url('/images/bg-image.jpeg')]">
      <div className="mb-3 font-bold text-center text-white">2022 술담화 마셔보고서</div>
      <div className="bg-[url('/images/bg-content-image.jpg')] h-[90%] p-5">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="text-[1.2rem] font-bold mb-1 text-black">{user} 님이</div>
            <div className="mb-1 text-3xl font-extrabold text-black">{firstLine}</div>
            <div className="flex mb-1 text-3xl font-extrabold">
              <div className="relative">
                <div>{keyword}</div>
                <div className="absolute w-full top-[23px] h-[12px]  bg-pink-500 opacity-40 rounded"></div>
              </div>
              <div className="">{closingLine}</div>
            </div>
          </div>
          <div className="h-[50vh]">{children}</div>
          <div className="relative w-full h-full p-3 rounded-md bg-gradient-to-r from-stone-200 via-stone-50 to-white ">
            <div className="mr-[35px] text-sm font-semibold">{footerMessage}</div>
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
