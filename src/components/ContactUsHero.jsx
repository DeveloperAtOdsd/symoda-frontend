import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import Gred from './Gred'

export default function ContactUsHero() {
  useEffect(() => {
    ; (async () => {
      const cal = await getCalApi()
      cal('ui', { theme: 'light', styles: { branding: { brandColor: '#2132ed' } } })
    })()
  }, [])

  return (
    <section className="relative w-full h-[100vh] lg:h-[130vh] max-h-[900px] font-['Work_Sans',_sans-serif] overflow-x-clip">
      <Gred />

      <div className="relative flex flex-col items-center justify-end h-full px-[24px] lg:px-[104px] pb-[60px] lg:pb-[80px] w-full max-w-[1440px] mx-auto box-border z-10">

        {/* Hero Content */}
        <div className="flex flex-col gap-[32px] lg:gap-[48px] w-full">
          {/* Top Section */}
          <div className="flex flex-col gap-[16px] lg:gap-[24px] w-full items-start">
            <div className="flex items-center gap-[16px]">
              <span className="font-bold text-[10px] lg:text-[12px] text-[#2132ed] tracking-[1.3px] whitespace-nowrap uppercase">
                01 / CONTACT & NEXT STEPS
              </span>
              <span className="h-px w-[48px] bg-[#2132ed] shrink-0" />
            </div>
            <h1 className="font-semibold text-[48px] leading-[56px] lg:text-[72px] lg:leading-[86px] tracking-[-1.61px] text-black m-0" style={{ fontFeatureSettings: "'zero'" }}>
              Let's talk.
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between pt-[32px] lg:pt-[49px] border-t border-[rgba(12,12,12,0.2)] w-full gap-[24px] lg:gap-0">
            <div className="max-w-full lg:max-w-[480px] lg:flex-[1_0_0]">
              <p className="font-normal text-[16px] leading-[28px] lg:leading-[30px] text-[#2e2e2e] tracking-[0.1px] m-0">
                Whether you're just exploring automation or ready to scale,
                <br className="hidden lg:block" />
                <span className="lg:hidden"> </span>
                we'd like to understand your challenges and see if Symoda is a good fit.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-[12px] lg:gap-[20px] items-stretch w-full sm:w-auto">
              <button
                data-cal-link="developeratodsd/30min"
                data-cal-config='{"layout":"month_view"}'
                className="flex items-center justify-center gap-[10px] px-[20px] lg:px-[33px] py-[12px] lg:py-[16px] bg-[#1400ff] border border-[#1400ff] rounded-[5px] text-white font-normal text-[14px] lg:text-[16px] tracking-[0.1px] whitespace-nowrap transition-opacity hover:opacity-90"
              >
                <span>Book a working session</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.000500023 6.54398V5.27998H9.2645L4.5925 0.863976L5.4405 -2.38419e-05L11.2005 5.53598V6.23998L5.4405 11.792L4.5765 10.912L9.2165 6.54398H0.000500023Z" fill="white" />
                </svg>

              </button>
              <a
                href="#contact-form"
                className="flex items-center justify-center gap-[10px] px-[20px] lg:px-[33px] py-[12px] lg:py-[16px] bg-transparent border border-[rgba(12,12,12,0.22)] rounded-[5px] text-[#2e2e2e] font-normal text-[14px] lg:text-[16px] tracking-[0.1px] whitespace-nowrap transition-colors hover:bg-black/5"
              >
                <span>Send us details</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.000500023 6.54398V5.27998H9.2645L4.5925 0.863976L5.4405 -2.38419e-05L11.2005 5.53598V6.23998L5.4405 11.792L4.5765 10.912L9.2165 6.54398H0.000500023Z" fill="#0C0C0C" />
                </svg>


              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
