const stats = [
  { value: '10+', label: 'Enterprise Clients' },
  { value: '50+', label: 'AI Workflows Deployed' },
  { value: '95%', label: 'Team Adoption Rate' },
  { value: '3x', label: 'Average ROI' },
]

export default function StatsSection() {
  return (
    <section className="bg-[#e8eaff]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-4 divide-x border-l-1 divide-[#3333FF]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-8 py-20 border-l-2 border-[#3333FF]"
            >
              <div className="text-5xl font-bold text-gray-950 mb-4">
                {s.value}
              </div>
              <div className="text-base text-gray-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
