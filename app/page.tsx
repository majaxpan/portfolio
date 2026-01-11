import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <ul className="flex justify-center gap-6 p-4 text-gray-900 font-medium">
          <li>
            <a
              href="#hero"
              className="hover:text-emerald-500 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-emerald-500 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-emerald-500 transition-colors"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-emerald-500 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-emerald-500 transition-colors"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-emerald-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
