import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Gred from '../components/Gred'

import imgArrow from '../assets/arrow.svg'
import s1_1 from '../assets/s1_1.png'
import s1_2 from '../assets/s1_2.png'
import s1_3 from '../assets/s1_3.png'
import s1_4 from '../assets/s1_4.png'
import s1_5 from '../assets/s1_5.png'

gsap.registerPlugin(ScrollTrigger)

/* ─── Assets ─── */
const s1 = [s1_1, s1_2, s1_3, s1_4, s1_5]
const s2 = s1 // swap for real Phase 02 assets when available
const s3 = [s1_1, s1_2, s1_3, s1_4] // replace with real Phase 03 assets when available

/* ─── Slide data ─── */
const SLIDES = [
  {
    tags: ['DISCOVERY', 'PHASE 01'],
    title: 'Discovery & AI Opportunity Mapping',
    subtitle: 'Find the automation work worth doing in 2 to 4 weeks.',
    body: [
      'Evaluate your processes, tools, strategy, and current state against best practices. Get a prioritized roadmap of high-impact AI projects you can implement quickly.',
      "Before you build, you need to know what's possible and what's worth prioritizing. Our Discovery sprint combines workflow research, feasibility analysis, adoption readiness assessment, and governance maturity audit.",
    ],
    cta: 'Working session',
    cards: [
      { img: s1[0], title: 'Prioritized roadmap of automation opportunities' },
      { img: s1[1], title: 'ROI estimates and quick-win Technology recommendations' },
      { img: s1[2], title: 'Technology adoption and enablement strategy' },
      { img: s1[3], title: 'Governance and compliance framework roadmap' },
      { img: s1[4], title: 'Executive summary + board-ready business case' },
    ],
    detail: false,
  },
  {
    tags: ['BUILD', 'PHASE 02'],
    title: 'AI Technical Build & Product Development',
    subtitle: 'Design and build automation that your team will actually use.',
    body: [
      'We design, build, and ship custom AI workflows, tools, and agents your teams will actually adopt, with full governance, observability, and integration into existing workflows.',
      "You've identified the opportunity. Now let's build it. We handle end-to-end automation development: from workflow design and prototyping through technical architecture, implementation, and deployment. We work as your extended team: collaborative, transparent, and focused on shipping.",
    ],
    cta: 'Learn more about Build',
    cards: [
      { img: s2[0], title: 'Workflow research and automation design' },
      { img: s2[1], title: 'Architecture and technical design' },
      { img: s2[2], title: 'Implementation and integration' },
      { img: s2[3], title: 'Testing and refinement' },
      { img: s2[4], title: 'Go-live support' },
      { img: s2[0], title: 'Handoff documentation' },
    ],
    detail: false,
  },
  {
    tags: ['ENABLE', 'PHASE 03'],
    title: 'AI Managed Enablement',
    subtitle: 'Keep automation reliable, adopted, and governed.',
    body: [
      "We don't just build and leave. We stay on to run, monitor, improve, and govern your AI systems while training your team to take ownership over time.",
      "Launching automation is one thing. Making sure your teams use it, improve it, and govern it responsibly is another. AI Managed Enablement is our ongoing partnership to keep your workflows healthy and your teams capable.",
      "We monitor performance, train your workforce, build champions networks, establish governance frameworks, manage compliance, and help you scale responsibly across the organization.",
    ],
    cta: 'Learn more about AI Managed Enablement',
    cards: [
      { img: s3[0], title: 'Operations & Performance', sub: 'Monitoring, tuning, optimization, uptime management' },
      { img: s3[1], title: 'Workforce Enablement', sub: 'Role-specific training, peer coaching, champions programs, adoption tracking' },
      { img: s3[2], title: 'Governance & Compliance', sub: 'Policy frameworks, risk management, audit trails, regulatory compliance support' },
      { img: s3[3], title: 'Strategic Scaling', sub: 'Quarterly roadmap reviews, multi-use-case coordination, change management' },
    ],
    detail: true,
  },
]

const TOTAL = SLIDES.length
const RADIUS = 42
const CIRC = 2 * Math.PI * RADIUS

