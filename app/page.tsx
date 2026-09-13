import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Global from "@/components/Global";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-paper">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <Process />
      <Pricing />
      <Global />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
