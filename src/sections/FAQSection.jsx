import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FAQS = [
  {
    q: 'Do I have to do Discovery before Build?',
    a: "Many clients do — it's our recommended path. But if you already know what you want to build, we can start with Build. If you've launched automation that isn't delivering adoption, we can start with AI Managed Enablement.",
  },
  {
    q: 'How long does this take?',
    a: null,
  },
  {
    q: 'How do you measure success?',
    a: null,
  },
  {
    q: 'Can you work with our existing team?',
    a: null,
  },
  {
    q: "What if this isn't the right fit?",
    a: null,
  },
  {
    q: `Is "AI for Business Leaders" just sales talk?`,
    a: null,
  },
]

function PlusIcon({ isOpen }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      {/* Horizontal line (always visible) */}
      <line x1="4" y1="12" x2="20" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      {/* Vertical line (rotates to form X when open) */}
      <line
        x1="12" y1="4" x2="12" y2="20" stroke="black" strokeWidth="1.5" strokeLinecap="round"
        className="origin-center transition-transform duration-300"
        style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
      />
    </svg>
  )
}

function FAQItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null)
  const answerRef = useRef(null)

  useEffect(() => {
    const content = contentRef.current
    if (!content) return

    if (isOpen) {
      // Expand
      gsap.set(content, { display: 'block' })
      gsap.fromTo(content,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' }
      )
    } else {
      // Collapse
      gsap.to(content, {
        height: 0, opacity: 0, duration: 0.25, ease: 'power2.in',
        onComplete: () => gsap.set(content, { display: 'none' }),
      })
    }
  }, [isOpen])

  return (
    <div className={`faq-item bg-white flex flex-col rounded-[12px] w-full transition-shadow duration-300 ${isOpen ? 'border-2 border-black/[0.08] shadow-[0px_4px_12px_rgba(0,0,0,0.04)]' : ''}`}>
      {/* Question row */}
      <button
        onClick={onToggle}
        className="flex items-center justify-between p-[20px] w-full cursor-pointer text-left"
      >
        <p
          className="font-normal text-[18px] md:text-[24px] leading-[28px] md:leading-[36px] text-black tracking-[-0.47px] pr-4"

        >
          {faq.q}
        </p>
        <PlusIcon isOpen={isOpen} />
      </button>

      {/* Expandable content */}
      <div ref={contentRef} className="overflow-hidden" style={{ height: 0, opacity: 0, display: 'none' }}>
        <div ref={answerRef} className="px-[20px] pb-[20px]">
          {/* Divider */}
          <div className="h-px bg-black/[0.08] w-full mb-[20px]" />
          {/* Answer */}
          <p className="font-normal text-[16px] md:text-[20px] leading-[28px] md:leading-[36px] text-[#171717] tracking-[-0.47px]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const sectionRef = useRef(null)
  const initialAnimDone = useRef(false)

  const handleToggle = useCallback((i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-left > *', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, ease: 'power3.out', duration: 0.6,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.faq-item', { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.08, ease: 'power3.out', duration: 0.5,
        scrollTrigger: {
          trigger: '.faq-list',
          start: 'top 85%',
          onEnter: () => { initialAnimDone.current = true },
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-[#eef0ff] px-[16px] md:px-[32px] py-[48px] md:py-[80px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[32px] lg:gap-[24px] justify-between w-full">

        {/* Left — heading */}
        <div className="faq-left flex flex-col gap-[32px] lg:gap-[48px] items-start shrink-0 lg:w-[559px]">
          {/* Tag */}
          <div className="border border-black/[0.27] flex items-center justify-center px-[8px] py-[8px] rounded-full shrink-0">
            <span className="font-medium text-[12px] leading-[16px] text-black tracking-[0.01px] whitespace-nowrap">
              FREQUENTLY ASKED
            </span>
          </div>

          {/* Heading */}
          <p
            className="font-medium text-[36px] md:text-[56px] leading-[46px] md:leading-[64px] tracking-[-1.25px] text-[#171717]"
  
          >
            {'Common '}
            <span className="text-[#2132ed]">questions.</span>
          </p>
        </div>

        {/* Right — accordion */}
        <div className="faq-list flex flex-col gap-[12px] items-end w-full lg:shrink-0 lg:w-[793px]">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
