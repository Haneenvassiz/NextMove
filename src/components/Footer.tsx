import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image src="/logo.svg" alt="Next Move Group" width={120} height={40} className="h-10 w-auto" style={{ width: "auto", height: "auto" }} />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Your Gateway to Elite Manufacturing in India. Pan-India manufacturing network with standardized QC.
          </p>
          {/* Registration Trust Strip */}
          <div className="border-t border-white/5 pt-4 mt-4">
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-3">
              Government Registered Export Partner
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="text-gray-500">IEC:</span>{" "}
                <span className="text-gray-300 font-medium">EUHPM4454B</span>
              </div>
              <div>
                <span className="text-gray-500">GSTIN:</span>{" "}
                <span className="text-gray-300 font-medium">32EUHPM4454B1ZW</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-heading tracking-widest mb-6">QUICK LINKS</h4>
          <ul className="space-y-3">
            <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            <li><Link href="/#partner" className="text-gray-400 hover:text-white transition-colors text-sm">Partner With Us</Link></li>
            <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            <li><a href="/Brochure.pdf" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">Download Brochure</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-heading tracking-widest mb-6">CATEGORIES</h4>
          <ul className="space-y-3">
            <li><Link href="/collections/denim-gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Denim Gallery</Link></li>
            <li><Link href="/collections/shirts-suiting" className="text-gray-400 hover:text-white transition-colors text-sm">Shirts & Suiting</Link></li>
            <li><Link href="/collections/knitwear-essentials" className="text-gray-400 hover:text-white transition-colors text-sm">Knitwear & Essentials</Link></li>
            <li><Link href="/collections/activewear-performance" className="text-gray-400 hover:text-white transition-colors text-sm">Activewear & Performance</Link></li>
            <li><Link href="/collections/uniform-hub" className="text-gray-400 hover:text-white transition-colors text-sm">Uniform Hub</Link></li>
          </ul>
        </div>

        {/* Contact + Brand Ecosystem */}
        <div>
          <h4 className="text-white font-heading tracking-widest mb-6">CONTACT</h4>
          <ul className="space-y-3 mb-8">
            <li className="text-gray-400 text-sm leading-relaxed hover:text-white transition-colors">
              <a href="https://maps.app.goo.gl/yDurqbbH6M2SncWU8" target="_blank" rel="noopener noreferrer">
                5/248-B, 1st Floor, Sana Bazar,<br />
                Naranipuzha Road, Changaramkulam,<br />
                Nannamukku PO, Malappuram DT, Kerala - 679575
              </a>
            </li>
            <li className="text-gray-400 text-sm">Email: business@nextmovegroupexport.com</li>
            <li className="text-gray-400 text-sm">Phone: +91 7592 008 008</li>
            <li className="text-gray-400 text-sm">WhatsApp: +91 7593 005 006</li>
            <li className="flex items-center space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/nextmovegroupexport/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/nextmovegroupexport?igsh=b2pwNWVvYjFhczNo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </li>
          </ul>

          {/* Dutchwhite Brand Ecosystem */}
          <div className="border-t border-white/5 pt-6">
            <h4 className="text-white font-heading tracking-widest text-xs mb-3">ASSOCIATED BRAND</h4>
            <a
              href="https://www.instagram.com/dutchwhite.in?igsh=Mm14bnJjZXcyM2dw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors text-sm group"
            >
              {/* Instagram Icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-primary transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="tracking-wide">Dutchwhite</span>
            </a>
            <p className="text-gray-500 text-xs mt-2">Fashion Division · Apparel Identity</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Next Move Group Export. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
