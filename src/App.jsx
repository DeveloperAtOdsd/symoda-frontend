import './App.css'
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

export default function App() {
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
