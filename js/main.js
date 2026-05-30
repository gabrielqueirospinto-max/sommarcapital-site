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
    timer = setInterval(() => goTo(current + 1), 5000);
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
