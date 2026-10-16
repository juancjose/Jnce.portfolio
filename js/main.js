(() => {
  const root = document.documentElement, esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (e) {}
  });
  const mt = document.getElementById('menu-toggle'), menu = document.getElementById('menu');
  mt.addEventListener('click', () => { const o = menu.classList.toggle('open'); mt.setAttribute('aria-expanded', o); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); mt.setAttribute('aria-expanded', false); }));
  document.getElementById('projects-grid').innerHTML = (window.PROJECTS || PROJECTS).map(p => `
    <article class="card project reveal">
      <div class="project-img">${p.image ? `<img src="${esc(p.image)}" alt="Captura de ${esc(p.title)}" loading="lazy">` : esc(p.title.replace('[EDITAR] ','').slice(0,1))}</div>
      <div class="project-body"><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
      <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">Ver proyecto →</a>` : ''}</div>
    </article>`).join('');
  document.getElementById('year').textContent = new Date().getFullYear();
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: .1 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('visible'));
})();
