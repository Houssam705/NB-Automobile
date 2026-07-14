// ===== VEHICLE DATABASE =====
const vehicules = [
  {
    id: 1,
    marque: "Mercedes",
    modele: "Classe C 220d AMG Line",
    annee: 2025,
    km: 10,
    motorisation: "Diesel",
    transmission: "Automatique",
    carrosserie: "Berline",
    prix: 54900,
    badge: "Neuf",
    image: "https://fiducar.com/wp-content/uploads/2025/02/1-37.jpg"
  },
  {
    id: 2,
    marque: "BMW",
    modele: "Série 5 530i M Sport",
    annee: 2023,
    km: 18400,
    motorisation: "Essence",
    transmission: "Automatique",
    carrosserie: "Berline",
    prix: 46500,
    badge: "-3 ans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnNF5b6X3ul2YfujP0stj4IVC9OuczxgtQEBY8b2GaGg&s=10"
  },
  {
    id: 3,
    marque: "Audi",
    modele: "Q5 55 TFSI e S Line",
    annee: 2025,
    km: 5,
    motorisation: "Hybride",
    transmission: "Automatique",
    carrosserie: "SUV",
    prix: 61200,
    badge: "Neuf",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    marque: "Peugeot",
    modele: "208",
    annee: 2024,
    km: 8200,
    motorisation: "Essence",
    transmission: "Automatique",
    carrosserie: "Berline",
    prix: 14999,
    badge: "Premium",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoS-HfQnmk6u9gPjrlSIMjx82Xy1wHyhTa291eMcGTYA&s=10"
  },
  {
    id: 5,
    marque: "Volkswagen",
    modele: "Golf 8 GTI",
    annee: 2024,
    km: 29500,
    motorisation: "Essence",
    transmission: "Automatique",
    carrosserie: "Citadine",
    prix: 33500,
    badge: "-3 ans",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQjDAeMUHYocKAJvns4J0y5cX_tGyJI0CB5u-xq4guQ&s=10"
  },
  {
    id: 6,
    marque: "Renault",
    modele: "CLIO V ",
    annee: 2024,
    km: 57413,
    motorisation: "Diesel",
    transmission: "Manuelle",
    carrosserie: "Citadine",
    prix: 14390,
    badge: "Premium",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0WZPhPnkxRLYtIn-KEtbhEsWE60Ubn7FaBdWm_sMzQ&s=10"
  },
  {
    id: 7,
    marque: "Kia",
    modele: "RIO V",
    annee: 2026,
    km: 72532,
    motorisation: "Essence",
    transmission: "Manuelle",
    carrosserie: "Citadine",
    prix: 11990,
    badge: "Éco",
    image: "https://autotijd.be/images/kia/2021/rio/prijzen/kia-rio-2021-prijzen-01.jpg"
  },
  {
    id: 8,
    marque: "Kia",
    modele: "Sportage 1.6 T-GDi 4WD",
    annee: 2025,
    km: 372,
    motorisation: "Essence",
    transmission: "Automatique",
    carrosserie: "SUV",
    prix: 32411,
    badge: "Éco",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSv_rnX1b7xyUzYBA9S_tjzfzUllOcN5W14fWC8FsKg&s=10"
  },
  {
    id: 9,
    marque: "Audi",
    modele: "A3 Sportback 35 TFSI",
    annee: 2022,
    km: 35000,
    motorisation: "Essence",
    transmission: "Automatique",
    carrosserie: "Citadine",
    prix: 28900,
    badge: "Occasion",
    image: "https://www.auto-data.net/images/f95/Audi-A3-Sportback.jpg"
  }
];

// ===== DOM ELEMENTS =====
const vehicleGrid = document.getElementById('vehicleGrid');
const noResults = document.getElementById('no-results');
const resultsCount = document.getElementById('results-count');
const activeFiltersContainer = document.getElementById('active-filters');
const btnFiltrer = document.getElementById('btn-filtrer');
const btnReset = document.getElementById('btn-reset');
const searchInput = document.getElementById('search-input');
const searchClear = document.getElementById('search-clear');
const filterMarque = document.getElementById('filter-marque');
const filterPrix = document.getElementById('filter-prix');
const filterAnnee = document.getElementById('filter-annee');
const filterMotorisation = document.getElementById('filter-motorisation');
const filterCarrosserie = document.getElementById('filter-carrosserie');
const filterTransmission = document.getElementById('filter-transmission');

