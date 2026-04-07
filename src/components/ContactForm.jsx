import './ContactForm.css'

function TextField({ label, multiline = false, isSelect = false }) {
  const fieldClass = `contact__field${multiline ? ' contact__field--textarea' : ''}`

  if (isSelect) {
    return (
      <div className={fieldClass}>
        <select className="contact__select" defaultValue="" required>
          <option value="" disabled hidden></option>
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
        placeholder=" "
      />
      <label className="contact__field-label">{label}</label>
    </div>
  )
}

export default function ContactForm() {
  return (
    <section className="contact">
      <div className="container contact__inner">
      {/* Header */}
      <div className="contact__header">
        <div className="contact__hero">
          <div className="contact__heading-group" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="contact__label">
              <span className="contact__label-text">05 / AFTER YOU REACH</span>
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
          <TextField label="Organisation name*" />
          <TextField label="Your name & title*" />
          <TextField label="Email*" />
          <TextField label="Phone*" />
          <TextField label="What's your primary challenge or opportunity?*" multiline />
        </div>

        {/* Right column - dropdowns + textarea */}
        <div className="contact__col">
          <div className="contact__dropdown-group">
            <TextField label="Have you tried automation before?" isSelect />
            <TextField label="Which service interests you most?" isSelect />
            <TextField label="What session type?" isSelect />
            <TextField label="Timeframe?" isSelect />
          </div>
          <TextField label="Any other context?" multiline />
        </div>
      </div>

      {/* Footer */}
      <div className="contact__footer">
        <p className="contact__privacy">
          We respect your privacy. Your information is only used to respond to your inquiry.
        </p>
        <button type="submit" className="contact__cta">
          <span>Book a working session</span>
          <span className="arrow">→</span>
        </button>
      </div>
      </div>
    </section>
  )
}
