import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const WORDS = ['produtos digitais', 'interfaces web', 'experiências únicas'];

function useTypewriter(words) {
  const [displayed, setDisplayed] = useState('');
  const state = useRef({ wIdx:0, cIdx:0, deleting:false });

  useEffect(() => {
    let timeout;
    function tick() {
      const s   = state.current;
      const word = words[s.wIdx];
      if (!s.deleting && s.cIdx < word.length) {
        s.cIdx++;
        setDisplayed(word.slice(0, s.cIdx));
        timeout = setTimeout(tick, 62);
      } else if (!s.deleting && s.cIdx === word.length) {
        timeout = setTimeout(() => { s.deleting = true; tick(); }, 2200);
      } else if (s.deleting && s.cIdx > 0) {
        s.cIdx--;
        setDisplayed(word.slice(0, s.cIdx));
        timeout = setTimeout(tick, 36);
      } else {
        s.deleting = false;
        s.wIdx = (s.wIdx + 1) % words.length;
        timeout = setTimeout(tick, 320);
      }
    }
    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []); 

  return displayed;
}

export default function Hero() {
  const word   = useTypewriter(WORDS);
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    const leftCol  = el?.querySelector('.hero__left');
    const centerCol= el?.querySelector('.hero__center');
    const rightCol = el?.querySelector('.hero__right');
    const fn = () => {
      const y = window.scrollY;
      if (leftCol)   leftCol.style.transform   = `translateY(${y * -0.07}px)`;
      if (centerCol) centerCol.style.transform = `translateY(${y * 0.05}px)`;
      if (rightCol)  rightCol.style.transform  = `translateY(${y * -0.04}px)`;
    };
    window.addEventListener('scroll', fn, { passive:true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <section id="inicio" className="hero" ref={heroRef}>
      <div className="hero__orb hero__orb--v" aria-hidden />
      <div className="hero__orb hero__orb--e" aria-hidden />
      <div className="hero__grid-tex" aria-hidden />
      <div className="hero__cols">
        <div className="hero__left">
          <div className="hero__card">
            <h2 className="hero__card-headline">
              DESIGN QUE TE CHAMA,<br />
              <em>QUE TE CONQUISTA,</em><br />
              QUE TE ATENDE.
            </h2>
            <p className="hero__card-body">
              Interfaces boas chamam atenção à primeira vista. 
              As melhores te fazem ficar.
            </p>
            <div className="hero__card-divider" aria-hidden />
            <div className="hero__card-actions">
              <button className="hero__btn-fill" onClick={() => document.getElementById('projetos')?.scrollIntoView({behavior:'smooth'})}>
                Ver Projetos
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V4M6 10l6-6 6 6"/></svg>
              </button>
              <a className="hero__btn-ghost" href="/curriculo-joao-gabriel.pdf" target="_blank" rel="noopener noreferrer">
                Ver CV
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="hero__center">
          <div className="hero__giant-text" aria-hidden>
            <span className="hero__port">PORT</span>
            <span className="hero__folio">FOLIO.</span>
          </div>

          <div className="hero__type-row">
            <span className="hero__type-word">{word}</span>
            <span className="hero__cursor" aria-hidden />
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__right-inner">
            <div className="hero__availability">
              <span className="hero__avail-dot" aria-hidden />
              <span className="hero__avail-text">Disponível para projetos</span>
            </div>

            <h1 className="hero__name">Ana Júlia<br />Rubim</h1>
            <p className="hero__title-role">
              Desenvolvedora<br />Full Stack
            </p>

            <p className="hero__location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Caçapava, SP — Brasil
            </p>

            <div className="hero__social">
              <a href="https://github.com/anajrubim" target="_blank" rel="noopener noreferrer" className="hero__social-btn" aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>
              </a>
              <a href="https://linkedin.com/in/ana-júlia-rubim" target="_blank" rel="noopener noreferrer" className="hero__social-btn" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden>
        <span className="hero__scroll-label">Role para baixo</span>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
      </div>
    </section>
  );
}
