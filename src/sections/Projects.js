import React, { useEffect, useRef } from 'react';
import { projects } from '../data';
import './Projects.css';

function ArrowRight() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
}
function ExternalIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;
}

export default function Projects() {
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold:.08 }
    );
    gridRef.current?.querySelectorAll('.proj-card').forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projetos" className="sec">
      <div className="wrap-lg">
        <p className="sec-label">Projetos</p>
        <h2 className="proj-h2">Seleção de trabalhos recentes.</h2>

        <ul className="proj-grid" ref={gridRef}>
          {projects.map((p, i) => (
            <li key={p.title} className="proj-card" style={{'--d':`${i*90}ms`}}>
              <div className="proj-card-top">
                <div className="proj-card-meta">
                  <span className="proj-idx">{String(i+1).padStart(2,'0')}</span>
                  <span className="proj-status">{p.status}</span>
                </div>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="proj-ext" aria-label={`Abrir ${p.title}`}>
                  <ExternalIcon />
                </a>
              </div>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tags">
                {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
              </div>
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="proj-cta">
                Ver projeto <ArrowRight />
              </a>
            </li>
          ))}
        </ul>

        <div className="proj-more">
          <a href="https://github.com/anajrubim" target="_blank" rel="noopener noreferrer" className="proj-more-btn">
            Ver todos no GitHub <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
