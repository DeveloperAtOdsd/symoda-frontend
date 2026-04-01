import { useEffect, useRef, useState, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Gred from '../components/Gred'

gsap.registerPlugin(ScrollTrigger)

/* ─── Phase data ─── */
const PHASES = [
  {
    number: '01',
    label: 'PHASE 01 · DISCOVERY',
    navTitle: 'Discovery & AI Opportunity Mapping',
    navDesc: 'Find the automation worth doing in 2–4 weeks',
    cardTitle: "Find what's worth building",
    cardSubtitle: '2–4 week sprint',
    tags: ['Workflow', 'AuditROI', 'Readiness Score', 'Roadmap', 'Business Case'],
    body: "Evaluate your processes, tools, strategy, and current state against best practices. Get a prioritized roadmap of high-impact AI projects you can implement quickly.\n\nBefore you build, you need to know what's possible and what's worth prioritizing. Our Discovery sprint combines workflow research, feasibility analysis, adoption readiness assessment, and governance maturity audit.",
  },
  {
    number: '02',
    label: 'PHASE 02 · BUILD',
    navTitle: 'AI Technical Build & Product Development',
    navDesc: 'Design and build automation your team will actually use.',
    cardTitle: "Find what's worth building",
    cardSubtitle: '2–4 week sprint',
    tags: ['Custom Workflows', 'Architecture', 'Integration', 'Testing', 'Go-live Support'],
    body: "We design, build, and ship custom AI workflows, tools, and agents your teams will actually adopt, with full governance, observability, and integration into existing workflows.\n\nYou've identified the opportunity. Now let's build it. We handle end-to-end automation development: from workflow design and prototyping through technical architecture, implementation, and deployment. We work as your extended team: collaborative, transparent, and focused on shipping.",
  },
  {
    number: '03',
    label: 'PHASE 03 · ENABLE',
    navTitle: 'AI Managed Enablement',
    navDesc: 'Keep automation reliable, adopted, and governed.',
    cardTitle: 'Scale with confidence',
    cardSubtitle: 'Ongoing partnership',
    tags: ['Monitoring', 'Role Training', 'Champions', 'Governance', 'Compliance'],
    body: "We don't just build and leave. We stay on to run, monitor, improve, and govern your AI systems while training your team to take ownership over time.\n\nLaunching automation is one thing. Making sure your teams use it, improve it, and govern it responsibly is another. AI Managed Enablement is our ongoing partnership to keep your workflows healthy and your teams capable. We monitor performance, train your workforce, build champions networks, establish governance frameworks, manage compliance, and help you scale responsibly across the organization.",
  },
]

const TOTAL = PHASES.length

/* ─── Arrow icon — rotates based on active state ─── */
function PhaseArrow({ isActive }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-300 ${isActive ? 'rotate-0' : 'rotate-90'}`}
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke={isActive ? '#2132ed' : '#171717'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ─── Phase detail card ─── */
function PhaseCard({ phase, index }) {
  return (
    <div
      data-card={index}
      className="absolute inset-0 flex flex-col gap-8 justify-center p-6"
      style={{ opacity: index === 0 ? 1 : 0, y: index === 0 ? 0 : 20 }}
    >
      <p className="text-[#2132ed] text-base leading-5 tracking-[1px] font-normal whitespace-nowrap">
        {phase.label}
      </p>
      <div className="flex flex-1 flex-col gap-8">
        <div className="flex flex-col gap-3 text-black">
          <p className="font-medium text-2xl leading-9 tracking-[-0.69px]" style={{ fontFeatureSettings: "'zero'" }}>
            {phase.cardTitle}
          </p>
          <p className="font-normal text-base leading-5 tracking-[-0.89px]" style={{ fontFeatureSettings: "'zero'" }}>
            {phase.cardSubtitle}
          </p>
        </div>
        <div className="flex flex-wrap gap-[14px_18px]">
          {phase.tags.map((tag) => (
            <div key={tag} className="border-[1.5px] border-black/[0.27] rounded-full px-3 py-2 flex items-center justify-center">
              <span className="text-sm leading-5 tracking-[-0.09px] text-[#171717] whitespace-nowrap">{tag}</span>
            </div>
          ))}
        </div>
        <p className="font-normal text-xl leading-8 tracking-[-0.89px] text-black whitespace-pre-wrap">
          {phase.body}
        </p>
      </div>
    </div>
  )
}

/* ─── Mobile layout ─── */
function MobileLayout() {
  return (
    <section className="relative px-4 py-6 bg-[#f5f5f5] overflow-hidden">
      <Gred />
      <div className="relative flex flex-col gap-[38px]">
        {/* Header */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-block px-6 py-3 rounded-full border-[1.5px] border-black/[0.27] text-xs font-medium leading-4 tracking-[0.01px] text-black">
              How we work
            </span>
          </div>
          <div className="flex flex-col gap-6 text-black">
            <p className="font-medium text-[32px] leading-[45px] tracking-[-0.85px]" style={{ fontFeatureSettings: "'zero'" }}>
              Here's how<br />
              <span className="text-[#2132ed]">Symoda works.</span>
            </p>
            <p className="text-base leading-[25.6px] tracking-[-0.25px]">
              Discover → Build → Enable.<br />
              Start anywhere, follow the journey.
            </p>
          </div>
        </div>

        {/* Phase sections */}
        {PHASES.map((phase, i) => (
          <div
            key={i}
            className="border-l-2 border-[#2132ed] pl-6 flex flex-col gap-6"
          >
            {/* Phase header */}
            <div className="flex flex-col gap-6">
              <p className="text-[#2132ed] text-base leading-5 tracking-[1px]">
                {phase.label}
              </p>
              <div className="flex flex-col gap-1 text-black">
                <p className="font-medium text-xl leading-7 tracking-[-0.89px]">
                  {phase.navTitle}
                </p>
                <p className="text-[15px] leading-[19px] tracking-[-0.25px]">
                  {phase.navDesc}
                </p>
              </div>
            </div>

            {/* Phase card */}
            <div className="bg-white/50 border-2 border-black/[0.08] rounded-xl overflow-hidden p-4">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-black tracking-[-0.89px]">
                  <p className="font-medium text-xl leading-7" style={{ fontFeatureSettings: "'zero'" }}>
                    {phase.cardTitle}
                  </p>
                  <p className="font-normal text-base leading-5" style={{ fontFeatureSettings: "'zero'" }}>
                    {phase.cardSubtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-[14px_18px]">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-[1.5px] border-black/[0.27] rounded-full px-3 py-2 text-xs font-medium leading-4 tracking-[0.01px] text-black whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm leading-[22px] tracking-[-0.25px] text-black whitespace-pre-wrap">
                  {phase.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Tablet layout (md–lg) ─── */
function TabletLayout() {
  return (
    <section className="relative px-8 py-10 bg-[#f5f5f5] overflow-hidden">
      <Gred />
      <div className="relative flex flex-col gap-12 max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-block px-6 py-3 rounded-full border-[1.5px] border-black/[0.27] text-sm font-medium leading-5 tracking-[0.01px] text-black">
              How we work
            </span>
          </div>
          <div className="flex flex-col gap-6 text-black">
            <p className="font-medium text-[40px] leading-[48px] tracking-[-0.89px]" style={{ fontFeatureSettings: "'zero'" }}>
              Here's how<br />
              <span className="text-[#2132ed]">Symoda works.</span>
            </p>
            <p className="text-xl leading-9 tracking-[-0.47px]">
              Discover → Build → Enable.<br />
              Start anywhere, follow the journey.
            </p>
          </div>
        </div>

        {/* Phase sections */}
        {PHASES.map((phase, i) => (
          <div
            key={i}
            className="border-l-2 border-[#2132ed] pl-8 flex flex-col gap-6"
          >
            {/* Phase header */}
            <div className="flex flex-col gap-6">
              <p className="text-[#2132ed] text-base leading-5 tracking-[1px]">
                {phase.label}
              </p>
              <div className="flex flex-col gap-1 text-black">
                <p className="font-medium text-xl leading-7 tracking-[-0.89px]">
                  {phase.navTitle}
                </p>
                <p className="text-base leading-6 tracking-[-0.47px] text-[#171717]">
                  {phase.navDesc}
                </p>
              </div>
            </div>

            {/* Phase card */}
            <div className="bg-white/50 border-2 border-black/[0.08] rounded-xl overflow-hidden p-6">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-3 text-black tracking-[-0.89px]">
                  <p className="font-medium text-2xl leading-7" style={{ fontFeatureSettings: "'zero'" }}>
                    {phase.cardTitle}
                  </p>
                  <p className="font-normal text-base leading-5" style={{ fontFeatureSettings: "'zero'" }}>
                    {phase.cardSubtitle}
                  </p>
                </div>
                <div className="flex flex-wrap gap-[14px_18px]">
                  {phase.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border-[1.5px] border-black/[0.27] rounded-full px-3 py-2 text-sm font-medium leading-5 tracking-[-0.09px] text-[#171717] whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-base leading-[26px] tracking-[-0.25px] text-black whitespace-pre-wrap">
                  {phase.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Desktop — pinned section, scroll changes right card content ─── */
export default function HowSymodaWorksSection() {
  const [breakpoint, setBreakpoint] = useState(() =>
    window.innerWidth >= 1024 ? 'desktop' : window.innerWidth >= 768 ? 'tablet' : 'mobile'
  )
  const [activePhase, setActivePhase] = useState(0)

  const containerRef = useRef(null)
  const cardContainerRef = useRef(null)
  const prevPhaseRef = useRef(0)

  /* ── Responsive check ── */
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth
      setBreakpoint(w >= 1024 ? 'desktop' : w >= 768 ? 'tablet' : 'mobile')
    }
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  /* ── GSAP card fade animation on phase change ── */
  const animateCardTransition = useCallback((from, to) => {
    if (from === to || !cardContainerRef.current) return
    const cards = cardContainerRef.current.querySelectorAll('[data-card]')
    const outgoing = cards[from]
    const incoming = cards[to]
    if (!outgoing || !incoming) return

    // Fade out old card (slide up + fade)
    gsap.to(outgoing, {
      opacity: 0,
      y: -20,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(outgoing, { pointerEvents: 'none' })
      },
    })

    // Fade in new card (slide up from below + fade)
    gsap.set(incoming, { y: 20, opacity: 0, pointerEvents: 'auto' })
    gsap.to(incoming, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
      delay: 0.15,
    })
  }, [])

  useEffect(() => {
    if (prevPhaseRef.current !== activePhase) {
      animateCardTransition(prevPhaseRef.current, activePhase)
      prevPhaseRef.current = activePhase
    }
  }, [activePhase, animateCardTransition])

  /* ── GSAP setup ── */
  useEffect(() => {
    if (breakpoint !== 'desktop') return

    const ctx = gsap.context(() => {
      const totalScroll = () => (TOTAL - 1) * window.innerHeight

      /* Navbar visibility dispatch */
      const dispatch = (active) =>
        window.dispatchEvent(new CustomEvent('hsw:active', { detail: active }))

      /* Pin section + track scroll progress to switch active phase */
      ScrollTrigger.create({
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: () => '+=' + totalScroll(),
        invalidateOnRefresh: true,
        onEnter: () => dispatch(true),
        onLeave: () => dispatch(false),
        onEnterBack: () => dispatch(true),
        onLeaveBack: () => dispatch(false),
        onUpdate: (self) => {
          const phase = Math.round(self.progress * (TOTAL - 1))
          setActivePhase(phase)
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [breakpoint])

  if (breakpoint === 'mobile') return <MobileLayout />
  if (breakpoint === 'tablet') return <TabletLayout />

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-[#f5f5f5]"
    >
      <Gred />
      <div className="h-full max-w-[1440px] mx-auto flex items-center gap-8 px-8 py-20">
        {/* ── Left Section ── */}
        <div className="flex-1 flex flex-col gap-8 min-w-0 z-100">
          {/* Header — stays fully visible */}
          <div>
            <div className="mb-8">
              <span className="inline-block px-6 py-3 rounded-full border-[1.5px] border-black/[0.27] text-sm leading-5 tracking-[-0.09px] text-black">
                How we work
              </span>
            </div>
            <div className="flex flex-col gap-6 text-black">
              <p className="font-medium text-[40px] leading-[48px] tracking-[-0.89px]" style={{ fontFeatureSettings: "'zero'" }}>
                Here's how<br />
                <span className="text-[#2132ed]">Symoda works.</span>
              </p>
              <p className="text-xl leading-9 tracking-[-0.47px]">
                Discover → Build → Enable.<br />
                Start anywhere, follow the journey.
              </p>
            </div>
          </div>

          {/* Phase navigation list */}
          <div className="flex flex-col">
            {PHASES.map((phase, i) => {
              const isActive = i === activePhase
              return (
                <div
                  key={i}
                  className={`flex items-center gap-6 py-6 transition-all duration-300 ${isActive ? 'border-b-2 border-[#2132ed]' : ''
                    }`}
                >
                  <p
                    className={`text-base leading-5 tracking-[1px] w-10 text-center transition-colors duration-300 ${isActive ? 'text-[#2132ed]' : 'text-[#171717]'
                      }`}
                  >
                    {phase.number}
                  </p>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-xl leading-7 tracking-[-0.89px] text-black whitespace-nowrap">
                      {phase.navTitle}
                    </p>
                    <p className="text-base leading-6 tracking-[-0.47px] text-[#171717] whitespace-nowrap">
                      {phase.navDesc}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <PhaseArrow isActive={isActive} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Right Card Container ── */}
        <div
          ref={cardContainerRef}
          className="relative bg-white/50 border-2 border-black/[0.08] rounded-xl overflow-hidden shrink-0"
          style={{ width: 676, height: 609 }}
        >
          {PHASES.map((phase, i) => (
            <PhaseCard key={i} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
