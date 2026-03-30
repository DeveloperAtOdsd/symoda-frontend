export default function SectionTag({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-300 text-xs font-semibold tracking-widest text-gray-700 uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
      {children}
    </span>
  )
}
