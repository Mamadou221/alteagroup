"use client";
import { useLanguage } from "../../../context/LanguageContext";
import ProjectHero from "../../../components/ui/ProjectHero";
import ProjectSection from "../../../components/ui/ProjectSection";
import ProjectGallery from "../../../components/ui/ProjectGallery";
import ProjectStats from "../../../components/ui/ProjectStats";
import CaseStudy from "../../../components/ui/CaseStudy";
import Section from "../../../components/ui/Section";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import { motion } from "framer-motion";

export default function ImmobilierProjectPage() {
  const { t } = useLanguage();

  // Structure flexible pour galerie (vide pour l'instant, à remplir plus tard)
  const galleryImages = t("projectPages.immobilier.gallery") || [];
  // Structure flexible pour chiffres clés (vide pour l'instant, à remplir plus tard)
  const stats = t("projectPages.immobilier.stats") || [];
  // Structure flexible pour études de cas (vide pour l'instant, à remplir plus tard)
  const caseStudies = t("projectPages.immobilier.caseStudies") || [];

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <ProjectHero
        projectId="immobilier"
        title={t("projectPages.immobilier.title")}
        subtitle={t("projectPages.immobilier.subtitle")}
      />

      <Section background="default">
        {/* Présentation du domaine */}
        <ProjectSection title={t("projectPages.immobilier.presentationTitle")} delay={0.1}>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
            {t("projectPages.immobilier.presentationText")}
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {t("projectPages.immobilier.highlights").map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start">
                    <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 text-xl">✓</span>
                    <p className="text-neutral-700 dark:text-neutral-300">{highlight}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </ProjectSection>

        {/* Chiffres clés (si disponibles) */}
        <ProjectStats
          stats={stats}
          title={t("projectPages.immobilier.statsTitle")}
        />

        {/* Galerie (si disponible) */}
        <ProjectGallery
          images={galleryImages}
          title={t("projectPages.immobilier.galleryTitle")}
        />

        {/* Études de cas (si disponibles) */}
        {caseStudies.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12 md:py-16"
          >
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-neutral-900 dark:text-white">
                {t("projectPages.immobilier.caseStudiesTitle")}
              </h2>
              <div className="space-y-12">
                {caseStudies.map((caseStudy, index) => (
                  <CaseStudy
                    key={index}
                    title={caseStudy.title}
                    description={caseStudy.description}
                    image={caseStudy.image}
                    imageAlt={caseStudy.imageAlt}
                    challenge={caseStudy.challenge}
                    solution={caseStudy.solution}
                    results={caseStudy.results}
                    link={caseStudy.link}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* État des projets */}
        <ProjectSection title={t("projectPages.immobilier.statusTitle")} delay={0.3}>
          <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl p-8 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-primary-500 animate-pulse"></span>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                {t("projectPages.immobilier.statusText")}
              </h3>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
              {t("projectPages.immobilier.statusDescription")}
            </p>
          </div>
        </ProjectSection>

        {/* Méthodologie & engagement */}
        <ProjectSection title={t("projectPages.immobilier.methodologyTitle")} delay={0.4}>
          <div className="space-y-6">
            {t("projectPages.immobilier.methodology").map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                <Card>
                  <h3 className="text-xl font-semibold mb-3 text-primary-600 dark:text-primary-400">
                    {item.title}
                  </h3>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {item.text}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </ProjectSection>

        {/* CTA */}
        <ProjectSection delay={0.6}>
          <div className="text-center bg-neutral-50 dark:bg-neutral-900 rounded-xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
              {t("projectPages.immobilier.ctaTitle")}
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              {t("projectPages.immobilier.ctaText")}
            </p>
            <Button href="/contact" size="lg">
              {t("projectPages.immobilier.ctaButton")}
            </Button>
          </div>
        </ProjectSection>
      </Section>
    </main>
  );
}
