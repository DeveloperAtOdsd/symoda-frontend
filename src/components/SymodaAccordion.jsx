import { useState } from 'react'
import './SymodaAccordion.css'
import Gred from './Gred'
const phases = [
  {
    id: 1,
    title: 'Discovery & AI Opportunity Mapping',
    desc: 'Find the automation worth doing in 2–4 weeks.',
    list: [
      'Prioritized roadmap of automation opportunities',
      'ROI estimates and quick-win Technology recommendations',
      'Technology adoption and enablement strategy',
      'Governance and compliance framework roadmap',
      'Executive summary + board-ready business case',
    ],
    tags: ['Workflow', 'AuditROI', 'Readiness Score', 'Roadmap', 'Business Case'],
  },
  {
    id: 2,
    title: 'AI Technical Build & Product Development',
    desc: 'Design and build automation your team will actually use.',
    list: [
      'Workflow research and automation design',
      'Architecture and technical design',
      'Implementation and integration',
      'Testing and refinement',
      'Go-live support',
      'Handoff documentation',
    ],
    tags: [
      'Custom Workflows',
      'Architecture',
      'Integration',
      'Testing',
      'Go-live Support',
    ],
  },
  {
    id: 3,
    title: 'AI Managed Enablement',
    desc: 'Keep automation reliable, adopted, and governed.',
    list: [
      'Operations & Performance: Monitoring, tuning, optimization, uptime management',
      'Workforce Enablement: Role-specific training, peer coaching, champions programs, adoption tracking',
      'Governance & Compliance: Policy frameworks, risk management, audit trails, regulatory compliance support',
      'Strategic Scaling: Quarterly roadmap reviews, multi-use-case coordination, change management',
    ],
    tags: ['Monitoring', 'Role Training', 'Champions', 'Governance', 'Compliance'],
  },
]

function PlusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="7" y1="0" x2="7" y2="14" stroke="#0c0c0c" strokeWidth="1.5" />
      <line x1="0" y1="7" x2="14" y2="7" stroke="#0c0c0c" strokeWidth="1.5" />
    </svg>
  )
}

export default function SymodaAccordion() {
  const [active, setActive] = useState(1)

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id))
  }

  return (
    <section className="accordion">
      <Gred
        style={{

          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 70%, transparent 100%)',
        }}
      />
      <div className="container accordion__layout">
        {/* Left column */}
        <div className="accordion__left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="accordion__label">
              <span className="accordion__label-text">03 / HOW WE WORK</span>
              <span className="accordion__label-line" />
            </div>
            <h2 className="accordion__heading">
              <span className="font-light">Here's how</span>
              <br />
              <span className="font-medium">Symoda works.</span>
            </h2>
          </div>
          <div className="accordion__summary">
            <p className="accordion__summary-title">
              Discover → Build → Enable.
            </p>
            <p className="accordion__summary-sub">
              Start anywhere, follow the journey.
            </p>
          </div>
        </div>

        {/* Right column - Accordion */}
        <div className="accordion__panels">
          {phases.map((phase) => {
            const isOpen = active === phase.id

            return (
              <div key={phase.id} className="accordion__panel">
                <div className="accordion__panel-inner">
                  {/* Header */}
                  <div
                    className="accordion__panel-header"
                    onClick={() => toggle(phase.id)}
                  >
                    <div className="accordion__panel-text">
                      <div className="accordion__phase-label">
                        <span className="accordion__phase-text">
                          Phase {String(phase.id).padStart(2, '0')}
                        </span>
                        <span className="accordion__phase-line" />
                      </div>
                      <h3 className="accordion__panel-title">{phase.title}</h3>
                      <p className="accordion__panel-desc">{phase.desc}</p>
                    </div>
                    <div
                      className={`accordion__icon${isOpen ? ' accordion__icon--active' : ''}`}
                    >
                      <PlusIcon />
                    </div>
                  </div>

                  {/* Expandable content (list + tags) */}
                  <div
                    className={`accordion__panel-content${isOpen ? ' accordion__panel-content--open' : ''}`}
                  >
                    {phase.list.length > 0 && (
                      <ol className="accordion__panel-list">
                        {phase.list.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ol>
                    )}
                    <div className="accordion__tags">
                      {phase.tags.map((tag, i) => (
                        <span key={i} className="accordion__tag">
                          <span className="accordion__tag-text">{tag}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
