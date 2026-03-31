import Gred from '../components/Gred'
import SectionTag from '../components/ui/SectionTag'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[834px] pt-16 md:pt-24 lg:pt-28 bg-white flex flex-col overflow-hidden">
      <Gred />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 md:px-6 lg:px-8 flex flex-col">
        <div className="max-w-[860px] py-24 md:py-12 lg:py-16">

          <SectionTag>
            Practical AI &amp; Technology for Business
          </SectionTag>

          <h1 className="mt-6 md:mt-8 lg:mt-10 text-[32px] md:text-[56px] lg:text-[72px] font-bold text-gray-950 leading-[1.15] md:leading-[1.1] lg:leading-[1.05] tracking-tight">
            {['Cut busy work.', 'Speed up decisions.', 'Scale operations.'].map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="block opacity-0 animate-slide-up"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div className="overflow-hidden">
            <p
              className="mt-4 md:mt-6 lg:mt-8 text-[20px] md:text-[18px] lg:text-[24px] text-gray-600 leading-relaxed max-w-2xl opacity-0 animate-slide-up"
              style={{ animationDelay: '1s' }}
            >
              Practical Technology & Artificial Intelligence solutions that pays for itself.
              We help you solve the work that slows your team down, so you can move faster,
              serve more, and grow exponentially.
            </p>
          </div>

          <div className="mt-8 md:mt-10 lg:mt-12 flex items-center gap-3 md:gap-4 lg:gap-6">
            <button className="inline-flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 lg:px-7 lg:py-4 bg-[#2132ed] hover:bg-[#1a29cc] text-white font-semibold rounded-lg transition-colors text-sm md:text-base">
              Working session <span>→</span>
            </button>

            <button className="inline-flex items-center gap-2 px-4 py-3 md:px-6 md:py-4 lg:px-7 lg:py-4 border border-gray-300 hover:border-gray-400 text-gray-800 font-semibold rounded-lg transition-colors bg-white/60 text-sm md:text-base">
              Book intro <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-10 flex justify-center mt-16 pb-6 ">
        <div className="w-8 h-14 rounded-full border-2 border-gray-400 flex items-start justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-gray-400 animate-drop" />
        </div>
      </div>
    </section>
  )
}