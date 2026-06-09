import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('inicio');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.slug)).filter(Boolean);
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (slug) => {
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(slug);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <button className="nav__logo" onClick={() => scrollTo('inicio')} aria-label="Início">
            <span>AJR</span><span className="nav__logo-dot">.</span>
          </button>

          <ul className="nav__links">
            {navLinks.map(l => (
              <li key={l.slug}>
                <button
                  className={`nav__link${active === l.slug ? ' nav__link--on' : ''}`}
                  onClick={() => scrollTo(l.slug)}
                >
                  {l.title}
                </button>
              </li>
            ))}
          </ul>

          <button className="nav__cta" onClick={() => scrollTo('contato')}>
            Contato
          </button>

          <button
            className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mob-menu${menuOpen ? ' mob-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mob-menu__list">
          {navLinks.map((l, i) => (
            <li key={l.slug} style={{ '--i': i }}>
              <button className="mob-menu__item" onClick={() => scrollTo(l.slug)}>
                <span className="mob-menu__num">{String(i + 1).padStart(2, '0')}</span>
                {l.title}
              </button>
            </li>
          ))}
        </ul>
        <div className="mob-menu__bottom">
          <a href="https://github.com/anajrubim" target="_blank" rel="noopener noreferrer" className="mob-menu__social">GitHub</a>
          <a href="https://linkedin.com/in/ana-júlia-rubim" target="_blank" rel="noopener noreferrer" className="mob-menu__social">LinkedIn</a>
        </div>
      </div>
    </>
  );
}
