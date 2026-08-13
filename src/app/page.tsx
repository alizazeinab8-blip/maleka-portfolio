import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Mindset from "@/components/Mindset";
import Focus from "@/components/Focus";
import ProjectsSection from "@/components/projects/ProjectsSection";
import PrivateProject from "@/components/PrivateProject";
import Experience from "@/components/Experience";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-lavender-500 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Mindset />
        <Focus />
        <ProjectsSection />
        <PrivateProject />
        <Experience />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
