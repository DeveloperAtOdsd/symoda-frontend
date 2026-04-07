import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import Gred from './Gred'
import './ContactUsHero.css'

export default function ContactUsHero() {
  useEffect(() => {
    ; (async () => {
      const cal = await getCalApi()
      cal('ui', { theme: 'light', styles: { branding: { brandColor: '#2132ed' } } })
    })()
  }, [])

  return (
    <section className="contact-hero">
      <Gred />
      <div className="container contact-hero__inner">

        {/* Concentric Circles Visual */}
        <div className="contact-hero__visual">
          <div className="contact-hero__circle contact-hero__circle--outer" />
          <div className="contact-hero__circle contact-hero__circle--middle" />
          <div className="contact-hero__circle contact-hero__circle--inner" />
          <div className="contact-hero__center-dot" />

          {/* Floating Stat Cards */}
          <div className="contact-hero__stat-card contact-hero__stat-card--response">
            <span className="contact-hero__stat-value">1 day</span>
            <span className="contact-hero__stat-label">Response time</span>
          </div>
          <div className="contact-hero__stat-card contact-hero__stat-card--discovery">
            <span className="contact-hero__stat-value">2 wks</span>
            <span className="contact-hero__stat-label">Discovery sprint</span>
          </div>
          <div className="contact-hero__stat-card contact-hero__stat-card--intro">
            <span className="contact-hero__stat-value">60 min</span>
            <span className="contact-hero__stat-label">Intro session</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="contact-hero__section">
          <div className="contact-hero__top">
            <div className="contact-hero__label">
              <span className="contact-hero__label-text">01 / CONTACT & NEXT STEPS</span>
              <span className="contact-hero__label-line" />
            </div>
            <h1 className="contact-hero__heading">Let's talk.</h1>
          </div>

          <div className="contact-hero__bottom">
            <div className="contact-hero__description">
              <p>
                Whether you're just exploring automation or ready to scale,
                <br />
                we'd like to understand your challenges and see if Symoda is a good fit.
              </p>
            </div>
            <div className="contact-hero__actions">
              <button
                data-cal-link="developeratodsd/30min"
                data-cal-config='{"layout":"month_view"}'
                className="btn btn--primary"
              >
                <span>Book a working session</span>
                <span className="arrow">→</span>
              </button>
              <a href="#send-details" className="btn btn--outline">
                <span>Send us details</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