/* ─────────────────────────────────────────────
   Mobile / Tablet — static vertical layout
───────────────────────────────────────────── */
function StaticSteps() {
  return (
    <section className="bg-[#e8eaff] px-4 md:px-6 py-10 md:py-16">
      <h2
        className="text-black font-medium text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.8px] mb-10 md:mb-14"
        style={{ fontFeatureSettings: "'zero'" }}
      >
        Here's how Symoda works.
      </h2>

      <div className="flex flex-col gap-14 md:gap-20">
        {SLIDES.map((slide, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="flex gap-3 flex-wrap">
              {slide.tags.map((t) => (
                <div key={t} className="px-4 py-2 rounded-full border-[1.5px] border-black/[0.27]">
                  <span className="text-[12px] md:text-[13px] text-black">{t}</span>
                </div>
              ))}
            </div>

            <h3
              className="font-medium text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.6px] text-black"
              style={{ fontFeatureSettings: "'zero'" }}
            >
              {slide.title}
            </h3>

            {slide.subtitle && (
              <p className="font-medium text-[16px] md:text-[18px] leading-[26px] text-black">
                {slide.subtitle}
              </p>
            )}

            <div className="text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-black/75 flex flex-col gap-3">
              {slide.body.map((p, pi) => <p key={pi}>{p}</p>)}
            </div>

            <button className="flex items-center gap-2 px-5 py-3 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[15px] hover:bg-[#1a29cc] transition-colors w-fit">
              {slide.cta}
              <img src={imgArrow} alt="" className="w-4 h-4" />
            </button>

            <div className="flex flex-col gap-3 mt-2">
              {slide.cards.map((card, ci) => (
                <div key={ci} className="flex gap-4 items-start p-4 bg-white rounded-xl">
                  <div className="bg-[#f2f2f2] flex items-center justify-center p-2 rounded-xl shrink-0">
                    <img src={card.img} alt="" className="size-[40px] object-cover" />
                  </div>
                  <div>
                    <p className="font-medium text-[14px] md:text-[15px] leading-[20px] text-black">{card.title}</p>
                    {card.sub && <p className="text-[12px] md:text-[13px] leading-[18px] text-black/55 mt-0.5">{card.sub}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   Desktop — horizontal scroll with GSAP pin
───────────────────────────────────────────── */
export default function HowSymodaWorksSection() {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1024)

  const containerRef = useRef(null) // pinned section
  const trackRef = useRef(null) // horizontally translated flex row
  const circleRef = useRef(null) // SVG progress arc
  const dotsRef = useRef([])   // step dot elements

  /* ── Responsive check ── */
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* ── GSAP setup ── */
  useEffect(() => {
    if (isMobile) return

    const ctx = gsap.context(() => {
      const totalScroll = () => (TOTAL - 1) * window.innerWidth

      /* 1. Dedicated trigger — navbar visibility only */
      const dispatch = (active) =>
        window.dispatchEvent(new CustomEvent('hsw:active', { detail: active }))

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: () => '+=' + totalScroll(),
        invalidateOnRefresh: true,
        onEnter: () => dispatch(true),
        onLeave: () => dispatch(false),
        onEnterBack: () => dispatch(true),
        onLeaveBack: () => dispatch(false),
      })

      /* 2. Pin + horizontal translate */
      gsap.to(trackRef.current, {
        x: () => -((TOTAL - 1) * window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / (TOTAL - 1),
            duration: { min: 0.2, max: 0.45 },
            delay: 0.05,
            ease: 'power1.inOut',
          },
          end: () => '+=' + totalScroll(),
          /* 3. Update step dots on scroll */
          onUpdate(self) {
            const active = Math.round(self.progress * (TOTAL - 1))
            dotsRef.current.forEach((dot, i) => {
              if (!dot) return
              dot.style.backgroundColor = i === active ? '#2132ed' : 'rgba(0,0,0,0.15)'
              dot.style.transform = i === active ? 'scale(1.4)' : 'scale(1)'
            })
          },
        },
      })

      /* 3. Progress circle */
      gsap.fromTo(
        circleRef.current,
        { strokeDashoffset: CIRC },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: () => '+=' + totalScroll(),
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      )

      /* 4. Initial dot state */
      dotsRef.current.forEach((dot, i) => {
        if (!dot) return
        dot.style.backgroundColor = i === 0 ? '#2132ed' : 'rgba(0,0,0,0.15)'
        dot.style.transform = i === 0 ? 'scale(1.4)' : 'scale(1)'
      })
    }, containerRef)

    return () => ctx.revert()
  }, [isMobile])

  if (isMobile) return <StaticSteps />

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#e8eaff]"
    >
      <Gred />

      {/* ── Fixed overlay: title + progress (sits above the sliding track) ── */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-8 pt-10 pb-0 pointer-events-none">
        <h2
          className="text-black font-medium text-[56px] leading-[64px] tracking-[-1.25px]"
          style={{ fontFeatureSettings: "'zero'" }}
        >
          Here's how Symoda works.
        </h2>

        {/* Dots + circle */}
        <div className="flex flex-col items-center gap-3 pointer-events-auto">
          <div className="flex items-center gap-2.5 ">
            {SLIDES.map((_, i) => (
              <div
                key={i}
                ref={(el) => (dotsRef.current[i] = el)}
                style={{
                  backgroundColor: i === 0 ? '#2132ed' : 'rgba(0,0,0,0.15)',
                  transform: i === 0 ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </div>
          <div className="relative size-[92px]">
            <svg
              width="92" height="92" viewBox="0 0 92 92" fill="none"
              className="rotate-[-90deg]"
            >
              <circle cx="46" cy="46" r={RADIUS} stroke="rgba(0,0,0,0.08)" strokeWidth="3" fill="none" />
              <circle
                ref={circleRef}
                cx="46" cy="46" r={RADIUS}
                stroke="#4ade80" strokeWidth="3" fill="none"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                strokeDashoffset={CIRC}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Horizontal track ── */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 bottom-0 flex will-change-transform"
        style={{ width: `${TOTAL * 100}vw` }}
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="relative w-screen h-screen shrink-0 flex gap-[80px] px-8 pb-8"
            style={{ paddingTop: '152px' }} /* clear the fixed header */
          >

            {/* Left — step info */}
            <div className="w-[44%] shrink-0 flex flex-col gap-6 min-h-0 overflow-y-auto pr-1">
              {/* Tags */}
              <div className="flex gap-3 flex-wrap shrink-0">
                {slide.tags.map((tag) => (
                  <div key={tag} className="px-4 py-[10px] rounded-full border-[1.5px] border-black/[0.27]">
                    <span className="text-[14px] leading-[20px] tracking-[-0.09px] text-black">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Title */}
              <h3
                className="font-medium text-[40px] leading-[48px] tracking-[-0.89px] text-black shrink-0"
                style={{ fontFeatureSettings: "'zero'" }}
              >
                {slide.title}
              </h3>

              {/* Subtitle */}
              {slide.subtitle && (
                <p className="font-medium text-[20px] leading-[30px] tracking-[-0.47px] text-black shrink-0">
                  {slide.subtitle}
                </p>
              )}

              {/* Body */}
              <div className="text-[17px] leading-[28px] tracking-[-0.3px] text-black/75 flex flex-col gap-4">
                {slide.body.map((p, pi) => <p key={pi}>{p}</p>)}
              </div>

              {/* CTA */}
              <button className="flex items-center gap-2.5 px-6 py-4 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[18px] leading-[26px] tracking-[-0.3px] hover:bg-[#1a29cc] transition-colors w-fit mt-auto shrink-0">
                {slide.cta}
                <img src={imgArrow} alt="" className="w-4 h-4" />
              </button>
            </div>

            {/* Right — cards */}
            <div className="flex-1 flex flex-col gap-[14px] min-h-0 overflow-y-auto">
              {slide.cards.map((card, ci) => (
                slide.detail ? (
                  /* Detail card: icon + title + subtitle */
                  <div key={ci} className="flex gap-5 items-start p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow shrink-0">
                    <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-xl shrink-0">
                      <img src={card.img} alt="" className="size-[52px] object-cover" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="font-medium text-[20px] leading-[28px] tracking-[-0.5px] text-black">{card.title}</p>
                      <p className="text-[15px] leading-[22px] tracking-[-0.2px] text-black/55">{card.sub}</p>
                    </div>
                  </div>
                ) : (
                  /* List card: icon + title */
                  <div key={ci} className="flex gap-5 items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow shrink-0">
                    <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-xl shrink-0">
                      <img src={card.img} alt="" className="size-[56px] object-cover" />
                    </div>
                    <p className="font-medium text-[20px] leading-[28px] tracking-[-0.5px] text-black">{card.title}</p>
                  </div>
                )
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}
