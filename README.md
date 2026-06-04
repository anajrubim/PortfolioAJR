# Portfolio — João Gabriel (React + CSS)

Versão simplificada do portfólio original, recriada em **React puro** e **CSS** — sem TypeScript, sem Next.js, sem GSAP nem Framer Motion.

## Estrutura

```
src/
  App.js                  ← raiz da aplicação
  index.js                ← entry point
  styles/global.css       ← tokens, reset, keyframes globais
  data/index.js           ← todo o conteúdo (links, skills, projetos…)
  components/
    Navbar.js / .css      ← barra de navegação fixa com menu mobile
    BackToTop.js / .css   ← botão voltar ao topo
  sections/
    Hero.js / .css        ← hero 3 colunas com typewriter e parallax
    About.js / .css       ← seção "Sobre" com cards 2×2
    Knowledge.js / .css   ← grid de habilidades (ícones via Simple Icons CDN)
    Projects.js / .css    ← cards de projetos com reveal on scroll
    Hire.js / .css        ← seção CTA "Deseja me contratar?"
    Process.js / .css     ← timeline sticky de 4 etapas
    Contact.js / .css     ← seção de contato (fundo branco)
    Footer.js / .css      ← rodapé com links e créditos
```

## Como rodar

```bash
# instalar dependências
npm install

# iniciar servidor de desenvolvimento
npm start

# gerar build de produção
npm run build
```

> Requer **Node.js 16+** e **npm** instalados.

## Personalizações rápidas

- **Dados pessoais** → `src/data/index.js` (nome, links, projetos, habilidades, etapas do processo)
- **Cores** → variáveis CSS no topo de `src/styles/global.css`
- **Fontes** → troque os `@import` no `public/index.html`

## Recursos implementados

| Recurso | Implementação |
|---|---|
| Typewriter hero | Hook customizado com `setTimeout` |
| Parallax no hero | `scroll` event listener |
| Reveal on scroll | `IntersectionObserver` |
| Timeline sticky (processos) | `position:sticky` + scroll progress |
| Noise overlay | SVG `feTurbulence` animado |
| Active nav link | `IntersectionObserver` por seção |
| Menu mobile animado | CSS `opacity` + `animation-delay` staggered |
| Cursor orb na seção Hire | `mousemove` event |
| Ícones de skills | Simple Icons CDN via CSS mask |
| Back to top | `scroll` event + CSS transition |
