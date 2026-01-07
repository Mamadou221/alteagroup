"use client";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/Section";

export default function ConstructionPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-10">
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container">
          <h1 className="text-4xl font-bold">{t("services.construction")}</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            {t("servicePages.construction.description")}
          </p>
        </div>
      </section>

      <Section title={t("services.construction")} subtitle={t("services.constructionDesc")}>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {t("servicePages.construction.description")}
        </p>
      </Section>
    </div>
  );
}
