import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import Gred from './Gred'
import './HeroHome.css'

export default function HeroHome() {
  useEffect(() => {
    ;(async () => {
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
                data-cal-link="developer/30min"
                data-cal-config='{"layout":"month_view"}'
                className="btn btn--primary"
              >
                <span>Book a working session</span>
                <span className="arrow">→</span>
              </button>
              <a href="#book-intro" className="btn btn--outline">
                <span>Book intro</span>
                <span className="arrow">→</span>
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
