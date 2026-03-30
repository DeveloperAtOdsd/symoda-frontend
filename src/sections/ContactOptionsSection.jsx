import imgArrow from '../assets/contact-icon-arrow.svg'
import icon1 from '../assets/contact-card1-icon.png'
import icon2 from '../assets/contact-card2-icon.png'
import icon3 from '../assets/contact-card3-icon.png'
import icon4 from '../assets/contact-card4-icon.png'

export default function ContactOptionsSection() {
  return (
    <div className="flex flex-col gap-[42px] items-start px-[32px] py-[80px] bg-[#f5f5f5] w-full">

      {/* Section header */}
      <div className="flex flex-col gap-[48px] items-start w-full">
        {/* Tag */}
        <div className="border-[1.5px] border-black/[0.27] flex gap-[12px] items-center justify-center px-[16px] py-[12px] rounded-full shrink-0">
          <p className="font-normal leading-[20px] text-[#171717] text-[14px] tracking-[-0.09px] whitespace-nowrap">
            CONTACT OPTIONS
          </p>
        </div>

        {/* Text block */}
        <div className="flex flex-col gap-[24px] items-start text-[#171717] w-full">
          <div className="font-medium leading-[0] text-[56px] tracking-[-1.25px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
            <p className="leading-[64px] mb-0">How would you like</p>
            <p className="leading-[64px]">to connect?</p>
          </div>
          <p className="font-normal leading-[36px] text-[24px] tracking-[-0.47px] w-full">
            Choose the format that fits your stage. There's no wrong answer — we'll meet you where you are.
          </p>
        </div>
      </div>

      {/* Cards row */}
      <div className="flex gap-[24px] items-start w-full overflow-x-auto scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {/* Card 01 */}
        <div className="bg-white flex flex-col gap-[32px] h-[609px] items-start p-[20px] rounded-[12px] shrink-0 w-[676px]">
          <p className="font-normal leading-[20px] text-[#2132ed] text-[16px] tracking-[1px] whitespace-nowrap">
            OPTION 01
          </p>
          <div className="flex flex-1 flex-col gap-[20px] items-start min-h-0 w-full">
            <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-[12px] shrink-0">
              <img alt="" className="size-[61px] object-cover" src={icon1} />
            </div>
            <div className="flex flex-col gap-[12px] items-start text-black w-full">
              <p className="font-medium leading-[36px] text-[24px] tracking-[-0.69px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                Book a Working Session
              </p>
              <p className="font-normal leading-[20px] text-[16px] tracking-[-0.89px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                FOR: SPECIFIC AUTOMATION PROJECTS
              </p>
            </div>
            <p className="font-normal leading-[36px] text-[#171717] text-[20px] tracking-[-0.47px] whitespace-pre-wrap">
              {`You have a workflow in mind. Let's work through it together. `}
              <br />A focused 30-minute call — 15 min intro, 15 min understanding your specific workflow and what automation could look like.
            </p>
          </div>
          <button className="bg-[#f0f1fe] border border-black/[0.17] flex gap-[10px] items-center justify-center px-[24px] py-[16px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-colors" style={{ fontFeatureSettings: "'zero'" }}>
            <span className="font-normal leading-[28px] text-[#2132ed] text-[20px] tracking-[-0.33px] whitespace-nowrap">Book 30-min call</span>
            <img alt="" className="size-[16px]" src={imgArrow} />
          </button>
        </div>

        {/* Card 02 */}
        <div className="bg-white flex flex-col gap-[32px] h-[609px] items-start p-[20px] rounded-[12px] shrink-0 w-[676px]">
          <p className="font-normal leading-[20px] text-[#2132ed] text-[16px] tracking-[1px] whitespace-nowrap">
            OPTION 02
          </p>
          <div className="flex flex-1 flex-col gap-[20px] items-start min-h-0 w-full">
            <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-[12px] shrink-0">
              <img alt="" className="size-[61px] object-cover" src={icon2} />
            </div>
            <div className="flex flex-col gap-[12px] items-start text-black w-full">
              <p className="font-medium leading-[36px] text-[24px] tracking-[-0.69px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                AI for Business Leaders
              </p>
              <p className="font-normal leading-[20px] text-[16px] tracking-[-0.89px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                FOR: LEADERS EXPLORING AUTOMATION POSSIBILITIES
              </p>
            </div>
            <p className="font-normal leading-[36px] text-[#171717] text-[20px] tracking-[-0.47px]">
              A genuine 60-minute education session. Real examples from firms like yours, a framework for ROI and adoption, and honest answers to your questions.
            </p>
            <ul className="list-disc font-normal leading-[0] text-[#171717] text-[20px] tracking-[-0.47px]">
              <li className="mb-0 ms-[30px]"><span className="leading-[36px]">Where automation creates value in professional services</span></li>
              <li className="mb-0 ms-[30px]"><span className="leading-[36px]">Real examples from firms like yours</span></li>
              <li className="ms-[30px]"><span className="leading-[36px]">A framework for thinking about ROI and adoption</span></li>
            </ul>
          </div>
          <button className="bg-[#f0f1fe] border border-black/[0.17] flex gap-[10px] items-center justify-center px-[24px] py-[16px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-colors" style={{ fontFeatureSettings: "'zero'" }}>
            <span className="font-normal leading-[28px] text-[#2132ed] text-[20px] tracking-[-0.33px] whitespace-nowrap">Book 60-min session</span>
            <img alt="" className="size-[16px]" src={imgArrow} />
          </button>
        </div>

        {/* Card 03 */}
        <div className="bg-white flex flex-col gap-[32px] h-[609px] items-start p-[20px] rounded-[12px] shrink-0 w-[676px]">
          <p className="font-normal leading-[20px] text-[#2132ed] text-[16px] tracking-[1px] whitespace-nowrap">
            OPTION 03
          </p>
          <div className="flex flex-1 flex-col gap-[20px] items-start min-h-0 w-full">
            <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-[12px] shrink-0">
              <img alt="" className="size-[61px] object-cover" src={icon3} />
            </div>
            <div className="flex flex-col gap-[12px] items-start text-black w-full">
              <p className="font-medium leading-[36px] text-[24px] tracking-[-0.69px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                Send Us Details
              </p>
              <p className="font-normal leading-[20px] text-[16px] tracking-[-0.89px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                FOR: THOSE WHO PREFER ASYNC COMMUNICATION
              </p>
            </div>
            <p className="font-normal leading-[36px] text-[#171717] text-[20px] tracking-[-0.47px]">
              Not ready to book a call? Tell us about your situation. We'll review your details and follow up within 1 business day with a thoughtful response.
            </p>
          </div>
          <button className="bg-[#f0f1fe] border border-black/[0.17] flex gap-[10px] items-center justify-center px-[24px] py-[16px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-colors" style={{ fontFeatureSettings: "'zero'" }}>
            <span className="font-normal leading-[28px] text-[#2132ed] text-[20px] tracking-[-0.33px] whitespace-nowrap">Fill out the form</span>
            <img alt="" className="size-[16px]" src={imgArrow} />
          </button>
        </div>

        {/* Card 04 */}
        <div className="bg-white flex flex-col gap-[32px] h-[609px] items-start p-[20px] rounded-[12px] shrink-0 w-[676px]">
          <p className="font-normal leading-[20px] text-[#2132ed] text-[16px] tracking-[1px] whitespace-nowrap">
            OPTION 04
          </p>
          <div className="flex flex-1 flex-col gap-[20px] items-start min-h-0 w-full">
            <div className="bg-[#f2f2f2] flex items-center justify-center p-[10px] rounded-[12px] shrink-0">
              <img alt="" className="size-[61px] object-cover" src={icon4} />
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="font-medium leading-[36px] text-[24px] text-black tracking-[-0.69px] w-full" style={{ fontFeatureSettings: "'zero'" }}>
                EMAIL US DIRECTLY
              </p>
            </div>
            <a href="mailto:Wayne@symoda.com" target="_blank" rel="noreferrer" className="font-normal leading-[36px] text-[#171717] text-[20px] tracking-[-0.47px] underline [text-decoration-skip-ink:none]">
              Wayne@symoda.com
            </a>
          </div>
          <button className="bg-[#f0f1fe] border-2 border-[#999ff7] flex gap-[10px] items-center justify-center px-[24px] py-[16px] rounded-[12px] shrink-0 w-full hover:bg-[#e4e5fd] transition-colors" style={{ fontFeatureSettings: "'zero'" }}>
            <span className="font-normal leading-[28px] text-[#2132ed] text-[20px] tracking-[-0.33px] whitespace-nowrap">Send mail</span>
            <img alt="" className="size-[16px]" src={imgArrow} />
          </button>
        </div>

      </div>
    </div>
  )
}
