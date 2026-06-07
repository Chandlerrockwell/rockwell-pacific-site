import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Properties } from "@/components/Properties";
import { Vacancies } from "@/components/Vacancies";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Services />
      <Properties />
      <Vacancies />
      <Footer />
    </main>
  );
}
