import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Navbar from "@/components/home/navbar";
import Features from "@/components/home/features";
import Story from "@/components/home/story";
import Contact from "../components/home/contact";
// import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