// ===== NAVBAR & MOBILE MENU =====
const navbar = document.getElementById('navbar');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (navbar) {
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ===== HERO PARALLAX =====
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (heroBg) {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    heroBg.style.transform = `translateY(${rate}px)`;
  }
});

// ===== PARTICLE CANVAS =====
const canvas = document.getElementById('particleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId = null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.min(50, Math.floor(window.innerWidth / 25));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(192, 57, 43, ${p.opacity})`;
      ctx.fill();
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(192, 57, 43, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    animationId = requestAnimationFrame(drawParticles);
  }

  if (!prefersReducedMotion) {
    resizeCanvas();
    createParticles();
    drawParticles();
    window.addEventListener('resize', () => {
      resizeCanvas();
      createParticles();
    });
  }

  const heroSection = document.getElementById('accueil');
  if (heroSection) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && animationId) {
          cancelAnimationFrame(animationId);
          animationId = null;
        } else if (entry.isIntersecting && !animationId && !prefersReducedMotion) {
          drawParticles();
        }
      });
    }, { threshold: 0.1 });
    heroObserver.observe(heroSection);
  }
}

// ===== REVEAL ON SCROLL =====
function initRevealAnimations() {
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  revealEls.forEach(el => io.observe(el));
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);
          el.textContent = current.toLocaleString('fr-FR');
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target.toLocaleString('fr-FR');
          }
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

// ===== VEHICLE CARDS =====
function createVehicleCard(vehicule, index) {
  const badgeClass = vehicule.badge === 'Occasion' ? 'badge-occasion' : '';
  const kmFormatted = vehicule.km.toLocaleString('fr-FR');
  const prixFormatted = vehicule.prix.toLocaleString('fr-FR');

  const card = document.createElement('div');
  card.className = 'vehicle-card fade-in';
  card.style.animationDelay = `${index * 0.08}s`;
  card.innerHTML = `
    <div class="card-image">
      <img src="${vehicule.image}" alt="${vehicule.marque} ${vehicule.modele}" loading="lazy">
      <span class="card-badge ${badgeClass}">${vehicule.badge}</span>
    </div>
    <div class="card-body">
      <h3 class="card-title">${vehicule.marque} ${vehicule.modele}</h3>
      <div class="card-specs">
        <span>${vehicule.annee}</span>
        <span>${kmFormatted} km</span>
        <span>${vehicule.motorisation}</span>
        <span>${vehicule.transmission}</span>
      </div>
      <div class="card-footer">
        <span class="card-price">${prixFormatted} €</span>
        <a href="#contact" class="btn-voir">
          Détails
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  `;
  return card;
}

function displayVehicles(list) {
  if (!vehicleGrid) return;
  vehicleGrid.innerHTML = '';
  if (list.length === 0) {
    vehicleGrid.classList.add('hidden');
    if (noResults) noResults.classList.remove('hidden');
  } else {
    vehicleGrid.classList.remove('hidden');
    if (noResults) noResults.classList.add('hidden');
    list.forEach((vehicule, index) => {
      vehicleGrid.appendChild(createVehicleCard(vehicule, index));
    });
  }
  if (resultsCount) {
    const plural = list.length > 1 ? 's' : '';
    resultsCount.textContent = `${list.length} véhicule${plural} trouvé${plural}`;
  }
}

