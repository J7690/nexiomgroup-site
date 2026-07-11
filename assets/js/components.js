// Utility functions for className merging
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Dark mode toggle component
export function createDarkModeToggle() {
  const toggle = document.createElement('button');
  toggle.className = 'dark-mode-toggle';
  toggle.setAttribute('aria-label', 'Basculer mode sombre');
  toggle.innerHTML = `
    <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  `;

  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add('dark');
  }

  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  return toggle;
}

// Animated counter component
export function createAnimatedCounter(target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  return function animateCounter(element) {
    const updateCounter = () => {
      start += increment;
      if (start < target) {
        element.textContent = Math.floor(start).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString();
      }
    };
    updateCounter();
  };
}

// Persona cards component
export function createPersonaSection() {
  const section = document.createElement('section');
  section.className = 'section personas-section';
  section.innerHTML = `
    <div class="container">
      <div class="section-header">
        <h2>Vous êtes ?</h2>
        <p>Sélectionnez votre profil pour découvrir les solutions Nexiom adaptées à vos besoins.</p>
      </div>
      <div class="personas-grid">
        <div class="persona-card" data-persona="student">
          <div class="persona-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10v6"></path>
              <path d="M20 16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2"></path>
              <path d="M20 8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2"></path>
              <path d="M12 2v6"></path>
              <path d="M12 18v4"></path>
            </svg>
          </div>
          <h3>Étudiants & Familles</h3>
          <p>Trouvez votre formation idéale et facilitez votre inscription</p>
          <a href="#academia" class="persona-link">Explorer les formations</a>
        </div>
        <div class="persona-card" data-persona="university">
          <div class="persona-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <h3>Universités & Écoles</h3>
          <p>Diffusez vos programmes et recevez des candidatures qualifiées</p>
          <a href="#contact" class="persona-link">Devenir partenaire</a>
        </div>
        <div class="persona-card" data-persona="company">
          <div class="persona-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
          </div>
          <h3>Entreprises & Institutions</h3>
          <p>Automatisez votre communication et pilotez vos campagnes</p>
          <a href="#contact" class="persona-link">Découvrir Nexiom AI Studio</a>
        </div>
      </div>
    </div>
  `;
  return section;
}

