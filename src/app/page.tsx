import Hero from "@/components/home/hero";
import About from "@/components/home/about";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <About />
    </main>
  );
}
