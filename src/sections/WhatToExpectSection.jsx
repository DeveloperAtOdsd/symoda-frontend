import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imgArrow from '../assets/arrow.svg'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    num: '01',
    title: 'Within 1 business day',
    desc: 'Someone from our team will follow up personally.',
  },
  {
    num: '02',
    title: 'We have a conversation',
    desc: "We'll understand your situation, challenges, and goals — no pressure, no pitch.",
  },
  {
    num: '03',
    title: "If it's a fit, we propose",
    desc: "We'll send a proposal for Discovery, Build, Enablement, or CIO Services — whatever fits your moment.",
  },
  {
    num: '04',
    title: "If it's not a fit, we're honest",
    desc: "We'll tell you clearly and suggest alternatives or introduce you to someone better suited.",
  },
]

/* ── Pill toggle group ── */
function PillGroup({ options, selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-[8px] items-start">
      {options.map((opt) => {
        const isActive = selected === opt
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className={`h-[38px] px-[17px] py-[9px] rounded-full text-[14px] leading-[20px] tracking-[-0.09px] transition-colors ${isActive
              ? 'bg-[#2132ed] text-white border border-[rgba(17,17,17,0.11)]'
              : 'bg-transparent text-[#3a3a3a] border border-[rgba(13,13,13,0.18)]'
              }`}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}

/* ── Left: timeline steps ── */
function Timeline() {
  return (
    <div className="flex flex-col gap-[32px] lg:gap-[48px] items-start w-full lg:w-[559px] shrink-0">
      {/* Tag */}
      <div className="wte-tag border-[0.8px] border-black/[0.27] flex items-center justify-center px-[8px] py-[8px] rounded-full">
        <span className="font-medium text-[12px] leading-[16px] tracking-[0.01px] text-black">
          After You Reach Out
        </span>
      </div>

      {/* Heading */}
      <p
        className="wte-heading font-medium text-[36px] md:text-[56px] leading-[46px] md:leading-[64px] tracking-[-1.25px] text-[#171717]"
      >
        What to expect.
      </p>

      {/* Steps */}
      <div className="wte-steps flex flex-col items-start pt-[16px] relative w-full">
        {/* Vertical line */}
        <div className="wte-line absolute left-[16px] top-[32px] bottom-[88px] w-px bg-[rgba(13,13,13,0.1)]" />

        {steps.map((step) => (
          <div key={step.num} className="wte-step flex gap-[20px] items-start pb-[32px] w-full">
            {/* Number badge */}
            <div className="bg-[#1a1aff] border border-[#1a1aff] flex items-center justify-center rounded-[16px] size-[32px] shrink-0">
              <span className="font-medium text-[12px] leading-[16px] tracking-[0.01px] text-white">
                {step.num}
              </span>
            </div>
            {/* Text */}
            <div className="flex flex-col gap-[4px] flex-1 min-w-0">
              <p className="font-medium text-[20px] leading-[28px] tracking-[-0.89px] text-black">
                {step.title}
              </p>
              <p className="font-normal text-[16px] leading-[24px] tracking-[-0.47px] text-[#171717]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Right: contact form card ── */
function ContactForm() {
  const [automation, setAutomation] = useState('Yes')
  const [service, setService] = useState('Enablement')
  const [session, setSession] = useState('Working Session')

  const inputClass =
    'bg-[#f0f1fe] border border-[rgba(13,13,13,0.1)] rounded-[6px] px-[17px] py-[14px] text-[14px] leading-[20px] tracking-[-0.09px] text-[#171717] placeholder:text-[#171717]/60 w-full outline-none'

  const labelClass = 'text-[#7a7a7a] text-[14px] leading-[20px] tracking-[-0.09px]'

  return (
    <div className="wte-form bg-white border-2 border-[rgba(17,17,17,0.13)] flex flex-col gap-[24px] p-[24px] md:p-[48px] rounded-[20px] md:rounded-[28px] shadow-[0px_4px_6px_-2px_rgba(18,18,23,0.05),0px_10px_15px_-3px_rgba(18,18,23,0.08)] w-full lg:w-[676px] shrink-0">
      {/* Heading */}
      <div className="flex flex-col gap-[16px] md:gap-[20px]">
        <p
          className="font-medium text-[24px] leading-[36px] tracking-[-0.69px] text-black"
        >
          Tell us about you.
        </p>
        <p className="font-normal text-[16px] leading-[20px] tracking-[-0.89px] text-black">
          Takes about 3 minutes. We read every submission personally.
        </p>
      </div>

      {/* Form */}
      <form className="flex flex-col gap-[22px] items-center w-full">
        {/* Row 1: org + name */}
        <div className="flex flex-col md:flex-row gap-[22px] md:gap-[24px] w-full">
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Organization name *</label>
            <input type="text" placeholder="Acme Professional Services" className={inputClass} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Your name &amp; title *</label>
            <input type="text" placeholder="Jane Smith, Managing Partner" className={inputClass} />
          </div>
        </div>

        {/* Row 2: email + phone */}
        <div className="flex flex-col md:flex-row gap-[22px] md:gap-[24px] w-full">
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Email *</label>
            <input type="email" placeholder="jane@acmefirm.com" className={inputClass} />
          </div>
          <div className="flex flex-col gap-[8px] flex-1">
            <label className={labelClass}>Phone (optional)</label>
            <input type="tel" placeholder="+1 (555) 000-0000" className={inputClass} />
          </div>
        </div>

        {/* Primary challenge */}
        <div className="flex flex-col gap-[8px] w-full">
          <label className={labelClass}>What's your primary challenge or opportunity? *</label>
          <textarea
            placeholder="Tell us what's slowing your team down, what you've tried, or what opportunity you see..."
            className={`${inputClass} min-h-[120px] resize-y`}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-[rgba(13,13,13,0.1)] w-full pt-[9px] pb-[8px]">
          <span className={labelClass}>A bit more context</span>
        </div>

        {/* Automation */}
        <div className="flex flex-col gap-[8px] w-full">
          <label className={labelClass}>Have you tried automation before?</label>
          <PillGroup options={['Yes', 'No', 'Unsure']} selected={automation} onSelect={setAutomation} />
        </div>

        {/* Service interest */}
        <div className="flex flex-col gap-[8px] w-full">
          <label className={labelClass}>Which service interests you most?</label>
          <PillGroup
            options={['Discovery', 'Build', 'Enablement', 'CIO Services']}
            selected={service}
            onSelect={setService}
          />
        </div>

        {/* Session type */}
        <div className="flex flex-col gap-[8px] w-full">
          <label className={labelClass}>What session type?</label>
          <PillGroup
            options={['Working Session', 'AI for Business Leaders intro']}
            selected={session}
            onSelect={setSession}
          />
        </div>

        {/* Timeframe */}
        <div className="flex flex-col gap-[8px] w-full">
          <label className={labelClass}>Timeframe?</label>
          <div className="relative">
            <select className={`${inputClass} appearance-none pr-[40px] cursor-pointer`}>
              <option value="">Select a timeframe...</option>
              <option value="asap">As soon as possible</option>
              <option value="1-2weeks">1–2 weeks</option>
              <option value="1month">Within a month</option>
              <option value="exploring">Just exploring</option>
            </select>
            <svg
              className="absolute right-[17px] top-1/2 -translate-y-1/2 pointer-events-none"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path d="M1 1L6 6L11 1" stroke="#7A7A7A" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Other context */}
        <div className="flex flex-col gap-[8px] w-full">
          <label className={labelClass}>Any other context?</label>
          <textarea
            placeholder="Team size, industry, tools you currently use, budget range, anything else helpful..."
            className={`${inputClass} min-h-[90px] resize-y`}
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-start md:items-center w-full">

          <a
            href="mailto:wayne@symoda.com"
            className="w-full md:w-auto"
          >
            <button
              type="button"
              className="flex items-center justify-center gap-[10px] bg-[#2132ed] border border-white/[0.27] px-[24px] py-[16px] rounded-[12px] text-white text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#1a29cc] transition-colors w-full md:w-auto md:shrink-0"
            >
              Send message
              <img src={imgArrow} alt="" className="size-[16px] brightness-0 invert" />
            </button>
          </a>

          <p className="text-[#7a7a7a] text-[12px] leading-[16px] tracking-[0.01px] flex-1">
            We respect your privacy. Your information is only used to respond to your inquiry.
          </p>

        </div>
      </form>
    </div>
  )
}

export default function WhatToExpectSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline left side: tag + heading fade up
      gsap.fromTo('.wte-tag, .wte-heading', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, ease: 'power3.out', duration: 0.6,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })

      // Vertical line grows
      gsap.fromTo('.wte-line', { scaleY: 0 }, {
        scaleY: 1, transformOrigin: 'top', ease: 'none',
        scrollTrigger: { trigger: '.wte-steps', start: 'top 80%', end: 'bottom 60%', scrub: true },
      })

      // Steps stagger in
      gsap.fromTo('.wte-step', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, ease: 'power3.out', duration: 0.6,
        scrollTrigger: { trigger: '.wte-steps', start: 'top 80%' },
      })

      // Form card slides up
      gsap.fromTo('.wte-form', { y: 60, opacity: 0 }, {
        y: 0, opacity: 1, ease: 'power3.out', duration: 0.8,
        scrollTrigger: { trigger: '.wte-form', start: 'top 90%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="contact-form" ref={sectionRef} className="bg-[#ededff] w-full px-[16px] md:px-[32px] py-[48px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[32px] lg:gap-[141px] justify-between">
        <Timeline />
        <ContactForm />
      </div>
    </section>
  )
}