// ===== FILTERING =====
function filterVehicles() {
  if (!searchInput) return;
  const searchTerm = searchInput.value.trim().toLowerCase();
  const marque = filterMarque ? filterMarque.value : '';
  const prix = filterPrix ? filterPrix.value : '';
  const annee = filterAnnee ? filterAnnee.value : '';
  const motorisation = filterMotorisation ? filterMotorisation.value : '';
  const carrosserie = filterCarrosserie ? filterCarrosserie.value : '';
  const transmission = filterTransmission ? filterTransmission.value : '';

  let filtered = [...vehicules];

  if (searchTerm) {
    filtered = filtered.filter(v => {
      const searchable = `${v.marque} ${v.modele} ${v.motorisation} ${v.transmission} ${v.carrosserie} ${v.annee} ${v.badge}`.toLowerCase();
      return searchable.includes(searchTerm);
    });
  }
  if (marque) filtered = filtered.filter(v => v.marque === marque);
  if (prix) {
    const [min, max] = parsePriceRange(prix);
    filtered = filtered.filter(v => v.prix >= min && (max ? v.prix <= max : true));
  }
  if (annee) filtered = filtered.filter(v => v.annee === parseInt(annee));
  if (motorisation) filtered = filtered.filter(v => v.motorisation === motorisation);
  if (carrosserie) filtered = filtered.filter(v => v.carrosserie === carrosserie);
  if (transmission) filtered = filtered.filter(v => v.transmission === transmission);

  displayVehicles(filtered);
  updateActiveFilters();
  updateSearchClearButton();
}

function parsePriceRange(value) {
  switch (value) {
    case '0-20000': return [0, 20000];
    case '20000-40000': return [20000, 40000];
    case '40000-60000': return [40000, 60000];
    case '60000+': return [60000, null];
    default: return [0, null];
  }
}

function updateActiveFilters() {
  if (!activeFiltersContainer) return;
  activeFiltersContainer.innerHTML = '';
  const searchTerm = searchInput ? searchInput.value.trim() : '';
  if (searchTerm) {
    createFilterTag(`Recherche: "${searchTerm}"`, () => {
      searchInput.value = '';
      updateSearchClearButton();
      filterVehicles();
    });
  }
  const filters = [
    { el: filterMarque, label: 'Marque' },
    { el: filterPrix, label: 'Prix' },
    { el: filterAnnee, label: 'Année' },
    { el: filterMotorisation, label: 'Motorisation' },
    { el: filterCarrosserie, label: 'Carrosserie' },
    { el: filterTransmission, label: 'Transmission' }
  ];
  filters.forEach(({ el, label }) => {
    if (el && el.value) {
      createFilterTag(`${label}: ${el.options[el.selectedIndex].text}`, () => {
        el.value = '';
        filterVehicles();
      });
    }
  });
}

function createFilterTag(text, onClick) {
  const tag = document.createElement('span');
  tag.className = 'filter-tag';
  tag.innerHTML = `${text} <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>`;
  tag.addEventListener('click', onClick);
  activeFiltersContainer.appendChild(tag);
}

function updateSearchClearButton() {
  if (!searchClear || !searchInput) return;
  if (searchInput.value.trim()) {
    searchClear.classList.remove('hidden');
  } else {
    searchClear.classList.add('hidden');
  }
}

function resetFilters() {
  if (filterMarque) filterMarque.value = '';
  if (filterPrix) filterPrix.value = '';
  if (filterAnnee) filterAnnee.value = '';
  if (filterMotorisation) filterMotorisation.value = '';
  if (filterCarrosserie) filterCarrosserie.value = '';
  if (filterTransmission) filterTransmission.value = '';
  if (searchInput) searchInput.value = '';
  updateSearchClearButton();
  displayVehicles(vehicules);
  updateActiveFilters();
}

