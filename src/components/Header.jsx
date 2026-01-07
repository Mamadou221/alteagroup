"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.services"), href: "/services" },
    { label: t("navbar.projects"), href: "/projects" },
    { label: t("navbar.about"), href: "/about" },
    { label: t("navbar.contact"), href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-neutral-950/95 backdrop-blur-md shadow-medium"
          : "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm"
      } border-b border-neutral-200 dark:border-neutral-800`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/"
            className="text-2xl font-bold text-primary-600 dark:text-primary-400 transition-colors"
          >
            {t("site.companyName")}
          </Link>
        </motion.div>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center space-x-1">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className="relative px-4 py-2 text-neutral-700 dark:text-neutral-300 font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 group"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Actions desktop */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Langues */}
          <div className="flex items-center space-x-2 bg-neutral-100 dark:bg-neutral-800 p-1 rounded-lg">
            {["fr", "en"].map((lng) => (
              <motion.button
                key={lng}
                onClick={() => setLang(lng)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  lang === lng
                    ? "bg-primary-600 text-white shadow-soft"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400"
                }`}
              >
                {lng.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={t("theme.toggleTheme")}
              className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
            >
              {theme === "light" ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </motion.button>
          )}
        </div>

        {/* Bouton mobile */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          aria-label={t("navbar.menu") || "Menu"}
          className="md:hidden p-2 text-neutral-700 dark:text-neutral-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 text-neutral-700 dark:text-neutral-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex space-x-2">
                  {["fr", "en"].map((lng) => (
                    <motion.button
                      key={lng}
                      onClick={() => setLang(lng)}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-2 rounded-md text-sm font-medium ${
                        lang === lng
                          ? "bg-primary-600 text-white"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      }`}
                    >
                      {lng.toUpperCase()}
                    </motion.button>
                  ))}
                </div>
                {mounted && (
                  <motion.button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800"
                  >
                    {theme === "light" ? (
                      <Moon size={20} className="text-neutral-700 dark:text-neutral-300" />
                    ) : (
                      <Sun size={20} className="text-neutral-700 dark:text-neutral-300" />
                    )}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
