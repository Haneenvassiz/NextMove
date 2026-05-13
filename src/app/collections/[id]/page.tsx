import { collections } from "@/data/collections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export function generateStaticParams() {
  return Object.keys(collections).map((id) => ({
    id: id,
  }));
}

export default async function CollectionPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const collectionId = params.id as keyof typeof collections;
  const collection = collections[collectionId];

  if (!collection) {
    notFound();
  }

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      {/* Hero Section - Premium Split Layout */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col md:flex-row items-stretch pt-20 overflow-hidden border-b border-white/10 bg-black">
        
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 px-6 md:px-12 lg:px-24 relative z-20 flex flex-col justify-center py-16 md:py-24">
          <Link 
            href="/#collections" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors mb-10 md:mb-16 font-heading tracking-widest text-xs md:text-sm uppercase group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>BACK TO COLLECTIONS</span>
          </Link>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-white leading-tight md:leading-none mb-8 uppercase tracking-tight">
            {collection.title}
          </h1>
          
          <div className="flex items-start space-x-4 md:space-x-6">
            <div className="w-1 md:w-1.5 h-16 md:h-20 bg-primary mt-1 md:mt-2 shrink-0"></div>
            <p className="text-gray-300 text-base md:text-xl lg:text-2xl font-light max-w-xl leading-relaxed">
              {collection.description}
            </p>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
          {/* Gradient blends to transition text into image smoothly */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10 hidden md:block w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 md:hidden h-full" />
          
          <Image
            src={collection.image}
            alt={collection.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            unoptimized
            style={{ objectFit: "cover", objectPosition: "top center" }}
            className="grayscale-[15%]"
            loading="eager"
            priority
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {collection.sections ? (
              collection.sections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="relative">
                  <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <div>
                      <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-2 uppercase">
                        {section.title}
                      </h3>
                      <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-gray-500 font-heading tracking-widest text-sm">
                      {section.products.length} ITEMS
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {section.products.map((product, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="aspect-[3/4] bg-[#0a0a0a] border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors duration-500">
                          {product.image ? (
                            <Image 
                              src={product.image} 
                              alt={product.name} 
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              quality={100}
                              unoptimized
                              style={{ objectFit: "contain", objectPosition: "center" }}
                              className="transition-transform duration-700 group-hover:scale-105 p-4"
                            />
                          ) : (
                            <>
                              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                              <div className="text-white/10 font-heading text-8xl font-black group-hover:scale-110 group-hover:text-white/20 transition-all duration-700">
                                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                              </div>
                            </>
                          )}
                          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                        </div>
                        
                        <div>
                          <h4 className="text-white font-heading text-xl tracking-wide mb-2 group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-gray-500 text-sm font-light tracking-wide">
                            Premium Quality
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="relative">
                <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
                  <div>
                    <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-2 uppercase">PRODUCT RANGE</h3>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tight">CATALOG</h2>
                  </div>
                  <div className="text-gray-500 font-heading tracking-widest">
                    {(collection as any).products?.length || 0} ITEMS
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                  {(collection as any).products?.map((product: any, idx: number) => (
                    <div key={idx} className="group cursor-pointer">
                      <div className="aspect-[3/4] bg-[#0a0a0a] border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors duration-500">
                        {product.image ? (
                          <Image 
                            src={product.image} 
                            alt={product.name} 
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={100}
                            unoptimized
                            style={{ objectFit: "contain", objectPosition: "center" }}
                            className="transition-transform duration-700 group-hover:scale-105 p-4"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                            <div className="text-white/10 font-heading text-8xl font-black group-hover:scale-110 group-hover:text-white/20 transition-all duration-700">
                              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                            </div>
                          </>
                        )}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-heading text-xl tracking-wide mb-2 group-hover:text-primary transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-gray-500 text-sm font-light tracking-wide">
                          Premium Quality
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Professional Inquiry Section */}
          <div className="mt-40 bg-[#050505] border border-white/5 p-8 md:p-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-1000 group-hover:bg-primary/10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-4 uppercase">Custom Solutions</h3>
                <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase leading-tight mb-6">
                  Extensive Portfolio <br className="hidden md:block" /> Available Upon Request
                </h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                  Our manufacturing capabilities extend far beyond this digital showcase. For bespoke designs, high-volume production, or to explore our complete range of specialized apparel, please connect with our team.
                </p>
              </div>
              <Link 
                href="https://wa.me/917593005006?text=Hello%20Next%20Move%20Group,%20I'm%20interested%20in%20viewing%20your%20full%20product%20catalog." 
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-white text-black font-heading font-bold px-10 py-5 tracking-[0.2em] text-xs md:text-sm hover:bg-primary transition-all duration-300 uppercase hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Inquire on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>


      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
