"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import frTranslations from "../locales/fr.json";
import enTranslations from "../locales/en.json";

// Traductions complètes avec fusion des JSON et ajouts manquants
const translations = {
  fr: {
    // Site info
    site: {
      title: frTranslations.site?.title || "Altea Group",
      tagline: frTranslations.site?.tagline || "Élever vos projets vers l'excellence",
      companyName: "Altea Group"
    },
    // Navigation
    navbar: {
      home: frTranslations.nav?.home || "Accueil",
      services: frTranslations.nav?.services || "Services",
      projects: "Projets",
      about: frTranslations.nav?.about || "À propos",
      contact: frTranslations.nav?.contact || "Contact",
      menu: "Menu"
    },
    // Footer
    footer: {
      description: frTranslations.footer?.description || "Altea Group est un groupe pluridisciplinaire actif dans la construction, l'immobilier, l'agronomie et l'import-export.",
      quickLinks: frTranslations.footer?.quickLinks || "Liens rapides",
      followUs: frTranslations.footer?.followUs || "Suivez-nous",
      about: frTranslations.nav?.about || "À propos",
      services: frTranslations.nav?.services || "Services",
      contact: frTranslations.nav?.contact || "Contact",
      rights: "Tous droits réservés",
      backToTop: "Retour en haut"
    },
    // Home page
    home: {
      heroTitle: "Bienvenue chez Altea Group",
      heroSubtitle: "Votre partenaire de confiance pour l'excellence dans l'immobilier, la construction, l'agronomie et l'import/export",
      heroButton: "Découvrir nos services",
      servicesTitle: "Nos Services",
      servicesDescription: "Nous offrons une gamme complète de services sur mesure, conçus pour répondre à vos besoins professionnels les plus exigeants.",
      aboutTitle: "À propos de nous",
      aboutDescription: "Altea Group est une entreprise innovante qui accompagne ses clients avec expertise dans divers secteurs stratégiques.",
      contactTitle: "Contactez-nous",
      contactDescription: "Vous avez un projet ambitieux ? Discutons-en ensemble pour le concrétiser."
    },
    // Services
    services: {
      title: "Nos Services",
      subtitle: frTranslations.services?.subtitle || "Des solutions intégrées et fiables.",
      realEstate: frTranslations.services?.immobilier?.title || "Immobilier",
      realEstateDesc: frTranslations.services?.immobilier?.short || "Accompagnement complet : achat, vente, gestion.",
      realEstateLong: frTranslations.services?.immobilier?.long || "Nous vous accompagnons de A à Z : conseil, transactions, gestion locative, promotion et syndic. Notre équipe s'engage pour sécuriser vos investissements et maximiser la valeur.",
      realEstateFeatures: ["Acquisition & Vente", "Gestion locative", "Études de marché", "Conseil fiscal immobilier"],
      construction: frTranslations.services?.construction?.title || "Construction",
      constructionDesc: frTranslations.services?.construction?.short || "Chantiers clés en main, contrôle qualité strict.",
      constructionLong: frTranslations.services?.construction?.long || "De la conception à la réalisation, nous assurons maîtrise d'œuvre, gros œuvre, second œuvre et rénovation avec un suivi rigoureux et des standards internationaux.",
      constructionFeatures: ["Gestion de projet", "Ingénierie", "Suivi qualité", "Maintenance post-livraison"],
      agronomy: frTranslations.services?.agronomie?.title || "Agronomie & Tourisme",
      agronomyDesc: frTranslations.services?.agronomie?.short || "Projets agricoles durables, expériences locales.",
      agronomyLong: frTranslations.services?.agronomie?.long || "Nous développons des projets agricoles innovants et durables, du conseil technique à la commercialisation, tout en favorisant le tourisme local et les échanges culturels.",
      agronomyFeatures: ["Optimisation des rendements", "Irrigation intelligente", "Conseil variétal", "Agroécologie"],
      importExport: frTranslations.services?.import_export?.title || "Import / Export",
      importExportDesc: frTranslations.services?.import_export?.short || "Import/export de biens de toutes natures (voitures en priorité).",
      importExportLong: frTranslations.services?.import_export?.long || "Spécialisés dans le commerce international, nous facilitons l'import/export de véhicules, pièces détachées et marchandises diverses. Nous prenons en charge sourcing, logistique, douane et livraison.",
      importExportFeatures: ["Sourcing global", "Logistique & Douanes", "Contrôle qualité", "Financement international"]
    },
    // Service pages
    servicePages: {
      realEstate: {
        title: frTranslations.services?.immobilier?.title || "Immobilier",
        description: frTranslations.services?.immobilier?.long || "Nous vous accompagnons dans l'achat, la vente et la gestion de vos biens immobiliers avec professionnalisme et transparence.",
        highlights: ["Audits rapides", "Réseau d'acheteurs", "Estimation fiable"]
      },
      construction: {
        title: frTranslations.services?.construction?.title || "Construction",
        description: frTranslations.services?.construction?.long || "Nous réalisons vos projets de construction avec des normes de qualité élevées et une expertise reconnue.",
        highlights: ["Planning détaillé", "Gestion sous-traitants", "Respect des coûts"]
      },
      agronomy: {
        title: frTranslations.services?.agronomie?.title || "Agronomie & Tourisme",
        description: frTranslations.services?.agronomie?.long || "Nous proposons des solutions agricoles modernes et durables pour améliorer vos rendements.",
        highlights: ["Conseil terrain", "Solutions durables", "Suivi saisonnier"]
      },
      importExport: {
        title: frTranslations.services?.import_export?.title || "Import / Export",
        description: frTranslations.services?.import_export?.long || "Nous facilitons vos échanges commerciaux internationaux avec fiabilité et sécurité.",
        highlights: ["Réseau d'agents", "Contrôle logistique", "Assurance cargo"]
      },
      contactButton: frTranslations.buttons?.contact_us || "Contactez-nous"
    },
    // About page
    about: {
      title: frTranslations.about?.title || "À propos",
      description: frTranslations.about?.lead || "Altea Group est un groupe pluridisciplinaire basé au Sénégal, dédié à l'excellence, à la transparence et à l'innovation.",
      missionTitle: frTranslations.about?.missionTitle || "Notre Mission",
      missionText: frTranslations.about?.missionText || "Apporter des solutions sur mesure et durables dans l'immobilier, la construction, l'import/export et l'agronomie, tout en garantissant la satisfaction de nos clients.",
      visionTitle: frTranslations.about?.visionTitle || "Notre Vision",
      visionText: frTranslations.about?.visionText || "Être un acteur de référence en Afrique de l'Ouest grâce à la qualité, l'éthique et la proximité avec nos partenaires et clients.",
      valuesTitle: frTranslations.about?.valuesTitle || "Nos Valeurs",
      valuesSubtitle: "Les principes qui guident notre action au quotidien",
      values: frTranslations.about?.values || ["Qualité", "Transparence", "Durabilité", "Proximité"],
      teamTitle: frTranslations.about?.teamTitle || "Notre Équipe",
      teamIntro: frTranslations.about?.teamIntro || "Une équipe pluridisciplinaire, passionnée et engagée, qui conjugue expertise locale et standards internationaux.",
      ctaTitle: frTranslations.about?.ctaTitle || "Prêt à concrétiser vos projets ?",
      ctaText: frTranslations.about?.ctaText || "Contactez-nous dès aujourd'hui et donnons vie à vos ambitions."
    },
    // Projects page
    projects: {
      title: frTranslations.projects?.title || "Nos Projets",
      subtitle: "Découvrez les domaines dans lesquels nous intervenons.",
      description: frTranslations.projects?.lead || "Découvrez nos réalisations et projets en cours qui témoignent de notre expertise et de notre engagement envers l'excellence.",
      realEstate: {
        title: "Projet Immobilier",
        description: "Projets immobiliers axés sur la qualité, la durabilité et la valeur à long terme."
      },
      construction: {
        title: "Projet Construction",
        description: "Réalisations de construction respectant les normes, les délais et les exigences techniques."
      },
      agronomy: {
        title: "Projet Agronomie",
        description: "Projets agricoles durables intégrant innovation, performance et respect de l'environnement."
      },
      comingSoon: "Bientôt disponible",
      status: {
        inProgress: "En cours",
        completed: "Terminé",
        comingSoon: "Bientôt disponible"
      },
      locale: "fr-FR"
    },
    // Project pages (pages détaillées par domaine)
    projectPages: {
      immobilier: {
        title: "Projet Immobilier",
        subtitle: "Développement de projets immobiliers axés sur la qualité, la durabilité et la création de valeur.",
        presentationTitle: "Notre Approche Immobilière",
        presentationText: "Nous développons des projets immobiliers qui allient excellence architecturale, durabilité environnementale et création de valeur à long terme. Notre expertise couvre tous les aspects du développement immobilier, de la conception à la livraison.",
        highlights: [
          "Études de faisabilité approfondies",
          "Conception architecturale optimisée",
          "Gestion de projet rigoureuse"
        ],
        statusTitle: "État des Projets",
        statusText: "Projets en cours de préparation",
        statusDescription: "Nous structurons actuellement notre portefeuille de projets immobiliers. Nos équipes travaillent sur des projets innovants qui verront le jour prochainement.",
        methodologyTitle: "Méthodologie & Engagement",
        methodology: [
          {
            title: "Approche Professionnelle",
            text: "Nous appliquons une méthodologie rigoureuse, de l'analyse de marché à la livraison finale, en garantissant qualité, respect des délais et optimisation des coûts."
          },
          {
            title: "Vision Long Terme",
            text: "Chaque projet est conçu pour créer de la valeur durable, tant pour nos clients que pour les communautés locales et l'environnement."
          },
          {
            title: "Engagement Qualité",
            text: "Nous nous engageons à respecter les normes les plus exigeantes et à dépasser les attentes de nos partenaires et investisseurs."
          }
        ],
        ctaTitle: "Vous avez un projet immobilier ?",
        ctaText: "Discutons ensemble de vos ambitions immobilières. Notre équipe est à votre écoute pour vous accompagner dans la réalisation de vos projets.",
        ctaButton: "Nous contacter",
        // Sections optionnelles pour projets futurs
        statsTitle: "Chiffres Clés",
        galleryTitle: "Galerie",
        caseStudiesTitle: "Études de Cas",
        gallery: [], // Structure : [{ src: "/path/to/image.jpg", alt: "Description" }]
        stats: [], // Structure : [{ value: "50+", label: "Projets", description: "Optionnel" }]
        caseStudies: [] // Structure : [{ title: "...", description: "...", image: "...", challenge: "...", solution: "...", results: [...], link: "..." }]
      },
      construction: {
        title: "Projet Construction",
        subtitle: "Réalisation de projets de construction respectant les normes, les délais et les exigences techniques.",
        presentationTitle: "Notre Expertise en Construction",
        presentationText: "Nous réalisons des projets de construction qui allient robustesse, respect des normes internationales et innovation technique. Notre approche garantit des livraisons dans les délais et selon les budgets convenus.",
        highlights: [
          "Respect strict des normes",
          "Gestion des délais optimisée",
          "Exigences techniques maîtrisées"
        ],
        statusTitle: "État des Projets",
        statusText: "Projets en cours de préparation",
        statusDescription: "Nous préparons activement notre portefeuille de projets de construction. Des réalisations ambitieuses sont en cours de structuration et seront bientôt dévoilées.",
        methodologyTitle: "Méthodologie & Engagement",
        methodology: [
          {
            title: "Rigueur Technique",
            text: "Chaque projet bénéficie d'un suivi technique rigoureux, depuis la planification jusqu'à la réception des travaux, avec un contrôle qualité à chaque étape."
          },
          {
            title: "Respect des Délais",
            text: "Nous nous engageons à respecter les échéances convenues, grâce à une planification précise et une coordination efficace de tous les intervenants."
          },
          {
            title: "Excellence Opérationnelle",
            text: "Notre expertise opérationnelle garantit l'optimisation des ressources, la maîtrise des coûts et la qualité des réalisations."
          }
        ],
        ctaTitle: "Un projet de construction à réaliser ?",
        ctaText: "Parlons de votre projet. Notre équipe vous accompagne de la conception à la livraison, en garantissant qualité et respect des engagements.",
        ctaButton: "Nous contacter",
        // Sections optionnelles pour projets futurs
        statsTitle: "Chiffres Clés",
        galleryTitle: "Galerie",
        caseStudiesTitle: "Études de Cas",
        gallery: [], // Structure : [{ src: "/path/to/image.jpg", alt: "Description" }]
        stats: [], // Structure : [{ value: "50+", label: "Projets", description: "Optionnel" }]
        caseStudies: [] // Structure : [{ title: "...", description: "...", image: "...", challenge: "...", solution: "...", results: [...], link: "..." }]
      },
      agronomy: {
        title: "Projet Agronomie",
        subtitle: "Projets agricoles durables intégrant innovation, performance et respect de l'environnement.",
        presentationTitle: "Notre Vision Agronomique",
        presentationText: "Nous développons des projets agricoles durables qui combinent innovation technique, performance économique et préservation de l'environnement. Notre approche favorise l'autonomie alimentaire et le développement rural.",
        highlights: [
          "Innovation agricole",
          "Performance durable",
          "Respect de l'environnement"
        ],
        statusTitle: "État des Projets",
        statusText: "Projets en cours de préparation",
        statusDescription: "Nous structurons actuellement des projets agricoles innovants et durables. Ces initiatives contribueront au développement agricole local et seront dévoilées prochainement.",
        methodologyTitle: "Méthodologie & Engagement",
        methodology: [
          {
            title: "Innovation & Performance",
            text: "Nous intégrons les dernières innovations agronomiques pour optimiser les rendements tout en préservant les ressources naturelles et la biodiversité."
          },
          {
            title: "Durabilité",
            text: "Chaque projet est conçu pour être économiquement viable, socialement bénéfique et écologiquement responsable sur le long terme."
          },
          {
            title: "Accompagnement Complet",
            text: "Nous accompagnons nos partenaires de la conception à la commercialisation, en apportant expertise technique et conseil stratégique."
          }
        ],
        ctaTitle: "Un projet agricole à développer ?",
        ctaText: "Échangeons sur vos ambitions agricoles. Notre équipe vous propose des solutions durables et performantes adaptées à vos besoins.",
        ctaButton: "Nous contacter",
        // Sections optionnelles pour projets futurs
        statsTitle: "Chiffres Clés",
        galleryTitle: "Galerie",
        caseStudiesTitle: "Études de Cas",
        gallery: [], // Structure : [{ src: "/path/to/image.jpg", alt: "Description" }]
        stats: [], // Structure : [{ value: "50+", label: "Projets", description: "Optionnel" }]
        caseStudies: [] // Structure : [{ title: "...", description: "...", image: "...", challenge: "...", solution: "...", results: [...], link: "..." }]
      }
    },
    // Contact page
    contactPage: {
      title: frTranslations.contact?.title || "Contact",
      subtitle: frTranslations.contact?.subtitle || "Discutons de votre projet.",
      description: "Remplissez le formulaire ci-dessous pour discuter de votre projet avec notre équipe.",
      placeholderName: frTranslations.contact?.form?.name || "Nom complet",
      placeholderEmail: frTranslations.contact?.form?.email || "Email",
      placeholderMessage: frTranslations.contact?.form?.message || "Message",
      submit: frTranslations.contact?.form?.send || "Envoyer",
      phone: "Téléphone",
      emailContact: "contact@alteagroup.com",
      address: "Siège: Rue Exemple, Ville, Pays"
    },
    // Buttons
    buttons: {
      learn_more: frTranslations.buttons?.learn_more || "En savoir plus →",
      show_less: frTranslations.buttons?.show_less || "Réduire ↑",
      view_more: frTranslations.buttons?.view_more || "Voir plus",
      contact_us: frTranslations.buttons?.contact_us || "Contactez-nous",
      request_quote: "Demander un devis"
    },
    // Case Study
    caseStudy: {
      challenge: "Défi",
      solution: "Solution",
      results: "Résultats",
      learnMore: "En savoir plus"
    },
    // Theme
    theme: {
      darkMode: "Mode sombre",
      lightMode: "Mode clair",
      toggleTheme: "Changer le thème"
    },
    // Alt texts
    alt: {
      realEstate: "Immobilier",
      construction: "Construction",
      agronomy: "Agronomie",
      importExport: "Import / Export"
    },
    // Social media
    social: {
      facebook: "Suivez-nous sur Facebook",
      twitter: "Suivez-nous sur Twitter",
      linkedin: "Suivez-nous sur LinkedIn",
      email: "Envoyez-nous un email"
    }
  },
  en: {
    // Site info
    site: {
      title: enTranslations.site?.title || "Altea Group",
      tagline: enTranslations.site?.tagline || "Elevating your projects to excellence",
      companyName: "Altea Group"
    },
    // Navigation
    navbar: {
      home: enTranslations.nav?.home || "Home",
      services: enTranslations.nav?.services || "Services",
      projects: "Projects",
      about: enTranslations.nav?.about || "About",
      contact: enTranslations.nav?.contact || "Contact",
      menu: "Menu"
    },
    // Footer
    footer: {
      description: enTranslations.footer?.description || "Altea Group is a multidisciplinary group active in construction, real estate, agronomy, and import-export.",
      quickLinks: enTranslations.footer?.quickLinks || "Quick Links",
      followUs: enTranslations.footer?.followUs || "Follow Us",
      about: enTranslations.nav?.about || "About",
      services: enTranslations.nav?.services || "Services",
      contact: enTranslations.nav?.contact || "Contact",
      rights: "All rights reserved",
      backToTop: "Back to top"
    },
    // Home page
    home: {
      heroTitle: "Welcome to Altea Group",
      heroSubtitle: "Your trusted partner for excellence in real estate, construction, agronomy and import/export",
      heroButton: "Discover our services",
      servicesTitle: "Our Services",
      servicesDescription: "We offer a comprehensive range of tailored services designed to meet your most demanding professional needs.",
      aboutTitle: "About us",
      aboutDescription: "Altea Group is an innovative company that supports its clients with expertise across strategic industries.",
      contactTitle: "Contact us",
      contactDescription: "Do you have an ambitious project? Let's discuss it together and make it a reality."
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: enTranslations.services?.subtitle || "Integrated and reliable solutions.",
      realEstate: enTranslations.services?.immobilier?.title || "Real Estate",
      realEstateDesc: enTranslations.services?.immobilier?.short || "Complete support: buying, selling, management.",
      realEstateLong: enTranslations.services?.immobilier?.long || "We support you from A to Z: advisory, transactions, rental management, development and co-ownership. Our team is dedicated to securing your investments and maximizing value.",
      realEstateFeatures: ["Acquisition & Sales", "Property Management", "Market Studies", "Tax advice"],
      construction: enTranslations.services?.construction?.title || "Construction",
      constructionDesc: enTranslations.services?.construction?.short || "Turnkey projects, strict quality control.",
      constructionLong: enTranslations.services?.construction?.long || "From design to completion, we handle project management, structural works, finishing, and renovations with rigorous oversight and international standards.",
      constructionFeatures: ["Project Management", "Engineering", "Quality Control", "Post-delivery maintenance"],
      agronomy: enTranslations.services?.agronomie?.title || "Agronomy & Tourism",
      agronomyDesc: enTranslations.services?.agronomie?.short || "Sustainable agricultural projects, authentic local experiences.",
      agronomyLong: enTranslations.services?.agronomie?.long || "We develop innovative and sustainable agricultural projects, from technical consulting to commercialization, while also promoting local tourism and cultural exchange.",
      agronomyFeatures: ["Yield optimization", "Smart irrigation", "Varietal advice", "Agroecology"],
      importExport: enTranslations.services?.import_export?.title || "Import / Export",
      importExportDesc: enTranslations.services?.import_export?.short || "Import/export of various goods (cars as a priority).",
      importExportLong: enTranslations.services?.import_export?.long || "Specialized in international trade, we facilitate the import/export of vehicles, spare parts, and diverse goods. We manage sourcing, logistics, customs clearance, and delivery.",
      importExportFeatures: ["Global sourcing", "Logistics & Customs", "Quality control", "International financing"]
    },
    // Service pages
    servicePages: {
      realEstate: {
        title: enTranslations.services?.immobilier?.title || "Real Estate",
        description: enTranslations.services?.immobilier?.long || "We support you in buying, selling, and managing real estate with professionalism and transparency.",
        highlights: ["Fast audits", "Buyer network", "Reliable valuation"]
      },
      construction: {
        title: enTranslations.services?.construction?.title || "Construction",
        description: enTranslations.services?.construction?.long || "We carry out your construction projects with high-quality standards and recognized expertise.",
        highlights: ["Detailed planning", "Subcontractor management", "Cost control"]
      },
      agronomy: {
        title: enTranslations.services?.agronomie?.title || "Agronomy",
        description: enTranslations.services?.agronomie?.long || "We provide modern and sustainable agricultural solutions to improve your yields.",
        highlights: ["Field advice", "Sustainable solutions", "Seasonal follow-up"]
      },
      importExport: {
        title: enTranslations.services?.import_export?.title || "Import/Export",
        description: enTranslations.services?.import_export?.long || "We facilitate your international trade exchanges with reliability and security.",
        highlights: ["Agent network", "Logistics control", "Cargo insurance"]
      },
      contactButton: enTranslations.buttons?.contact_us || "Contact us"
    },
    // About page
    about: {
      title: enTranslations.about?.title || "About",
      description: enTranslations.about?.lead || "Altea Group is a multidisciplinary group based in Senegal, committed to excellence, transparency, and innovation.",
      missionTitle: enTranslations.about?.missionTitle || "Our Mission",
      missionText: enTranslations.about?.missionText || "To deliver tailored and sustainable solutions in real estate, construction, import/export, and agronomy, while ensuring client satisfaction.",
      visionTitle: enTranslations.about?.visionTitle || "Our Vision",
      visionText: enTranslations.about?.visionText || "To become a benchmark player in West Africa through quality, ethics, and proximity with our partners and clients.",
      valuesTitle: enTranslations.about?.valuesTitle || "Our Values",
      valuesSubtitle: "The principles that guide our daily actions",
      values: enTranslations.about?.values || ["Quality", "Transparency", "Sustainability", "Proximity"],
      teamTitle: enTranslations.about?.teamTitle || "Our Team",
      teamIntro: enTranslations.about?.teamIntro || "A multidisciplinary, passionate and dedicated team combining local expertise with international standards.",
      ctaTitle: enTranslations.about?.ctaTitle || "Ready to bring your projects to life?",
      ctaText: enTranslations.about?.ctaText || "Contact us today and let's make your ambitions a reality."
    },
    // Projects page
    projects: {
      title: enTranslations.projects?.title || "Our Projects",
      subtitle: "Discover the areas in which we operate.",
      description: enTranslations.projects?.lead || "Discover our achievements and ongoing projects that showcase our expertise and commitment to excellence.",
      realEstate: {
        title: "Real Estate Project",
        description: "Real estate projects focused on quality, sustainability and long-term value."
      },
      construction: {
        title: "Construction Project",
        description: "Construction achievements respecting standards, deadlines and technical requirements."
      },
      agronomy: {
        title: "Agronomy Project",
        description: "Sustainable agricultural projects integrating innovation, performance and environmental respect."
      },
      comingSoon: "Coming soon",
      status: {
        inProgress: "In Progress",
        completed: "Completed",
        comingSoon: "Coming soon"
      },
      locale: "en-US"
    },
    // Project pages (pages détaillées par domaine)
    projectPages: {
      immobilier: {
        title: "Real Estate Project",
        subtitle: "Development of real estate projects focused on quality, sustainability and value creation.",
        presentationTitle: "Our Real Estate Approach",
        presentationText: "We develop real estate projects that combine architectural excellence, environmental sustainability and long-term value creation. Our expertise covers all aspects of real estate development, from design to delivery.",
        highlights: [
          "In-depth feasibility studies",
          "Optimized architectural design",
          "Rigorous project management"
        ],
        statusTitle: "Project Status",
        statusText: "Projects in preparation",
        statusDescription: "We are currently structuring our real estate project portfolio. Our teams are working on innovative projects that will be launched soon.",
        methodologyTitle: "Methodology & Commitment",
        methodology: [
          {
            title: "Professional Approach",
            text: "We apply a rigorous methodology, from market analysis to final delivery, ensuring quality, respect for deadlines and cost optimization."
          },
          {
            title: "Long-term Vision",
            text: "Each project is designed to create lasting value, both for our clients and for local communities and the environment."
          },
          {
            title: "Quality Commitment",
            text: "We are committed to meeting the most demanding standards and exceeding the expectations of our partners and investors."
          }
        ],
        ctaTitle: "Do you have a real estate project?",
        ctaText: "Let's discuss your real estate ambitions together. Our team is here to support you in realizing your projects.",
        ctaButton: "Contact us",
        // Optional sections for future projects
        statsTitle: "Key Figures",
        galleryTitle: "Gallery",
        caseStudiesTitle: "Case Studies",
        gallery: [], // Structure : [{ src: "/path/to/image.jpg", alt: "Description" }]
        stats: [], // Structure : [{ value: "50+", label: "Projects", description: "Optional" }]
        caseStudies: [] // Structure : [{ title: "...", description: "...", image: "...", challenge: "...", solution: "...", results: [...], link: "..." }]
      },
      construction: {
        title: "Construction Project",
        subtitle: "Construction projects respecting standards, deadlines and technical requirements.",
        presentationTitle: "Our Construction Expertise",
        presentationText: "We carry out construction projects that combine robustness, respect for international standards and technical innovation. Our approach guarantees on-time delivery within agreed budgets.",
        highlights: [
          "Strict compliance with standards",
          "Optimized deadline management",
          "Mastered technical requirements"
        ],
        statusTitle: "Project Status",
        statusText: "Projects in preparation",
        statusDescription: "We are actively preparing our construction project portfolio. Ambitious achievements are being structured and will be unveiled soon.",
        methodologyTitle: "Methodology & Commitment",
        methodology: [
          {
            title: "Technical Rigor",
            text: "Each project benefits from rigorous technical monitoring, from planning to project acceptance, with quality control at every stage."
          },
          {
            title: "Respect for Deadlines",
            text: "We commit to respecting agreed deadlines, thanks to precise planning and effective coordination of all stakeholders."
          },
          {
            title: "Operational Excellence",
            text: "Our operational expertise guarantees resource optimization, cost control and quality of delivery."
          }
        ],
        ctaTitle: "A construction project to carry out?",
        ctaText: "Let's talk about your project. Our team supports you from design to delivery, ensuring quality and respect for commitments.",
        ctaButton: "Contact us",
        // Optional sections for future projects
        statsTitle: "Key Figures",
        galleryTitle: "Gallery",
        caseStudiesTitle: "Case Studies",
        gallery: [], // Structure : [{ src: "/path/to/image.jpg", alt: "Description" }]
        stats: [], // Structure : [{ value: "50+", label: "Projects", description: "Optional" }]
        caseStudies: [] // Structure : [{ title: "...", description: "...", image: "...", challenge: "...", solution: "...", results: [...], link: "..." }]
      },
      agronomy: {
        title: "Agronomy Project",
        subtitle: "Sustainable agricultural projects integrating innovation, performance and environmental respect.",
        presentationTitle: "Our Agronomic Vision",
        presentationText: "We develop sustainable agricultural projects that combine technical innovation, economic performance and environmental preservation. Our approach promotes food autonomy and rural development.",
        highlights: [
          "Agricultural innovation",
          "Sustainable performance",
          "Environmental respect"
        ],
        statusTitle: "Project Status",
        statusText: "Projects in preparation",
        statusDescription: "We are currently structuring innovative and sustainable agricultural projects. These initiatives will contribute to local agricultural development and will be unveiled soon.",
        methodologyTitle: "Methodology & Commitment",
        methodology: [
          {
            title: "Innovation & Performance",
            text: "We integrate the latest agronomic innovations to optimize yields while preserving natural resources and biodiversity."
          },
          {
            title: "Sustainability",
            text: "Each project is designed to be economically viable, socially beneficial and ecologically responsible in the long term."
          },
          {
            title: "Complete Support",
            text: "We support our partners from conception to commercialization, providing technical expertise and strategic advice."
          }
        ],
        ctaTitle: "An agricultural project to develop?",
        ctaText: "Let's discuss your agricultural ambitions. Our team offers sustainable and high-performance solutions tailored to your needs.",
        ctaButton: "Contact us",
        // Optional sections for future projects
        statsTitle: "Key Figures",
        galleryTitle: "Gallery",
        caseStudiesTitle: "Case Studies",
        gallery: [], // Structure : [{ src: "/path/to/image.jpg", alt: "Description" }]
        stats: [], // Structure : [{ value: "50+", label: "Projects", description: "Optional" }]
        caseStudies: [] // Structure : [{ title: "...", description: "...", image: "...", challenge: "...", solution: "...", results: [...], link: "..." }]
      }
    },
    // Contact page
    contactPage: {
      title: enTranslations.contact?.title || "Contact",
      subtitle: enTranslations.contact?.subtitle || "Let's discuss your project.",
      description: "Fill out the form below to discuss your project with our team.",
      placeholderName: enTranslations.contact?.form?.name || "Full name",
      placeholderEmail: enTranslations.contact?.form?.email || "Email",
      placeholderMessage: enTranslations.contact?.form?.message || "Message",
      submit: enTranslations.contact?.form?.send || "Send",
      phone: "Phone",
      emailContact: "contact@alteagroup.com",
      address: "Head office: Example Street, City, Country"
    },
    // Buttons
    buttons: {
      learn_more: enTranslations.buttons?.learn_more || "Learn more →",
      show_less: enTranslations.buttons?.show_less || "Show less ↑",
      view_more: enTranslations.buttons?.view_more || "View more",
      contact_us: enTranslations.buttons?.contact_us || "Contact us",
      request_quote: "Request a quote"
    },
    // Case Study
    caseStudy: {
      challenge: "Challenge",
      solution: "Solution",
      results: "Results",
      learnMore: "Learn more"
    },
    // Theme
    theme: {
      darkMode: "Dark mode",
      lightMode: "Light mode",
      toggleTheme: "Toggle theme"
    },
    // Alt texts
    alt: {
      realEstate: "Real Estate",
      construction: "Construction",
      agronomy: "Agronomy",
      importExport: "Import / Export"
    },
    // Social media
    social: {
      facebook: "Follow us on Facebook",
      twitter: "Follow us on Twitter",
      linkedin: "Follow us on LinkedIn",
      email: "Send us an email"
    }
  }
};

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  // Langue par défaut : Français
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("altea-lang");
      // Valider que la langue sauvegardée est valide
      if (saved && (saved === "fr" || saved === "en")) {
        setLang(saved);
      }
      // Sinon, on garde "fr" par défaut
    } catch (e) {
      console.error("Erreur accès localStorage:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("altea-lang", lang);
      // Mettre à jour l'attribut lang du HTML
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang;
      }
    } catch (e) {
      console.error("Erreur sauvegarde localStorage:", e);
    }
  }, [lang]);

  const t = (key) => {
    if (!key) return "";
    const parts = key.split(".");
    let cur = translations[lang] || translations.fr; // Fallback sur français
    for (let p of parts) {
      if (cur[p] === undefined) {
        console.warn(`Translation key missing: ${key} for language: ${lang}`);
        return key;
      }
      cur = cur[p];
    }
    return cur;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

export default LanguageContext;
