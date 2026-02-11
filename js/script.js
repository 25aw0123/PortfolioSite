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
  

  const worksData = [
    {
      id: 'recipe-owned-media',
      category: '学校課題',
      title: 'レシピオウンドメディア',
      thumbnail: './img/work01_recipe_ownedmedia/work01_thumbnail.png'
    },
    {
      id: 'my-portfolio',
      category: '自主制作',
      title: '個人ポートフォリオ',
      thumbnail: './img/work02_portfolio/work02_thumbnail.png'
    },
    {
      id: 'photo-search-app',
      category: '学校課題',
      title: '画像検索アプリ（WebAPIを利用）',
      thumbnail: './img/work03_photo_search_app/work03_thumbnail.png'
    }
  ];

  const categoryColors = {
    '学校課題': '#7CABC5',
    '自主制作': '#e18546'
  };

  const renderWorks = () => {
    const container = document.getElementById('works-list');
    if (!container) return;

    let htmlContent = '';

    worksData.forEach(item => {
      const tagColor = categoryColors[item.category];

      htmlContent += `
            <a href="./works/${item.id}/index.html" class="work-card" target=_blank>

                <div class="work-card__content">
                    <p class="work-card__category" style="color: ${tagColor}; border-color: ${tagColor};">
                        ${item.category}
                    </p>
                    <h3 class="work-card__title">${item.title}</h3>
                </div>
                
                <div class="work-card__thumbnail">
                    <img src="${item.thumbnail}" alt="${item.title}" loading="lazy">
                </div>

                <span class="work-card__arrow">→</span>
            </a>
        `;
    });
    container.innerHTML = htmlContent;
  }
  renderWorks();
});