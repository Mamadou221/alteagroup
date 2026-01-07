"use client";
import { motion } from "framer-motion";
import Card from "./Card";

// Mapping des valeurs aux icônes Font Awesome
// Chaque valeur a une icône unique et logique
const iconMap = {
  // Français
  "Qualité": "fa-award",
  "Transparence": "fa-eye",
  "Durabilité": "fa-leaf",
  "Proximité": "fa-handshake",
  // Anglais
  "Quality": "fa-award",
  "Transparency": "fa-eye",
  "Sustainability": "fa-leaf",
  "Proximity": "fa-handshake",
};

// Fonction pour nettoyer la valeur et trouver l'icône
const getIconForValue = (value) => {
  // Enlever uniquement les emojis et étoiles, garder les accents
  const cleanValue = value
    .replace(/[⭐]/g, "")
    .trim();
  
  // Chercher directement dans le mapping
  if (iconMap[cleanValue]) {
    return iconMap[cleanValue];
  }
  
  // Fallback : chercher sans accents (pour compatibilité)
  const withoutAccents = cleanValue
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
  
  // Mapping sans accents
  const iconMapNoAccents = {
    "Qualite": "fa-award",
    "Transparence": "fa-eye",
    "Durabilite": "fa-leaf",
    "Proximite": "fa-handshake",
    "Quality": "fa-award",
    "Transparency": "fa-eye",
    "Sustainability": "fa-leaf",
    "Proximity": "fa-handshake",
  };
  
  return iconMapNoAccents[withoutAccents] || "fa-star";
};

export default function ValueItem({
  value,
  index = 0,
  className = "",
}) {
  // Nettoyer la valeur pour l'affichage (enlever emojis)
  const cleanValue = value.replace(/[⭐]/g, "").trim();
  const iconClass = getIconForValue(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={className}
    >
      <Card className="text-center h-full group cursor-default">
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
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {cleanValue}
        </h3>
      </Card>
    </motion.div>
  );
}
