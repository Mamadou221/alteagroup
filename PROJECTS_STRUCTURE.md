# Structure des Projets - Guide d'utilisation

## 📋 Structure actuelle

La page Projets est maintenant prête à accueillir de vrais projets sans refactorisation.

## 🎯 Comment ajouter un projet réel

### Étape 1 : Ajouter l'image
Placez l'image dans `/public/images/projects/` (créez le dossier si nécessaire).

### Étape 2 : Modifier `src/app/projects/page.jsx`

Remplacez un projet "coming soon" par un projet réel :

```javascript
{
  id: "immobilier",
  title: t("projects.realEstate.title"),
  description: t("projects.realEstate.description"),
  // Ajoutez ces propriétés :
  image: "/images/projects/real-estate-1.jpg",
  imageAlt: "Projet immobilier résidentiel à Dakar",
  date: "2024-03-15", // Format ISO (YYYY-MM-DD)
  status: "completed", // "completed" | "inProgress" | "comingSoon"
  detailedDescription: "Description détaillée du projet...",
  link: "/projects/real-estate-1", // Optionnel : lien vers page détaillée
  tags: ["Résidentiel", "Dakar", "2024"], // Optionnel
}
```

## 📝 Propriétés disponibles

### Propriétés obligatoires
- `id` : Identifiant unique du projet
- `title` : Titre du projet
- `description` : Description courte

### Propriétés optionnelles (pour projets réels)
- `image` : Chemin vers l'image (`/images/projects/...`)
- `imageAlt` : Texte alternatif pour l'image
- `date` : Date du projet (format ISO : `YYYY-MM-DD`)
- `status` : Statut du projet
  - `"comingSoon"` : Bientôt disponible (par défaut)
  - `"inProgress"` : En cours
  - `"completed"` : Terminé
- `detailedDescription` : Description détaillée (pour page détaillée future)
- `link` : Lien vers une page détaillée du projet
- `tags` : Tableau de tags (ex: `["Résidentiel", "Dakar"]`)

## 🎨 Comportement automatique

### Projet "Coming Soon"
- Affiche l'icône Font Awesome
- Badge "Bientôt disponible" avec animation pulse
- Pas d'image
- Pas de date

### Projet réel (avec image)
- Affiche l'image en haut de la card
- Badge de statut sur l'image (En cours / Terminé)
- Date formatée selon la locale
- Tags affichés sous la description
- Bouton "En savoir plus" si `link` est fourni
- Card cliquable si `link` est fourni

## 🌍 Format des dates

Les dates sont automatiquement formatées selon la langue :
- Français : "mars 2024"
- Anglais : "March 2024"

## 📁 Structure recommandée pour les images

```
/public
  /images
    /projects
      /real-estate-1.jpg
      /construction-1.jpg
      /agronomy-1.jpg
```

## 🔄 Exemple complet

```javascript
const projects = [
  // Projet réel
  {
    id: "immobilier-1",
    title: "Résidence Premium Dakar",
    description: "Complexe résidentiel de 50 appartements avec services haut de gamme.",
    image: "/images/projects/residence-dakar.jpg",
    imageAlt: "Résidence Premium Dakar - Vue extérieure",
    date: "2024-03-15",
    status: "completed",
    detailedDescription: "Projet complet de 50 appartements...",
    link: "/projects/residence-dakar",
    tags: ["Résidentiel", "Dakar", "Premium", "2024"],
  },
  // Projet coming soon
  {
    id: "construction",
    title: t("projects.construction.title"),
    description: t("projects.construction.description"),
    status: "comingSoon",
  },
];
```

## ✅ Avantages de cette structure

1. **Pas de refactorisation** : Ajoutez simplement les propriétés
2. **Flexible** : Supporte projets réels et "coming soon"
3. **Évolutif** : Prêt pour pages détaillées futures
4. **Cohérent** : Même design pour tous les types de projets
5. **Maintenable** : Structure claire et documentée

