import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function App() {
  return (
    <section id="home">
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <div className="w-full">
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </section>
  );
}
