import { useState } from 'react'
import './ContactForm.css'

function TextField({ label, name, value, onChange, error, required = false, multiline = false, isSelect = false, options = [] }) {
  const fieldClass = `contact__field${multiline ? ' contact__field--textarea' : ''}${error ? ' contact__field--error' : ''}`

  if (isSelect) {
    return (
      <div className={fieldClass}>
        <select
          className="contact__select"
          name={name}
          value={value}
          onChange={onChange}
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
          required={required}
        />
        <label className="contact__field-label">{label}</label>
        {error && <span className="contact__field-error">{error}</span>}
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
        required={required}
      />
      <label className="contact__field-label">{label}</label>
      {error && <span className="contact__field-error">{error}</span>}
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

const requiredFields = {
  organisation: 'Organisation name is required',
  name: 'Name & title is required',
  email: 'Email is required',
  phone: 'Phone is required',
  challenge: 'Please describe your primary challenge',
}

function validateForm(form) {
  const errors = {}
  for (const [field, message] of Object.entries(requiredFields)) {
    if (!form[field].trim()) errors[field] = message
  }
  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Please enter a valid email address'
  }
  return errors
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
    if (status === 'sent' || status === 'error') setStatus('idle')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateForm(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
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
            <TextField label="Organisation name*" name="organisation" value={form.organisation} onChange={handleChange} error={errors.organisation} required />
            <TextField label="Your name & title*" name="name" value={form.name} onChange={handleChange} error={errors.name} required />
            <TextField label="Email*" name="email" value={form.email} onChange={handleChange} error={errors.email} required />
            <TextField label="Phone*" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} required />
            <TextField label="What's your primary challenge or opportunity?*" name="challenge" value={form.challenge} onChange={handleChange} error={errors.challenge} required multiline />
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
              {status === 'sending' ? 'Sending...' : 'Book a working session'}
            </span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.000500023 6.54398V5.27998H9.2645L4.5925 0.863976L5.4405 -2.38419e-05L11.2005 5.53598V6.23998L5.4405 11.792L4.5765 10.912L9.2165 6.54398H0.000500023Z" fill="white" />
            </svg>

          </button>
        </div>

        {status === 'sent' && (
          <div className="contact__success">
            <div className="contact__success-icon">&#10003;</div>
            <h3 className="contact__success-title">Thank you for reaching out!</h3>
            <p className="contact__success-text">
              We've received your details and will get back to you within 1 business day.
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="contact__error-banner">
            <p>Something went wrong. Please try again or email us directly at <a href="mailto:Wayne@symoda.com">Wayne@symoda.com</a></p>
          </div>
        )}
      </form>
    </section>
  )
}
