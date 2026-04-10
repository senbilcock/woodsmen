// ======== Hero Carousel ========
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.hero-dot');
let currentSlide = 0;
let slideInterval;

function goToSlide(index) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = index;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function startCarousel() {
  slideInterval = setInterval(nextSlide, 5000);
}

function resetCarousel() {
  clearInterval(slideInterval);
  startCarousel();
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.dot));
    resetCarousel();
  });
});

startCarousel();

// ======== Mobile Nav Toggle ========
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ======== Smooth Scroll ========
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.nav').offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ======== WOD Date ========
const wodDate = document.getElementById('wod-date');
if (wodDate) {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  wodDate.textContent = now.toLocaleDateString('en-NZ', options);
}

// ======== Signup Form ========
function handleSignup(e) {
  e.preventDefault();
  const form = e.target;
  const success = document.getElementById('signup-success');
  form.style.display = 'none';
  document.querySelector('.form-note').style.display = 'none';
  success.classList.add('visible');
}

// ======== Scroll Animations ========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements for fade-in
document.querySelectorAll('.feature-card, .session-card, .mission-card, .community-stat, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Add visible styles
const style = document.createElement('style');
style.textContent = `
  .feature-card.visible, .session-card.visible, .mission-card.visible,
  .community-stat.visible, .faq-item.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);
