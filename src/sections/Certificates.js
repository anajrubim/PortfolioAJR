import React, { useEffect, useRef } from 'react';
import { certificates } from '../data';
import './Certificates.css';

const CATEGORY_COLORS = {
  'Técnico': { bg: 'rgba(167,139,250,0.12)', border: 'rgba(167,139,250,0.3)', text: '#a78bfa' },
  'Design':  { bg: 'rgba(52,211,153,0.10)',  border: 'rgba(52,211,153,0.28)', text: '#34d399' },
  'Idioma':  { bg: 'rgba(251,191,36,0.10)',  border: 'rgba(251,191,36,0.28)', text: '#fbbf24' },
};

function CertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

export default function Certificates() {
  const secRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold: .08 }
    );
    secRef.current?.querySelectorAll('.cert-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="certificados" className="sec" ref={secRef}>
      <div className="wrap-lg">
        <p className="sec-label">Certificações</p>
        <h2 className="cert-h2">Aprendizado contínuo &amp; certificado.</h2>

        <div className="cert-grid">
          {certificates.map((c, i) => {
            const color = CATEGORY_COLORS[c.category] || CATEGORY_COLORS['Técnico'];
            return (
              <div
                key={i}
                className="cert-card cert-reveal"
                style={{ '--d': `${i * 60}ms` }}
              >
                <div className="cert-card-top">
                  <span className="cert-icon" style={{ color: color.text }}>
                    <CertIcon />
                  </span>
                  <span
                    className="cert-category"
                    style={{ background: color.bg, border: `1px solid ${color.border}`, color: color.text }}
                  >
                    {c.category}
                  </span>
                </div>
                <div className="cert-card-body">
                  <h3 className="cert-name">{c.name}</h3>
                  <div className="cert-meta">
                    <span className="cert-inst">{c.institution}</span>
                    <span className="cert-year">{c.year}</span>
                  </div>
                </div>
                <div className="cert-card-bottom">
                  <span className="cert-badge">Certificado</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="cert-note cert-reveal" style={{'--d':'400ms'}}>
          Certificados disponíveis para verificação mediante solicitação.
        </p>
      </div>
    </section>
  );
}
