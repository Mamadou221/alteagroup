"use client";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/Section";
import Image from "next/image";
import Link from "next/link";

export default function ImportExportPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            {t("services.importExport")}
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("servicePages.importExport.description")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow transition"
          >
            {t("servicePages.contactButton")}
          </Link>
        </div>
      </section>

      {/* Section Détails */}
      <Section
        title={t("services.importExport")}
        subtitle={t("services.importExportDesc")}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texte */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("servicePages.importExport.description")}
            </p>
            <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-300">
              <li>✅ {t("servicePages.importExport.point1")}</li>
              <li>✅ {t("servicePages.importExport.point2")}</li>
              <li>✅ {t("servicePages.importExport.point3")}</li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f?w=1600&q=80"
              alt="Import Export"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
