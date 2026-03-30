const companyLinks = ['About', 'How We Work', 'Contact']
const serviceLinks = ['Discovery & AI Opportunity Mapping', 'AI Technical Build', 'AI Managed Enablement']

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0000cc] to-[#000099] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex items-start gap-4 mb-16">
          <svg width="48" height="48" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2L34 14L20 26L6 14L20 2Z" fill="white" />
            <path d="M20 26L34 38H6L20 26Z" fill="white" opacity="0.5" />
          </svg>
          <div>
            <div className="text-3xl font-bold text-white leading-none">Symoda</div>
            <div className="text-sm text-blue-200">Technology group</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-16 mb-16">
          <div>
            <p className="text-blue-200 leading-relaxed mb-8">
              AI-powered workflows that ship, stick, and scale across your organization.
              From strategy to sustained impact.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-medium">
              Get in touch <span>→</span>
            </a>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Company</h3>
            <div className="border-t border-white/20 pt-6 space-y-4">
              {companyLinks.map((link) => (
                <a key={link} href="#" className="block text-blue-200 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 text-lg">Services</h3>
            <div className="border-t border-white/20 pt-6 space-y-4">
              {serviceLinks.map((link) => (
                <a key={link} href="#" className="block text-blue-200 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex items-center justify-between">
          <p className="text-blue-200 text-sm">© 2026 Symoda Technology Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
