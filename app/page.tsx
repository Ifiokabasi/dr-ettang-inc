import { MotionProvider, ScrollProgress } from "@/components/Motion";
import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Tagline from "@/components/sections/Tagline";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Podcast from "@/components/sections/Podcast";
import Journal from "@/components/sections/Journal";
import Booking from "@/components/sections/Booking";
import Newsletter from "@/components/sections/Newsletter";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <MotionProvider>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Tagline />
        <TrustBar />
        <About />
        <Services />
        <Podcast />
        <Journal />
        <Booking />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
