import imgArrow from '../assets/arrow.svg'
import imgLogoMark from '../assets/logo.png'
import imgWordmark from '../assets/wordmark.svg'

const companyLinks = ['About', 'How We Work', 'Contact']
const serviceLinks = ['Discovery & AI Opportunity Mapping', 'AI Technical Build', 'AI Managed Enablement']

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-6 pt-12 pb-8 px-4 md:px-6 lg:px-8 w-full"
      style={{ background: 'linear-gradient(to bottom, #0f1ec3, #000000)' }}
    >
      {/* Desktop-only standalone logo (above columns) */}
      <div className="hidden lg:block relative h-[116px] w-[247px]">
        <img src={imgLogoMark} alt="" className="absolute top-0 -right-12 w-[70px] h-[70px] object-contain" />
        <img src={imgWordmark} alt="Symoda Technology group" className="absolute bottom-4 left-0 w-[247px]" />
      </div>

      {/* Main columns */}
      <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-end w-full">

        {/* Left column — logo (mobile+tablet) + description + CTA */}
        <div className="flex-1 flex flex-col gap-8 border-b border-white pb-6 lg:px-6 lg:h-[240px] lg:justify-between">
          {/* Logo — hidden on desktop (shown standalone above) */}
          <div className="relative h-[116px] w-[247px] lg:hidden">
            <img src={imgLogoMark} alt="" className="absolute top-0 -right-16 w-[70px] h-[70px] object-contain" />
            <img src={imgWordmark} alt="Symoda Technology group" className="absolute bottom-0 left-4 w-[247px]" />
          </div>

          <p className="text-white text-[15px] md:text-[16px] leading-[24px] tracking-[-0.18px] font-medium lg:w-[416px]">
            AI-powered workflows that ship, stick, and scale across your organization. From strategy to sustained impact.
          </p>

          <a href="#" className="flex items-center gap-1 text-white text-[16px] leading-[24px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity">
            Get in touch
            <img src={imgArrow} alt="" className="w-6 h-4" />
          </a>
        </div>

        {/* Company */}
        <div className="flex-1 flex flex-col gap-5 items-start justify-end border-b border-white py-6 lg:pb-6 lg:pt-0 lg:pr-6">
          <p className="text-white text-[20px] md:text-[24px] leading-[36px] tracking-[-0.47px] font-medium w-full">
            Company
          </p>
          {companyLinks.map((link) => (
            <a key={link} href="#" className="text-white text-[15px] md:text-[16px] leading-[20px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity px-2.5 py-2">
              {link}
            </a>
          ))}
        </div>

        {/* Services */}
        <div className="flex-1 flex flex-col gap-5 items-start justify-end border-b border-white py-6 lg:pb-6 lg:pt-0 lg:pr-6">
          <p className="text-white text-[20px] md:text-[24px] leading-[36px] tracking-[-0.47px] font-medium w-full">
            Services
          </p>
          {serviceLinks.map((link) => (
            <a key={link} href="#" className="text-white text-[15px] md:text-[16px] leading-[20px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity px-2.5 py-2">
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      {/* Mobile+Tablet: stacked (links then copyright), Desktop: single row */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-2 lg:gap-6 w-full">
        <p className="flex-1 text-[#e6e6e6] text-[13px] md:text-[14px] leading-[20px] tracking-[-0.09px] font-medium text-center lg:text-left">
          © 2026 Symoda Technology Group. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row lg:gap-[21px] items-center">
          <a href="#" className="text-[#a8a8a8] text-[13px] md:text-[14px] leading-[20px] tracking-[-0.09px] font-medium hover:text-white transition-colors px-3 py-1 w-full md:w-auto text-center">
            Privacy Policy
          </a>
          <a href="#" className="text-[#a8a8a8] text-[13px] md:text-[14px] leading-[20px] tracking-[-0.09px] font-medium hover:text-white transition-colors px-3 py-1 w-full md:w-auto text-center">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
