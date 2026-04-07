import { useEffect, useRef } from 'react'
import { getCalApi } from '@calcom/embed-react'
import './ContactOptions.css'

const CARD_TOP_BASE = 80
const CARD_TOP_STEP = 40

export default function ContactOptions() {
  const cardsRef = useRef([])

  useEffect(() => {
    ; (async () => {
      const cal = await getCalApi()
      cal('ui', { theme: 'light', styles: { branding: { brandColor: '#2132ed' } } })
    })()
  }, [])

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean)
    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-card--visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="contact-options">
      <div className="container contact-options__inner">
        {/* Left Column */}
        <div className="contact-options__left">
          <div className="contact-options__header">
            <div className="contact-options__label">
              <span className="contact-options__label-text">02 / CONTACT OPTIONS</span>
              <span className="contact-options__label-line" />
            </div>
            <h2 className="contact-options__heading">
              <span className="font-light">How would you like</span>
              <br />
              <span className="font-light">to </span>
              <span className="font-medium">connect?</span>
            </h2>
          </div>
          <div className="contact-options__description">
            <p>
              Choose the format that fits your stage. There's no wrong
              answer — we'll meet you where you are.
            </p>
          </div>
        </div>

        {/* Right Column – Stacking Option Cards */}
        <div className="contact-options__right">
          {/* Option 01 */}
          <div
            className="contact-card"
            ref={(el) => (cardsRef.current[0] = el)}
            style={{ top: `${CARD_TOP_BASE}px` }}
          >
            <div className="contact-card__label">
              <span className="contact-card__label-text">OPTION 01</span>
              <span className="contact-card__label-line" />
            </div>
            <div className="contact-card__content">
              <div className="contact-card__title-block">
                <h3 className="contact-card__title">Book a Working Session</h3>
                <p className="contact-card__subtitle">FOR: SPECIFIC AUTOMATION PROJECTS</p>
              </div>
              <p className="contact-card__text">
                You have a workflow in mind. Let's work through it together.
                <br />
                A focused 30-minute call — 15 min intro, 15 min understanding your specific
                workflow and what automation could look like.
              </p>
            </div>
            <button
              data-cal-link="developeratodsd/30min"
              data-cal-config='{"layout":"month_view"}'
              className="contact-card__cta"
            >
              <span className="contact-card__cta-text">Book 30-min call</span>
              <span className="contact-card__cta-arrow">→</span>
            </button>
          </div>

          {/* Option 02 */}
          <div
            className="contact-card"
            ref={(el) => (cardsRef.current[1] = el)}
            style={{ top: `${CARD_TOP_BASE + CARD_TOP_STEP}px` }}
          >
            <div className="contact-card__label">
              <span className="contact-card__label-text">OPTION 02</span>
              <span className="contact-card__label-line" />
            </div>
            <div className="contact-card__content">
              <div className="contact-card__title-block">
                <h3 className="contact-card__title">AI for Business Leaders</h3>
                <p className="contact-card__subtitle">FOR: LEADERS EXPLORING AUTOMATION POSSIBILITIES</p>
              </div>
              <p className="contact-card__text">
                A genuine 60-minute education session. Real examples from firms like yours,
                a framework for ROI and adoption, and honest answers to your questions.
              </p>
              <ul className="contact-card__list">
                <li>Where automation creates value in professional services</li>
                <li>Real examples from firms like yours</li>
                <li>A framework for thinking about ROI and adoption</li>
              </ul>
            </div>
            <button
              data-cal-link="developeratodsd/ai-for-business-leaders"
              data-cal-config='{"layout":"month_view"}'
              className="contact-card__cta"
            >
              <span className="contact-card__cta-text">Book 60-min session</span>
              <span className="contact-card__cta-arrow">→</span>
            </button>
          </div>

          {/* Option 03 */}
          <div
            className="contact-card"
            ref={(el) => (cardsRef.current[2] = el)}
            style={{ top: `${CARD_TOP_BASE + CARD_TOP_STEP * 2}px` }}
          >
            <div className="contact-card__label">
              <span className="contact-card__label-text">OPTION 03</span>
              <span className="contact-card__label-line" />
            </div>
            <div className="contact-card__content">
              <div className="contact-card__title-block">
                <h3 className="contact-card__title">Send Us Details</h3>
                <p className="contact-card__subtitle">FOR: THOSE WHO PREFER ASYNC COMMUNICATION</p>
              </div>
              <p className="contact-card__text">
                Not ready to book a call? Tell us about your situation. We'll review your
                details and follow up within 1 business day with a thoughtful response.
              </p>
            </div>
            <a href="#contact-form" className="contact-card__cta">
              <span className="contact-card__cta-text">Fill out the form</span>
              <span className="contact-card__cta-arrow">→</span>
            </a>
          </div>

          {/* Option 04 */}
          <div
            className="contact-card"
            ref={(el) => (cardsRef.current[3] = el)}
            style={{ top: `${CARD_TOP_BASE + CARD_TOP_STEP * 3}px` }}
          >
            <div className="contact-card__label">
              <span className="contact-card__label-text">OPTION 04</span>
              <span className="contact-card__label-line" />
            </div>
            <div className="contact-card__title-block">
              <h3 className="contact-card__title">EMAIL US DIRECTLY</h3>
              <p className="contact-card__subtitle">Wayne@symoda.com</p>
            </div>
            <a href="mailto:Wayne@symoda.com" className="contact-card__cta">
              <span className="contact-card__cta-text">Send mail</span>
              <span className="contact-card__cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="contact-faq__blob" />
    </section>
  )
}
