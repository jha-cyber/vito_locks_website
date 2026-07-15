// Vito Locks — Main Script

// ——— Mobile Nav Toggle ———
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
// Close menu on link click
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ——— Smooth active nav highlight ———
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 80) current = s.id;
  });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--accent-light)' : '';
  });
});

// ——— BUBBLE / RIPPLE EFFECT on all buttons ———
document.querySelectorAll('.ripple-btn').forEach(btn => {
  btn.addEventListener('click', function (e) {
    // Remove any old ripples
    const old = this.querySelector('.ripple');
    if (old) old.remove();

    const circle = document.createElement('span');
    const diameter = Math.max(this.clientWidth, this.clientHeight);
    const radius = diameter / 2;

    const rect = this.getBoundingClientRect();
    circle.style.width  = circle.style.height = `${diameter}px`;
    circle.style.left   = `${e.clientX - rect.left - radius}px`;
    circle.style.top    = `${e.clientY - rect.top  - radius}px`;
    circle.classList.add('ripple');

    this.appendChild(circle);

    // Clean up after animation
    circle.addEventListener('animationend', () => circle.remove());
  });
});

// ——— Scroll-fade-in animation (styles in style.css) ———

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      // Stagger siblings slightly
      const siblings = [...e.target.parentElement.children];
      const idx = siblings.indexOf(e.target);
      e.target.style.transitionDelay = (idx * 0.08) + 's';
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.product-card, .why-card, .mfg-step, .cert-box')
  .forEach(el => {
    el.classList.add('fade-item');
    observer.observe(el);
  });

// ——— Counter animation ———
function animateCount(el, target, suffix = '') {
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(timer);
  }, 20);
}

const statsSection = document.getElementById('stats');
let countStarted = false;
const statObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countStarted) {
    countStarted = true;
    document.querySelectorAll('[data-count]').forEach(el => {
      const val = parseInt(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      animateCount(el, val, suffix);
    });
  }
}, { threshold: 0.4 });
if (statsSection) statObserver.observe(statsSection);

// ——— Contact Form ———
const form = document.getElementById('inquiryForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  showToast('✓ Inquiry sent! We will contact you within 24 hours.');
  form.reset();
});

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 4000);
}