// Testimonials carousel component
export async function createTestimonialsSection() {
  const section = document.createElement('section');
  section.className = 'section testimonials-section section-alt';
  
  try {
    const response = await fetch('assets/data/content.json');
    const data = await response.json();
    const testimonials = data.testimonials;
    
    const slidesHTML = testimonials.map((testimonial, index) => `
      <div class="testimonial-slide ${index === 0 ? 'is-active' : ''}">
        <div class="testimonial-card">
          <div class="testimonial-avatar">
            <img src="${testimonial.avatar}" alt="${testimonial.name}" loading="lazy">
          </div>
          <div class="testimonial-content">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
              <h4>${testimonial.name}</h4>
              <span class="testimonial-role">${testimonial.role}</span>
            </div>
            <div class="testimonial-rating">
              <span>${'★'.repeat(testimonial.rating)}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');
    
    section.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Témoignages</h2>
          <p>Découvrez les expériences de nos partenaires et étudiants.</p>
        </div>
        <div class="testimonials-carousel" data-testimonials>
          ${slidesHTML}
        </div>
        <div class="testimonials-nav">
          <button class="testimonial-nav-btn prev" aria-label="Témoignage précédent">←</button>
          <button class="testimonial-nav-btn next" aria-label="Témoignage suivant">→</button>
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error loading testimonials:', error);
    section.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Témoignages</h2>
          <p>Découvrez les expériences de nos partenaires et étudiants.</p>
        </div>
        <p>Chargement des témoignages en cours...</p>
      </div>
    `;
  }
  
  return section;
}

// Stats section with animated counters
export async function createStatsSection() {
  const section = document.createElement('section');
  section.className = 'section stats-section';
  
  try {
    const response = await fetch('assets/data/content.json');
    const data = await response.json();
    const stats = data.stats;
    
    const statsHTML = stats.map(stat => `
      <div class="stat-item">
        <div class="stat-number" data-target="${stat.number}">0</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `).join('');
    
    section.innerHTML = `
      <div class="container">
        <div class="stats-grid">
          ${statsHTML}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error loading stats:', error);
    section.innerHTML = `
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-number" data-target="2500">0</div>
            <div class="stat-label">Étudiants accompagnés</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="45">0</div>
            <div class="stat-label">Partenaires universités</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="98">0</div>
            <div class="stat-label">% Taux de satisfaction</div>
          </div>
          <div class="stat-item">
            <div class="stat-number" data-target="12">0</div>
            <div class="stat-label">Pays d'Afrique couverts</div>
          </div>
        </div>
      </div>
    `;
  }
  
  return section;
}

// Blog section component
export async function createBlogSection() {
  const section = document.createElement('section');
  section.className = 'section blog-section';
  
  try {
    const response = await fetch('assets/data/content.json');
    const data = await response.json();
    const blogPosts = data.blog;
    
    const blogHTML = blogPosts.map(post => `
      <article class="card blog-card">
        <div class="blog-media">
          <img src="${post.image}" alt="${post.title}" loading="lazy" width="600" height="400">
        </div>
        <div class="blog-content">
          <div class="blog-meta">
            <span class="blog-category">${post.category}</span>
            <span class="blog-date">${new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
          <h3>${post.title}</h3>
          <p class="blog-excerpt">${post.excerpt}</p>
          <a href="#" class="blog-link">Lire l'article →</a>
        </div>
      </article>
    `).join('');
    
    section.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Actualités & Blog</h2>
          <p>Restez informé des dernières nouvelles de Nexiom Group et de l'éducation en Afrique.</p>
        </div>
        <div class="blog-grid">
          ${blogHTML}
        </div>
      </div>
    `;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    section.innerHTML = `
      <div class="container">
        <div class="section-header">
          <h2>Actualités & Blog</h2>
          <p>Restez informé des dernières nouvelles de Nexiom Group et de l'éducation en Afrique.</p>
        </div>
        <p>Chargement des articles en cours...</p>
      </div>
    `;
  }
  
  return section;
}

// Search component
export function createSearchComponent() {
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-container';
  searchContainer.innerHTML = `
    <div class="search-wrapper">
      <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
      <input type="text" id="search-input" placeholder="Rechercher une formation, un service..." aria-label="Rechercher sur le site">
      <button class="search-clear" id="search-clear" aria-label="Effacer la recherche" style="display: none;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="search-results" id="search-results" style="display: none;"></div>
  `;

  const searchInput = searchContainer.querySelector('#search-input');
  const searchClear = searchContainer.querySelector('#search-clear');
  const searchResults = searchContainer.querySelector('#search-results');

  let searchTimeout;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    
    clearTimeout(searchTimeout);
    
    if (query.length < 2) {
      searchResults.style.display = 'none';
      searchClear.style.display = 'none';
      return;
    }

    searchClear.style.display = 'flex';

    searchTimeout = setTimeout(() => {
      performSearch(query, searchResults);
    }, 300);
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchResults.style.display = 'none';
    searchClear.style.display = 'none';
    searchInput.focus();
  });

  document.addEventListener('click', (e) => {
    if (!searchContainer.contains(e.target)) {
      searchResults.style.display = 'none';
    }
  });

  return searchContainer;
}

