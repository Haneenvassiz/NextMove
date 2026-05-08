import { collections } from "@/data/collections";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center pt-24 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover object-center grayscale-[20%]"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20">
          <Link href="/#collections" className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm tracking-widest">BACK TO COLLECTIONS</span>
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-4">
            {collection.title}
          </h1>
          <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed border-l-2 border-primary pl-4">
            {collection.description}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <h3 className="text-primary tracking-[0.2em] text-sm font-medium mb-2">PRODUCT RANGE</h3>
              <h2 className="text-3xl font-heading font-bold text-white">CATALOG</h2>
            </div>
            <div className="text-gray-500 font-heading tracking-widest">
              {collection.products.length} ITEMS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {collection.products.map((product, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[3/4] bg-[#0a0a0a] border border-white/5 mb-6 relative overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors duration-500">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <>
                      {/* Subtle background texture/pattern */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
                      
                      {/* Placeholder representation of a product */}
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
      </section>

      <Footer />
    </div>
  );
}
