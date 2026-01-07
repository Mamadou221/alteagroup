"use client";
import { motion } from "framer-motion";
import Card from "./Card";

export default function ProjectStats({ stats = [], title }) {
  if (!stats || stats.length === 0) {
    return null; // Ne rien afficher si pas de stats
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 md:py-16 bg-primary-50 dark:bg-primary-900/20"
    >
      <div className="max-w-7xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-neutral-500 dark:text-neutral-500 mt-2">
                    {stat.description}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

