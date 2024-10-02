import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Platform from "./sections/Platform";

export default function Home() {
  return (
    <div className="min-h-screen bg-white justify-center w-full flex flex-col gap-10 p-4 font-[family-name:var(--font-geist-sans)] ">
      <Navbar />
      <Hero />
      <Platform />
    </div>
  );
}
