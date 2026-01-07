"use client";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/ui/Section";
import Image from "next/image";
import Button from "../../components/ui/Button";
import { motion } from "framer-motion";

export default function ServicePage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 pt-20">
      <Section background="light">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-white">
                {t("servicePages.agronomy.title")}
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                {t("servicePages.agronomy.description")}
              </p>
              <ul className="list-none space-y-3 mb-8">
                {(t("servicePages.agronomy.highlights") || []).map((h, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="text-primary-600 dark:text-primary-400 mr-3 mt-1 text-xl">✓</span>
                    <span className="text-neutral-700 dark:text-neutral-300">{h}</span>
                  </motion.li>
                ))}
              </ul>
              <Button href="/contact" size="lg">
                {t("servicePages.contactButton")}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="relative rounded-xl overflow-hidden shadow-strong">
                <Image
                  src="https://st3.depositphotos.com/1006220/19187/i/450/depositphotos_191875812-stock-photo-aerial-view-of-farming-tractor.jpg"
                  alt={t("alt.agronomy")}
                  width={600}
                  height={400}
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
}
