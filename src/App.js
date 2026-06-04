import React, { useEffect, useRef } from 'react';
import Navbar  from './components/Navbar';
import Hero    from './sections/Hero';
import About   from './sections/About';
import Knowledge from './sections/Knowledge';
import Projects  from './sections/Projects';
import Hire      from './sections/Hire';
import Contact   from './sections/Contact';
import Footer    from './sections/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const appRef = useRef(null);
  useEffect(() => {
    const el = appRef.current;
    if (!el) return;
    el.style.opacity = '0';
    const t = setTimeout(() => {
      el.style.transition = 'opacity .55s ease';
      el.style.opacity = '1';
    }, 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={appRef}>
      <div className="noise-overlay" aria-hidden />

      <Navbar />
      <main>
        <Hero />
        <About />
        <Knowledge />
        <Projects />
        <Hire />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
