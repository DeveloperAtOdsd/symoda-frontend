import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import StatsSection from './sections/StatsSection'
import TrustedBySection from './sections/TrustedBySection'
import ProblemsSection from './sections/ProblemsSection'
import HowSymodaWorksSection from './sections/HowSymodaWorksSection'
import TechStrategySection from './sections/TechStrategySection'
import ResultsSection from './sections/ResultsSection'
import CTASection from './sections/CTASection'
import ContactPage from './pages/ContactPage'

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <StatsSection />
      <TrustedBySection />
      <ProblemsSection />
      <HowSymodaWorksSection />
      <TechStrategySection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
