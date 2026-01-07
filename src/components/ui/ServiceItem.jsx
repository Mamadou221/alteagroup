"use client";
import { motion } from "framer-motion";
import Card from "./Card";
import Button from "./Button";
import { useLanguage } from "../../context/LanguageContext";

// Mapping des services aux icônes Font Awesome
// Chaque service a une icône unique, logique et explicite
const iconMap = {
  // Par ID de service
  "immobilier": "fa-home",
  "realEstate": "fa-home",
  "construction": "fa-hammer",
  "agronomie": "fa-seedling",
  "agronomy": "fa-seedling",
  "import_export": "fa-truck",
  "importExport": "fa-truck",
  // Par titre traduit (fallback)
  "Immobilier": "fa-home",
  "Real Estate": "fa-home",
  "Construction": "fa-hammer",
  "Agronomie": "fa-seedling",
  "Agronomy": "fa-seedling",
  "Import / Export": "fa-truck",
  "Import/Export": "fa-truck",
};

// Fonction pour trouver l'icône selon l'ID ou le titre
const getIconForService = (serviceId, title) => {
  // Priorité 1 : ID du service
  if (iconMap[serviceId]) {
    return iconMap[serviceId];
  }
  
  // Priorité 2 : Titre traduit
  if (iconMap[title]) {
    return iconMap[title];
  }
  
  // Fallback
  return "fa-star";
};

export default function ServiceItem({
  serviceId,
  title,
  description,
  link,
  index = 0,
  className = "",
}) {
  const { t } = useLanguage();
  const iconClass = getIconForService(serviceId, title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      <Card className="text-center h-full group">
        {/* Icône - Format identique à ValueItem */}
        <motion.div
          whileHover={{ scale: 1.1, y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors duration-300"
        >
          <i
            className={`fas ${iconClass} text-3xl text-primary-600 dark:text-primary-400 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300`}
            aria-hidden="true"
          ></i>
        </motion.div>
        
        {/* Titre */}
        <h3 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-neutral-600 dark:text-neutral-400 mb-6 min-h-[3rem] leading-relaxed">
          {description}
        </p>
        
        {/* Bouton */}
        <Button href={link} variant="secondary" size="sm">
          {t("buttons.learn_more")}
        </Button>
      </Card>
    </motion.div>
  );
}

