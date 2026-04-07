import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ContactUsHero from '../components/ContactUsHero'
import ContactOptions from '../components/ContactOptions'
import ContactFaq from '../components/ContactFaq'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us | Symoda Technology Group"
  }, [])

  return (
    <>
      <Navbar />
      <ContactUsHero />
      <ContactOptions />
      <ContactFaq />
      <ContactForm />
      <Footer />
    </>
  )
}
