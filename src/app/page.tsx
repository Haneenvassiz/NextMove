import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Different from "@/components/Different";
import Categories from "@/components/Categories";
import BrandEcosystem from "@/components/BrandEcosystem";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Different />
      <Categories />
      <BrandEcosystem />
      <Partner />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
