document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.menu-button');
  const nav = document.querySelector('.global-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);

    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
});