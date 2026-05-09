"use client";

import { MapPin, Mail, MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-primary mr-4"></span>
              GET IN TOUCH
            </h3>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight mb-8">
              START YOUR <span className="text-gray-500">PRODUCTION</span>
            </h2>

            <form 
              action="mailto:business@nextmovegroupexport.com" 
              method="POST" 
              encType="text/plain" 
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest mb-2">NAME</label>
                  <input 
                    type="text" 
                    name="Name"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 tracking-widest mb-2">BRAND / COMPANY</label>
                  <input 
                    type="text" 
                    name="Company"
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-xs text-gray-500 tracking-widest mb-2">REQUIREMENT</label>
                <textarea 
                  name="Requirement"
                  required
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs text-gray-500 tracking-widest mb-2">EXPECTED MOQ</label>
                <input 
                  type="text" 
                  name="MOQ"
                  className="w-full bg-transparent border-b border-white/20 pb-2 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <button type="submit" className="bg-white text-black px-8 py-4 font-bold tracking-widest hover:bg-gray-200 transition-colors mt-4 w-full md:w-auto">
                SUBMIT INQUIRY
              </button>
            </form>
          </div>

          {/* Contact Details & Map */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div className="space-y-8 bg-[#0a0a0a] p-8 md:p-12 border border-white/5 h-full flex flex-col">
              <div>
                <h4 className="text-xl font-heading text-white tracking-wide mb-6">DIRECT CONTACT</h4>
                
                <div className="space-y-6">
                  <a href="https://wa.me/917593005006" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                    <div className="p-3 bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="text-white group-hover:text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 tracking-widest mb-1">WHATSAPP</div>
                      <div className="text-white tracking-wide">+91 75930 05006</div>
                    </div>
                  </a>

                  <a href="tel:+917593005006" className="flex items-start space-x-4 group">
                    <div className="p-3 bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <Phone className="text-white group-hover:text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 tracking-widest mb-1">PHONE</div>
                      <div className="text-white tracking-wide">+91 75930 05006</div>
                    </div>
                  </a>

                  <a href="mailto:business@nextmovegroupexport.com" className="flex items-start space-x-4 group">
                    <div className="p-3 bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <Mail className="text-white group-hover:text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 tracking-widest mb-1">EMAIL</div>
                      <div className="text-white tracking-wide">business@nextmovegroupexport.com</div>
                    </div>
                  </a>

                  <a href="https://maps.app.goo.gl/yDurqbbH6M2SncWU8" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                    <div className="p-3 bg-white/5 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="text-white group-hover:text-primary transition-colors" size={24} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 tracking-widest mb-1">LOCATION</div>
                      <div className="text-white tracking-wide leading-relaxed text-sm group-hover:text-primary transition-colors">
                        5/248-B, 1st Floor, Back Side, Section,<br />
                        Changaramkulam, Nannammukku PO,<br />
                        Malappuram DT, Kerala – 679575
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Trust Strip: Registration */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-xs text-gray-500 tracking-widest uppercase mb-4">
                  Government Registered Export Manufacturing Partner — India
                </p>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <span className="text-gray-500">IEC:</span>{" "}
                    <span className="text-white font-medium tracking-wider">EUHPM4454B</span>
                  </div>
                  <div>
                    <span className="text-gray-500">GSTIN:</span>{" "}
                    <span className="text-white font-medium tracking-wider">32EUHPM4454B1ZW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
