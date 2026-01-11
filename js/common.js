// Fonctions communes pour toutes les pages

// Fonction pour mettre à jour l'année dans le footer
function updateCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Fonction pour mettre à jour le lien actif dans la navigation
function updateActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Fonction pour gérer les effets hover sur les images des cartes
function initCardHoverEffects() {
  document.querySelectorAll('.card img').forEach(img => {
    const container = img.parentElement;
    if (container) {
      container.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
      });
      container.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
      });
    }
  });
}

// Fonction pour synchroniser les toggles de thème
function syncThemeToggles() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  
  if (themeToggle && themeToggleMobile) {
    themeToggleMobile.addEventListener('click', () => {
      themeToggle.click();
    });
  }
}

// Initialisation commune
document.addEventListener('DOMContentLoaded', () => {
  updateCurrentYear();
  updateActiveNavLink();
  initCardHoverEffects();
  syncThemeToggles();
});



