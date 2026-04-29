import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import Gred from './Gred'
import './HeroHome.css'

export default function HeroHome() {
  useEffect(() => {
    ; (async () => {
      const cal = await getCalApi()
      cal('ui', { theme: 'light', styles: { branding: { brandColor: '#2132ed' } } })
    })()
  }, [])

  return (
    <section className="hero-home">
      <Gred />
      <div className="container hero-home__container">
        {/* Hero Content */}
        <div className="hero-section">
          <div className="hero-section__top">
            <div className="hero-section__label">
              <span className="hero-section__label-text">01 / PRACTICAL AI & TECHNOLOGY FOR BUSINESS</span>
              <span className="hero-section__label-line" />
            </div>
            <h1 className="hero-section__heading">
              <span className="font-semibold">Speed up</span>
              <span className="font-light"> decisions.</span>
              <br />
              <span className="font-light">Scale </span>
              <span className="font-semibold">operations</span>
              <span className="font-light">.</span>
              <br />
              <span className="font-light">Cut busy </span>
              <span className="font-semibold">work</span>
              <span className="font-light">.</span>
            </h1>
          </div>

          <div className="hero-section__bottom">
            <div className="hero-section__description">
              <p>Practical Technology & AI solutions that pay for themselves.</p>
              <p>We solve the work that slows your team down — so you can </p>
              <p>move faster, serve more, and grow exponentially.</p>
            </div>
            <div className="hero-section__actions">
              <button
                data-cal-link="developeratodsd/30min"
                data-cal-config='{"layout":"month_view"}'
                className="btn btn--primary"
              >
                <span>Book a working session</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.000500023 6.54398V5.27998H9.2645L4.5925 0.863976L5.4405 -2.38419e-05L11.2005 5.53598V6.23998L5.4405 11.792L4.5765 10.912L9.2165 6.54398H0.000500023Z" fill="white" />
                </svg>

              </button>
              <a href="#contact-form" className="btn btn--outline">
                <span>Book intro</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.000500023 6.54398V5.27998H9.2645L4.5925 0.863976L5.4405 -2.38419e-05L11.2005 5.53598V6.23998L5.4405 11.792L4.5765 10.912L9.2165 6.54398H0.000500023Z" fill="#0C0C0C" />
                </svg>

              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-indicator__dot" />
        </div>
      </div>
    </section>
  )
}
