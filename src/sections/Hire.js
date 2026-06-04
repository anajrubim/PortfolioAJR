import React, { useEffect, useRef } from 'react';
import './Hire.css';

export default function Hire() {
  const orbRef = useRef(null);

  useEffect(() => {
    const fn = (e) => {
      const el = orbRef.current;
      if (!el) return;
      const { clientX: x, clientY: y } = e;
      const { left, top, width, height } = el.parentElement.getBoundingClientRect();
      const rx = ((x - left) / width  - 0.5) * 60;
      const ry = ((y - top)  / height - 0.5) * 60;
      el.style.transform = `translate(${rx}px, ${ry}px)`;
    };
    window.addEventListener('mousemove', fn, { passive:true });
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  return (
    <section id="contratar" className="hire">
      <div className="hire__orb-wrap" aria-hidden>
        <div className="hire__orb" ref={orbRef} />
      </div>
      <div className="hire__noise" aria-hidden />

      <div className="wrap hire__inner">
        <div className="hire__badge">
          <span className="hire__badge-dot" aria-hidden />
          Contratar
        </div>

        <h2 className="hire__heading">
          <span>Deseja me</span>
          <span className="hire__heading-em">contratar<span className="hire__q">?</span></span>
        </h2>

        <div className="hire__actions">
          <button
            className="hire__cta"
            onClick={() => document.getElementById('processos')?.scrollIntoView({ behavior:'smooth' })}
          >
            Conhecer
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
          </button>
        </div>

        <div className="hire__scroll-hint" aria-hidden>
          <span className="hire__scroll-txt">Role para continuar</span>
          <div className="hire__scroll-mouse">
            <div className="hire__scroll-wheel" />
          </div>
        </div>
      </div>
    </section>
  );
}
