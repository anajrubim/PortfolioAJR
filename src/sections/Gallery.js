import React, { useState } from 'react';
import { galleryItems } from '../data';
import './Gallery.css';

const CATEGORIES = ['Todos', 'UI/UX', 'Web Design', 'Branding', 'Design Gráfico'];

export default function Gallery() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos'
    ? galleryItems
    : galleryItems.filter(i => i.category === active);

  return (
    <section id="galeria" className="gallery">
      <div className="gallery__inner">
        <header className="gallery__header">
          <p className="gallery__label">Criatividade em foco</p>
          <h2 className="gallery__title">Galeria de <span>Designs</span></h2>
          <p className="gallery__subtitle">
            Uma seleção de trabalhos visuais — interfaces, protótipos e identidades
            desenvolvidos ao longo da minha trajetória.
          </p>
        </header>

        <div className="gallery__filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`gallery__filter${active === cat ? ' gallery__filter--on' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {filtered.map(item => (
            <div key={item.id} className="gallery__card">
              <div className="gallery__thumb" style={{ '--accent': item.color }}>
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="gallery__thumb-img"
                  />
                ) : (
                  <>
                    <div className="gallery__thumb-orb" aria-hidden />
                    <div className="gallery__thumb-grid" aria-hidden />
                    <div className="gallery__thumb-label" aria-hidden>{item.title}</div>
                  </>
                )}
                <span className="gallery__tool-badge">{item.tool}</span>
              </div>
              <div className="gallery__info">
                <span className="gallery__cat">{item.category}</span>
                <h3 className="gallery__name">{item.title}</h3>
                <p className="gallery__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
