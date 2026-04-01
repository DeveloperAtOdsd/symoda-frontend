import './App.css'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      {/* <StatsSection />
      <TrustedBySection /> */}
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
      duration: 0.6,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      autoRaf: false,
    })

    // Connect Lenis scroll events to ScrollTrigger so they stay in sync
    lenis.on('scroll', ScrollTrigger.update)

    // Drive Lenis from GSAP's ticker instead of a raw rAF loop
    const onTick = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}
