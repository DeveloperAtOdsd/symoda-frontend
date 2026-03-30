import PillTag from '../components/ui/PillTag'

const testimonials = [
  {
    quote: '"After we built the automation workflow, adoption was stuck at 40%. Symoda\'s enablement program—training, champions network, and targeted coaching—got it to 85% within 8 weeks. Now we have two more workflows launching with full enablement from day one."',
    role: 'Managing Partner',
    org: 'Professional Services Firm',
  },
  {
    quote: '"We were moving fast on automation, but we didn\'t have governance. Symoda helped us set up compliance frameworks, audit trails, and oversight policies. Now we can move fast and responsibly, and our board has confidence in what we\'re doing."',
    role: 'Finance Director',
    org: 'Mid-Market Consulting',
  },
  {
    quote: '"We tried automation pilots internally for 6 months. They didn\'t go anywhere. Two weeks with Symoda\'s Discovery sprint gave us a clear roadmap, prioritized opportunities, and an enablement strategy. We\'re now shipping high-impact workflows with better adoption planning from the start."',
    role: 'Managing Director',
    org: 'Accounting Firm',
  },
]

export default function ResultsSection() {
  return (
    <section className="bg-[#e8eaff] py-10 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <PillTag>Results</PillTag>
        <h2 className="mt-6 md:mt-10 text-3xl md:text-5xl font-bold text-gray-950 mb-8 md:mb-16">
          Results that speak.
        </h2>
        <div className="space-y-6 md:space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="border-l-4 border-[#2132ed] pl-5 md:pl-8 py-2">
              <p className="text-sm md:text-lg text-gray-900 leading-relaxed mb-4 md:mb-6">{t.quote}</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm md:text-base">{t.role}</p>
                <p className="text-xs md:text-sm text-gray-500">{t.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
