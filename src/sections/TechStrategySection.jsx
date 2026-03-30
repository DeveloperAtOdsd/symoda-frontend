import PillTag from '../components/ui/PillTag'

const services = [
  { icon: '📅', text: 'Quarterly technology strategy sessions' },
  { icon: '🔍', text: 'Vendor and tool evaluation and selection' },
  { icon: '💰', text: 'Budget and investment guidance' },
  { icon: '🛡️', text: 'Governance framework development' },
  { icon: '⚖️', text: 'Risk and compliance advisory' },
  { icon: '🗺️', text: 'Long-term technology roadmap planning' },
]

export default function TechStrategySection() {
  return (
    <section className="bg-[#e8eaff] py-24">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-24 items-center">
          <div>
            <PillTag>New</PillTag>
            <h2 className="mt-8 text-4xl font-bold text-gray-950 leading-tight mb-2">
              Need Technology Strategy?
            </h2>
            <h2 className="text-4xl font-bold text-[#3333FF] leading-tight mb-8">
              We're Your CIO.
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Executive-level guidance on priorities, tools, governance, and roadmaps — without the cost of a full-time hire.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-10">
              CIOs are at the core of AI change adoption, and most firms don't have one.
            </p>
            <button className="inline-flex items-center gap-2 px-7 py-4 bg-[#3333FF] hover:bg-[#2222dd] text-white font-semibold rounded-lg transition-colors">
              Let's talk strategy <span>→</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((s) => (
              <div key={s.text} className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
                <div className="text-3xl mb-4">{s.icon}</div>
                <p className="text-sm font-medium text-gray-900 leading-snug">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
