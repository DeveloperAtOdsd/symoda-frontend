import { useState } from 'react'
import './ContactForm.css'

function TextField({ label, name, value, onChange, multiline = false, isSelect = false, options = [] }) {
  const fieldClass = `contact__field${multiline ? ' contact__field--textarea' : ''}`

  if (isSelect) {
    return (
      <div className={fieldClass}>
        <select
          className="contact__select"
          name={name}
          value={value}
          onChange={onChange}
          required
        >
          <option value="" disabled hidden></option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
        <label className="contact__field-label">{label}</label>
      </div>
    )
  }

  if (multiline) {
    return (
      <div className={fieldClass}>
        <textarea
          className="contact__textarea"
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          rows={4}
        />
        <label className="contact__field-label">{label}</label>
      </div>
    )
  }

  return (
    <div className={fieldClass}>
      <input
        type="text"
        className="contact__input"
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label className="contact__field-label">{label}</label>
    </div>
  )
}

const initialForm = {
  organisation: '',
  name: '',
  email: '',
  phone: '',
  challenge: '',
  triedAutomation: '',
  serviceInterest: '',
  sessionType: '',
  timeframe: '',
  otherContext: '',
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const errData = await res.json().catch(() => null)
        throw new Error(errData?.error || 'Failed')
      }
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      console.error('Contact form error:', err.message)
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact-form">
      <form className="container contact__inner" onSubmit={handleSubmit}>
        {/* Header */}
        <div className="contact__header">
          <div className="contact__hero">
            <div className="contact__heading-group" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div className="contact__label">
                <span className="contact__label-text">05 / Send Us Details</span>
                <span className="contact__label-line" />
              </div>
              <h2 className="contact__heading">
                <span className="font-light">Let's get</span>
                <br />
                <span className="font-medium">started.</span>
              </h2>
            </div>
            <div className="contact__subtitle-wrap">
              <p className="contact__subtitle">
                Tell us about you. Takes about 3 minutes.
                <br />
                We read every submission personally.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact__form">
          {/* Left column - text inputs */}
          <div className="contact__col">
            <TextField label="Organisation name*" name="organisation" value={form.organisation} onChange={handleChange} />
            <TextField label="Your name & title*" name="name" value={form.name} onChange={handleChange} />
            <TextField label="Email*" name="email" value={form.email} onChange={handleChange} />
            <TextField label="Phone*" name="phone" value={form.phone} onChange={handleChange} />
            <TextField label="What's your primary challenge or opportunity?*" name="challenge" value={form.challenge} onChange={handleChange} multiline />
          </div>

          {/* Right column - dropdowns + textarea */}
          <div className="contact__col">
            <div className="contact__dropdown-group">
              <TextField
                label="Have you tried automation before?"
                name="triedAutomation"
                value={form.triedAutomation}
                onChange={handleChange}
                isSelect
                options={['Yes', 'No', 'Not sure']}
              />
              <TextField
                label="Which service interests you most?"
                name="serviceInterest"
                value={form.serviceInterest}
                onChange={handleChange}
                isSelect
                options={[
                  'Discovery & AI Opportunity Mapping',
                  'AI Technical Build & Product Development',
                  'AI Managed Enablement'
                ]}
              />
              <TextField
                label="What session type?"
                name="sessionType"
                value={form.sessionType}
                onChange={handleChange}
                isSelect
                options={[
                  'Book a Working Session (30 min)',
                  'AI for Business Leaders (60-minute)'
                ]}
              />
              <TextField
                label="Timeframe?"
                name="timeframe"
                value={form.timeframe}
                onChange={handleChange}
                isSelect
                options={[
                  'Two to four weeks',
                  'Three to six months',
                  'Six months to one year',
                  'One to three years'
                ]}
              />
            </div>
            <TextField label="Any other context?" name="otherContext" value={form.otherContext} onChange={handleChange} multiline />
          </div>
        </div>

        {/* Footer */}
        <div className="contact__footer">
          <p className="contact__privacy">
            We respect your privacy. Your information is only used to respond to your inquiry.
          </p>
          <button type="submit" className="contact__cta" disabled={status === 'sending'}>
            <span>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Submit enquiry'}
            </span>
            <span className="arrow">→</span>
          </button>
          {status === 'error' && (
            <p className="contact__error">Something went wrong. Please try again or email us directly.</p>
          )}
        </div>
      </form>
    </section>
  )
}
