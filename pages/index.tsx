import { useRouter } from "next/router"

export default function Home() {
const router = useRouter();

return (
  <div className="h-screen">
    <div className="mx-auto py-20 px-10 w-96 h-full flex flex-col justify-between">
      <div>
        <div className="text-2xl mb-3 text-grey02 ml-9">2022</div>
        <div className="text-2xl mb-3 flex ml-9">
          <div className="mr-1 underline underline-offset-4 text-blue font-medium">개발팀</div> 
          <div className="text-grey02">님의</div>
        </div>
        <div className="text-8xl mb-3 text-primary font-bold text-center">술담화</div>
        <div className="text-5xl text-primary font-medium text-center">마셔보고서</div>
      </div>
      <div className="flex justify-center mb-20 animate-pulse">
        <img src="/images/sooldamhwa-logo.png" width={150} height={150}/>
      </div>
      <div className="flex justify-end">
        <button className="w-24 h-24 rounded-full bg-primary text-white text-2xl animate-bounce" onClick={() => router.push('/loading')}>시작</button>
      </div>
    </div>
  </div>
  )
}
