import cta_img1 from '../assets/cta_i1.png'
import cta_img2 from '../assets/cta_i2.png'
import cta_img3 from '../assets/cta_i3.png'

const ACTIONS = [
  { label: 'SPECIFIC PROJECT OR WORKFLOW', title: 'Book a working session', icon: cta_img1 },
  { label: '60-MIN INTRO SESSION', title: 'AI for Business Leaders', icon: cta_img2 },
  { label: 'Resource', title: 'Get our latest thinking on AI Adoption', icon: cta_img3 },
]

export default function CTASection() {
  return (
    <section className="bg-[#eef0ff] px-6 md:px-12 lg:px-[32px] py-16 md:py-20 lg:py-20">
      <div className="max-w-[1440px] mx-auto">
      <h2 className=" text-[36px] md:text-[48px] lg:text-5xl mb-[48px] leading-[1.1] font-semibold text-[#171717] tracking-tight">
        Let’s get <br />
        <span className="text-[#2132ed]">started.</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* LEFT */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Description */}
          <div className="text-gray-600 text-sm md:text-base lg:text-2xl leading-relaxed max-w-[520px] space-y-4">
            <p>Ready to move from AI experiments to AI impact?</p>
            <p>
              Whether you're exploring automation for the first time or scaling workflows across your firm, we'd like to help.
              Let's map your highest-leverage AI opportunities and design a system your teams will actually use.
              Pick the conversation that fits your moment.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4 w-full lg:max-w-[560px]">
          {ACTIONS.map((item) => (
            <div
              key={item.title}
              className="bg-white flex items-center justify-between gap-4 p-5 rounded-xl hover:shadow-md transition-all"
            >
              {/* Text */}
              <div className="flex flex-col gap-1 min-w-0">
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  {item.label}
                </p>
                <p className="text-lg md:text-xl font-medium text-gray-900 leading-snug">
                  {item.title}
                </p>
              </div>

              {/* Icon */}
              <div className="bg-gray-100 rounded-md p-2 shrink-0">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
      </div>
    </section>
  )
}