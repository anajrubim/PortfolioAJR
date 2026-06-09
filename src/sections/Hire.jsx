import React, { useEffect, useRef } from 'react';
import { LINKS } from '../data';
import './Hire.css';

const SERVICES = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'Desenvolvimento Web',
    desc: 'Sites e aplicações completas com React, do protótipo ao deploy com foco em performance.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
    title: 'APIs & Back-end',
    desc: 'Integração de APIs REST, back-end escalável e banco de dados bem estruturado.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
    title: 'UI/UX Design',
    desc: 'Interfaces pensadas na experiência real do usuário — bonitas, intuitivas e acessíveis.',
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: 'Freelance & Consultoria',
    desc: 'Parceria em projetos pontuais ou contínua para times que precisam de reforço técnico.',
  },
];

const STEPS = [
  { num: '01', label: 'Briefing',  desc: 'Entendo seu projeto, objetivos e expectativas em detalhe.' },
  { num: '02', label: 'Proposta',  desc: 'Envio escopo, prazo e orçamento detalhados para aprovação.' },
  { num: '03', label: 'Execução',  desc: 'Desenvolvimento ágil com updates frequentes para você acompanhar.' },
  { num: '04', label: 'Entrega',   desc: 'Deploy, documentação completa e suporte pós-entrega incluídos.' },
];

export default function Hire() {
  const orbRef = useRef(null);
  const secRef = useRef(null);

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
    window.addEventListener('mousemove', fn, { passive: true });
    return () => window.removeEventListener('mousemove', fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold: .1 }
    );
    secRef.current?.querySelectorAll('.hire-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contratar" className="hire" ref={secRef}>
      <div className="hire__orb-wrap" aria-hidden>
        <div className="hire__orb" ref={orbRef} />
      </div>
      <div className="hire__noise" aria-hidden />

      <div className="wrap hire__inner">

        <div className="hire__header hire-reveal">
          <div className="hire__badge">
            <span className="hire__badge-dot" aria-hidden />
            Contrate-me
          </div>
          <h2 className="hire__heading">
            <span>Vamos construir</span>
            <span className="hire__heading-em">algo incrível<span className="hire__q">?</span></span>
          </h2>
          <p className="hire__subtext">
            Estou disponível para projetos freelance, colaborações e oportunidades CLT/PJ.
            Se você tem uma ideia ou precisa de uma dev dedicada — estou aqui.
          </p>
          <div className="hire__cta-group">
            <a href={`mailto:${LINKS.email}`} className="hire__cta hire__cta--fill">
              Enviar proposta
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22 11 13 2 9l20-7z"/></svg>
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hire__cta hire__cta--ghost">
              Falar no WhatsApp
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          </div>
        </div>

        <div className="hire__services-grid hire-reveal" style={{'--d':'120ms'}}>
          {SERVICES.map((s, i) => (
            <div key={i} className="hire__service-card" style={{'--i': i}}>
              <div className="hire__service-icon">{s.icon}</div>
              <h3 className="hire__service-title">{s.title}</h3>
              <p className="hire__service-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="hire__steps-section hire-reveal" style={{'--d':'200ms'}}>
          <p className="hire__steps-label">Como funciona</p>
          <div className="hire__steps">
            {STEPS.map((step, i) => (
              <div key={i} className="hire__step">
                <div className="hire__step-num">{step.num}</div>
                <div className="hire__step-body">
                  <span className="hire__step-label">{step.label}</span>
                  <span className="hire__step-desc">{step.desc}</span>
                </div>
                {i < STEPS.length - 1 && <div className="hire__step-line" aria-hidden />}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
