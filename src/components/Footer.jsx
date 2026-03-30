const imgLogoMark = 'http://localhost:3845/assets/2921cf546addd7eabd37588b4abae783127b1679.svg'
const imgWordmark = 'http://localhost:3845/assets/b4d06b502cc2e1e23b02b143177691557396dbe3.svg'
const imgArrow = 'http://localhost:3845/assets/719ae4a745786423f96f3de43521dd3aa2734f51.svg'

const companyLinks = ['About', 'How We Work', 'Contact']
const serviceLinks = ['Discovery & AI Opportunity Mapping', 'AI Technical Build', 'AI Managed Enablement']

export default function Footer() {
  return (
    <footer
      className="flex flex-col gap-6 pt-12 pb-8 px-4 md:px-8 w-full"
      style={{ background: 'linear-gradient(to bottom, #0f1ec3, #000000)' }}
    >
      {/* ── Desktop: logo sits above columns. Mobile: logo is inside first section ── */}

      {/* Desktop-only standalone logo */}
      <div className="hidden md:block relative h-[116px] w-[247px]">
        <img src={imgLogoMark} alt="" className="absolute top-0 right-0 w-[70px] h-[70px]" />
        <img src={imgWordmark} alt="Symoda Technology group" className="absolute bottom-0 left-0 w-[247px]" />
      </div>

      {/* Main columns */}
      <div className="flex flex-col md:flex-row md:gap-6 md:items-end w-full">

        {/* Left column — logo (mobile only) + description + CTA */}
        <div className="flex-1 flex flex-col gap-8 border-b border-white pb-6 md:px-6 md:h-[240px] md:justify-between">
          {/* Mobile-only logo */}
          <div className="relative h-[116px] w-[247px] md:hidden">
            <img src={imgLogoMark} alt="" className="absolute top-0 right-0 w-[70px] h-[70px]" />
            <img src={imgWordmark} alt="Symoda Technology group" className="absolute bottom-0 left-0 w-[247px]" />
          </div>

          <p className="text-white text-[16px] leading-[24px] tracking-[-0.18px] font-medium md:w-[416px]">
            AI-powered workflows that ship, stick, and scale across your organization. From strategy to sustained impact.
          </p>

          <a href="#" className="flex items-center gap-1 text-white text-[16px] leading-[24px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity">
            Get in touch
            <img src={imgArrow} alt="" className="w-6 h-4" />
          </a>
        </div>

        {/* Company */}
        <div className="flex-1 flex flex-col gap-5 items-start justify-end border-b border-white py-6 md:pb-6 md:pt-0 md:pr-6">
          <p className="text-white text-[24px] leading-[36px] tracking-[-0.47px] font-medium w-full">
            Company
          </p>
          {companyLinks.map((link) => (
            <a key={link} href="#" className="text-white text-[16px] leading-[20px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity px-2.5 py-2.5">
              {link}
            </a>
          ))}
        </div>

        {/* Services */}
        <div className="flex-1 flex flex-col gap-5 items-start justify-end border-b border-white py-6 md:pb-6 md:pt-0 md:pr-6">
          <p className="text-white text-[24px] leading-[36px] tracking-[-0.47px] font-medium w-full">
            Services
          </p>
          {serviceLinks.map((link) => (
            <a key={link} href="#" className="text-white text-[16px] leading-[20px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity px-2.5 py-2.5">
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      {/* Mobile: policy links full-width centered, then copyright centered */}
      {/* Desktop: copyright left, links right */}
      <div className="flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-6 w-full">
        <p className="flex-1 text-[#e6e6e6] text-[14px] leading-[20px] tracking-[-0.09px] font-medium text-center md:text-left">
          © 2026 Symoda Technology Group. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row md:gap-[21px] items-center">
          <a href="#" className="text-[#a8a8a8] text-[14px] leading-[20px] tracking-[-0.09px] font-medium hover:text-white transition-colors px-3 py-1 w-full md:w-auto text-center">
            Privacy Policy
          </a>
          <a href="#" className="text-[#a8a8a8] text-[14px] leading-[20px] tracking-[-0.09px] font-medium hover:text-white transition-colors px-3 py-1 w-full md:w-auto text-center">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  )
}
