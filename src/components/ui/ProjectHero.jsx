"use client";
import { motion } from "framer-motion";
import { useLanguage } from "../../context/LanguageContext";

// Mapping des projets aux icônes Font Awesome
const iconMap = {
  "immobilier": "fa-building",
  "construction": "fa-helmet-safety",
  "agronomie": "fa-seedling",
};

export default function ProjectHero({ projectId, title, subtitle }) {
  const { t } = useLanguage();
  const iconClass = iconMap[projectId] || "fa-folder";

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 rounded-full">
            <i
              className={`fas ${iconClass} text-5xl text-primary-600 dark:text-primary-400`}
              aria-hidden="true"
            ></i>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-neutral-900 dark:text-white"
        >
          {title}
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent"></div>
    </section>
  );
}

