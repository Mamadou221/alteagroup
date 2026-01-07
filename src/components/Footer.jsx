"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Facebook, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: t("social.facebook") },
    { icon: Twitter, href: "#", label: t("social.twitter") },
    { icon: Linkedin, href: "#", label: t("social.linkedin") },
    { icon: Mail, href: "mailto:contact@alteagroup.com", label: t("social.email") },
  ];

  return (
    <>
      <footer className="relative bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Colonne 1 - Logo & description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400 inline-block mb-4">
                {t("site.companyName")}
              </Link>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-sm">
                {t("footer.description")}
              </p>
            </motion.div>

            {/* Colonne 2 - Liens rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                {t("footer.quickLinks")}
              </h3>
              <ul className="space-y-2">
                {[
                  { label: t("footer.about"), href: "/about" },
                  { label: t("footer.services"), href: "/services" },
                  { label: t("footer.contact"), href: "/contact" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Colonne 3 - Réseaux sociaux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-white">
                {t("footer.followUs")}
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bas de page */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border-t border-neutral-200 dark:border-neutral-800 mt-12 pt-8 text-center"
          >
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} <span className="font-semibold text-neutral-900 dark:text-white">{t("site.companyName")}</span>. {t("footer.rights")}
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Bouton flottant "remonter en haut" */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            aria-label={t("footer.backToTop")}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="fixed right-6 bottom-6 z-50 p-3 rounded-full bg-primary-600 text-white shadow-strong hover:bg-primary-700 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
