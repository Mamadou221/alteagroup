// Application principale - Altea Group
// Gestion du dark mode, animations scroll, navigation

(function() {
  'use strict';

  // ===== DARK MODE =====
  function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Récupérer le thème sauvegardé
    function getTheme() {
      try {
        const saved = localStorage.getItem('altea-theme');
        if (saved === 'dark' || saved === 'light') {
          return saved;
        }
      } catch (e) {
        console.error('Error reading theme:', e);
      }
      
      // Détecter la préférence système
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    }
    
    // Appliquer le thème
    function setTheme(theme) {
      html.classList.remove('light', 'dark');
      html.classList.add(theme);
      try {
        localStorage.setItem('altea-theme', theme);
      } catch (e) {
        console.error('Error saving theme:', e);
      }
      
      // Mettre à jour l'icône
      if (themeToggle) {
        const icon = themeToggle.querySelector('svg');
        if (icon) {
          if (theme === 'dark') {
            icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
          } else {
            icon.innerHTML = '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>';
          }
        }
      }
    }
    
    // Initialiser le thème
    setTheme(getTheme());
    
    // Toggle au clic
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        const current = html.classList.contains('dark') ? 'dark' : 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
      });
    }
  }

  // ===== ANIMATIONS AU SCROLL - Style cunsa.net =====
  function initScrollAnimations() {
    // Options pour l'observer - plus sensible pour des animations fluides
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -80px 0px'
    };
    
    // Observer pour les nouveaux éléments avec data-animate-type
    const modernObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Récupérer le délai personnalisé
          const delay = entry.target.getAttribute('data-animate-delay') || '0';
          const delayMs = parseInt(delay);
          
          // Appliquer l'animation avec le délai
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delayMs);
          
          modernObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observer tous les éléments avec data-animate-type (nouveau système)
    document.querySelectorAll('[data-animate-type]').forEach(el => {
      modernObserver.observe(el);
    });
    
    // Observer pour les anciens éléments avec data-animate (compatibilité)
    const legacyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          legacyObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('[data-animate]:not([data-animate-type])').forEach(el => {
      legacyObserver.observe(el);
    });
    
    // Animation immédiate pour le hero (pas besoin d'attendre le scroll)
    const heroElements = document.querySelectorAll('#hero [data-animate-type]');
    heroElements.forEach((el, index) => {
      const delay = el.getAttribute('data-animate-delay') || '0';
      const delayMs = parseInt(delay);
      setTimeout(() => {
        el.classList.add('animate-in');
      }, delayMs + 100);
    });
  }

  // ===== NAVIGATION SCROLL =====
  function initScrollNavigation() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScroll = 0;
    let ticking = false;
    
    function updateHeader() {
      const scrollY = window.scrollY;
      
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = scrollY;
      ticking = false;
    }
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    });
  }

  // ===== MENU MOBILE =====
  function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('#mobile-menu a');
    
    if (!menuToggle || !mobileMenu) return;
    
    function toggleMenu() {
      const isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', !isOpen);
      document.body.style.overflow = isOpen ? '' : 'hidden';
    }
    
    menuToggle.addEventListener('click', toggleMenu);
    
    // Fermer le menu au clic sur un lien
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
    
    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') && 
          !mobileMenu.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        toggleMenu();
      }
    });
  }

  // ===== BOUTON RETOUR EN HAUT =====
  function initBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;
    
    function updateVisibility() {
      if (window.scrollY > 300) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
    
    window.addEventListener('scroll', updateVisibility);
    updateVisibility();
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== SMOOTH SCROLL =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ===== SLIDER HERO - Style cunsa.net =====
  window.initHeroSlider = function() {
    const slider = document.querySelector('.hero-with-slider');
    if (!slider) return;
    
    const slides = slider.querySelectorAll('.hero-slide');
    const dots = slider.querySelectorAll('.hero-slider-dot');
    const totalSlides = slides.length;
    
    if (totalSlides === 0) return;
    
    let currentSlide = 0;
    let isPaused = false;
    let autoSlideInterval = null;
    const slideDuration = 5000; // 5 secondes par slide
    
    // Fonction pour changer de slide
    function goToSlide(index) {
      // Retirer la classe active de tous les slides et dots
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) {
          dots[i].classList.remove('active');
        }
      });
      
      // Ajouter la classe active au slide et dot actifs
      if (slides[index]) {
        slides[index].classList.add('active');
      }
      if (dots[index]) {
        dots[index].classList.add('active');
      }
      
      currentSlide = index;
    }
    
    // Fonction pour passer au slide suivant
    function nextSlide() {
      if (isPaused) return;
      const next = (currentSlide + 1) % totalSlides;
      goToSlide(next);
    }
    
    // Fonction pour démarrer le slider automatique
    function startAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
      autoSlideInterval = setInterval(nextSlide, slideDuration);
    }
    
    // Fonction pour arrêter le slider automatique
    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }
    
    // Gérer le clic sur les dots
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        stopAutoSlide();
        startAutoSlide(); // Redémarrer après le clic
      });
      
      // Accessibilité clavier
      dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          goToSlide(index);
          stopAutoSlide();
          startAutoSlide();
        }
      });
    });
    
    // Pause au hover sur le slider
    slider.addEventListener('mouseenter', () => {
      isPaused = true;
      stopAutoSlide();
    });
    
    slider.addEventListener('mouseleave', () => {
      isPaused = false;
      startAutoSlide();
    });
    
    // Pause au focus (accessibilité)
    slider.addEventListener('focusin', () => {
      isPaused = true;
      stopAutoSlide();
    });
    
    slider.addEventListener('focusout', () => {
      isPaused = false;
      startAutoSlide();
    });
    
    // Démarrer le slider automatique
    startAutoSlide();
    
    // Pause automatique quand la page n'est pas visible (Performance)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoSlide();
      } else {
        startAutoSlide();
      }
    });
  };
  
  // Rendre la fonction accessible globalement
  window.initHeroSlider = initHeroSlider;

  // ===== INITIALISATION =====
  function init() {
    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    initDarkMode();
    initScrollAnimations();
    initScrollNavigation();
    initMobileMenu();
    initBackToTop();
    initSmoothScroll();
    initHeroSlider(); // Initialiser le slider hero
    
    // Initialiser les traductions
    if (typeof initLanguage === 'function') {
      initLanguage();
    }
  }

  // Démarrer l'application
  init();
})();


