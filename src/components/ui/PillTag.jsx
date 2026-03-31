export default function PillTag({ children }) {
  return (
    <span className="inline-flex items-center px-[16px] py-[12px] rounded-full border border-gray-300 text-xs font-semibold tracking-widest text-gray-700 uppercase">
      {children}
    </span>
  )
}
