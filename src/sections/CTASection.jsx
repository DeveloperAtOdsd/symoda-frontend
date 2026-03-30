import cta_img1 from '../assets/cta_i1.png'
import cta_img2 from '../assets/cta_i2.png'
import cta_img3 from '../assets/cta_i3.png'

const ACTIONS = [
  { label: 'SPECIFIC PROJECT OR WORKFLOW', title: 'Book a working session', icon: cta_img1 },
  { label: '60-MIN INTRO SESSION',          title: 'AI for Business Leaders', icon: cta_img2 },
  { label: 'Resource',                       title: 'Send us details',         icon: cta_img3 },
]

export default function CTASection() {
  return (
    <section className="bg-[#eef0ff] px-[32px] py-[80px]">
      <div className="flex gap-[48px] items-start w-full">

        {/* Left — heading */}
        <div className="flex flex-1 flex-col gap-[48px] items-start">
          {/* Tag */}
          <div className="border border-black/[0.27] flex items-center justify-center px-[8px] py-[8px] rounded-full shrink-0">
            <span className="font-medium text-[12px] leading-[16px] text-black tracking-[0.01px] whitespace-nowrap">
              READY?
            </span>
          </div>

          {/* Heading */}
          <p
            className="font-medium text-[56px] leading-[64px] tracking-[-1.25px] text-[#171717]"
            style={{ fontFeatureSettings: "'zero'" }}
          >
            {"Let's get"}
            <br />
            <span className="text-[#2132ed]">started.</span>
          </p>
        </div>

        {/* Right — action cards */}
        <div className="flex flex-col gap-[24px] items-start shrink-0 w-[559px]">
          {ACTIONS.map((item) => (
            <div key={item.title} className="w-full">
              <div className="bg-white flex gap-[20px] items-center p-[20px] rounded-[12px] w-full cursor-pointer hover:shadow-sm transition-shadow">
                {/* Text */}
                <div className="flex flex-1 flex-col gap-[8px] items-start text-black min-w-0">
                  <p className="font-normal text-[16px] leading-[20px] tracking-[-0.18px] w-full">
                    {item.label}
                  </p>
                  <p
                    className="font-medium text-[24px] leading-[36px] tracking-[-0.69px] w-full"
                    style={{ fontFeatureSettings: "'zero'" }}
                  >
                    {item.title}
                  </p>
                </div>

                {/* Icon */}
                <div className="bg-[#f2f2f2] flex items-center justify-center overflow-hidden rounded-[6px] shrink-0">
                  <img
                    alt={item.title}
                    className="size-[61px] object-cover"
                    src={item.icon}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
