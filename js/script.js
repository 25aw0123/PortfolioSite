document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.menu-button');
  const nav = document.querySelector('.global-nav');
  const navLinks = document.querySelectorAll('.global-nav a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);

    document.body.style.overflow = isOpen ? 'hidden' : '';

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');

        hamburger.setAttribute('aria-expanded', 'false');
        nav.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';
      });
    });
  });


  const scrollBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('is-visible');
    } else {
      scrollBtn.classList.remove('is-visible');
    }
  });
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  const accordions = document.querySelectorAll('.accordion-header');
  accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      accordion.classList.toggle('active');
      const content = accordion.nextElementSibling;
      if (accordion.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }
    });
  });

  window.addEventListener('load', function () {
    const loader = document.getElementById('loading-screen');
    setTimeout(function () {
      loader.classList.add('is-loaded');
    }, 2000);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-show'); 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1 
  });

  document.querySelectorAll('.work-item').forEach(item => {
    observer.observe(item);
  });

});