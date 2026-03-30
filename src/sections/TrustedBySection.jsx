const clients = [
  'MacEwen',
  'Inside Edge',
  'The Fitness Lab',
  'Wilan',
  'GGFL',
  'Wills Transfer',
]

export default function TrustedBySection() {
  return (
    <section className="bg-[#e8eaff] py-16">
      <div className="max-w-[1440px] mx-auto px-8 flex gap-16 items-start">

        {/* Left Title */}
        <div className="shrink-0 w-48 animate-fadeUp">
          <h2 className="text-2xl font-black text-gray-950 uppercase tracking-tight leading-tight">
            TRUSTED BY<br />GROWTH-MINDED<br />ORGANIZATIONS
          </h2>
        </div>

        {/* Cards */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-6 mb-6">
            {clients.slice(0, 4).map((name, i) => (
              <div
                key={name}
                style={{ animationDelay: `${i * 0.1}s` }}
                className="opacity-0 animate-fadeUp border border-[#3333FF]/40 rounded p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#3333FF]"
              >
                <div className="font-bold text-gray-900">{name}</div>
                <div className="text-xs text-gray-400 mt-1">
                  logo placeholder
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {clients.slice(4).map((name, i) => (
              <div
                key={name}
                style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                className="opacity-0 animate-fadeUp border border-[#3333FF]/40 rounded p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#3333FF]"
              >
                <div className="font-bold text-gray-900">{name}</div>
                <div className="text-xs text-gray-400 mt-1">
                  logo placeholder
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}