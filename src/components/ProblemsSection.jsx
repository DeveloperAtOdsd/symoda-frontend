import './ProblemsSection.css'

const problems = [
  {
    number: '01',
    quote: '\u201CWe tried AI pilots. They looked good. Then nobody used them.\u201D',
    description:
      'AI experiments that look great in demos but never make it into daily workflows. Most teams launch automation without understanding adoption barriers or change management. The technology works \u2014 people don\u2019t change their behaviour.',
    hasShadow: true,
  },
  {
    number: '02',
    quote: '\u201CWe\u2019re worried about governance and compliance as AI scales.\u201D',
    description:
      'Automation is everywhere now. Teams using ChatGPT, Copilot, and point tools in ad-hoc ways with no shared standards or governance. Most organizations have no governance frameworks, audit trails, or compliance practices. That\u2019s a business and legal risk.',
  },
  {
    number: '03',
    quote: '\u201CWe don\u2019t know where to start or what\u2019s realistic.\u201D',
    description:
      'Too many ideas. No clear ROI. Unclear priorities. Product and engineering backlogs that are already full, no capacity to design, ship, and sustain AI initiatives properly. You need a structured way to evaluate opportunities and build a strategy you can actually execute.',
  },
  {
    number: '04',
    quote: '\u201COur teams don\u2019t know how to use new tools effectively.\u201D',
    description:
      'Technology moves fast, and most people are playing catch-up. Executives under pressure to show AI impact without a clear way to measure ROI, govern risk, or enable workforce adoption. Your teams need role-specific training, peer champions, and ongoing coaching to integrate automation into daily work responsibly.',
  },
]

export default function ProblemsSection() {
  return (
    <section className="problems">
      {/* 👇 ADD BLOB HERE */}
      <div
        className="absolute rounded-full opacity-20 will-change-transform mix-blend-multiply"
        style={{
          width: '900px',
          height: '900px',
          top: '0',
          left: '0',
          transform: 'translate(-40%, -40%)',
          background: 'linear-gradient(180deg, #34B8F9 0%, #1143F8 100%)',
          filter: 'blur(92px)',
          zIndex: 0, // 👈 important
        }}
      />
      <div className="container problems__layout">
        {/* Left column */}
        <div className="problems__left">
          <div className="problems__label">
            <span className="problems__label-text">02 / PROBLEMS</span>
            <span className="problems__label-line" />
          </div>
          <h2 className="problems__heading">
            Here's what most AI
            <br />
            initiatives get wrong.
          </h2>
          <div className="problems__divider" />
          <p className="problems__subtitle">
            Four patterns we see across organizations, and why they stall.
          </p>
        </div>

        {/* Right column - Problem cards */}
        <div className="problems__cards">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className={`problems__card${problem.hasShadow ? ' problems__card--shadow' : ''}`}
            >
              <div className="problems__card-label">
                <span className="problems__card-label-text">
                  Problem {problem.number}
                </span>
                <span className="problems__card-label-line" />
              </div>
              <div className="problems__card-content">
                <div className="problems__card-quote-border">
                  <p className="problems__card-quote">{problem.quote}</p>
                </div>
                <p className="problems__card-description">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
