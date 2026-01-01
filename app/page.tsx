import Footer from "@/components/layout/Footer";
import AboutUs from "@/components/sections/AboutUs";
import FAQS from "@/components/sections/FAQs";
import Fleet from "@/components/sections/Fleet";
import GetInTouch from "@/components/sections/GetInTouch";
import HeroSection from "@/components/sections/HeroSection";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />

      <AboutUs />

      <Fleet />

      <Testimonials />

      <FAQS />

      <GetInTouch />

      <Footer />
    </main>
  );
}
