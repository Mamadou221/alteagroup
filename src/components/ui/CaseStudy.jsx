"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Card from "./Card";
import Button from "./Button";
import { useLanguage } from "../../context/LanguageContext";

export default function CaseStudy({
  title,
  description,
  image,
  imageAlt,
  challenge,
  solution,
  results,
  link,
  index = 0,
}) {
  const { t } = useLanguage();

  if (!title) {
    return null; // Ne rien afficher si pas de case study
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Image */}
            {image && (
              <div className="relative h-64 md:h-full min-h-[300px]">
                <Image
                  src={image}
                  alt={imageAlt || title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

            {/* Contenu */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
                {title}
              </h3>
              {description && (
                <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Challenge */}
              {challenge && (
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {t("caseStudy.challenge") || "Défi"}
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {solution && (
                <div className="mb-4">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {t("caseStudy.solution") || "Solution"}
                  </h4>
                  <p className="text-neutral-700 dark:text-neutral-300">
                    {solution}
                  </p>
                </div>
              )}

              {/* Résultats */}
              {results && (
                <div className="mb-6">
                  <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">
                    {t("caseStudy.results") || "Résultats"}
                  </h4>
                  <ul className="list-none space-y-2">
                    {Array.isArray(results) ? (
                      results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">✓</span>
                          <span className="text-neutral-700 dark:text-neutral-300">{result}</span>
                        </li>
                      ))
                    ) : (
                      <p className="text-neutral-700 dark:text-neutral-300">{results}</p>
                    )}
                  </ul>
                </div>
              )}

              {/* Lien */}
              {link && (
                <Button href={link} variant="secondary" size="md">
                  {t("caseStudy.learnMore") || "En savoir plus"}
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </motion.section>
  );
}

