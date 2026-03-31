import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

const imgNoise = 'http://localhost:3845/assets/66bff7bdfbbef7edaefa4a7570fbcde664049cbd.png'

export default function Gred() {
  const containerRef = useRef(null)
  const blob1Ref = useRef(null)
  const blob2Ref = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // Movement (collision effect)
      gsap.to(blob1Ref.current, {
        x: 350,
        y: -150,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      gsap.to(blob2Ref.current, {
        x: -350,
        y: 150,
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })

      //  Organic deformation
      gsap.to(blob1Ref.current, {
        scaleX: 1.3,
        scaleY: 0.9,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      gsap.to(blob2Ref.current, {
        scaleX: 0.9,
        scaleY: 1.3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

      // Slow rotation (adds fluid feel)
      gsap.to(blob1Ref.current, {
        rotate: 360,
        duration: 30,
        ease: "none",
        repeat: -1,
      })

      gsap.to(blob2Ref.current, {
        rotate: -360,
        duration: 35,
        ease: "none",
        repeat: -1,
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/*  Goo Filter (liquid merging effect) */}
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div
        ref={containerRef}
        className="absolute inset-0 bg-white overflow-hidden pointer-events-none"
        style={{ filter: "url(#goo)" }}
      >
        {/*  Noise texture */}
        <div
          className="absolute top-0 left-0 w-[612px] h-[370px] mix-blend-soft-light opacity-20"
          style={{
            backgroundImage: `url('${imgNoise}')`,
            backgroundSize: '612px 370px',
            backgroundPosition: 'top left',
          }}
        />

        {/* Blob 1 */}
        <div
          ref={blob1Ref}
          className="absolute rounded-full opacity-20 will-change-transform mix-blend-multiply"
          style={{
            width: '1003px',
            height: '1003px',
            top: '227px',
            left: '-196px',
            background: 'linear-gradient(180deg, #F93F08 0%, #1143F8 100%)',
            filter: 'blur(110px)',
          }}
        />

        {/*  Blob 2 */}
        <div
          ref={blob2Ref}
          className="absolute rounded-full opacity-20 will-change-transform mix-blend-multiply"
          style={{
            width: '900px',
            height: '900px',
            top: '-302px',
            left: '807px',
            background: 'linear-gradient(180deg, #34B8F9 0%, #1143F8 100%)',
            filter: 'blur(92px)',
          }}
        />
      </div>
    </>
  )
}