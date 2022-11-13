import { gsap } from 'gsap'
import { RefObject, useState, useEffect, useLayoutEffect, useRef } from 'react'

const centerMain = () => {
  gsap.set('.main', { x: '50%', xPercent: -50, y: '50%', yPercent: -50 })
}

const ReviewComponent = () => {
  const [count, setCount] = useState(0)
  const app = useRef() as RefObject<HTMLDivElement>
  const tl = useRef<GSAPTimeline>()

  // FIXME: 리렌더링 문제.. gsap으로 바꿔 적용해보기.
  useEffect(() => {
    const incrementCount = () => {
      if (count === 30) return
      setCount((prev) => prev + 1)
    }

    const timer = setTimeout(() => incrementCount(), 100)
    return () => clearTimeout(timer)
  }, [count])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .set('.title', { x: 22, y: 20 })
        .set('.score', { x: 30, y: 330 })
        .add(centerMain, 0.2)
        .from(
          '.ball',
          {
            duration: 2,
            transformOrigin: '50% 50%',
            scale: 0,
            opacity: 0,
            ease: 'elastic',
            stagger: 0.2,
          },
          0
        )
        .fromTo(
          '.card',
          {
            x: 150,
            y: 130,
            transformOrigin: '50% 50%',
            rotation: -4,
            skewX: 10,
            skewY: 4,
            scale: 2,
            opacity: 0,
          },
          {
            duration: 1.3,
            skewX: 0,
            skewY: 0,
            scale: 1,
            opacity: 1,
            ease: 'power4.inOut',
          },
          0.2
        )
    }, app)

    return () => ctx.revert()
  }, [])

  window.onmousemove = (e) => {
    let winPercent = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight },
      distFromCenter = 1 - Math.abs(((e.clientX - window.innerWidth / 2) / window.innerWidth) * 2)

    gsap
      .timeline({ defaults: { duration: 0.5, overwrite: 'auto' } })
      .to('.card', { rotation: -7 + 9 * winPercent.x }, 0)
      .to('.fillLight', { opacity: distFromCenter }, 0)
      .to('.bg', { x: 100 - 200 * winPercent.x, y: 20 - 40 * winPercent.y }, 0)
  }

  return (
    <div
      ref={app}
      className="w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-indigo-500"
    >
      <svg width={400} height={650} viewBox="60 150 500 500">
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stopColor="#f5eacc" />
          <stop offset="80%" stopColor="#ffe386" />
          <stop offset="110%" stopColor="#ebd8a0" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stopColor="#54e2fe" />
          <stop offset="80%" stopColor="#049afd" />
          <stop offset="110%" stopColor="#2aaffc" />
        </linearGradient>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stopColor="#eaeaea" />
          <stop offset="80%" stopColor="#bfbfbf" />
          <stop offset="110%" stopColor="#9b9b9b" />
        </linearGradient>

        <pattern id="cardBg" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <image
            opacity="0.5"
            width="100"
            height="100"
            xlinkHref="https://assets.codepen.io/721952/whiteNoise2.png"
          />
          <image
            className="fillLight"
            opacity="0.5"
            width="100"
            height="100"
            xlinkHref="https://assets.codepen.io/721952/whiteNoise.png"
          />
        </pattern>

        <g className="main">
          <circle className="ball bg" fill="url(#grad2)" cx={200} cy={150} r="100" />
          <circle className="ball bg" fill="url(#grad4)" cx={390} cy={400} r="150" />
          <circle className="ball bg" fill="url(#grad3)" cx={250} cy={610} r="160" />
          <g className="card">
            <rect
              fill="#fff"
              stroke="#ccc"
              opacity={0.75}
              strokeWidth="3"
              width={341}
              height={541}
              rx={31}
              ry={31}
              fillOpacity={0.8}
            />
            <rect
              fill="url(#cardBg)"
              stroke="#ccc"
              opacity={0.75}
              strokeWidth="3"
              width={340}
              height={540}
              rx={30}
              ry={30}
              fillOpacity={0.8}
            />
            <text x="0" y="0" className="title" fill="rgb(99 102 241)" fontWeight={600}>
              <tspan x="0" dy="1.2em" fontSize="50">
                남경님의
              </tspan>
              <tspan x="0" dy="1.4em" fontSize="27">
                주문 대비 리뷰 작성 비율은?
              </tspan>
            </text>
            <text className="score" fill="#fff" fontWeight={600}>
              <tspan fontSize="110">{count}%</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default ReviewComponent
