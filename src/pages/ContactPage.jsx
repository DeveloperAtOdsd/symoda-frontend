import { getCalApi } from '@calcom/embed-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from '../components/NavBar'

gsap.registerPlugin(ScrollTrigger)
import Footer from '../components/Footer'
import Gred from '../components/Gred'
import ContactOptionsSection from '../sections/ContactOptionsSection'
import FAQSection from '../sections/FAQSection'
import WhatToExpectSection from '../sections/WhatToExpectSection'
import imgArrow from '../assets/arrow.svg'
import imgSendIcon from '../assets/contact-send-icon.svg'
import imgCirclesOuter from '../assets/contact-circles-outer.svg'
import imgCirclesInner from '../assets/contact-circles-mid.svg'
import imgCirclesMid from '../assets/contact-circles-inner.png'
import LetsGetStartedSection from '../sections/LetsGetStartedSection'

/* ── Floating stat card ── */
function StatCard({ value, label, className }) {
  return (
    <div
      className={`absolute bg-white border border-black/10 rounded-xl shadow-[0px_8px_32px_0px_rgba(13,13,13,0.08)] flex flex-col gap-[1px] md:gap-[3px] whitespace-nowrap
        px-[9px] py-[7px] md:px-[17px] md:py-[13px] ${className}`}
    >
      <span className="font-['DM_Mono',monospace] font-medium text-[12px] md:text-[22px] leading-[12px] md:leading-[22px] text-[#0d0d0d]">
        {value}
      </span>
      <span className="text-[8px] md:text-[11px] leading-normal tracking-[0.44px] text-[#7a7a7a] font-normal">
        {label}
      </span>
    </div>
  )
}

/* ── Concentric circles + stat cards ── */
function CirclesVisual() {
  return (
    <div className="relative shrink-0 w-[247px] h-[215px] md:w-[430px] md:h-[430px]">
      {/* Outer circle */}
      <img src={imgCirclesOuter} alt="" className="absolute top-0 left-[16px] w-[215px] h-[215px] md:top-[15px] md:left-[30px] md:w-[400px] md:h-[400px]" />
      {/* Middle ring */}
      <img src={imgCirclesMid} alt="" className="absolute top-[22px] left-[38px] w-[172px] h-[172px] md:top-[55px] md:left-[70px] md:w-[320px] md:h-[320px]" />
      {/* Inner fill */}
      <img src={imgCirclesInner} alt="" className="absolute top-[46px] left-[62px] w-[124px] h-[124px] md:top-[100px] md:left-[115px] md:w-[230px] md:h-[230px]" />


      <div className="absolute inset-0 flex items-center md:left-[32px] justify-center">

        {/* Ring 1 */}
        <div className="absolute size-[120px] md:size-[220px]  rounded-full bg-[#1a1aff]/5" />

        {/* Ring 2 */}
        <div className="absolute size-[80px] md:size-[160px] rounded-full bg-[#1a1aff]/10" />

        {/* Ring 3 */}
        <div className="absolute size-[50px] md:size-[100px] rounded-full bg-[#1a1aff]/15" />

      </div>
      {/* Center blue dot */}
      <div className="absolute top-[95px] left-[110px] md:top-[191px] md:left-[206px]">

        {/* Wrapper with fixed size */}
        <div className="relative size-[26px] md:size-[48px]">

          {/* Wave */}
          <span className="wave absolute inset-0 rounded-full bg-[#1a1aff]/20" />

          {/* Core */}
          <div className="absolute inset-0 bg-[#1a1aff] rounded-xl md:rounded-3xl z-10" />

        </div>

      </div>

      {/* Stat cards */}
      <StatCard value="1 day" label="Response time" className="top-[21px] left-0 md:top-[40px] md:-left-[10px]" />
      <StatCard value="2 wks" label="Discovery sprint" className="bottom-[-20px] left-[31px] md:bottom-[50px] md:left-[48px]" />
      <StatCard value="60 min" label="Intro session" className="top-[160px] right-0 md:top-[278px] md:right-[-10px]" />
    </div>
  )
}

/* ── Hero section ── */
function ContactHero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-tag', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
        .fromTo('.hero-heading', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-body', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-buttons', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
        .fromTo('.hero-circles', { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.6')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen bg-white flex items-center overflow-hidden pt-24 pb-16 px-4 md:px-6 lg:px-8">
      <Gred />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">

        {/* Left — content */}
        <div className="flex flex-col gap-6 lg:gap-12 max-w-[760px] w-full">

          {/* Tag */}
          <div className="hero-tag flex items-center gap-3 px-4 py-3 rounded-full border-[1.5px] border-black/[0.27] w-fit">
            <span className="size-[6px] rounded-full bg-[#29aa49] shrink-0" />
            <span className="text-[14px] leading-[20px] tracking-[-0.09px] text-black">
              CONTACT &amp; NEXT STEPS
            </span>
          </div>

          {/* Heading */}
          <div
            className="hero-heading font-medium text-[36px] md:text-[56px] lg:text-[72px] leading-[1.2] tracking-[-1.61px] text-black"
          >
            <p>Let's</p>
            <p className="text-[#2132ed]">talk.</p>
          </div>

          {/* Body */}
          <p className="hero-body text-[16px] md:text-[20px] lg:text-[24px] leading-[1.5] tracking-[-0.47px] text-black/80 max-w-[680px]">
            Whether you're just exploring automation or ready to scale, we'd like to understand your challenges and see if Symoda is a good fit.
          </p>

          {/* Buttons */}
          <div className="hero-buttons flex flex-wrap gap-3 md:gap-6 items-center">
            <button
              data-cal-link={CAL_LINK}
              data-cal-config='{"layout":"month_view"}'
              className="group flex items-center gap-2.5 px-4 py-3 md:px-6 md:py-4 hover:pr-6 md:hover:pr-8 lg:hover:pr-10 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[14px] md:text-[18px] lg:text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#1a29cc] transition-all duration-300"
            >
              Book a session
              <img src={imgArrow} alt="" className="w-4 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-x-150 origin-left" />
            </button>
            <button className="group flex items-center gap-2.5 px-4 py-3 md:px-6 md:py-4 hover:pr-6 md:hover:pr-8 lg:hover:pr-10 bg-[#f0f1fe] border border-black/[0.27] rounded-xl text-[#666] text-[14px] md:text-[18px] lg:text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#e4e5fd] transition-all duration-300">
              Send us details
              <img src={imgSendIcon} alt="" className="w-6 h-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-x-150 origin-left" />
            </button>
          </div>
        </div>

        {/* Right — circles visual (visible on all sizes) */}
        <div className="hero-circles flex justify-end">
          <CirclesVisual />
        </div>

      </div>
    </section>
  )
}

// TODO: Replace with your actual Cal.com link (e.g. "your-username/30min")
const CAL_LINK = 'developer/30min'

/* ── Page ── */
export default function ContactPage() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi()
      cal('ui', {
        theme: 'light',
        styles: { branding: { brandColor: '#2132ed' } },
      })
    })()
  }, [])

  return (
    <>
      <NavBar />
      <ContactHero />
      <ContactOptionsSection />
      <FAQSection />
      {/* <LetsGetStartedSection /> */}
      <WhatToExpectSection />
      <Footer />
    </>
  )
}
