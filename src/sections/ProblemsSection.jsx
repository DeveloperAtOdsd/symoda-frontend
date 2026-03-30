import PillTag from '../components/ui/PillTag'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const problems = [
  {
    num: '01',
    quote: '"We tried AI pilots. They looked good. Then nobody used them."',
    desc: "AI experiments that look great in demos but never make it into daily workflows. Most teams launch automation without understanding adoption barriers or change management. The technology works — people don't change their behavior.",
  },
  {
    num: '02',
    quote: '"We\'re worried about governance and compliance as AI scales."',
    desc: "Automation is everywhere now. Teams using ChatGPT, Copilot, and point tools in ad-hoc ways with no shared standards or governance. Most organizations have no governance frameworks, audit trails, or compliance practices. That's a business and legal risk.",
  },
  {
    num: '03',
    quote: "We don't know where to start or what's realistic.",
    desc: 'Too many ideas. No clear ROI. Unclear priorities. Product and engineering backlogs that are already full, no capacity to design, ship, and sustain AI initiatives properly. You need a structured way to evaluate opportunities and build a strategy you can actually execute.',
  },
  {
    num: '04',
    quote: '"Our teams don\'t know how to use new tools effectively."',
    desc: "Technology moves fast, and most people are playing catch-up. Executives under pressure to show AI impact without a clear way to measure ROI, govern risk, or enable workforce adoption. Your teams need role-specific training, peer champions, and ongoing coaching to integrate automation into daily work responsibly.",
  },
]

export default function ProblemsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.problem-item')

      items.forEach((item) => {
        const line = item.querySelector('.line')
        const content = item.querySelectorAll('.content > *')

        gsap.fromTo(line, { scaleX: 0 }, {
          scaleX: 1,
          transformOrigin: 'left',
          ease: 'none',
          scrollTrigger: { trigger: item, start: 'top 85%', end: 'top 40%', scrub: true },
        })

        gsap.fromTo(content, { y: 60, opacity: 0 }, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: item, start: 'top 85%', end: 'top 40%', scrub: true },
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="bg-[#e8eaff] py-10 md:py-16 lg:py-20" ref={containerRef}>
      <div className="mx-auto px-4 md:px-6 lg:px-8">

        <div className="mb-8 md:mb-12 lg:mb-16">
          <PillTag>Problems</PillTag>
          <h2 className="mt-6 md:mt-8 lg:mt-10 text-3xl md:text-[40px] lg:text-5xl font-bold text-gray-950 leading-tight max-w-2xl">
            Here's what most AI initiatives get wrong.
          </h2>
          <p className="mt-4 md:mt-5 lg:mt-6 text-sm md:text-[18px] lg:text-[24px] text-gray-600 max-w-3xl leading-relaxed">
            From "we should use AI" to "we can't make it stick."<br />
            Most organizations are stuck somewhere between curiosity and chaos.
          </p>
        </div>

        <div>
          {problems.map((p) => (
            <div key={p.num} className="problem-item py-8 md:py-12 lg:py-16">
              <div className="line h-[4px] bg-[#2132ed] w-full mb-6 md:mb-8 lg:mb-10 scale-x-0 origin-left" />
              <div className="content">
                <div className="text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-950 mb-5 md:mb-6 lg:mb-8">
                  {p.num}
                </div>
                <div className="p-3 md:p-4">
                  <p className="text-base md:text-[20px] lg:text-xl font-semibold text-gray-900 mb-3 md:mb-4">
                    {p.quote}
                  </p>
                  <p className="text-sm md:text-[16px] lg:text-base text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
