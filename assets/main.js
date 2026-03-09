/* ===== MAIN.JS ===== */

// Typing animation
const typingWords = [
  'Full Stack Developer',
  'Laravel Specialist',
  'Next.js Developer',
  'Flutter Engineer',
  'UI/UX Enthusiast',
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingEl = document.getElementById('typing-text');

function type() {
  if (!typingEl) return;
  const current = typingWords[wordIndex];

  if (isDeleting) {
    typingEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(type, 1800);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typingWords.length;
  }

  setTimeout(type, isDeleting ? 60 : 90);
}

// Navbar scroll effect
const navbar = document.querySelector('.navbar');

function handleScroll() {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', handleScroll, { passive: true });

// Scroll reveal
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

function initReveal() {
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 5) * 80}ms`;
    observer.observe(el);
  });
}

// Mobile nav
const mobileBtn = document.querySelector('.nav-mobile-btn');
const mobileNav = document.querySelector('.mobile-nav');

mobileBtn?.addEventListener('click', () => {
  mobileNav?.classList.toggle('open');
  const spans = mobileBtn.querySelectorAll('span');
  mobileNav?.classList.contains('open')
    ? spans.forEach((s, i) => {
        if (i === 0) s.style.transform = 'translateY(7px) rotate(45deg)';
        if (i === 1) s.style.opacity = '0';
        if (i === 2) s.style.transform = 'translateY(-7px) rotate(-45deg)';
      })
    : spans.forEach((s) => {
        s.style.transform = '';
        s.style.opacity = '';
      });
});

document.querySelectorAll('.mobile-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileNav?.classList.remove('open');
    const spans = mobileBtn?.querySelectorAll('span');
    spans?.forEach((s) => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Contact form
const form = document.getElementById('contact-form');
const btnSubmit = document.getElementById('btn-submit');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  btnSubmit.textContent = 'Mengirim...';
  btnSubmit.disabled = true;

  setTimeout(() => {
    btnSubmit.textContent = '✓ Pesan Terkirim!';
    btnSubmit.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    setTimeout(() => {
      btnSubmit.textContent = 'Kirim Pesan';
      btnSubmit.style.background = '';
      btnSubmit.disabled = false;
      form.reset();
    }, 3000);
  }, 1500);
});

// Init
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(type, 500);
  initReveal();

  document.querySelectorAll('[data-target]').forEach((el) => {
    counterObserver.observe(el);
  });
});
