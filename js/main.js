/* ============================================================
   SOMMAR CAPITAL — main.js
   Hero slider | Menu mobile | Modais | FAQ | Scroll header
   ============================================================ */

// ---- HERO SLIDER ----
(function () {
  const track = document.getElementById('hero-track');
  const dots = document.querySelectorAll('.hero-dot');
  const prev = document.getElementById('hero-prev');
  const next = document.getElementById('hero-next');
  if (!track) return;

  let current = 0;
  const total = document.querySelectorAll('.hero-slide').length;
  let timer;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === current);
      d.setAttribute('aria-selected', i === current);
    });
  }

  function startAuto() {
    clearInterval(timer);
    if (reduceMotion) return; // respeita preferência de movimento reduzido
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  // Pausa o autoplay quando o usuário está interagindo com o hero
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    heroEl.addEventListener('mouseenter', () => clearInterval(timer));
    heroEl.addEventListener('mouseleave', startAuto);
    heroEl.addEventListener('focusin', () => clearInterval(timer));
    heroEl.addEventListener('focusout', startAuto);
  }

  prev.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  next.addEventListener('click', () => { goTo(current + 1); startAuto(); });
  dots.forEach(d => d.addEventListener('click', () => { goTo(+d.dataset.slide); startAuto(); }));

  // Touch support
  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); startAuto(); }
  });

  startAuto();
})();

// ---- SCROLL HEADER ----
(function () {
  const header = document.getElementById('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
})();

// ---- MOBILE MENU ----
(function () {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  // Close on nav link click
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
    });
  });
})();

// ---- PRODUCT TABS ----
(function () {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      buttons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', false); });
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      btn.setAttribute('aria-selected', true);
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
})();

// ---- FAQ ACCORDION ----
(function () {
  const questions = document.querySelectorAll('.faq-question');
  questions.forEach(q => {
    q.addEventListener('click', () => {
      const expanded = q.getAttribute('aria-expanded') === 'true';
      // Close all
      questions.forEach(other => {
        other.setAttribute('aria-expanded', false);
        const ans = other.nextElementSibling;
        if (ans) ans.classList.remove('open');
      });
      // Toggle clicked
      if (!expanded) {
        q.setAttribute('aria-expanded', true);
        const answer = q.nextElementSibling;
        if (answer) answer.classList.add('open');
      }
    });
  });
})();

// ---- MODALS ----
function openModal(id) {
  const modal = document.getElementById(id);
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !backdrop) return;
  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  const backdrop = document.getElementById('modal-backdrop');
  if (!modal || !backdrop) return;
  modal.classList.remove('open');
  if (!document.querySelector('.modal-overlay.open')) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAllModals(); });

// ---- SIMULATION STEPS ----
let simTipo = '';
let simValor = '';

function simNext(tipo) {
  simTipo = tipo;
  document.getElementById('sim-step-1').classList.remove('active');
  document.getElementById('sim-step-2').classList.add('active');
}

function simNextVal(valor) {
  simValor = valor;
  document.getElementById('sim-step-2').classList.remove('active');
  document.getElementById('sim-step-3').classList.add('active');
}

function submitSimulacao(e) {
  e.preventDefault();
  const nome = document.getElementById('sim-nome').value;
  const telefone = document.getElementById('sim-telefone').value;
  const interesse = `${simTipo} — ${simValor}`;
  const msg = encodeURIComponent(
    `Olá Gabriel! Gostaria de uma simulação.\n\nNome: ${nome}\nInteresse: ${interesse}\nTelefone: ${telefone}`
  );
  // Show success first
  document.getElementById('sim-step-3').classList.remove('active');
  document.getElementById('sim-step-sucesso').classList.add('active');
  // Open WhatsApp after short delay
  setTimeout(() => {
    window.open(`https://wa.me/5583999025887?text=${msg}`, '_blank');
  }, 600);
}

function submitWhatsapp(e) {
  e.preventDefault();
  const nome = document.getElementById('wa-nome').value;
  const telefone = document.getElementById('wa-telefone').value;
  const interesse = document.getElementById('wa-interesse').value || 'Não informado';
  const msg = encodeURIComponent(
    `Olá Gabriel! Quero saber mais sobre ${interesse}.\n\nNome: ${nome}\nTelefone: ${telefone}`
  );
  window.open(`https://wa.me/5583999025887?text=${msg}`, '_blank');
}

// ---- SMOOTH SCROLL (links de âncora) ----
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ---- Active nav highlight on scroll ----
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
})();

// ---- STAGGER INDEX ----
// Sets CSS --i on children of card grids so transition-delay staggers them.
(function () {
  [
    ['.needs-grid',       '.need-card'],
    ['.products-grid',    '.product-card'],
    ['.how-steps',        '.how-step'],
  ['.benefits-list',    '.benefit-item'],
    ['.testimonials-grid','.testimonial-card'],
    ['.blog-grid',        '.blog-card'],
    ['.about-stats',      '.stat-card'],
  ].forEach(([grid, child]) => {
    document.querySelectorAll(grid + ' ' + child).forEach((el, i) => {
      el.style.setProperty('--i', i);
    });
  });
  document.querySelectorAll('.comparison-item').forEach((el, i) => {
    el.style.setProperty('--i', i);
  });
})();

// ---- COUNTUP ----
// Animates stat numbers from 0 to their target value when scrolled into view.
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  function parseNum(el) {
    const text = el.textContent.trim();
    const m = text.match(/^([^0-9]*)([0-9]+(?:[.,][0-9]+)?)([^0-9]*)$/);
    if (!m) return null;
    const [, prefix, rawNum, suffix] = m;
    const target = parseFloat(rawNum.replace(',', '.'));
    if (target <= 0) return null;
    const decimals = (rawNum.split(/[.,]/)[1] || '').length;
    const usesComma = rawNum.includes(',');
    return { prefix, target, suffix, decimals, usesComma, original: text };
  }

  function runCountup(el, info) {
    const dur = 1100;
    const start = performance.now();
    function frame(now) {
      const t = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - t, 4); // ease-out-quart
      const val = info.target * ease;
      let display;
      if (info.decimals > 0) {
        display = info.usesComma
          ? val.toFixed(info.decimals).replace('.', ',')
          : val.toFixed(info.decimals);
      } else {
        display = String(Math.round(val));
      }
      el.textContent = info.prefix + display + info.suffix;
      if (t < 1) requestAnimationFrame(frame);
      else el.textContent = info.original;
    }
    requestAnimationFrame(frame);
  }

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(({ isIntersecting, target: el }) => {
      if (!isIntersecting) return;
      const info = parseNum(el);
      if (info) runCountup(el, info);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('.stat-num, .cg-card-rate').forEach(el => {
    if (parseNum(el)) io.observe(el);
  });
})();

// ---- SCROLL REVEAL (entrada suave das seções) ----
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (!('IntersectionObserver' in window)) return;

  const selector = '.section-title, .product-card, .how-step, .benefit-item, .testimonial-card, ' +
    '.blog-card, .need-card, .cg-text, .cg-card, .about-text, .stat-card, ' +
    '.cta-banner-inner, .instagram-inner, .comparison-banner, .faq-item';
  const els = document.querySelectorAll(selector);
  if (!els.length) return;

  document.documentElement.classList.add('reveal-ready');
  els.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  els.forEach(el => io.observe(el));
})();
