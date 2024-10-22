import Hero from "./components/Hero";

import Platform from "./sections/Platform";

import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Collab from "./sections/Collab";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white md:justify-center w-full flex flex-col gap-10 pt-12  md:p-0 md:pt-16 font-[family-name:var(--font-geist-sans)] relative">
      <Navbar />
      <Hero />
      <div>
        <Platform />
        <AboutUs />
        <Collab />
      <Footer />
      </div>
    </div>
  );
}
