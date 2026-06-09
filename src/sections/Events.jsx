import React, { useEffect, useRef } from 'react';
import { events } from '../data';
import './Events.css';

const TYPE_ICONS = {
  'Hackathon':          '',
  'Maratona de Programação': '',
  'Semana Tecnológica': '',
  'Workshop':           '',
};

export default function Events() {
  const secRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold: .08 }
    );
    secRef.current?.querySelectorAll('.ev-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="eventos" className="sec" ref={secRef}>
      <div className="wrap-lg">
        <p className="sec-label">Eventos &amp; Atividades</p>
        <h2 className="ev-h2">Além da sala de aula.</h2>
        <p className="ev-sub">
          Participação ativa em competições, workshops e eventos da comunidade tech.
        </p>

        <div className="ev-list">
          {events.map((ev, i) => (
            <article
              key={i}
              className={`ev-card ev-reveal${ev.highlight ? ' ev-card--highlight' : ''}`}
              style={{ '--d': `${i * 80}ms` }}
            >
              <div className="ev-card-left">
                <span className="ev-icon">{TYPE_ICONS[ev.type] || ''}</span>
                <span className="ev-year">{ev.year}</span>
              </div>
              <div className="ev-card-body">
                <div className="ev-type-row">
                  <span className="ev-type">{ev.type}</span>
                  {ev.highlight && <span className="ev-badge">Destaque</span>}
                </div>
                <h3 className="ev-name">{ev.name}</h3>
                <p className="ev-role">{ev.role}</p>
                <p className="ev-desc">{ev.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
