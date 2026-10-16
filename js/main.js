(() => {
  const root = document.documentElement, esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const t = root.dataset.theme === 'dark' ? 'light' : 'dark'; root.dataset.theme = t; try { localStorage.setItem('theme', t); } catch (e) {}
  });
  const mt = document.getElementById('menu-toggle'), menu = document.getElementById('menu');
  mt.addEventListener('click', () => { const o = menu.classList.toggle('open'); mt.setAttribute('aria-expanded', o); });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); mt.setAttribute('aria-expanded', false); }));
  const grid = document.getElementById('projects-grid');
  let curLang = 'es';
  const renderProjects = lang => {
    const ui = I18N[lang];
    grid.innerHTML = (window.PROJECTS || PROJECTS).map((p, i) => {
      const t = lang === 'en' && p.en ? { ...p, ...p.en } : p;
      const img = p.image ? `<img src="${esc(p.image)}" alt="${esc(ui['proj.alt'] + t.title)}" loading="lazy">` : esc(t.title.slice(0,1));
      const media = p.gallery ? `<button class="project-img project-open" data-idx="${i}" aria-label="${esc(ui['gal.open'] + t.title)}">${img}</button>` : `<div class="project-img">${img}</div>`;
      return `
    <article class="card project reveal visible">
      ${media}
      <div class="project-body"><h3>${esc(t.title)}</h3><p>${esc(t.description)}</p>
      <ul class="tags">${t.tags.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      ${p.gallery ? `<button class="link project-open" data-idx="${i}">${ui['gal.view']}</button>` : ''}
      ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">${ui['proj.view']}</a>` : ''}</div>
    </article>`; }).join('');
  };
  /* Galería (lightbox) */
  const lb2 = document.createElement('div');
  lb2.className = 'lightbox'; lb2.hidden = true; lb2.setAttribute('role', 'dialog'); lb2.setAttribute('aria-modal', 'true');
  lb2.innerHTML = '<button class="lb-close" aria-label="Cerrar">×</button><button class="lb-prev" aria-label="Anterior">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-next" aria-label="Siguiente">›</button>';
  document.body.appendChild(lb2);
  let gal = [], gi = 0, lastFocus = null;
  const show = () => {
    const g = gal[gi], cap = curLang === 'en' && g.caption_en ? g.caption_en : g.caption;
    lb2.querySelector('img').src = g.src; lb2.querySelector('img').alt = cap;
    lb2.querySelector('figcaption').textContent = `${cap} · ${gi + 1}/${gal.length}`;
  };
  const openGal = idx => { gal = (window.PROJECTS || PROJECTS)[idx].gallery; gi = 0; lastFocus = document.activeElement; lb2.hidden = false; document.body.style.overflow = 'hidden'; show(); lb2.querySelector('.lb-close').focus(); };
  const closeGal = () => { lb2.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); };
  const step = d => { gi = (gi + d + gal.length) % gal.length; show(); };
  grid.addEventListener('click', e => { const b = e.target.closest('.project-open'); if (b) openGal(+b.dataset.idx); });
  lb2.querySelector('.lb-close').onclick = closeGal;
  lb2.querySelector('.lb-prev').onclick = () => step(-1);
  lb2.querySelector('.lb-next').onclick = () => step(1);
  lb2.addEventListener('click', e => { if (e.target === lb2) closeGal(); });
  document.addEventListener('keydown', e => {
    if (lb2.hidden) return;
    if (e.key === 'Escape') closeGal(); else if (e.key === 'ArrowLeft') step(-1); else if (e.key === 'ArrowRight') step(1);
    else if (e.key === 'Tab') { const f = [...lb2.querySelectorAll('button')], i = f.indexOf(document.activeElement); e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus(); }
  });
  const lbLabels = lang => { const d = I18N[lang]; lb2.querySelector('.lb-close').setAttribute('aria-label', d['gal.close']); lb2.querySelector('.lb-prev').setAttribute('aria-label', d['gal.prev']); lb2.querySelector('.lb-next').setAttribute('aria-label', d['gal.next']); };
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
    curLang = lang; renderProjects(lang); lbLabels(lang);
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
