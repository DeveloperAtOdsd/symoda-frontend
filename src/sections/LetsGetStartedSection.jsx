import iconCalendar from '../assets/contact-option-calendar.png'
import iconBook from '../assets/contact-option-book.png'
import iconBinder from '../assets/contact-option-binder.png'
import imgArrow from '../assets/arrow.svg'

const options = [
    {
        subtitle: 'SPECIFIC PROJECT OR WORKFLOW',
        title: 'Book a working session',
        icon: iconCalendar,
    },
    {
        subtitle: '60-MIN INTRO SESSION',
        title: 'AI for Business Leaders',
        icon: iconBook,
    },
    {
        subtitle: 'Resource',
        title: 'Send us details',
        icon: iconBinder,
    },
]

function OptionCard({ subtitle, title, icon }) {
    return (
        <div className="bg-white flex gap-[20px] items-center p-[20px] rounded-[12px] w-full">
            <div className="flex flex-1 flex-col gap-[8px] items-start min-w-0">
                <p className="font-normal leading-[20px] text-black text-[16px] tracking-[-0.18px]">
                    {subtitle}
                </p>
                <p
                    className="font-medium leading-[24px] md:leading-[36px] text-black text-[18px] md:text-[24px] tracking-[-0.69px]"
                    style={{ fontFeatureSettings: "'zero'" }}
                >
                    {title}
                </p>
            </div>
            <div className="bg-[#f2f2f2] flex items-center justify-center overflow-hidden rounded-[6px] shrink-0">
                <img alt="" className="size-[61px] object-cover" src={icon} />
            </div>
        </div>
    )
}

export default function LetsGetStartedSection() {
    return (
        <section className="bg-[#ededff] w-full px-[16px] md:px-[32px] py-[48px] md:py-[80px]">
            <div className="mx-auto flex flex-col lg:flex-row items-start lg:justify-between gap-[32px] lg:gap-[48px]">

                {/* Left — heading */}
                <div className="flex flex-col gap-[32px] lg:gap-[48px] items-start lg:w-[769px] shrink-0">
                    {/* Tag */}
                    <div className="border-[1.5px] border-black/[0.27] flex gap-[12px] items-center px-[16px] py-[12px] rounded-full">
                        <span className="font-normal leading-[20px] text-[#171717] text-[14px] tracking-[-0.09px] whitespace-nowrap">
                            READY?
                        </span>
                    </div>

                    {/* Title */}
                    <div
                        className="font-medium text-[36px] md:text-[56px] lg:text-[72px] leading-[1.2] tracking-[-1.61px] text-black"
                        style={{ fontFeatureSettings: "'zero'" }}
                    >
                        <p>Let's get</p>
                        <p className="text-[#2132ed]">started.</p>
                    </div>

                    {/* Description — visible on mobile */}
                    <div className="flex flex-col gap-[16px] lg:hidden">
                        <p className="font-medium text-[16px] leading-[24px] tracking-[-0.47px] text-[#171717]">
                            Ready to move from AI experiments to AI impact?
                        </p>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[-0.47px] text-[#171717]">
                            Whether you're exploring automation for the first time or scaling workflows across your firm, we'd like to help. Let's map your highest-leverage AI opportunities and design a system your teams will actually use. Pick the conversation that fits your moment.
                        </p>
                    </div>

                    {/* CTA button — visible on mobile */}
                    <button className="flex lg:hidden items-center gap-2.5 px-4 py-3 bg-[#2132ed] border border-white/[0.27] rounded-xl text-white text-[14px] leading-[28px] tracking-[-0.33px] hover:bg-[#1a29cc] transition-colors">
                        Book a session
                        <img src={imgArrow} alt="" className="w-4 h-4" />
                    </button>
                </div>

                {/* Right — option cards */}
                <div className="flex flex-col gap-[24px] items-start justify-center w-full lg:max-w-[559px]">
                    {options.map((opt) => (
                        <OptionCard key={opt.title} {...opt} />
                    ))}
                </div>

            </div>
        </section>
    )
}
