import React, { useRef, useEffect } from 'react';
import { LINKS } from '../data';
import './Contact.css';

const CONTACT_ITEMS = [
  { label:'E-mail',   href:`mailto:${LINKS.email}`,    icon:'',  desc: LINKS.email },
  { label:'WhatsApp', href: LINKS.whatsapp,             icon:'',  desc: '(12) 9 9666-4754' },
  { label:'LinkedIn', href: LINKS.linkedin,             icon:'',  desc: 'linkedin.com/in/jana-júlia-rubim' },
  { label:'GitHub',   href: LINKS.github,               icon:'',  desc: 'github.com/anajrubim' },
  { label:'Instagram',   href: LINKS.instagram,               icon:'',  desc: 'instagram.com/anajrubim' },
];

export default function Contact() {
  const secRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && e.target.classList.add('--in')),
      { threshold:.1 }
    );
    secRef.current?.querySelectorAll('.ct-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contato" className="sec-white contact" ref={secRef}>
      <div className="wrap contact__wrap">
        <div className="ct-left">
          <p className="ct-label">Contato</p>
          <h2 className="ct-h2 ct-reveal">Vamos conversar sobre o seu próximo projeto?</h2>
          <p className="ct-p ct-reveal" style={{'--d':'80ms'}}>
            Se você tem alguma ideia legal, quer trocar uma ideia ou só bater um papo sobre design? 
            Entre em contato comigo pelas minhas redes sociais, vou adorar tomar um café contigo! 
            Mas você paga viu? ;D
          </p>

          <div className="ct-actions ct-reveal" style={{'--d':'160ms'}}>
            <a href={`mailto:${LINKS.email}`} className="ct-btn-fill">
              Enviar e-mail
            </a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="ct-btn-ghost">
              WhatsApp
            </a>
          </div>
        </div>
        <div className="ct-right ct-reveal" style={{'--d':'120ms'}}>
          {CONTACT_ITEMS.map((c,i) => (
            <a key={c.label} href={c.href} target={c.href.startsWith('mailto')? undefined:'_blank'} rel="noopener noreferrer"
               className="ct-item" style={{'--i':i}}>
              <span className="ct-item-icon">{c.icon}</span>
              <div className="ct-item-body">
                <span className="ct-item-label">{c.label}</span>
                <span className="ct-item-desc">{c.desc}</span>
              </div>
              <svg className="ct-item-arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
