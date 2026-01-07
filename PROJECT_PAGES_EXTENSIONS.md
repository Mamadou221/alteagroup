# Extension des Pages Projets - Guide d'utilisation

## 📋 Structure préparée

Les pages projets sont maintenant prêtes à accueillir facilement :
- **Galerie d'images**
- **Chiffres clés** (statistiques)
- **Études de cas** (case studies)

Sans refactorisation majeure !

## 🖼️ Galerie d'images

### Comment ajouter une galerie

Dans `src/context/LanguageContext.jsx`, ajoutez dans la section `projectPages.immobilier.gallery` (ou construction/agronomy) :

```javascript
gallery: [
  {
    src: "/images/projects/immobilier/image1.jpg",
    alt: "Vue extérieure du projet"
  },
  {
    src: "/images/projects/immobilier/image2.jpg",
    alt: "Intérieur du projet"
  },
  // ... autres images
]
```

### Fonctionnalités automatiques

- **Grille responsive** : 2 colonnes (mobile) → 3 colonnes (tablette) → 4 colonnes (desktop)
- **Modal lightbox** : Clic sur une image pour l'agrandir
- **Navigation** : Flèches gauche/droite pour naviguer
- **Fermeture** : Clic en dehors ou bouton X
- **Animations** : Fade in progressif, hover scale

### Titre de la galerie

Ajoutez dans les traductions :
```javascript
galleryTitle: "Galerie du Projet"
```

## 📊 Chiffres clés (Stats)

### Comment ajouter des chiffres clés

Dans `src/context/LanguageContext.jsx`, ajoutez dans `projectPages.immobilier.stats` :

```javascript
stats: [
  {
    value: "50+",
    label: "Projets réalisés",
    description: "Depuis 2020" // Optionnel
  },
  {
    value: "100M€",
    label: "Valeur totale",
    description: "Investissements"
  },
  {
    value: "95%",
    label: "Satisfaction client",
    description: "Taux de recommandation"
  },
  {
    value: "15",
    label: "Années d'expérience"
  }
]
```

### Fonctionnalités automatiques

- **Grille responsive** : 2 colonnes (mobile) → 4 colonnes (desktop)
- **Cards avec fond bleu** : Style cohérent avec le design system
- **Animations** : Fade in progressif avec délais
- **Description optionnelle** : Affichée sous le label si fournie

### Titre des stats

Ajoutez dans les traductions :
```javascript
statsTitle: "Chiffres Clés"
```

## 📚 Études de cas (Case Studies)

### Comment ajouter une étude de cas

Dans `src/context/LanguageContext.jsx`, ajoutez dans `projectPages.immobilier.caseStudies` :

```javascript
caseStudies: [
  {
    title: "Résidence Premium Dakar",
    description: "Complexe résidentiel de 50 appartements avec services haut de gamme.",
    image: "/images/projects/immobilier/case-study-1.jpg",
    imageAlt: "Résidence Premium Dakar",
    challenge: "Créer un complexe résidentiel premium dans un quartier en développement, en respectant les normes environnementales et les délais serrés.",
    solution: "Nous avons mis en place une équipe dédiée, appliqué une méthodologie rigoureuse de gestion de projet, et intégré des solutions durables dès la conception.",
    results: [
      "Livraison dans les délais",
      "100% de satisfaction client",
      "Certification environnementale obtenue",
      "Retour sur investissement optimal"
    ],
    link: "/projets/immobilier/residence-dakar" // Optionnel
  }
]
```

### Structure complète

- **title** : Titre de l'étude de cas (obligatoire)
- **description** : Description courte (optionnel)
- **image** : Image principale (optionnel)
- **imageAlt** : Texte alternatif (optionnel)
- **challenge** : Le défi rencontré (optionnel)
- **solution** : La solution apportée (optionnel)
- **results** : Liste de résultats (tableau) ou texte (optionnel)
- **link** : Lien vers page détaillée (optionnel)

### Fonctionnalités automatiques

- **Layout responsive** : Image à gauche, contenu à droite (desktop) / empilé (mobile)
- **Sections conditionnelles** : Challenge, Solution, Résultats affichés seulement si fournis
- **Résultats** : Support liste (tableau) ou texte simple
- **Bouton CTA** : "En savoir plus" si `link` fourni
- **Animations** : Fade in progressif

### Titre des études de cas

Ajoutez dans les traductions :
```javascript
caseStudiesTitle: "Études de Cas"
```

## 🎨 Comportement automatique

### Affichage conditionnel

Tous les composants sont **intelligents** :
- Si `gallery` est vide → **Rien n'est affiché**
- Si `stats` est vide → **Rien n'est affiché**
- Si `caseStudies` est vide → **Rien n'est affiché**

➡️ **Aucun espace vide ou section inutile !**

### Ordre d'affichage

1. Hero
2. Présentation du domaine
3. **Chiffres clés** (si disponibles)
4. **Galerie** (si disponible)
5. **Études de cas** (si disponibles)
6. État des projets
7. Méthodologie & engagement
8. CTA

## 📝 Exemple complet

```javascript
// Dans src/context/LanguageContext.jsx
projectPages: {
  immobilier: {
    // ... autres propriétés existantes ...
    
    statsTitle: "Chiffres Clés",
    galleryTitle: "Galerie",
    caseStudiesTitle: "Études de Cas",
    
    stats: [
      { value: "50+", label: "Projets", description: "Réalisés" },
      { value: "100M€", label: "Valeur totale" },
      { value: "95%", label: "Satisfaction" },
      { value: "15", label: "Années" }
    ],
    
    gallery: [
      { src: "/images/projects/img1.jpg", alt: "Image 1" },
      { src: "/images/projects/img2.jpg", alt: "Image 2" }
    ],
    
    caseStudies: [
      {
        title: "Projet Exemple",
        description: "Description...",
        image: "/images/projects/case1.jpg",
        challenge: "Défi...",
        solution: "Solution...",
        results: ["Résultat 1", "Résultat 2"],
        link: "/projets/immobilier/exemple"
      }
    ]
  }
}
```

## ✅ Avantages

1. **Pas de refactorisation** : Ajoutez simplement les données
2. **Flexible** : Toutes les sections sont optionnelles
3. **Cohérent** : Design system respecté
4. **Responsive** : Adapté à tous les écrans
5. **Animé** : Animations subtiles et professionnelles
6. **Accessible** : Alt texts, aria-labels, navigation clavier

## 🔄 Traductions

N'oubliez pas d'ajouter les traductions en anglais dans la section `en` de `LanguageContext.jsx` :

```javascript
en: {
  projectPages: {
    immobilier: {
      statsTitle: "Key Figures",
      galleryTitle: "Gallery",
      caseStudiesTitle: "Case Studies",
      // ... mêmes structures que FR
    }
  }
}
```

## 📁 Structure des images recommandée

```
/public
  /images
    /projects
      /immobilier
        /image1.jpg
        /image2.jpg
        /case-study-1.jpg
      /construction
        /image1.jpg
      /agronomie
        /image1.jpg
```

