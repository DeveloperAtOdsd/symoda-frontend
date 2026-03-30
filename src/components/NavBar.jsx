export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#3333FF" />
            <path d="M20 8L28 16L20 24L12 16L20 8Z" fill="white" />
            <path d="M20 24L28 32H12L20 24Z" fill="white" opacity="0.6" />
          </svg>
          <div>
            <div className="font-bold text-xl text-gray-900 leading-none">Symoda</div>
            <div className="text-xs text-gray-400">Technology group</div>
          </div>
        </div>
        <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Menu">
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-800 mb-1.5" />
          <div className="w-6 h-0.5 bg-gray-800" />
        </button>
      </div>
    </nav>
  )
}
