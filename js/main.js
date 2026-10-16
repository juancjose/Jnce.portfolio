(() => {
  const root = document.documentElement, esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (e) {}
  });
  const mt = document.getElementById('menu-toggle'), menu = document.getElementById('menu');
  mt.addEventListener('click', () => { const o = menu.classList.toggle('open'); mt.setAttribute('aria-expanded', o); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); mt.setAttribute('aria-expanded', false); }));
  const grid = document.getElementById('projects-grid');
  const renderProjects = lang => {
    const ui = I18N[lang];
    grid.innerHTML = (window.PROJECTS || PROJECTS).map(p => {
      const t = lang === 'en' && p.en ? { ...p, ...p.en } : p;
      return `
    <article class="card project reveal visible">
      <div class="project-img">${p.image ? `<img src="${esc(p.image)}" alt="${esc(ui['proj.alt'] + t.title)}" loading="lazy">` : esc(t.title.slice(0,1))}</div>
      <div class="project-body"><h3>${esc(t.title)}</h3><p>${esc(t.description)}</p>
      <ul class="tags">${t.tags.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">${ui['proj.view']}</a>` : ''}</div>
    </article>`; }).join('');
  };
  /* Idioma: el español se toma del HTML al cargar; el inglés de js/i18n.js */
  const es = { ...I18N.es, 'meta.title': document.title, 'meta.desc': document.querySelector('meta[name=description]').content };
  document.querySelectorAll('[data-i18n]').forEach(el => es[el.dataset.i18n] = el.innerHTML);
  ['aria-label', 'title'].forEach(a => document.querySelectorAll(`[data-i18n-${a}]`).forEach(el => es[el.getAttribute(`data-i18n-${a}`)] = el.getAttribute(a)));
  const dict = { es, en: I18N.en };
  const lb = document.getElementById('lang-toggle');
  const setLang = lang => {
    const d = dict[lang];
    root.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { const v = d[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    ['aria-label', 'title'].forEach(a => document.querySelectorAll(`[data-i18n-${a}]`).forEach(el => { const v = d[el.getAttribute(`data-i18n-${a}`)]; if (v != null) el.setAttribute(a, v); }));
    document.title = d['meta.title'];
    document.querySelector('meta[name=description]').content = d['meta.desc'];
    lb.textContent = d['lang.btn']; lb.setAttribute('aria-label', d['lang.aria']); lb.title = d['lang.aria'];
    renderProjects(lang);
    document.getElementById('year').textContent = new Date().getFullYear();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  };
  lb.addEventListener('click', () => setLang(root.lang === 'en' ? 'es' : 'en'));
  let saved = 'es'; try { saved = localStorage.getItem('lang') || 'es'; } catch (e) {}
  setLang(saved);
  document.getElementById('year').textContent = new Date().getFullYear();
  const els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } }), { threshold: .1 });
    els.forEach(el => io.observe(el));
  } else els.forEach(el => el.classList.add('visible'));
})();
