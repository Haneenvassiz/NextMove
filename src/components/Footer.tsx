import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <img src="/logo.svg" alt="Next Move Group" className="h-10 w-auto" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Your Gateway to Elite Manufacturing in India. Pan-India manufacturing network with standardized QC.
          </p>
        </div>

        <div>
          <h4 className="text-white font-heading tracking-widest mb-6">QUICK LINKS</h4>
          <ul className="space-y-3">
            <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
            <li><Link href="/#partner" className="text-gray-400 hover:text-white transition-colors text-sm">Partner With Us</Link></li>
            <li><Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            <li><a href="/Brochure.pdf" target="_blank" className="text-gray-400 hover:text-white transition-colors text-sm">Download Brochure</a></li>
          </ul>
        </div>

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

        <div>
          <h4 className="text-white font-heading tracking-widest mb-6">CONTACT</h4>
          <ul className="space-y-3">
            <li className="text-gray-400 text-sm leading-relaxed">
              5/248-A, Sana Bazar, Naranipuzha Road,<br />
              Changaramkulam, Nannammukku PO,<br />
              Malappuram DT, Kerala – 679575
            </li>
            <li className="text-gray-400 text-sm mt-4">Email: business@nextmovegroupexport.com</li>
            <li className="text-gray-400 text-sm">WhatsApp: +91 7592 008 008</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; {new Date().getFullYear()} Next Move Group. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
