"use client";
import Link from "next/link";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import ValueItem from "../../components/ui/ValueItem";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center bg-gradient-to-b from-primary-50 to-white dark:from-neutral-900 dark:to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-neutral-900 dark:text-white">
            {t("about.title")}
          </h1>
        </motion.div>
      </section>

      <Section background="default">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                {t("about.missionTitle")}
              </h2>
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t("about.missionText")}
              </p>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full">
              <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                {t("about.visionTitle")}
              </h2>
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                {t("about.visionText")}
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Valeurs */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white">
              {t("about.valuesTitle")}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {t("about.valuesSubtitle")}
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {t("about.values").map((val, i) => (
              <ValueItem
                key={i}
                value={val}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-900 dark:text-white">
            {t("about.teamTitle")}
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-lg text-neutral-700 dark:text-neutral-300 mb-8">
            {t("about.teamIntro")}
          </p>
          <Button href="/contact" size="lg">
            {t("servicePages.contactButton")}
          </Button>
        </motion.div>
      </Section>
    </main>
  );
}
