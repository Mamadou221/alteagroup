"use client";
import { motion } from "framer-motion";

export default function ProjectSection({
  title,
  children,
  className = "",
  delay = 0,
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={`py-12 md:py-16 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
            {title}
          </h2>
        )}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

