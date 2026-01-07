
"use client";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage ? useLanguage() : { t: (k)=>k, lang: 'fr', setLang:()=>{} };

  const switchLang = () => setLang(lang === "fr" ? "en" : "fr");

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">{t("site.companyName")}</div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
          <Link href="/">{t("navbar.home")}</Link>
          <Link href="/services">{t("navbar.services")}</Link>
          <Link href="/projects">{t("navbar.projects")}</Link>
          <Link href="/about">{t("navbar.about")}</Link>
          <Link href="/contact">{t("navbar.contact")}</Link>
        </div>

        <button
          aria-label={t("theme.toggleTheme")}
          onClick={() => {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
              html.classList.remove('dark');
              localStorage.setItem('altea-dark', '0');
            } else {
              html.classList.add('dark');
              localStorage.setItem('altea-dark', '1');
            }
          }}
          className="px-3 py-1 border rounded-md text-sm">
          {t("theme.darkMode")}
        </button>

        <button
          onClick={switchLang}
          className="px-3 py-1 border rounded-md text-sm">
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>
      </div>
    </nav>
  );
}