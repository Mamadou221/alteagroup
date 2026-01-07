"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const buttonVariants = {
  primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-medium hover:shadow-strong",
  secondary: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 bg-transparent",
  outline: "border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-800",
};

const sizeVariants = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  className = "",
  type = "button",
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-lg
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${buttonVariants[variant]}
    ${sizeVariants[size]}
    ${className}
  `;

  const motionProps = {
    whileHover: !disabled ? { scale: 1.02 } : {},
    whileTap: !disabled ? { scale: 0.98 } : {},
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={baseClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}

