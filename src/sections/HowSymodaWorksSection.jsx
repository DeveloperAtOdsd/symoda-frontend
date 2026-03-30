import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Gred from '../components/Gred'

gsap.registerPlugin(ScrollTrigger)

/* ─── Figma image assets ─── */

// Step 1 — Discovery cards (horizontal list)
const step1Images = [
  'http://localhost:3845/assets/2c14737b50311658fae86b415a18ab49d32d723a.png',
  'http://localhost:3845/assets/0e7ca007dcb271225bf7b3f8dd50e5432853c1d7.png',
  'http://localhost:3845/assets/045f2ac4732ac2eb51423b2b6fbe92a4cf4b4bbd.png',
  'http://localhost:3845/assets/5d902638e425d50efa6550490ff1d842c921802f.png',
  'http://localhost:3845/assets/aba7d432534cc8fae5f78921ab014abe4ecebae8.png',
]

// Step 2 — Build cards (horizontal list, different assets)
const step2Images = step1Images // reuse — replace with actual phase-02 assets when available

// Step 3 — CIO cards (2×3 grid)
const step3Images = [
  'http://localhost:3845/assets/99f335af31ac685d4bad5f76ca5984fa08a8d182.png',
  'http://localhost:3845/assets/6c239aab523bacdecf56c5ccf0e63378930cf931.png',
  'http://localhost:3845/assets/d3ac4d0aae2990f43e67680b57a84016c1a682f1.png',
  'http://localhost:3845/assets/e4565c0943ac819a4f573afb5b202d6fbd03a99c.png',
  'http://localhost:3845/assets/ab5dab66d93fca5f57a0b7f36f8ab5c11b147874.png',
  'http://localhost:3845/assets/b6c7c162c811acd98e39550de143e771133444c9.png',
]

const imgArrow = 'http://localhost:3845/assets/f754868f179b01cae00131065f78a43c3891f3ae.svg'

/* ─── Step data ─── */

const STEPS = [
  {
    tags: ['DISCOVERY', 'PHASE 01'],
    title: 'Discovery & AI Opportunity Mapping',
    subtitle: 'Find the automation work worth doing in 2 to 4 weeks.',
    paragraphs: [
      'Evaluate your processes, tools, strategy, and current state against best practices. Get a prioritized roadmap of high-impact AI projects you can implement quickly.',
      "Before you build, you need to know what's possible and what's worth prioritizing. Our Discovery sprint combines workflow research, feasibility analysis, adoption readiness assessment, and governance maturity audit.",
    ],
    cta: { label: 'Working session', icon: imgArrow },
    panelType: 'list',
    cards: [
      { img: step1Images[0], text: 'Prioritized roadmap of automation opportunities' },
      { img: step1Images[1], text: 'ROI estimates and quick-win\nTechnology recommendations' },
      { img: step1Images[2], text: 'Technology adoption and\nenablement strategy' },
      { img: step1Images[3], text: 'Governance and compliance framework roadmap' },
      { img: step1Images[4], text: 'Executive summary + board-ready business case' },
    ],
  },
  {
    tags: ['BUILD', 'PHASE 02'],
    title: 'AI Technical Build & Integration',
    subtitle: 'Ship real AI workflows in 4 to 8 weeks.',
    paragraphs: [
      'We design, build, and deploy AI-powered automations that integrate with the tools your teams already use — no rip-and-replace required.',
      "Our engineering team handles the end-to-end build: workflow design, API integrations, testing, security review, and production deployment. You get working automation, not another slide deck.",
    ],
    cta: { label: 'Working session', icon: imgArrow },
    panelType: 'list',
    cards: [
      { img: step2Images[0], text: 'Custom AI workflow design and build' },
      { img: step2Images[1], text: 'System integration and API orchestration' },
      { img: step2Images[2], text: 'Security and compliance review' },
      { img: step2Images[3], text: 'User acceptance testing and QA' },
      { img: step2Images[4], text: 'Production deployment and monitoring' },
    ],
  },
  {
    tags: ['NEW'],
    titleJsx: (
      <>
        Need Technology Strategy?{' '}
        <span className="text-[#2132ed]">We're Your CIO.</span>
      </>
    ),
    subtitle: null,
    paragraphs: [
      'Executive-level guidance on priorities, tools, governance, and roadmaps — without the cost of a full-time hire.',
      "CIOs are at the core of AI change adoption, and most firms don't have one.",
    ],
    cta: { label: "Let's talk strategy", icon: imgArrow },
    panelType: 'grid',
    cards: [
      { img: step3Images[0], text: 'Quarterly technology strategy sessions' },
      { img: step3Images[1], text: 'Vendor and tool evaluation and selection' },
      { img: step3Images[2], text: 'Budget and investment guidance' },
      { img: step3Images[3], text: 'Governance framework development' },
      { img: step3Images[4], text: 'Risk and compliance advisory' },
      { img: step3Images[5], text: 'Long-term technology\nroadmap planning' },
    ],
  },
]

