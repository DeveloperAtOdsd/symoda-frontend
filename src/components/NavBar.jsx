import { useEffect, useRef, useState } from 'react'
import imgLogoMark from '../assets/nav-logomark.svg'
import imgWordmark from '../assets/nav-wordmark.svg'
import imgHamburgerLine from '../assets/nav-hamburger-line.svg'

export default function NavBar() {
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const sectionActive = useRef(false)

  useEffect(() => {
    // Hide while HowSymodaWorksSection is pinned
    const onSectionActive = (e) => {
      sectionActive.current = e.detail
      lastY.current = window.scrollY
      setHidden(e.detail)
    }
    window.addEventListener('hsw:active', onSectionActive)

    // Hide on scroll down, show on scroll up
    const onScroll = () => {
      if (sectionActive.current) return
      const y = window.scrollY
      setHidden(y > lastY.current && y > 80)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('hsw:active', onSectionActive)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 max-w-[1440px] mx-auto px-4 md:px-6 pt-3 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <nav className="flex items-center justify-between px-4 sm:px-8 py-[10px] rounded-xl backdrop-blur-md bg-white/45 border border-white/30 shadow-sm">
        {/* Logo */}
        <a href='/' className="flex items-center gap-2 sm:gap-3 shrink-0">
          <img src={imgLogoMark} alt="" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <img src={imgWordmark} alt="Symoda Technology group" className="h-8 sm:h-10 w-auto max-w-[100px] sm:max-w-[120px] object-contain" />
        </a>
        <a
          href="/contact"
          className="
    inline-flex items-center justify-center gap-[8px] sm:gap-[10px]
    px-[14px] sm:px-[16px] py-[10px] sm:py-[12px]
    rounded-[10px] sm:rounded-[12px]
    border border-white/[0.27]
    bg-[#2132ED]
    text-white text-[14px] sm:text-[16px]
    leading-[20px] sm:leading-[24px]
    tracking-[-0.18px] font-medium
    transition-all duration-200
    active:scale-[0.96]
    sm:hover:opacity-90 sm:hover:scale-[0.98]
    group
  "
        >
          Contact
          <span
            className="
      inline-block transition-all duration-300 origin-left
      group-hover:translate-x-1 group-hover:scale-x-110
    "
          >
            →
          </span>
        </a>
      </nav>
    </div>
  )
}
