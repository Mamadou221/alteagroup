"use client";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/Section";
import Image from "next/image";

export default function RealEstatePage() {
  const { t } = useLanguage();

  return (
    <div className="pt-10">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            {t("services.realEstate")}
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("servicePages.realEstate.description")}
          </p>
        </div>
      </section>

      {/* Section détails */}
      <Section
        title={t("services.realEstate")}
        subtitle={t("services.realEstateDesc")}
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Texte */}
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("servicePages.realEstate.description")}
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=1600&q=80"
              alt="Real Estate"
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
