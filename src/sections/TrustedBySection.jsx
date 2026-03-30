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
    <section className="bg-[#e8eaff] py-8 md:py-12 lg:py-16">
      <div className="mx-auto px-4 md:px-6 lg:px-8">

        {/* Mobile + Tablet: stacked | Desktop: side by side */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          <div className="shrink-0 lg:w-48 animate-fadeUp">
            <h2 className="text-xl lg:text-2xl font-black text-gray-950 uppercase tracking-tight leading-tight">
              TRUSTED BY<br />GROWTH-MINDED<br />ORGANIZATIONS
            </h2>
          </div>

          {/* Mobile: 2-col grid | Tablet: flex-wrap fixed-width | Desktop: 4-col grid */}
          <div className="flex-1 w-full">
            <div className="hidden md:flex lg:hidden flex-wrap gap-5">
              {clients.map((name, i) => (
                <div
                  key={name}
                  style={{ animationDelay: `${i * 0.1}s`, width: '249px' }}
                  className="opacity-0 animate-fadeUp border border-[#2132ed]/40 rounded p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#2132ed]"
                >
                  <div className="font-bold text-gray-900">{name}</div>
                  <div className="text-xs text-gray-400 mt-1">logo placeholder</div>
                </div>
              ))}
            </div>

            {/* Mobile grid */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {clients.map((name, i) => (
                <div
                  key={name}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  className="opacity-0 animate-fadeUp border border-[#2132ed]/40 rounded p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#2132ed]"
                >
                  <div className="font-bold text-gray-900 text-sm">{name}</div>
                  <div className="text-xs text-gray-400 mt-1">logo placeholder</div>
                </div>
              ))}
            </div>

            {/* Desktop 4-col grid */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-4 gap-6 mb-6">
                {clients.slice(0, 4).map((name, i) => (
                  <div
                    key={name}
                    style={{ animationDelay: `${i * 0.1}s` }}
                    className="opacity-0 animate-fadeUp border border-[#2132ed]/40 rounded p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#2132ed]"
                  >
                    <div className="font-bold text-gray-900">{name}</div>
                    <div className="text-xs text-gray-400 mt-1">logo placeholder</div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 gap-6">
                {clients.slice(4).map((name, i) => (
                  <div
                    key={name}
                    style={{ animationDelay: `${(i + 4) * 0.1}s` }}
                    className="opacity-0 animate-fadeUp border border-[#2132ed]/40 rounded p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#2132ed]"
                  >
                    <div className="font-bold text-gray-900">{name}</div>
                    <div className="text-xs text-gray-400 mt-1">logo placeholder</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
