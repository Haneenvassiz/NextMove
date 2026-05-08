import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Different from "@/components/Different";
import Categories from "@/components/Categories";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Different />
      <Categories />
      <Partner />
      <Contact />
      <Footer />
    </>
  );
}
