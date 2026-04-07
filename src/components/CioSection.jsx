import cioStrategy from '../assets/cio-strategy.png'
import cioVendor from '../assets/cio-vendor.png'
import cioBudget from '../assets/cio-budget.png'
import cioGovernance from '../assets/cio-governance.png'
import cioRisk from '../assets/cio-risk.png'
import cioRoadmap from '../assets/cio-roadmap.png'
import './CioSection.css'

const marqueeItems = [
  { icon: cioStrategy, label: 'Quarterly technology strategy sessions' },
  { icon: cioVendor, label: 'Vendor and tool evaluation and selection' },
  { icon: cioBudget, label: 'Budget and investment guidance' },
  { icon: cioGovernance, label: 'Governance framework development' },
  { icon: cioRisk, label: 'Risk and compliance advisory' },
  { icon: cioRoadmap, label: 'Long-term technology roadmap planning' },
]

function MarqueeTrack() {
  return (
    <div className="cio-marquee__track">
      {marqueeItems.map((item, i) => (
        <div key={i} className="cio-marquee__card">
          <img
            src={item.icon}
            alt=""
            className="cio-marquee__card-icon"
          />
          <span className="cio-marquee__card-label">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default function CioSection() {
  return (
    <section className="cio">
      {/* Top content */}
      <div className="container cio__content">
        {/* Left column */}
        <div className="cio__left">
          <div className="cio__label">
            <span className="cio__label-text">04 / YOUR CIO</span>
            <span className="cio__label-line" />
          </div>
          <h2 className="cio__heading">
            <span className="font-light">Need Technology Strategy?</span>
            <br />
            <span className="font-medium">We're Your CIO.</span>
          </h2>
        </div>

        {/* Right column */}
        <div className="cio__right">
          <p className="cio__description">
            CIO services are at the core of AI change adoption in the
            organization; CIOs help build a sustainable technology strategy which
            is difficult without in-house technology leadership.
            <br />
            <br />
            Our CIO Services give you executive-level guidance on priorities,
            tools, governance, and roadmaps; without the cost of a full-time
            hire
          </p>
          <a href="#book-session" className="cio__cta">
            <span>Book a working session</span>
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="cio-marquee">
        <MarqueeTrack />
        <MarqueeTrack />
      </div>
    </section>
  )
}
