import { gsap } from 'gsap'
import { useLayoutEffect, useEffect, useRef, useState } from 'react'

const Review = () => {
  const tl = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    gsap
      .timeline()
      .set('.title', { x: 22, y: 375 })
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
          x: 200,
          y: 40,
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
  }, [])

  const centerMain = () => {
    gsap.set('.main', { x: '50%', xPercent: -50, y: '50%', yPercent: -50 })
  }

  useEffect(() => {
    window.addEventListener('resize', centerMain)

    return () => {
      window.removeEventListener('resize', centerMain)
    }
  }, [])

  return (
    <>
      <svg className="w-full h-screen bg-sky-200">
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="85%">
          <stop offset="0%" stopColor="#f5eacc" />
          <stop offset="80%" stopColor="#e0c677" />
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

        <g className="main">
          <circle className="ball bg" fill="url(#grad2)" cx={160} cy={150} r="130" />
          <circle className="ball bg" fill="url(#grad3)" cx={550} cy={410} r="210" />
          <circle className="ball bg" fill="url(#grad4)" cx={200} cy={810} r="170" />
          <g className="card">
            <rect
              fill="none"
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
              fill="#fff"
              stroke="#ccc"
              opacity={0.75}
              strokeWidth="3"
              width={340}
              height={540}
              rx={30}
              ry={30}
              fillOpacity={0.8}
            />
            <text className="title" fill="#fff33" fontSize="23">
              얼마나 많은 리뷰를 작성하였나요?
            </text>
          </g>
        </g>
      </svg>
    </>
  )
}

export default Review
