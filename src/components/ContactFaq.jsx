import { useState } from 'react'
import './ContactFaq.css'

const FAQ_DATA = [
  {
    question: 'Do I have to do Discovery before Build?',
    answer:
      "Many clients do — it's our recommended path. But if you already know what you want to build, we can start with Build. If you've launched automation that isn't delivering adoption, we can start with AI Managed Enablement.",
  },
  {
    question: 'How long does this take?',
    answer:
      'Discovery typically takes 2 weeks. Build timelines vary based on complexity, but most projects launch within 6–8 weeks. We scope everything upfront so there are no surprises.',
  },
  {
    question: 'How do you measure success?',
    answer:
      'We define measurable outcomes during Discovery — time saved, error reduction, throughput gains. Every engagement includes clear KPIs so you can see the ROI in real terms.',
  },
  {
    question: 'Can you work with our existing team?',
    answer:
      'Absolutely. We embed alongside your team, not replace them. Our goal is to build capability within your organization so the solutions we create are sustainable long-term.',
  },
  {
    question: "What if this isn't the right fit?",
    answer:
      "We'll tell you. Our intro sessions are designed to be genuinely useful — if we don't think Symoda is the right solution for your situation, we'll say so and point you in the right direction.",
  },
  {
    question: 'Is "AI for Business Leaders" just sales talk?',
    answer:
      "No. It's a genuine education session. We cover real examples, frameworks for evaluating automation ROI, and honest answers to your questions. There's no pitch deck — just practical knowledge you can use whether you work with us or not.",
  },
]

export default function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className="contact-faq">
      <div className="container contact-faq__inner">
        {/* Left Column */}
        <div className="contact-faq__left">
          <div className="contact-faq__header">
            <div className="contact-faq__label">
              <span className="contact-faq__label-text">03 / FREQUENTLY ASKED</span>
              <span className="contact-faq__label-line" />
            </div>
            <h2 className="contact-faq__heading">
              <span className="font-light">Common</span>
              <br />
              <span className="font-medium">questions.</span>
            </h2>
            <div className="contact-faq__subheading">
              <p className="contact-faq__subheading-title">Discover → Build → Enable.</p>
              <p className="contact-faq__subheading-text">Start anywhere, follow the journey.</p>
            </div>
          </div>
        </div>

        {/* Right Column – Accordion */}
        <div className="contact-faq__right">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
              >
                <div
                  className="faq-item__question"
                  onClick={() => handleToggle(index)}
                >
                  <p className="faq-item__question-text">{item.question}</p>
                  <span className="faq-item__icon" />
                </div>
                {isOpen && (
                  <>
                    <div className="faq-item__divider" />
                    <div className="faq-item__answer">
                      <p>{item.answer}</p>
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
