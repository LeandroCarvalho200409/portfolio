import { useEffect, useRef, useState } from 'react'
import './App.css'
import { About } from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useScroll } from 'framer-motion'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Education from './components/Education'
import { ThemeProvider } from './components/utils/ThemeContext'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {

  const [showNavbar, setShowNavbar] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Navbar zeigen, wenn Hero **nicht mehr sichtbar** (ist aus dem Viewport)
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0 } // Sobald irgendein Pixel verschwindet
    );

    observer.observe(heroRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      {showNavbar && <Navbar />}

      <div ref={heroRef}>
        <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
