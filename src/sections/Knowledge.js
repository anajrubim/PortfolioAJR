import React, { useState, useEffect, useRef } from 'react';
import { skillGroups } from '../data';
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
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold:.15 });
    if (secRef.current) obs.observe(secRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="habilidades" className="sec" ref={secRef}>
      <div className="wrap-lg">
        <p className="sec-label">Stack &amp; Ferramentas</p>
        <h2 className={`kn-h2${visible?' kn-h2--in':''}`}>O que eu uso para construir.</h2>
        <p className="kn-sub">Ferramentas que uso no dia a dia em projetos <em>reais</em>.</p>

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

        <p className="kn-fn">
          <span className="kn-fn-line" aria-hidden />
          Aberta a novas ferramentas conforme o projeto exige.{' '}
          <button className="kn-fn-link" onClick={() => window.open('/curriculo-joao-gabriel.pdf', '_blank')}>
            Veja o meu currículo
          </button>
          .
        </p>
      </div>
    </section>
  );
}
