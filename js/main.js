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
      const dots = p.gallery ? `<span class="dots" aria-hidden="true">${p.gallery.map((_, k) => `<i${k ? '' : ' class="on"'}></i>`).join('')}</span>` : '';
      const media = p.gallery ? `<button class="project-img project-cycle" data-idx="${i}" data-pos="0" aria-label="${esc(ui['gal.nextphoto'])}">${img}${dots}</button>` : `<div class="project-img">${img}</div>`;
      return `
    <article class="card project reveal visible">
      ${media}
      <div class="project-body"><h3>${esc(t.title)}${p.badge ? ` <span class="badge">${esc(lang === 'en' ? p.badge.en : p.badge.es)}</span>` : ''}</h3><p>${esc(t.description)}</p>
      ${p.credit ? `<p class="credit">${esc(lang === 'en' ? p.credit.before_en : p.credit.before)}<a href="${esc(p.credit.url)}" target="_blank" rel="noopener">${esc(p.credit.handle)}</a>${esc(lang === 'en' ? p.credit.after_en : p.credit.after)}</p>` : ''}
      <ul class="tags">${t.tags.map(x => `<li>${esc(x)}</li>`).join('')}</ul>
      <div class="card-actions">${p.gallery ? `<button class="link project-open" data-idx="${i}">${ui['gal.view']}</button>` : ''}
      ${p.web ? `<a class="social card-ig" href="${esc(p.web)}" target="_blank" rel="noopener" aria-label="${esc((ui['proj.web'] || '') + t.title + (ui['proj.web.after'] || ''))}" title="${esc((ui['proj.web'] || '') + t.title + (ui['proj.web.after'] || ''))}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18z"/></svg></a>` : ''}
      ${p.instagram ? `<a class="social card-ig" href="${esc(p.instagram)}" target="_blank" rel="noopener" aria-label="${esc(ui['proj.ig'] + t.title)}" title="${esc(ui['proj.ig'] + t.title)}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/></svg></a>` : ''}
      ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">${ui['proj.view']}</a>` : ''}</div></div>
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
  const openGal = (idx, start = 0) => { gal = (window.PROJECTS || PROJECTS)[idx].gallery; gi = start; lastFocus = document.activeElement; lb2.hidden = false; document.body.style.overflow = 'hidden'; show(); lb2.querySelector('.lb-close').focus(); };
  const closeGal = () => { lb2.hidden = true; document.body.style.overflow = ''; if (lastFocus) lastFocus.focus(); };
  const step = d => { gi = (gi + d + gal.length) % gal.length; show(); };
  /* foto de la tarjeta: mitad izquierda = anterior, mitad derecha = siguiente (con fundido, da la vuelta) */
  const go = (c, dir) => {
    const g = (window.PROJECTS || PROJECTS)[+c.dataset.idx].gallery, pos = (+c.dataset.pos + dir + g.length) % g.length, im = c.querySelector('img');
    c.dataset.pos = pos; im.style.opacity = 0;
    const pre = new Image(); pre.src = g[pos].src;
    setTimeout(() => { im.src = g[pos].src; const cap = curLang === 'en' && g[pos].caption_en ? g[pos].caption_en : g[pos].caption; im.alt = cap; (pre.complete ? Promise.resolve() : new Promise(r => { pre.onload = pre.onerror = r; })).then(() => im.style.opacity = 1); }, 200);
    c.querySelectorAll('.dots i').forEach((d, k) => d.classList.toggle('on', k === pos));
  };
  let swiped = false, tx = 0, ty = 0;
  grid.addEventListener('touchstart', e => { if (e.target.closest('.project-cycle')) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; } }, { passive: true });
  grid.addEventListener('touchend', e => {
    const c = e.target.closest('.project-cycle'); if (!c) return;
    const dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) { swiped = true; go(c, dx < 0 ? 1 : -1); setTimeout(() => swiped = false, 400); }
  });
  grid.addEventListener('mousemove', e => { const c = e.target.closest('.project-cycle'); if (c) { const r = c.getBoundingClientRect(); c.style.cursor = e.clientX - r.left < r.width / 2 ? 'w-resize' : 'e-resize'; } });
  grid.addEventListener('keydown', e => { const c = e.target.closest('.project-cycle'); if (c && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) { e.preventDefault(); go(c, e.key === 'ArrowLeft' ? -1 : 1); } });
  grid.addEventListener('click', e => {
    const c = e.target.closest('.project-cycle');
    if (c) {
      if (swiped) return;
      if (e.detail === 0) { go(c, 1); return; } /* teclado (Enter/Espacio): siguiente */
      const r = c.getBoundingClientRect(); go(c, e.clientX - r.left < r.width / 2 ? -1 : 1); return;
    }
    const b = e.target.closest('.project-open');
    if (b) { const card = b.closest('.project').querySelector('.project-cycle'); openGal(+b.dataset.idx, card ? +card.dataset.pos : 0); }
  });
  lb2.querySelector('.lb-close').onclick = closeGal;
  lb2.querySelector('.lb-prev').onclick = () => step(-1);
  lb2.querySelector('.lb-next').onclick = () => step(1);
  lb2.querySelector('img').addEventListener('click', () => step(1));
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
