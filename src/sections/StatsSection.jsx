const stats = [
  { value: '10+', label: 'Enterprise Clients' },
  { value: '50+', label: 'AI Workflows Deployed' },
  { value: '95%', label: 'Team Adoption Rate' },
  { value: '3x', label: 'Average ROI' },
]

export default function StatsSection() {
  return (
    <section className="bg-[#e8eaff]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2132ed] border-l-2 border-[#2132ed]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-4 md:px-8 py-10 md:py-20 border-l-0"
            >
              <div className="text-3xl md:text-5xl font-bold text-gray-950 mb-3 md:mb-4">
                {s.value}
              </div>
              <div className="text-xs md:text-base text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
