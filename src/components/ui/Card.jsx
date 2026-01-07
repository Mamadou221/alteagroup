"use client";
import { motion } from "framer-motion";

export default function Card({
  children,
  className = "",
  hover = true,
  delay = 0,
  ...props
}) {
  const baseClasses = `
    bg-white dark:bg-neutral-900
    border border-neutral-200 dark:border-neutral-800
    rounded-xl
    p-6
    shadow-soft hover:shadow-medium
    transition-all duration-300
    ${hover ? "hover:border-primary-300 dark:hover:border-primary-700" : ""}
    ${className}
  `;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={baseClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
}

