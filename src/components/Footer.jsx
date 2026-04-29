import { Link } from 'react-router-dom'
import imgLogoMark from '../assets/logo.png'
import imgWordmark from '../assets/wordmark.svg'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-[#0f1ec3] flex flex-col w-full relative">
      <div className="flex flex-col gap-[24px] lg:gap-[42px] px-[24px] pt-[48px] pb-[24px] lg:px-[104px] lg:py-[48px] w-full max-w-[1440px] mx-auto">
        {/* Logo Container */}
        <div className="relative shrink-0 flex flex-col items-center lg:items-start">
          <div className="relative h-[116px] w-[302px] shrink-0 self-start">
            <img src={imgLogoMark} alt="" className="absolute top-4 left-[223px] w-[70px] h-[70px] object-contain" />
            <img src={imgWordmark} alt="Symoda Technology group" className="absolute top-[42px] left-0 w-[247px] h-[74px]" />
          </div>
        </div>

        {/* Text and Divider */}
        <div className="border-b border-white pb-[24px] pr-0 lg:pr-[24px] w-full mt-[-4px] lg:mt-0">
          <p className="font-['Work_Sans',_sans-serif] font-medium lg:font-normal text-[16px] text-white tracking-[-0.18px] lg:tracking-[0.1px] leading-[24px] lg:leading-[30px]">
            Practical Technology & AI solutions that pay for themselves.
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col-reverse lg:flex-row gap-[24px] items-center w-full justify-between">
          <div className="flex flex-col w-full lg:flex-1">
            <p className="font-['Work_Sans',_sans-serif] font-medium lg:font-normal text-[14px] lg:text-[16px] text-[#e6e6e6] lg:text-white tracking-[-0.09px] lg:tracking-[0.1px] leading-[20px] lg:leading-[28px] text-center lg:text-left">
              © 2026 Symoda Technology Group. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-[21px] lg:gap-[24px] items-center justify-center shrink-0 w-full lg:w-auto">
            <Link to="#" className="font-['Work_Sans',_sans-serif] font-medium text-[14px] text-[#a8a8a8] hover:text-white transition-colors tracking-[-0.09px] leading-[20px] text-center px-[12px] py-[4px] w-full lg:w-auto">
              Privacy Policy
            </Link>
            <Link to="#" className="font-['Work_Sans',_sans-serif] font-medium text-[14px] text-[#a8a8a8] hover:text-white transition-colors tracking-[-0.09px] leading-[20px] text-center px-[12px] py-[4px] w-full lg:w-auto">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
