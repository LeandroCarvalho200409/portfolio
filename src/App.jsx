import { useEffect, useRef, useState } from 'react'
import './App.css'
import { AboutDE } from './components/de/AboutDE'
import { AboutEN } from './components/en/AboutEN'
import Hero from './components/Hero'
import { AboutPT } from './components/pt/AboutPT'
import Navbar from './components/Navbar'
import { useMotionValueEvent, useScroll } from 'framer-motion'

function App() {

  const [showNavbar, setShowNavbar] = useState(false);
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("lang") || "EN";
  });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowNavbar(latest > 0.5);
  })

  useEffect(() => {
    localStorage.setItem("lang", lang)
  }, [lang]);

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


  const getComponentsByLanguage = () => {
    if (lang === "EN") return <AboutEN />;
    if (lang === "DE") return <AboutDE />;
    return <AboutPT />;
  }

  return (
    <>
    {showNavbar && <Navbar />}

    <div ref={heroRef}>
      <Hero lang={lang} setLang={setLang}/>
    </div>
    {getComponentsByLanguage()}
    </>
  )
}

export default App;
