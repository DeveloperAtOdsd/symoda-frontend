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
        <span>Contact us</span>
        <span className="arrow">→</span>
      </Link>
    </nav>
  )
}
