"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Card from "./Card";
import Button from "./Button";
import { useLanguage } from "../../context/LanguageContext";

// Mapping des projets aux icônes Font Awesome
const iconMap = {
  // Par ID de projet
  "immobilier": "fa-building",
  "realEstate": "fa-building",
  "construction": "fa-helmet-safety",
  "agronomie": "fa-seedling",
  "agronomy": "fa-seedling",
  "import_export": "fa-truck",
  "importExport": "fa-truck",
  // Par titre traduit (fallback)
  "Projet Immobilier": "fa-building",
  "Real Estate Project": "fa-building",
  "Projet Construction": "fa-helmet-safety",
  "Construction Project": "fa-helmet-safety",
  "Projet Agronomie": "fa-seedling",
  "Agronomy Project": "fa-seedling",
};

// Fonction pour trouver l'icône selon l'ID ou le titre
const getIconForProject = (projectId, title) => {
  // Priorité 1 : ID du projet
  if (iconMap[projectId]) {
    return iconMap[projectId];
  }
  
  // Priorité 2 : Titre traduit
  if (iconMap[title]) {
    return iconMap[title];
  }
  
  // Fallback
  return "fa-folder";
};

// Statuts possibles
const PROJECT_STATUS = {
  COMING_SOON: "comingSoon",
  IN_PROGRESS: "inProgress",
  COMPLETED: "completed",
};

export default function ProjectCard({
  projectId,
  title,
  description,
  // Nouvelles props pour projets réels
  image,
  imageAlt,
  date,
  status = PROJECT_STATUS.COMING_SOON,
  detailedDescription,
  link,
  tags = [],
  index = 0,
  className = "",
}) {
  const { t } = useLanguage();
  const iconClass = getIconForProject(projectId, title);
  const isComingSoon = status === PROJECT_STATUS.COMING_SOON;
  const hasImage = image && !isComingSoon;

  // Format de la date
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString(t("locale") || "fr-FR", {
        year: "numeric",
        month: "long",
      });
    } catch {
      return dateString;
    }
  };

  const cardContent = (
    <Card className={`text-center h-full group overflow-hidden flex flex-col ${link ? "cursor-pointer" : ""}`}>
      {/* Image (si projet réel) */}
      {hasImage && (
        <div className="relative w-full h-48 mb-6 overflow-hidden rounded-t-xl flex-shrink-0">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Overlay pour le statut */}
          {status === PROJECT_STATUS.IN_PROGRESS && (
            <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold">
              {t("projects.status.inProgress") || "En cours"}
            </div>
          )}
          {status === PROJECT_STATUS.COMPLETED && (
            <div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold">
              {t("projects.status.completed") || "Terminé"}
            </div>
          )}
        </div>
      )}

      {/* Icône (si pas d'image ou coming soon) */}
      {!hasImage && (
        <motion.div
          whileHover={{ scale: 1.1, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300 flex-shrink-0"
        >
          <i
            className={`fas ${iconClass} text-3xl text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300`}
            aria-hidden="true"
          ></i>
        </motion.div>
      )}
      
      {/* Date (si projet réel) */}
      {date && !isComingSoon && (
        <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2 flex-shrink-0">
          {formatDate(date)}
        </div>
      )}
      
      {/* Titre */}
      <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 flex-shrink-0">
        {title}
      </h3>
      
      {/* Description courte - Zone flexible qui prend l'espace disponible */}
      <div className="flex-1 flex flex-col mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Tags (si projet réel) */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-4 flex-shrink-0">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Badge ou Bouton selon le statut - Toujours en bas */}
      <div className="flex-shrink-0 mt-auto">
        {isComingSoon ? (
          link ? (
            <Button href={link} variant="secondary" size="sm">
              {t("buttons.learn_more")}
            </Button>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {t("projects.comingSoon")}
              </span>
            </div>
          )
        ) : link ? (
          <Button href={link} variant="secondary" size="sm">
            {t("buttons.learn_more")}
          </Button>
        ) : null}
      </div>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`h-full ${className}`}
    >
      {link ? (
        <Link href={link} className="block h-full">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
