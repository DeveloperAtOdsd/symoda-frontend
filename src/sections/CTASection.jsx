import cta_img1 from '../assets/cta_i1.png'
import cta_img2 from '../assets/cta_i2.png'
import cta_img3 from '../assets/cta_i3.png'

const actions = [
  { label: 'SPECIFIC PROJECT OR WORKFLOW', title: 'Book a working session', icon: cta_img1 },
  { label: '60-MIN INTRO SESSION', title: 'AI for Business Leaders', icon: cta_img2 },
  { label: 'Resource', title: 'Get our latest thinking on AI Adoption', icon: cta_img3 },
]

export default function CTASection() {
  return (
    <section className="bg-[#e8eaff] py-10 md:py-16 lg:py-24">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        {/* Mobile + Tablet: single column | Desktop: two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-24 items-start">
          <div>
            <h2 className="text-3xl md:text-[48px] lg:text-5xl font-bold text-gray-950 leading-tight mb-5 md:mb-6 lg:mb-8">
              Let's get <span className="text-[#2132ed]">started</span>.
            </h2>
            <p className="text-base md:text-[18px] lg:text-lg text-gray-700 mb-4 md:mb-5 lg:mb-6">
              Ready to move from AI experiments to AI impact?
            </p>
            <p className="text-sm md:text-[16px] lg:text-base text-gray-600 leading-relaxed">
              Whether you're exploring automation for the first time or scaling workflows across
              your firm, we'd like to help. Let's map your highest-leverage AI opportunities and
              design a system your teams will actually use. Pick the conversation that fits your moment.
            </p>
          </div>
          <div className="space-y-4">
            {actions.map((a) => (
              <div
                key={a.title}
                className="flex items-center justify-between p-5 md:p-5 lg:p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{a.label}</p>
                  <p className="text-base md:text-[16px] lg:text-lg font-semibold text-gray-900">{a.title}</p>
                </div>
                <img className="text-2xl md:text-2xl lg:text-3xl ml-2 w-[61px] h-[61px] shrink-0" src={a.icon} alt={a.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
