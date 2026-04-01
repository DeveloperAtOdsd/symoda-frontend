import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import imgArrow from '../assets/contact-icon-arrow.svg'

gsap.registerPlugin(ScrollTrigger)

// TODO: Replace with your actual Cal.com links
const CAL_LINK_30 = 'developer/30min'
const CAL_LINK_60 = 'developer/60min'
import icon1 from '../assets/contact-card1-icon.png'
import icon2 from '../assets/contact-card2-icon.png'
import icon3 from '../assets/contact-card3-icon.png'
import icon4 from '../assets/contact-card4-icon.png'

export default function ContactOptionsSection() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo('.co-header > *', { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.15, ease: 'power3.out', duration: 0.7,
        scrollTrigger: { trigger: '.co-header', start: 'top 85%' },
      })

      // Horizontal scroll — desktop only
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current
        const content = contentRef.current
        if (!track || !content) return

        // How far the track needs to translate: total track width minus visible container width
        const getScrollAmount = () => {
          const trackWidth = track.scrollWidth
          const containerWidth = content.offsetWidth
          return trackWidth - containerWidth
        }

        gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 0.5,
            // Pin starts when the section top hits the viewport top (perfectly fits screen)
            start: 'top top',
            // Pin ends after scrolling enough to reveal all cards
            end: () => '+=' + getScrollAmount(),
            invalidateOnRefresh: true,
          },
        })
      })

      // Mobile — vertical stagger
      mm.add('(max-width: 767px)', () => {
        gsap.fromTo('.co-card', { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, stagger: 0.12, ease: 'power3.out', duration: 0.6,
          scrollTrigger: { trigger: '.co-cards', start: 'top 85%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="bg-[#f5f5f5] w-full md:h-screen relative z-10">
      {/* Inner content — fills the pinned viewport, uses flex column to stack header + cards */}
      <div ref={contentRef} className="max-w-[1440px] mx-auto h-full w-full px-[16px] md:px-[32px] py-[32px] md:py-[36px] lg:py-[48px] flex flex-col gap-[24px] md:gap-[32px] lg:gap-[42px] items-start">

        {/* Section header */}
        <div className="co-header flex flex-col gap-[20px] md:gap-[24px] lg:gap-[36px] items-start w-full shrink-0">
          {/* Tag */}
          <div className="border-[1.5px] border-black/[0.27] flex gap-[12px] items-center justify-center px-[16px] py-[10px] md:py-[12px] rounded-full shrink-0">
            <p className="font-normal leading-[20px] text-[#171717] text-[14px] tracking-[-0.09px] whitespace-nowrap">
              CONTACT OPTIONS
            </p>
          </div>

          {/* Text block */}
          <div className="flex flex-col gap-[12px] md:gap-[16px] lg:gap-[24px] items-start text-[#171717] w-full">
            <div className="font-medium leading-[0] text-[36px] md:text-[40px] lg:text-5xl tracking-[-1.25px] w-full">
              <p className="leading-[46px] md:leading-[52px] lg:leading-[64px] mb-0">How would you like</p>
              <p className="leading-[46px] md:leading-[52px] lg:leading-[64px]">to connect?</p>
            </div>
            <p className="font-normal leading-[20px] md:leading-[28px] lg:leading-[36px] text-[16px] md:text-xl lg:text-2xl tracking-[-0.47px] w-full">
              Choose the format that fits your stage. There's no wrong answer — we'll meet you where you are.
            </p>
          </div>
        </div>

        {/* Cards row — takes remaining space, clips overflow for horizontal scroll */}
        <div className="w-full flex-1 min-h-0">
          <div ref={trackRef} className="co-cards flex flex-col md:flex-row gap-[24px] items-start h-full md:w-max md:will-change-transform">

            {/* Card 01 */}
            <div className="co-card bg-white flex flex-col gap-[16px] md:gap-[20px] lg:gap-[32px] min-h-0 md:h-full items-start p-[16px] md:p-[20px] rounded-[12px] md:shrink-0 w-full md:w-[480px] lg:w-[580px] xl:w-[676px]">
              <p className="font-normal leading-[20px] text-[#2132ed] text-[14px] md:text-[16px] tracking-[1px] whitespace-nowrap">
                OPTION 01
              </p>
              <div className="flex flex-1 flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] items-start min-h-0 w-full">
                <div className="bg-[#f2f2f2] flex items-center justify-center p-[8px] md:p-[10px] rounded-[12px] shrink-0">
                  <img alt="" className="size-[40px] md:size-[50px] lg:size-[61px] object-cover" src={icon1} />
                </div>
                <div className="flex flex-col gap-[8px] md:gap-[12px] items-start text-black w-full">
                  <p className="font-medium leading-[28px] md:leading-[32px] lg:leading-[36px] text-[18px] md:text-[20px] lg:text-[24px] tracking-[-0.69px] w-full">
                    Book a Working Session
                  </p>
                  <p className="font-normal leading-[20px] text-[14px] md:text-[16px] tracking-[-0.89px] w-full">
                    FOR: SPECIFIC AUTOMATION PROJECTS
                  </p>
                </div>
                <p className="font-normal leading-[26px] md:leading-[30px] lg:leading-[36px] text-[#171717] text-[15px] md:text-[17px] lg:text-[20px] tracking-[-0.47px] whitespace-pre-wrap">
                  {`You have a workflow in mind. Let's work through it together. `}
                  <br />A focused 30-minute call — 15 min intro, 15 min understanding your specific workflow and what automation could look like.
                </p>
              </div>
              <button data-cal-link={CAL_LINK_30} data-cal-config='{"layout":"month_view"}' className="group bg-[#f0f1fe] border border-black/[0.17] flex gap-[10px] items-center justify-center px-[20px] md:px-[24px] py-[12px] md:py-[16px] hover:pr-[32px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-all duration-300">
                <span className="font-normal leading-[24px] md:leading-[28px] text-[#2132ed] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.33px] whitespace-nowrap">Book 30-min call</span>
                <img alt="" className="size-[16px] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-x-150 origin-left" src={imgArrow} />
              </button>
            </div>

            {/* Card 02 */}
            <div className="co-card bg-white flex flex-col gap-[16px] md:gap-[20px] lg:gap-[32px] min-h-0 md:h-full items-start p-[16px] md:p-[20px] rounded-[12px] md:shrink-0 w-full md:w-[480px] lg:w-[580px] xl:w-[676px]">
              <p className="font-normal leading-[20px] text-[#2132ed] text-[14px] md:text-[16px] tracking-[1px] whitespace-nowrap">
                OPTION 02
              </p>
              <div className="flex flex-1 flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] items-start min-h-0 w-full">
                <div className="bg-[#f2f2f2] flex items-center justify-center p-[8px] md:p-[10px] rounded-[12px] shrink-0">
                  <img alt="" className="size-[40px] md:size-[50px] lg:size-[61px] object-cover" src={icon2} />
                </div>
                <div className="flex flex-col gap-[8px] md:gap-[12px] items-start text-black w-full">
                  <p className="font-medium leading-[28px] md:leading-[32px] lg:leading-[36px] text-[18px] md:text-[20px] lg:text-[24px] tracking-[-0.69px] w-full">
                    AI for Business Leaders
                  </p>
                  <p className="font-normal leading-[20px] text-[14px] md:text-[16px] tracking-[-0.89px] w-full">
                    FOR: LEADERS EXPLORING AUTOMATION POSSIBILITIES
                  </p>
                </div>
                <p className="font-normal leading-[26px] md:leading-[30px] lg:leading-[36px] text-[#171717] text-[15px] md:text-[17px] lg:text-[20px] tracking-[-0.47px]">
                  A genuine 60-minute education session. Real examples from firms like yours, a framework for ROI and adoption, and honest answers to your questions.
                </p>
                <ul className="list-disc font-normal leading-[0] text-[#171717] text-[15px] md:text-[17px] lg:text-[20px] tracking-[-0.47px]">
                  <li className="mb-0 ms-[30px]"><span className="leading-[26px] md:leading-[30px] lg:leading-[36px]">Where automation creates value in professional services</span></li>
                  <li className="mb-0 ms-[30px]"><span className="leading-[26px] md:leading-[30px] lg:leading-[36px]">Real examples from firms like yours</span></li>
                  <li className="ms-[30px]"><span className="leading-[26px] md:leading-[30px] lg:leading-[36px]">A framework for thinking about ROI and adoption</span></li>
                </ul>
              </div>
              <button data-cal-link={CAL_LINK_60} data-cal-config='{"layout":"month_view"}' className="group bg-[#f0f1fe] border border-black/[0.17] flex gap-[10px] items-center justify-center px-[20px] md:px-[24px] py-[12px] md:py-[16px] hover:pr-[32px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-all duration-300">
                <span className="font-normal leading-[24px] md:leading-[28px] text-[#2132ed] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.33px] whitespace-nowrap">Book 60-min session</span>
                <img alt="" className="size-[16px] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-x-150 origin-left" src={imgArrow} />
              </button>
            </div>

            {/* Card 03 */}
            <div className="co-card bg-white flex flex-col gap-[16px] md:gap-[20px] lg:gap-[32px] min-h-0 md:h-full items-start p-[16px] md:p-[20px] rounded-[12px] md:shrink-0 w-full md:w-[480px] lg:w-[580px] xl:w-[676px]">
              <p className="font-normal leading-[20px] text-[#2132ed] text-[14px] md:text-[16px] tracking-[1px] whitespace-nowrap">
                OPTION 03
              </p>
              <div className="flex flex-1 flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] items-start min-h-0 w-full">
                <div className="bg-[#f2f2f2] flex items-center justify-center p-[8px] md:p-[10px] rounded-[12px] shrink-0">
                  <img alt="" className="size-[40px] md:size-[50px] lg:size-[61px] object-cover" src={icon3} />
                </div>
                <div className="flex flex-col gap-[8px] md:gap-[12px] items-start text-black w-full">
                  <p className="font-medium leading-[28px] md:leading-[32px] lg:leading-[36px] text-[18px] md:text-[20px] lg:text-[24px] tracking-[-0.69px] w-full">
                    Send Us Details
                  </p>
                  <p className="font-normal leading-[20px] text-[14px] md:text-[16px] tracking-[-0.89px] w-full">
                    FOR: THOSE WHO PREFER ASYNC COMMUNICATION
                  </p>
                </div>
                <p className="font-normal leading-[26px] md:leading-[30px] lg:leading-[36px] text-[#171717] text-[15px] md:text-[17px] lg:text-[20px] tracking-[-0.47px]">
                  Not ready to book a call? Tell us about your situation. We'll review your details and follow up within 1 business day with a thoughtful response.
                </p>
              </div>
              <button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-[#f0f1fe] border border-black/[0.17] flex gap-[10px] items-center justify-center px-[20px] md:px-[24px] py-[12px] md:py-[16px] hover:pr-[32px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-all duration-300">
                <span className="font-normal leading-[24px] md:leading-[28px] text-[#2132ed] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.33px] whitespace-nowrap">Fill out the form</span>
                <img alt="" className="size-[16px] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-x-150 origin-left" src={imgArrow} />
              </button>
            </div>

            {/* Card 04 */}
            <div className="co-card bg-white flex flex-col gap-[16px] md:gap-[20px] lg:gap-[32px] min-h-0 md:h-full items-start p-[16px] md:p-[20px] rounded-[12px] md:shrink-0 w-full md:w-[480px] lg:w-[580px] xl:w-[676px]">
              <p className="font-normal leading-[20px] text-[#2132ed] text-[14px] md:text-[16px] tracking-[1px] whitespace-nowrap">
                OPTION 04
              </p>
              <div className="flex flex-1 flex-col gap-[12px] md:gap-[16px] lg:gap-[20px] items-start min-h-0 w-full">
                <div className="bg-[#f2f2f2] flex items-center justify-center p-[8px] md:p-[10px] rounded-[12px] shrink-0">
                  <img alt="" className="size-[40px] md:size-[50px] lg:size-[61px] object-cover" src={icon4} />
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="font-medium leading-[28px] md:leading-[32px] lg:leading-[36px] text-[18px] md:text-[20px] lg:text-[24px] text-black tracking-[-0.69px] w-full">
                    EMAIL US DIRECTLY
                  </p>
                </div>
                <a href="mailto:Wayne@symoda.com" target="_blank" rel="noreferrer" className="font-normal leading-[26px] md:leading-[30px] lg:leading-[36px] text-[#171717] text-[15px] md:text-[17px] lg:text-[20px] tracking-[-0.47px] underline [text-decoration-skip-ink:none]">
                  Wayne@symoda.com
                </a>
              </div>
              <button className="group bg-[#f0f1fe] border-2 border-[#999ff7] flex gap-[10px] items-center justify-center px-[20px] md:px-[24px] py-[12px] md:py-[16px] hover:pr-[32px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-all duration-300">
                <span className="font-normal leading-[24px] md:leading-[28px] text-[#2132ed] text-[16px] md:text-[18px] lg:text-[20px] tracking-[-0.33px] whitespace-nowrap">Send mail</span>
                <img alt="" className="size-[16px] transition-all duration-300 group-hover:translate-x-1 group-hover:scale-x-150 origin-left" src={imgArrow} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