async function performSearch(query, resultsContainer) {
  try {
    const response = await fetch('assets/data/content.json');
    const data = await response.json();
    
    const allItems = [
      ...data.blog.map(item => ({ ...item, type: 'article' })),
      ...data.resources.map(item => ({ ...item, type: 'resource' })),
      ...data.testimonials.map(item => ({ ...item, type: 'testimonial' }))
    ];

    const filteredItems = allItems.filter(item => {
      const searchFields = [
        item.title,
        item.description || item.text,
        item.category,
        item.audience || item.role
      ].join(' ').toLowerCase();
      
      return searchFields.includes(query.toLowerCase());
    });

    if (filteredItems.length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-no-results">
          <p>Aucun résultat pour "${query}"</p>
        </div>
      `;
    } else {
      const resultsHTML = filteredItems.slice(0, 6).map(item => `
        <div class="search-result-item" data-type="${item.type}">
          <span class="result-type">${item.type === 'article' ? 'Article' : item.type === 'resource' ? 'Ressource' : 'Témoignage'}</span>
          <h4>${item.title || item.name}</h4>
          <p>${item.excerpt || item.description || item.text?.substring(0, 100)}...</p>
        </div>
      `).join('');

      resultsContainer.innerHTML = resultsHTML;
    }

    resultsContainer.style.display = 'block';
  } catch (error) {
    console.error('Search error:', error);
    resultsContainer.innerHTML = '<p>Erreur lors de la recherche</p>';
    resultsContainer.style.display = 'block';
  }
}

// Initialize all modern components
export async function initModernComponents() {
  // Add search component to header
  const header = document.querySelector('.header-inner');
  if (header) {
    const searchComponent = createSearchComponent();
    searchComponent.style.cssText = `
      margin-left: auto;
      margin-right: 1rem;
      position: relative;
    `;
    header.insertBefore(searchComponent, header.querySelector('.nav-toggle') || header.lastChild);
    
    const darkModeToggle = createDarkModeToggle();
    darkModeToggle.style.cssText = `
      background: transparent;
      border: 1px solid var(--color-border-subtle);
      border-radius: 999px;
      padding: 0.5rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      margin-left: 1rem;
      transition: all 0.3s ease;
    `;
    header.appendChild(darkModeToggle);
  }

  // Insert personas section after hero
  const hero = document.getElementById('hero');
  if (hero) {
    const personasSection = createPersonaSection();
    hero.parentNode.insertBefore(personasSection, hero.nextSibling);
  }

  // Insert testimonials section before contact
  const contact = document.getElementById('contact');
  if (contact) {
    const testimonialsSection = await createTestimonialsSection();
    contact.parentNode.insertBefore(testimonialsSection, contact);
  }

  // Insert stats section after testimonials
  const testimonials = document.querySelector('.testimonials-section');
  if (testimonials) {
    const statsSection = await createStatsSection();
    testimonials.parentNode.insertBefore(statsSection, testimonials.nextSibling);
  }

  // Insert blog section after stats
  const stats = document.querySelector('.stats-section');
  if (stats) {
    const blogSection = await createBlogSection();
    stats.parentNode.insertBefore(blogSection, stats.nextSibling);
  }

  // Initialize testimonials carousel
  initTestimonialsCarousel();

  // Initialize animated counters with Intersection Observer
  initAnimatedCounters();

  // Add scroll animations
  initScrollAnimations();
}

function initTestimonialsCarousel() {
  const carousel = document.querySelector('[data-testimonials]');
  if (!carousel) return;

  const slides = carousel.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.testimonial-nav-btn.prev');
  const nextBtn = document.querySelector('.testimonial-nav-btn.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    });
  }

  // Auto-advance every 8 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 8000);
}

function initAnimatedCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        const animateCounter = createAnimatedCounter(target, 2000);
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(num => observer.observe(num));
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .persona-card, .section-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add CSS for animation
  const style = document.createElement('style');
  style.textContent = `
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    .dark-mode-toggle .moon-icon {
      display: none;
    }
    
    .dark .dark-mode-toggle .sun-icon {
      display: none;
    }
    
    .dark .dark-mode-toggle .moon-icon {
      display: block;
    }
  `;
  document.head.appendChild(style);
}
