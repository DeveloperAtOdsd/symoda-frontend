const imgArrow = 'http://localhost:3845/assets/f754868f179b01cae00131065f78a43c3891f3ae.svg'

const cards = [
  { img: 'http://localhost:3845/assets/99f335af31ac685d4bad5f76ca5984fa08a8d182.png', text: 'Quarterly technology strategy sessions' },
  { img: 'http://localhost:3845/assets/6c239aab523bacdecf56c5ccf0e63378930cf931.png', text: 'Vendor and tool evaluation and selection' },
  { img: 'http://localhost:3845/assets/d3ac4d0aae2990f43e67680b57a84016c1a682f1.png', text: 'Budget and investment guidance' },
  { img: 'http://localhost:3845/assets/e4565c0943ac819a4f573afb5b202d6fbd03a99c.png', text: 'Governance framework development' },
  { img: 'http://localhost:3845/assets/ab5dab66d93fca5f57a0b7f36f8ab5c11b147874.png', text: 'Risk and compliance advisory' },
  { img: 'http://localhost:3845/assets/b6c7c162c811acd98e39550de143e771133444c9.png', text: 'Long-term technology roadmap planning' },
]

export default function TechStrategySection() {
  return (
    <section className="bg-[#eaecf5] py-10 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:items-center lg:gap-[141px]">

        {/* Left */}
        <div className="flex flex-col gap-8 lg:gap-12 w-full lg:w-[559px] lg:shrink-0 mb-8 lg:mb-0">
          <div className="w-fit px-6 py-3 rounded-full border-[1.5px] border-black/[0.27]">
            <span className="text-[14px] leading-[20px] tracking-[-0.09px] text-black">NEW</span>
          </div>

          <div className="flex flex-col gap-5 lg:gap-6">
            <h2
              className="font-medium text-[32px] md:text-[40px] lg:text-[40px] leading-[1.2] lg:leading-[48px] tracking-[-0.89px] text-black"
              style={{ fontFeatureSettings: "'zero'" }}
            >
              Need Technology Strategy?{' '}
              <span className="text-[#2132ed]">We're Your CIO.</span>
            </h2>
            <div className="flex flex-col gap-4 lg:gap-6 text-[16px] md:text-[18px] lg:text-[24px] leading-[26px] md:leading-[28px] lg:leading-[36px] tracking-[-0.47px] text-black/80">
              <p>Executive-level guidance on priorities, tools, governance, and roadmaps — without the cost of a full-time hire.</p>
              <p>CIOs are at the core of AI change adoption, and most firms don't have one.</p>
            </div>
          </div>

          <button className="flex items-center gap-2.5 px-5 py-3 lg:px-6 lg:py-4 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[16px] lg:text-[20px] leading-[28px] tracking-[-0.33px] hover:bg-[#1a29cc] transition-colors w-fit">
            Let's talk strategy
            <img src={imgArrow} alt="" className="w-4 h-4" />
          </button>
        </div>

        {/* Right — 2×3 grid */}
        <div className="flex flex-col gap-4 lg:gap-[26px] flex-1">
          {[0, 2, 4].map((rowStart) => (
            <div key={rowStart} className="flex gap-4 lg:gap-6">
              {cards.slice(rowStart, rowStart + 2).map((card) => (
                <div
                  key={card.text}
                  className="flex flex-col gap-4 lg:gap-5 p-4 lg:p-5 bg-white rounded-xl flex-1 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-xl w-fit">
                    <img src={card.img} alt="" className="size-[40px] md:size-[50px] lg:size-[61px] object-cover" />
                  </div>
                  <p
                    className="font-medium text-[13px] md:text-[16px] lg:text-[24px] leading-[18px] md:leading-[24px] lg:leading-[36px] tracking-[-0.69px] text-black"
                    style={{ fontFeatureSettings: "'zero'" }}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