const TOTAL = STEPS.length
const RADIUS = 42
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

/* ─── Component ─── */

/* ─── Mobile static layout ─── */
function MobileSteps() {
  return (
    <section className="bg-[#e8eaff] px-4 md:px-6 py-10 md:py-16">
      <h2
        className="text-black font-medium text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] tracking-[-0.8px] mb-8 md:mb-12"
        style={{ fontFeatureSettings: "'zero'" }}
      >
        Here's how Symoda works.
      </h2>
      <div className="flex flex-col gap-12">
        {STEPS.map((step, i) => (
          <div key={i} className="flex flex-col gap-6">
            {/* Tags */}
            <div className="flex gap-3 flex-wrap">
              {step.tags.map((tag) => (
                <div key={tag} className="px-4 py-2 rounded-full border-[1.5px] border-black/[0.27]">
                  <span className="text-[12px] leading-[16px] tracking-[-0.09px] text-black">{tag}</span>
                </div>
              ))}
            </div>

            {/* Title */}
            <h3
              className="font-medium text-[24px] leading-[32px] tracking-[-0.6px] text-black"
              style={{ fontFeatureSettings: "'zero'" }}
            >
              {step.titleJsx || step.title}
            </h3>

            {/* Subtitle */}
            {step.subtitle && (
              <p className="font-medium text-[16px] leading-[24px] tracking-[-0.3px] text-black -mt-2">
                {step.subtitle}
              </p>
            )}

            {/* Body */}
            <div className="text-[15px] leading-[24px] tracking-[-0.2px] text-black/80 flex flex-col gap-4">
              {step.paragraphs.map((p, pi) => <p key={pi}>{p}</p>)}
            </div>

            {/* CTA */}
            <button className="flex items-center gap-2 px-5 py-3 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[16px] leading-[24px] tracking-[-0.2px] hover:bg-[#1a29cc] transition-colors w-fit">
              {step.cta.label}
              <img src={step.cta.icon} alt="" className="w-4 h-4" />
            </button>

            {/* Cards */}
            {step.panelType === 'list' ? (
              <div className="flex flex-col gap-3">
                {step.cards.map((card) => (
                  <div key={card.text} className="flex gap-4 items-center p-4 bg-white rounded-xl">
                    <div className="bg-[#f2f2f2] flex items-center justify-center p-2 rounded-xl shrink-0">
                      <img src={card.img} alt="" className="size-[40px] object-cover" />
                    </div>
                    <p className="font-medium text-[14px] leading-[20px] tracking-[-0.3px] text-black whitespace-pre-line">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {step.cards.map((card) => (
                  <div key={card.text} className="flex flex-col gap-3 p-4 bg-white rounded-xl">
                    <div className="bg-[#f2f2f2] flex items-center justify-center p-2 rounded-xl w-fit">
                      <img src={card.img} alt="" className="size-[40px] object-cover" />
                    </div>
                    <p className="font-medium text-[14px] leading-[20px] tracking-[-0.3px] text-black whitespace-pre-line">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default function HowSymodaWorksSection() {
  const [isMobile, setIsMobile] = useState(false)
  const pinRef = useRef(null)
  const panelsRef = useRef([])
  const textsRef = useRef([])
  const circleRef = useRef(null)
  const stepsRef = useRef([])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const ctx = gsap.context(() => {
      const panels = panelsRef.current
      const texts = textsRef.current
      const circle = circleRef.current
      const steps = stepsRef.current

      if (!panels[0] || !texts[0]) return

      /* ── Build a master timeline scrubbed by scroll ── */
      const tl = gsap.timeline()

      STEPS.forEach((_, i) => {
        const isFirst = i === 0
        const isLast = i === TOTAL - 1

        if (!isFirst) {
          // Fade out previous left text
          tl.to(
            texts[i - 1],
            { y: -40, opacity: 0, duration: 0.4, ease: 'power2.in' },
            `step${i}`
          )
          // Slide out previous right panel
          tl.to(
            panels[i - 1],
            { x: '-100%', opacity: 0, duration: 0.5, ease: 'power2.in' },
            `step${i}`
          )
          // Deactivate previous step dot
          tl.to(
            steps[i - 1],
            { scale: 1, backgroundColor: 'rgba(0,0,0,0.15)', duration: 0.3 },
            `step${i}`
          )

          // Fade in current left text
          tl.fromTo(
            texts[i],
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
            `step${i}+=0.2`
          )
          // Slide in current right panel
          tl.fromTo(
            panels[i],
            { x: '100%', opacity: 0 },
            { x: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' },
            `step${i}+=0.2`
          )
          // Activate current step dot
          tl.to(
            steps[i],
            { scale: 1.4, backgroundColor: '#2132ed', duration: 0.3 },
            `step${i}+=0.2`
          )
        }

        // Hold each step for a beat so the user can read
        if (!isLast) {
          tl.to({}, { duration: 0.3 }, `step${i}+=0.7`)
        }
      })

      /* ── Pin & scrub ── */
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: 'top top',
        end: `+=${TOTAL * 100}%`,
        pin: true,
        scrub: 1,
        animation: tl,
      })

      /* ── Progress circle ── */
      if (circle) {
        gsap.to(circle, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: `+=${TOTAL * 100}%`,
            scrub: 1,
          },
        })
      }

      /* ── Initial state ── */
      // First step visible, rest hidden
      gsap.set(texts[0], { y: 0, opacity: 1 })
      gsap.set(panels[0], { x: '0%', opacity: 1 })
      gsap.set(steps[0], { scale: 1.4, backgroundColor: '#2132ed' })
      for (let i = 1; i < TOTAL; i++) {
        gsap.set(texts[i], { y: 40, opacity: 0 })
        gsap.set(panels[i], { x: '100%', opacity: 0 })
        gsap.set(steps[i], { scale: 1, backgroundColor: 'rgba(0,0,0,0.15)' })
      }
    }, pinRef)

    return () => ctx.revert()
  }, [isMobile])

  if (isMobile) return <MobileSteps />

  return (
    <section
      ref={pinRef}
      className="relative h-screen overflow-hidden bg-[#e8eaff]"
    >
      <Gred />

      <div className="relative z-10 flex flex-col h-full px-8 pt-12 pb-8 max-w-[1200px] mx-auto">

        {/* ── Header row ── */}
        <div className="flex items-center justify-between mb-12 shrink-0">
          <h2
            className="text-black font-medium text-[56px] leading-[64px] tracking-[-1.25px]"
            style={{ fontFeatureSettings: "'zero'" }}
          >
            Here's how Symoda works.
          </h2>

          {/* Progress circle + step dots */}
          <div className="flex items-center gap-6">
            {/* Step dots */}
            <div className="flex items-center gap-3">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  ref={(el) => (stepsRef.current[i] = el)}
                  className="size-3 rounded-full transition-colors"
                  style={{ backgroundColor: i === 0 ? '#2132ed' : 'rgba(0,0,0,0.15)' }}
                />
              ))}
            </div>

            {/* Circle */}
            <div className="relative shrink-0 size-[92px]">
              <svg
                width="92"
                height="92"
                viewBox="0 0 92 92"
                fill="none"
                className="rotate-[-90deg]"
              >
                <circle
                  cx="46" cy="46" r={RADIUS}
                  stroke="rgba(0,0,0,0.08)"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  ref={circleRef}
                  cx="46" cy="46" r={RADIUS}
                  stroke="#4ade80"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={CIRCUMFERENCE}
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Two-column body ── */}
        <div className="flex gap-[100px] flex-1 min-h-0 items-start overflow-hidden">

          {/* Left column — text blocks stacked, absolutely positioned so they animate independently */}
          <div className="relative w-[580px] shrink-0 flex-none">
            {STEPS.map((step, i) => (
              <div
                key={i}
                ref={(el) => (textsRef.current[i] = el)}
                className="absolute inset-0 flex flex-col gap-10"
                style={i === 0 ? {} : { opacity: 0 }}
              >
                {/* Tags */}
                <div className="flex gap-4 items-center">
                  {step.tags.map((tag) => (
                    <div
                      key={tag}
                      className="px-4 py-3 rounded-full border-[1.5px] border-black/[0.27]"
                    >
                      <span className="text-[14px] leading-[20px] tracking-[-0.09px] text-black">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Title */}
                <h3
                  className="font-medium text-[40px] leading-[48px] tracking-[-0.89px] text-black"
                  style={{ fontFeatureSettings: "'zero'" }}
                >
                  {step.titleJsx || step.title}
                </h3>

                {/* Subtitle */}
                {step.subtitle && (
                  <p
                    className="font-medium text-[24px] leading-[32px] tracking-[-0.89px] text-black -mt-4"
                    style={{ fontFeatureSettings: "'zero'" }}
                  >
                    {step.subtitle}
                  </p>
                )}

                {/* Body */}
                <div className="text-[20px] leading-[32px] tracking-[-0.47px] text-black/80 font-normal flex flex-col gap-5 -mt-2">
                  {step.paragraphs.map((p, pi) => (
                    <p key={pi}>{p}</p>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2.5 px-6 py-4 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#1a29cc] transition-colors w-fit mt-auto">
                  {step.cta.label}
                  <img src={step.cta.icon} alt="" className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Right column — panels stacked, animate in/out */}
          <div className="relative flex-1 min-h-0 overflow-hidden">
            {STEPS.map((step, i) => (
              <div
                key={i}
                ref={(el) => (panelsRef.current[i] = el)}
                className="absolute inset-0 overflow-y-auto pr-2"
                style={i === 0 ? {} : { opacity: 0 }}
              >
                {step.panelType === 'list' ? (
                  /* Vertical card list */
                  <div className="flex flex-col gap-[20px]">
                    {step.cards.map((card) => (
                      <div
                        key={card.text}
                        className="flex gap-5 items-center p-5 bg-white rounded-xl"
                      >
                        <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-xl shrink-0">
                          <img src={card.img} alt="" className="size-[61px] object-cover" />
                        </div>
                        <p
                          className="font-medium text-[20px] leading-[32px] tracking-[-0.69px] text-black whitespace-pre-line"
                          style={{ fontFeatureSettings: "'zero'" }}
                        >
                          {card.text}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* 2×3 card grid */
                  <div className="grid grid-cols-2 gap-[20px]">
                    {step.cards.map((card) => (
                      <div
                        key={card.text}
                        className="flex flex-col gap-5 items-start p-5 bg-white rounded-xl hover:shadow-lg transition-shadow"
                      >
                        <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-xl shrink-0">
                          <img src={card.img} alt="" className="size-[61px] object-cover" />
                        </div>
                        <p
                          className="font-medium text-[20px] leading-[32px] tracking-[-0.69px] text-black whitespace-pre-line"
                          style={{ fontFeatureSettings: "'zero'" }}
                        >
                          {card.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
