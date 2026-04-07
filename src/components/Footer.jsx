import { Link } from 'react-router-dom'
import imgArrow from '../assets/arrow.svg'
import imgLogoMark from '../assets/logo.png'
import imgWordmark from '../assets/wordmark.svg'

export default function Footer() {
  return (
    <footer style={{ background: 'linear-gradient(to top, #000000, #0f1ec3)' }}>
      <div className="flex flex-col gap-6 lg:gap-[42px] pt-12 pb-6 lg:pb-8 px-4 lg:px-8 w-full max-w-[1440px] mx-auto">
        {/* Main content area */}
        <div className="flex flex-col gap-6">
          {/* Logo + Description + Company — stacked on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row lg:gap-6 lg:items-end w-full">

            {/* Left — Logo + Description + CTA */}
            <div className="flex flex-col gap-5 border-b border-white pb-6 lg:flex-1 lg:pr-6">
              {/* Logo */}
              <div className="relative h-[116px] w-[247px]">
                <img src={imgLogoMark} alt="" className="absolute top-4 left-[222px] w-[70px] h-[70px] object-contain" />
                <img src={imgWordmark} alt="Symoda Technology group" className="absolute bottom-0 left-0 w-[247px] h-[74px]" />
              </div>

              <div className="flex flex-col gap-8 pb-6">
                <p className="text-white text-base leading-6 tracking-[-0.18px] font-medium lg:w-[416px]">
                  AI-powered workflows that ship, stick, and scale across your organization. From strategy to sustained impact.
                </p>
                <Link to="/contact" className="flex items-center text-white text-base leading-6 tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity w-[131px]">
                  Get in touch
                  <img src={imgArrow} alt="" className="w-6 h-4" />
                </Link>
              </div>
            </div>

            {/* Right — Company */}
            <div className="flex flex-col gap-5 border-b border-white pb-6 pr-6 lg:flex-1 justify-end">
              <p className="text-white text-2xl leading-9 tracking-[-0.47px] font-medium w-full">
                Company
              </p>
              <Link to="/contact" className="text-white text-base leading-5 tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity p-2.5">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        {/* Mobile: stacked vertically, centered (links → copyright) */}
        {/* Desktop: single row (copyright left, links right) */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 w-full">
          {/* Legal links — stacked on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row gap-[21px] items-center lg:items-center lg:order-2">
            <a href="#" className="text-[#a8a8a8] text-sm leading-5 tracking-[-0.09px] font-medium hover:text-white transition-colors px-3 py-1 text-center">
              Privacy Policy
            </a>
            <a href="#" className="text-[#a8a8a8] text-sm leading-5 tracking-[-0.09px] font-medium hover:text-white transition-colors px-3 py-1 text-center">
              Terms of Service
            </a>
          </div>
          {/* Copyright */}
          <p className="flex-1 text-[#e6e6e6] text-sm leading-5 tracking-[-0.09px] font-medium text-center lg:text-left lg:order-1">
            © 2026 Symoda Technology Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
