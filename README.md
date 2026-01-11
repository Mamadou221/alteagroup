# Altea Group - Site Web Statique

Site web professionnel d'Altea Group construit avec HTML, CSS et JavaScript vanilla.

## 🎯 Structure du Projet

```
altea-group/
├── index.html              # Page d'accueil
├── about.html              # Page À propos
├── services.html           # Page Services
├── projects.html           # Page Projets
├── contact.html            # Page Contact
├── immobilier.html         # Page Immobilier
├── construction.html       # Page Construction
├── agronomie.html          # Page Agronomie
├── import-export.html      # Page Import/Export
├── projet-*.html           # Pages de projets détaillés
├── css/
│   └── styles.css          # Styles principaux
├── js/
│   ├── app.js              # Application principale (dark mode, animations, slider)
│   ├── common.js           # Fonctions communes
│   └── translations.js     # Système de traduction FR/EN
└── public/
    ├── favicon.png         # Favicon
    └── images/             # Images du site
```

## 🚀 Démarrage Rapide

### Option 1 : Serveur HTTP Python
```bash
python -m http.server 8000
```
Puis ouvrez http://localhost:8000

### Option 2 : Serveur HTTP Node.js (avec npx)
```bash
npx serve
```

### Option 3 : Serveur HTTP PHP
```bash
php -S localhost:8000
```

## ✨ Fonctionnalités

- ✅ **Multilingue** : Français / Anglais avec basculement dynamique
- ✅ **Dark Mode** : Thème clair/sombre avec préférence système
- ✅ **Responsive** : Adapté mobile, tablette et desktop
- ✅ **Animations** : Animations au scroll inspirées de cunsa.net
- ✅ **Slider Hero** : Slider automatique d'images sur la page d'accueil
- ✅ **Accessibilité** : Navigation clavier, ARIA labels

## 🛠️ Technologies

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes avec variables CSS
- **JavaScript Vanilla** : Pas de dépendances externes
- **Google Fonts** : Police Inter

## 📝 Pages Disponibles

- `/` - Page d'accueil avec slider
- `/about.html` - À propos
- `/services.html` - Services
- `/projects.html` - Projets
- `/contact.html` - Contact
- `/immobilier.html` - Service Immobilier
- `/construction.html` - Service Construction
- `/agronomie.html` - Service Agronomie
- `/import-export.html` - Service Import/Export
- `/projet-immobilier.html` - Projet Immobilier
- `/projet-construction.html` - Projet Construction
- `/projet-agronomie.html` - Projet Agronomie

## 🎨 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/styles.css` :
```css
:root {
  --color-primary: #2563eb;
  --color-primary-dark: #1e40af;
  /* ... */
}
```

### Ajouter une traduction
Éditez `js/translations.js` pour ajouter de nouvelles clés de traduction.

## 📦 Déploiement

Le site est prêt à être déployé sur n'importe quel hébergeur statique :
- GitHub Pages
- Netlify
- Vercel
- Surge.sh
- Serveur web classique (Apache, Nginx)

## 📄 Licence

Propriétaire - Altea Group
