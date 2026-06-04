import React, { useEffect, useRef } from 'react';
import './About.css';

const AVAILABILITY = [
  { label:'Aberta a projetos', value:`Mai – Nov / ${new Date().getFullYear()}`, hi:true },
  { label:'Remoto',     value:'Sim' },
  { label:'Presencial', value:'Caçapava, SP - Taubaté, SP - São José Dos Campos, SP '},
];

function useReveal(sel) {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold:.1 }
    );
    ref.current?.querySelectorAll(sel).forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [sel]);
  return ref;
}

export default function About() {
  const secRef = useReveal('.abt-reveal');

  return (
    <section id="sobre" className="sec" ref={secRef}>
      <div className="wrap">

        <div className="abt-bar">
          <div className="abt-bar__left">
            <span className="abt-bar__line" aria-hidden />
            <span className="sec-label" style={{marginBottom:0}}>Sobre</span>
          </div>
          <div className="abt-bar__meta">
            Caçapava / SP
            <span className="abt-dot" aria-hidden/>
            Ref. 0024
            <span className="abt-dot" aria-hidden/>
            Ed. 01 / {new Date().getFullYear()}
          </div>
        </div>

        <div className="abt-hero abt-reveal">
          <div className="abt-num-col">
            <span className="abt-bignum" aria-hidden>01</span>
            <span className="abt-bignum-label">Perfil</span>
          </div>
          <div className="abt-hero-body">
            <h2 className="abt-h2">
              <strong>Ana Júlia Rubim</strong>
              <span className="abt-sep"> — </span>
              <em>desenvolvimento<br className="abt-br" />de produtos digitais</em>
              <span className="abt-hdot">.</span>
            </h2>
            <div className="abt-hero-desc">
              <p className="abt-lead">
                Desenvolvedora fullstack com foco em Design UI/UX e Frontend. Da interface à experiência 
                do usuário, transformo ideias em soluções intuitivas, criando layouts funcionais, 
                responsivos e visualmente atraentes que conectam pessoas e tecnologia.
              </p>
              <aside className="abt-aside">
                <div className="abt-aside-label">Assinatura</div>
                <p className="abt-aside-p">
                  Interfaces tratadas como experiências — intuitivas, funcionais e pensadas para pessoas.
                </p>
              </aside>
            </div>
          </div>
        </div>
        <div className="abt-grid">
          <article className="abt-card abt-reveal" style={{'--d':'0ms'}}>
            <div className="abt-card-hd"><span className="abt-ci">02</span><h3 className="abt-ct">Formação Acadêmica</h3></div>
            <div className="abt-tl">
              <span className="abt-tl-period">2025 — Atual</span>
              <div className="abt-tl-title">Desenvolvimento de Software Multiplataforma</div>
              <div className="abt-tl-sub">Fatec</div>
              <p className="abt-tl-desc">Ênfase no desenvolvimento de aplicações web, mobile e desktop, com foco em qualidade, escalabilidade e experiência do usuário.</p>
            </div>
            <br></br>
            <div className="abt-tl">
              <span className="abt-tl-period">2022 — 2024</span>
              <div className="abt-tl-title">Desenvolvimento de Sistemas</div>
              <div className="abt-tl-sub">Etec</div>
              <p className="abt-tl-desc">Formação voltada ao desenvolvimento de sistemas, modelagem de dados, lógica de programação e integração de soluções tecnológicas.</p>
            </div>
          </article>
          <article className="abt-card abt-reveal" style={{'--d':'80ms'}}>
            <div className="abt-card-hd"><span className="abt-ci">03</span><h3 className="abt-ct">Experiência Profissional</h3></div>
            <div className="abt-tl abt-tl--rail">
              <div className="abt-tl-row">
                <span className="abt-tl-period">2025 — Atual</span>
                <div className="abt-active">
                  <span className="abt-active-dot" aria-hidden />
                  <span className="abt-active-txt">Ativo</span>
                </div>
              </div>
              <div className="abt-tl-title">Jovem Aprendiz Administrativo</div>
              <div className="abt-tl-sub">Nestlé</div>
              <p className="abt-tl-desc">Jovem Aprendiz no setor de SHE.</p>
            </div>
            <footer className="abt-card-ft">Detalhes completos no currículo em PDF.</footer>
          </article>

          {/* Idiomas */}
          <article className="abt-card abt-reveal" style={{'--d':'160ms'}}>
            <div className="abt-card-hd"><span className="abt-ci">04</span><h3 className="abt-ct">Idiomas</h3></div>
            {[['Português','Nativo'],['Inglês','Intermediário']].map(([n,l],i) => (
              <div key={n} className={`abt-lang${i===0?' abt-lang--b':''}`}>
                <span className="abt-lang-n">{n}</span>
                <span className="abt-lang-l">{l}</span>
              </div>
            ))}
          </article>
        </div>
        <div className="abt-fn">
          <span>§ About</span><span>v. 2.0.0</span>
        </div>
      </div>
    </section>
  );
}
