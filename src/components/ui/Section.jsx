"use client";
import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  background = "default",
  ...props
}) {
  const backgroundVariants = {
    default: "bg-white dark:bg-neutral-950",
    light: "bg-neutral-50 dark:bg-neutral-900",
    dark: "bg-neutral-100 dark:bg-neutral-900",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${backgroundVariants[background]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-neutral-900 dark:text-white">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

