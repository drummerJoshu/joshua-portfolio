// Portfolio Interactivity Script

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksArr = document.querySelectorAll('.nav-links a');

// Mobile Menu Toggle
if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu on link click
navLinksArr.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Fade-in Animation on Scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Contact Form Handler (mailto fallback)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
    const body = encodeURIComponent(`Email: ${email}\\n\\nMessage: ${message}`);
    
    window.location.href = `mailto:Joshuadrummer41@gmail.com?subject=${subject}&body=${body}`;
    
    // Optional: Show success message
    this.reset();
    alert('Message sent! (Check your email client)');
  });
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(2, 6, 23, 0.98)';
  } else {
    nav.style.background = 'rgba(2, 6, 23, 0.95)';
  }
});

