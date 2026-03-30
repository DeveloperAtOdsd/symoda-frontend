import { useState } from 'react'

const FAQS = [
  {
    q: 'Do I have to do Discovery before Build?',
    a: "Many clients do — it's our recommended path. But if you already know what you want to build, we can start with Build. If you've launched automation that isn't delivering adoption, we can start with AI Managed Enablement.",
  },
  {
    q: 'How long does this take?',
    a: null,
  },
  {
    q: 'How do you measure success?',
    a: null,
  },
  {
    q: 'Can you work with our existing team?',
    a: null,
  },
  {
    q: "What if this isn't the right fit?",
    a: null,
  },
  {
    q: `Is "AI for Business Leaders" just sales talk?`,
    a: null,
  },
]

function PlusIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <line x1="12" y1="4" x2="12" y2="20" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <line x1="7" y1="7" x2="17" y2="17" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="7" x2="7" y2="17" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#eef0ff] px-[32px] py-[80px]">
      <div className="flex gap-[24px] justify-between w-full">

        {/* Left — heading */}
        <div className="flex flex-col gap-[48px] items-start shrink-0 w-[559px]">
          {/* Tag */}
          <div className="border border-black/[0.27] flex items-center justify-center px-[8px] py-[8px] rounded-full shrink-0">
            <span className="font-medium text-[12px] leading-[16px] text-black tracking-[0.01px] whitespace-nowrap">
              FREQUENTLY ASKED
            </span>
          </div>

          {/* Heading */}
          <p
            className="font-medium text-[56px] leading-[64px] tracking-[-1.25px] text-[#171717] whitespace-pre-wrap"
            style={{ fontFeatureSettings: "'zero'" }}
          >
            {'Common \n'}
            <span className="text-[#2132ed]">questions.</span>
          </p>
        </div>

        {/* Right — accordion */}
        <div className="flex flex-col gap-[23px] items-end shrink-0 w-[793px]">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i

            return isOpen ? (
              /* Open item */
              <div
                key={i}
                className="bg-white border-2 border-black/[0.08] flex flex-col gap-[20px] items-center p-[20px] rounded-[12px] w-full"
              >
                {/* Question row */}
                <div className="flex items-center justify-between w-full">
                  <p
                    className="font-normal text-[24px] leading-[36px] text-black tracking-[-0.47px]"
                    style={{ fontFeatureSettings: "'zero'" }}
                  >
                    {faq.q}
                  </p>
                  <button onClick={() => setOpenIndex(null)} className="cursor-pointer">
                    <CloseIcon />
                  </button>
                </div>

                {/* Divider */}
                <div className="h-px bg-black/[0.08] w-full" />

                {/* Answer */}
                <p className="font-normal text-[20px] leading-[36px] text-[#171717] tracking-[-0.47px] w-full">
                  {faq.a}
                </p>
              </div>
            ) : (
              /* Closed item */
              <div key={i} className="bg-white flex items-center justify-between p-[20px] rounded-[12px] w-full">
                <p
                  className="font-normal text-[24px] leading-[36px] text-black tracking-[-0.47px]"
                  style={{ fontFeatureSettings: "'zero'" }}
                >
                  {faq.q}
                </p>
                <button onClick={() => setOpenIndex(i)} className="cursor-pointer">
                  <PlusIcon />
                </button>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
