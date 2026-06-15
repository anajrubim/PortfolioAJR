import React, { useEffect, useRef } from 'react';
import { curriculum } from '../data';
import './Curriculum.css';

function useReveal(sel) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold: .08 }
    );
    ref.current?.querySelectorAll(sel).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [sel]);
  return ref;
}

export default function Curriculum() {
  const secRef = useReveal('.cv-reveal');

  return (
    <section id="curriculo" className="sec" ref={secRef}>
      <div className="wrap-lg">
        <p className="sec-label">Currículo</p>
        <h2 className="cv-h2">Formação &amp; trajetória acadêmica.</h2>

        <div className="cv-grid">
          <div className="cv-block cv-reveal" style={{'--d':'0ms'}}>
            <div className="cv-block-hd">
              <span className="cv-block-num">01</span>
              <h3 className="cv-block-title">Formação Acadêmica</h3>
            </div>
            <div className="cv-tl">
              {curriculum.academic.map((item, i) => (
                <div key={i} className="cv-tl-item">
                  <span className="cv-tl-period">{item.period}</span>
                  <div className="cv-tl-dot" aria-hidden />
                  <div className="cv-tl-body">
                    <div className="cv-tl-title">{item.title}</div>
                    <div className="cv-tl-inst">{item.institution}</div>
                    <p className="cv-tl-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cv-block cv-reveal" style={{'--d':'100ms'}}>
            <div className="cv-block-hd">
              <span className="cv-block-num">02</span>
              <h3 className="cv-block-title">Cursos Complementares</h3>
            </div>
            <ul className="cv-courses">
              {curriculum.courses.map((c, i) => (
                <li key={i} className="cv-course-item">
                  <div className="cv-course-main">
                    <span className="cv-course-name">{c.name}</span>
                    <span className="cv-course-year">{c.year}</span>
                  </div>
                  <span className="cv-course-inst">{c.institution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cv-cta cv-reveal" style={{'--d':'200ms'}}>
          <p className="cv-cta-text">Currículo completo disponível para download</p>
          <a href="./AnaJRubimCV.pdf" download="AnaJRubimCV.pdf" rel="noopener noreferrer" className="cv-cta-btn">
            Baixar CV em PDF
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
