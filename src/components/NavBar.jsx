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
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-3 transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'
        }`}
    >
      <nav className="flex items-center justify-between px-8 py-[10px] rounded-xl backdrop-blur-md bg-white/45 border border-white/30 shadow-sm">
        {/* Logo */}
        <a href='/' className="flex items-center gap-3">
          <img src={imgLogoMark} alt="" className="w-10 h-10" />
          <img src={imgWordmark} alt="Symoda Technology group" className="h-10 w-30" />
        </a>

        {/* Hamburger */}
        {/* <button className="w-12 h-12 flex flex-col items-center justify-center gap-[7px]" aria-label="Menu">
          <img src={imgHamburgerLine} alt="" className="w-[35px] h-[3px]" />
          <img src={imgHamburgerLine} alt="" className="w-[35px] h-[3px]" />
          <img src={imgHamburgerLine} alt="" className="w-[35px] h-[3px]" />
        </button> */}

        <a href="/contact" className="text-gray-900 text-[16px] leading-[24px] tracking-[-0.18px] font-medium hover:opacity-80 transition-opacity">
          Contact
        </a>
      </nav>
    </div>
  )
}
