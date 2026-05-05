import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import symodaIcon from '../assets/symoda-logo-icon.svg'
import symodaText from '../assets/symoda-logo-text.svg'
import './Navbar.css'

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY.current && currentY > 100)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar${hidden ? ' navbar--hidden' : ''}`}>
      <Link to="/" className="navbar__logo">
        <img src={symodaIcon} alt="Symoda" className="navbar__logo-icon" />
        <img
          src={symodaText}
          alt="Symoda Technology group"
          className="navbar__logo-text"
        />
      </Link>
      <Link to="/contact" className="navbar__contact">
        <span>Contact us </span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.000500023 6.54398V5.27998H9.2645L4.5925 0.863976L5.4405 -2.38419e-05L11.2005 5.53598V6.23998L5.4405 11.792L4.5765 10.912L9.2165 6.54398H0.000500023Z" fill="white" />
        </svg>
      </Link>
    </nav>
  )
}
