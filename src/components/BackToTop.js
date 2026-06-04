import React, { useState, useEffect } from 'react';
import './BackToTop.css';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive:true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button
      className={`btt${show?' btt--show':''}`}
      onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      aria-label="Voltar ao topo"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
    </button>
  );
}
