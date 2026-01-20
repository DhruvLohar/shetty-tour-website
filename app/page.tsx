import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import FAQS from "@/components/sections/FAQs";
import Fleet from "@/components/sections/Fleet";
import GetInTouch from "@/components/sections/GetInTouch";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <section id="home" className="w-full">
          <HeroSection />
        </section>

        <section id="about" className="w-full">
          <AboutUs />
        </section>

        <section id="fleet" className="w-full">
          <Fleet />
        </section>

        <section id="testimonials" className="w-full">
          <Testimonials />
        </section>

        <section id="faqs" className="w-full">
          <FAQS />
        </section>

        <section id="pricing" className="w-full">
          <GetInTouch />
        </section>

        <Footer />
      </main>
    </>
  );
}
