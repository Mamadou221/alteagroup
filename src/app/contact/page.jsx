"use client";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Section from "../../components/ui/Section";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Section
        title={t("contactPage.title")}
        subtitle={t("contactPage.subtitle")}
        background="light"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-neutral-900 dark:text-white">
                    {t("contactPage.placeholderName")}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all"
                    placeholder={t("contactPage.placeholderName")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-neutral-900 dark:text-white">
                    {t("contactPage.placeholderEmail")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white transition-all"
                    placeholder={t("contactPage.placeholderEmail")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-neutral-900 dark:text-white">
                    {t("contactPage.placeholderMessage")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full p-4 border border-neutral-300 dark:border-neutral-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white resize-none transition-all"
                    placeholder={t("contactPage.placeholderMessage")}
                  ></textarea>
                </div>
                <div className="text-center pt-4">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    {t("contactPage.submit")}
                  </Button>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
