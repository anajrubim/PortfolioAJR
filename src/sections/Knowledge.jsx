import React, { useState, useEffect, useRef } from 'react';
import { skillGroups, softSkills } from '../data';
import './Knowledge.css';

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@13/icons';

function SkillIcon({ slug, color }) {
  return (
    <span
      className="si"
      aria-hidden
      style={{
        backgroundColor: color,
        WebkitMaskImage:    `url(${CDN}/${slug}.svg)`,
        maskImage:          `url(${CDN}/${slug}.svg)`,
        WebkitMaskRepeat:   'no-repeat', maskRepeat:   'no-repeat',
        WebkitMaskSize:     'contain',   maskSize:     'contain',
        WebkitMaskPosition: 'center',    maskPosition: 'center',
      }}
    />
  );
}

export default function Knowledge() {
  const [hovered,  setHovered]  = useState(null);
  const [visible,  setVisible]  = useState(false);
  const secRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold:.1 });
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="habilidades" className="sec" ref={secRef}>
      <div className="wrap-lg">
        <p className="sec-label">Stack &amp; Habilidades</p>
        <h2 className={`kn-h2${visible?' kn-h2--in':''}`}>O que eu uso para construir.</h2>
        <p className="kn-sub">Ferramentas e competências aplicadas em projetos <em>reais</em>.</p>

        <div className="kn-section-title">Hard Skills — Técnicas</div>
        <div className="kn-div" aria-hidden />
        <div className="kn-grid">
          {skillGroups.map((g, i) => (
            <div
              key={g.id}
              className={`kn-col${visible?' kn-col--in':''} ${hovered!==null&&hovered!==i?' kn-col--dim':''}`}
              style={{ transitionDelay:`${i*55}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="kn-col-lbl">
                <span className="kn-col-num">{String(i+1).padStart(2,'0')}</span>
                {g.label}
              </div>
              <ul className="kn-skills">
                {g.skills.map(s => (
                  <li key={s.name} className="kn-skill">
                    <SkillIcon slug={s.slug} color={s.color} />
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="kn-soft-header">
          <div className="kn-section-title">Soft Skills — Comportamentais</div>
          <div className="kn-div" aria-hidden />
        </div>
        <ul className="kn-soft-grid">
          {softSkills.map((s, i) => (
            <li
              key={s.name}
              className={`kn-soft-card${visible?' kn-soft-card--in':''}`}
              style={{ transitionDelay:`${200 + i*60}ms` }}
            >
              <span className="kn-soft-icon">{s.icon}</span>
              <div className="kn-soft-body">
                <span className="kn-soft-name">{s.name}</span>
                <span className="kn-soft-desc">{s.desc}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="kn-fn">
          <span className="kn-fn-line" aria-hidden />
          Aberta a novas ferramentas conforme o projeto exige.{' '}
          <a href="#curriculo" className="kn-fn-link">
            Veja o meu currículo
          </a>
          .
        </p>
      </div>
    </section>
  );
}
