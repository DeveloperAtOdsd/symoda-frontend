import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Gred from '../components/Gred'
import ContactOptionsSection from '../sections/ContactOptionsSection'
import imgArrow from '../assets/arrow.svg'
import imgSendIcon from '../assets/contact-send-icon.svg'
import imgCirclesOuter from '../assets/contact-circles-outer.svg'
import imgCirclesMid from '../assets/contact-circles-mid.svg'
import imgCirclesInner from '../assets/contact-circles-inner.png'

/* ── Floating stat card ── */
function StatCard({ value, label, className }) {
  return (
    <div
      className={`absolute bg-white border border-black/10 rounded-xl shadow-[0px_8px_32px_0px_rgba(13,13,13,0.08)] px-[17px] py-[13px] flex flex-col gap-[3px] whitespace-nowrap ${className}`}
    >
      <span className="font-['DM_Mono',monospace] font-medium text-[22px] leading-[22px] text-[#0d0d0d]">
        {value}
      </span>
      <span className="text-[11px] leading-normal tracking-[0.44px] text-[#7a7a7a] font-normal">
        {label}
      </span>
    </div>
  )
}

/* ── Concentric circles + stat cards ── */
function CirclesVisual() {
  return (
    <div className="relative shrink-0 w-[430px] h-[430px]">
      {/* Outer circle */}
      <img src={imgCirclesOuter} alt="" className="absolute top-[15px] left-[30px] w-[400px] h-[400px]" />
      {/* Middle ring */}
      <img src={imgCirclesMid} alt="" className="absolute top-[55px] left-[70px] w-[320px] h-[320px]" />
      {/* Inner fill */}
      <img src={imgCirclesInner} alt="" className="absolute top-[100px] left-[115px] w-[230px] h-[230px]" />

      {/* Center blue dot */}
      <div className="absolute top-[191px] left-[206px] size-[48px] bg-[#1a1aff] rounded-2xl">
        <div className="absolute inset-0 -translate-x-0 rounded-2xl shadow-[0px_0px_0px_8px_rgba(26,26,255,0.12),0px_0px_0px_20px_rgba(26,26,255,0.05)]" />
      </div>

      {/* Stat cards */}
      <StatCard value="1 day" label="Response time" className="top-[40px] -left-[10px]" />
      <StatCard value="2 wks" label="Discovery sprint" className="bottom-[50px] left-[48px]" />
      <StatCard value="60 min" label="Intro session" className="top-[278px] right-[-10px]" />
    </div>
  )
}

/* ── Hero section ── */
function ContactHero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden pt-24 pb-16 px-4 md:px-6 lg:px-8">
      <Gred />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between gap-12">

        {/* Left — content */}
        <div className="flex flex-col gap-12 max-w-[760px]">

          {/* Tag */}
          <div className="flex items-center gap-3 px-4 py-3 rounded-full border-[1.5px] border-black/[0.27] w-fit">
            <span className="size-[6px] rounded-full bg-[#29aa49] shrink-0" />
            <span className="text-[14px] leading-[20px] tracking-[-0.09px] text-black">
              CONTACT &amp; NEXT STEPS
            </span>
          </div>

          {/* Heading */}
          <div
            className="font-medium text-[56px] md:text-[72px] leading-[1.2] tracking-[-1.61px] text-black"
            style={{ fontFeatureSettings: "'zero'" }}
          >
            <p>Let's</p>
            <p className="text-[#2132ed]">talk.</p>
          </div>

          {/* Body */}
          <p className="text-[18px] md:text-[24px] leading-[1.5] tracking-[-0.47px] text-black/80 max-w-[680px]">
            Whether you're just exploring automation or ready to scale, we'd like to understand your challenges and see if Symoda is a good fit.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 md:gap-6 items-center">
            <button className="flex items-center gap-2.5 px-6 py-4 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[18px] md:text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#1a29cc] transition-colors">
              Book a session
              <img src={imgArrow} alt="" className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2.5 px-6 py-4 bg-[#f0f1fe] border border-black/[0.27] rounded-xl text-[#666] text-[18px] md:text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#e4e5fd] transition-colors">
              Send us details
              <img src={imgSendIcon} alt="" className="w-6 h-4" />
            </button>
          </div>
        </div>

        {/* Right — circles visual (desktop only) */}
        <div className="hidden lg:block">
          <CirclesVisual />
        </div>

      </div>
    </section>
  )
}

/* ── Page ── */
export default function ContactPage() {
  return (
    <>
      <NavBar />
      <ContactHero />
      <ContactOptionsSection />
      <Footer />
    </>
  )
}
