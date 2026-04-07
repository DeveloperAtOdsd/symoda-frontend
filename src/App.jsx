import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroHome from './components/HeroHome'
import ProblemsSection from './components/ProblemsSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SymodaAccordion from './components/SymodaAccordion'
import CioSection from './components/CioSection'
function App() {
  useEffect(() => {
    document.title = "Symoda Technology Group | AI-Powered Workflows That Ship, Stick & Scale"
  }, [])

  return (
    <>
      <Navbar />
      <HeroHome />
      <ProblemsSection />
      <SymodaAccordion />
      <CioSection />
      <ContactForm />
      <Footer />
    </>
  )
}

export default App