// ===== TESTIMONIALS CAROUSEL =====
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsContainer = document.getElementById('testimonialsDots');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  if (!track || !dotsContainer) return;

  const cards = track.querySelectorAll('.testimonial-card');
  const totalCards = cards.length;
  let currentIndex = 0;
  let autoplayInterval;
  let cardsPerView = 1;

  function updateCardsPerView() {
    cardsPerView = window.innerWidth >= 1024 ? 3 : 1;
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    const totalDots = Math.ceil(totalCards / cardsPerView);
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('div');
      dot.className = `testimonial-dot${i === 0 ? ' active' : ''}`;
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    const activeDotIndex = Math.floor(currentIndex / cardsPerView);
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeDotIndex);
    });
  }

  function goTo(dotIndex) {
    currentIndex = dotIndex * cardsPerView;
    if (currentIndex >= totalCards) currentIndex = 0;
    updatePosition();
    updateDots();
    resetAutoplay();
  }

  function updatePosition() {
    const percentage = (currentIndex / totalCards) * 100;
    track.style.transform = `translateX(-${percentage}%)`;
  }

  function next() {
    currentIndex += cardsPerView;
    if (currentIndex >= totalCards) currentIndex = 0;
    updatePosition();
    updateDots();
  }

  function prev() {
    currentIndex -= cardsPerView;
    if (currentIndex < 0) currentIndex = Math.max(0, totalCards - cardsPerView);
    updatePosition();
    updateDots();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(next, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next(); else prev();
      resetAutoplay();
    }
  }, { passive: true });

  updateCardsPerView();
  createDots();
  updatePosition();
  startAutoplay();

  window.addEventListener('resize', () => {
    updateCardsPerView();
    createDots();
    currentIndex = 0;
    updatePosition();
  });
}

// ===== FAQ ACCORDION =====
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    const body = item.querySelector('.faq-body');
    if (!toggle || !body) return;

    toggle.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        const openBody = openItem.querySelector('.faq-body');
        if (openBody) openBody.style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

// ===== CONTACT FORM (FORMSUBMIT — AJAX avec repli natif) =====
function initContactForm() {
  // Doit correspondre à l'email utilisé dans l'attribut action= du <form> en HTML
  const CONTACT_EMAIL = "marketing@bigseefaragency.com";
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus') || document.getElementById('formSuccess');
  const contactBtn = document.getElementById('contactSubmitBtn') || document.getElementById('formSubmit');
  const btnText = contactBtn ? contactBtn.querySelector('.btn-text') : null;
  const btnLoading = contactBtn ? contactBtn.querySelector('.btn-loading') : null;

  if (!contactForm) return;

  function setLoading(isLoading) {
    if (!contactBtn) return;
    contactBtn.disabled = isLoading;
    if (btnText && btnLoading) {
      btnText.classList.toggle('hidden', isLoading);
      btnLoading.classList.toggle('hidden', !isLoading);
    }
  }

  function showStatus(message, isError) {
    if (!contactStatus) return;
    const p = contactStatus.querySelector('p');
    if (p) p.textContent = message;
    contactStatus.classList.toggle('is-error', !!isError);
    contactStatus.classList.remove('hidden');
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    setLoading(true);
    if (contactStatus) contactStatus.classList.add('hidden');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm)))
      });

      if (!res.ok) throw new Error('Erreur réseau');

      showStatus("Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement.", false);
      contactForm.reset();
      setLoading(false);
    } catch (err) {
      // Repli : la requête AJAX a échoué (souvent le cas en ouvrant le fichier en local,
      // ou hors ligne). On soumet le formulaire de façon classique : le navigateur part
      // sur FormSubmit puis revient — ça fonctionne même en file:// et sans JS.
      if (contactForm.action && contactForm.action.includes('formsubmit.co')) {
        HTMLFormElement.prototype.submit.call(contactForm);
      } else {
        showStatus("Une erreur est survenue. Contactez-nous directement par WhatsApp ou téléphone.", true);
        setLoading(false);
      }
    }
  });
}

// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== EVENT LISTENERS =====
if (btnFiltrer) btnFiltrer.addEventListener('click', filterVehicles);
if (btnReset) btnReset.addEventListener('click', resetFilters);

if (searchInput) {
  let searchTimeout;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(filterVehicles, 200);
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      filterVehicles();
      searchInput.blur();
    }
  });
}

if (searchClear) {
  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    filterVehicles();
    searchInput.focus();
  });
}

[filterMarque, filterPrix, filterAnnee, filterMotorisation, filterCarrosserie, filterTransmission].forEach(select => {
  if (select) select.addEventListener('change', filterVehicles);
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  displayVehicles(vehicules);
  initRevealAnimations();
  animateCounters();
  initTestimonials();
  initFAQ();
  initContactForm();
  initBackToTop();
});