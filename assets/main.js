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
    btnSubmit.style.background = '#22c55e';
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
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light');
  }
  themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  setTimeout(type, 500);
  initReveal();
  initGallery();

  document.querySelectorAll('[data-target]').forEach((el) => {
    counterObserver.observe(el);
  });
});

// ===== GALLERY & LIGHTBOX =====
let lbImages = [];
let lbCaptions = [];
let lbIndex = 0;

function getLbEls() {
  return {
    lb: document.getElementById('lightbox'),
    img: document.getElementById('lb-img'),
    title: document.getElementById('lb-title'),
    counter: document.getElementById('lb-counter'),
    prev: document.getElementById('lb-prev'),
    next: document.getElementById('lb-next'),
    strip: document.getElementById('lb-strip'),
  };
}

function renderLightbox() {
  const { img, title, counter, prev, next, strip } = getLbEls();
  img.classList.add('fade');
  setTimeout(() => {
    img.src = lbImages[lbIndex];
    img.alt = lbCaptions[lbIndex] || '';
    title.textContent = lbCaptions[lbIndex] || '';
    counter.textContent = lbImages.length > 1 ? `${lbIndex + 1} / ${lbImages.length}` : '';
    prev.disabled = lbIndex === 0;
    next.disabled = lbIndex === lbImages.length - 1;
    strip.querySelectorAll('.lightbox-strip-thumb').forEach((t, i) => {
      t.classList.toggle('active', i === lbIndex);
      if (i === lbIndex) t.scrollIntoView({ inline: 'center', behavior: 'smooth' });
    });
    img.classList.remove('fade');
  }, 160);
}

function buildStrip() {
  const { strip } = getLbEls();
  strip.innerHTML = '';
  if (lbImages.length <= 1) return;
  lbImages.forEach((src, i) => {
    const thumb = document.createElement('img');
    thumb.src = src;
    thumb.className = 'lightbox-strip-thumb' + (i === lbIndex ? ' active' : '');
    thumb.loading = 'lazy';
    thumb.addEventListener('click', () => { lbIndex = i; renderLightbox(); });
    strip.appendChild(thumb);
  });
}

function openLb(images, captions, startIdx) {
  lbImages = images;
  lbCaptions = captions;
  lbIndex = startIdx;
  buildStrip();
  renderLightbox();
  getLbEls().lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  getLbEls().lb.classList.remove('open');
  document.body.style.overflow = '';
}

function initGallery() {
  // Project gallery thumbnail switching
  document.querySelectorAll('.project-gallery').forEach((gallery) => {
    const images = JSON.parse(gallery.dataset.images || '[]');
    const captions = JSON.parse(gallery.dataset.captions || '[]');

    // Click on banner → open lightbox
    const banner = gallery.querySelector('.project-banner');
    banner?.addEventListener('click', () => {
      openLb(images, captions, parseInt(gallery.dataset.current || '0'));
    });

    // Thumbnail click → swap main image
    gallery.querySelectorAll('.gthumb').forEach((thumb) => {
      thumb.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(thumb.dataset.index);
        gallery.dataset.current = idx;
        const main = gallery.querySelector('.gallery-main');
        if (main) {
          main.classList.add('fade-quick');
          setTimeout(() => {
            main.src = images[idx];
            main.classList.remove('fade-quick');
          }, 120);
        }
        gallery.querySelectorAll('.gthumb').forEach((t) => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });

  // Lightbox controls
  document.getElementById('lb-close')?.addEventListener('click', closeLb);
  document.getElementById('lb-prev')?.addEventListener('click', () => {
    if (lbIndex > 0) { lbIndex--; renderLightbox(); }
  });
  document.getElementById('lb-next')?.addEventListener('click', () => {
    if (lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
  });

  // Click outside (backdrop) closes
  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLb();
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    if (!document.getElementById('lightbox')?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft' && lbIndex > 0) { lbIndex--; renderLightbox(); }
    if (e.key === 'ArrowRight' && lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
  });

  // Touch swipe support
  let touchStartX = 0;
  document.getElementById('lightbox')?.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.getElementById('lightbox')?.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && lbIndex < lbImages.length - 1) { lbIndex++; renderLightbox(); }
      if (diff < 0 && lbIndex > 0) { lbIndex--; renderLightbox(); }
    }
  }, { passive: true });
}
