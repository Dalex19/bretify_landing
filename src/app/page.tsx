import Hero from "./components/Hero";

import Platform from "./sections/Platform";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white md:justify-center w-full flex flex-col gap-10 pt-12 px-4 md:p-4 font-[family-name:var(--font-geist-sans)] relative">
      <Navbar />
      <Hero />
     <Platform /> 
    </div>
  );
}
