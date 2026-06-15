import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Offers } from "@/components/sections/Offers";
import { Approach } from "@/components/sections/Approach";
import { Industries } from "@/components/sections/Industries";
import { Credentials } from "@/components/sections/Credentials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Offers />
        <Approach />
        <Industries />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
