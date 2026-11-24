
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/AboutMe";
import Skills from "@/components/home/Skill";
// import FeaturedProjects from "@/components/home/FeaturedProjects";
import Experience from "@/components/home/Experiences";
import ContactMe from "@/components/home/ContactMe";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b1120]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      {/* <FeaturedProjects /> */}
      <Experience />
      <ContactMe />
    </main>
  );
}
