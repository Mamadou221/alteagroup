"use client";
import Hero from "../components/Hero";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      id: "immobilier",
      href: "/immobilier",
      img: "https://dst-immobilier-senegal.com/wp-content/uploads/2025/04/11108772-1592902603.71.jpg",
      title: "services.realEstate",
      description: "services.realEstateDesc",
    },
    {
      id: "construction",
      href: "/construction",
      img: "https://dst-immobilier-senegal.com/wp-content/uploads/2025/04/btp-2-e1645605771420.jpg",
      title: "services.construction",
      description: "services.constructionDesc",
    },
    {
      id: "agronomie",
      href: "/agronomie",
      img: "https://www.sencampus.com/content/uploads/Ingenieur-agronome-850x478.png",
      title: "services.agronomy",
      description: "services.agronomyDesc",
    },
    {
      id: "import_export",
      href: "/import-export",
      img: "https://hexagone-si.com/wp-content/uploads/2022/11/export-import-dakar-senegal-hexagone.png",
      title: "services.importExport",
      description: "services.importExportDesc",
    },
  ];

  return (
    <main className="flex flex-col">
      <Hero
        title={t("home.heroTitle")}
        subtitle={t("home.heroSubtitle")}
        buttonText={t("home.heroButton")}
        buttonLink="/services"
      />

      <Section
        id="services"
        title={t("home.servicesTitle")}
        subtitle={t("home.servicesDescription")}
        background="light"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="block group">
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-soft hover:shadow-medium transition-all duration-300 group-hover:border-primary-300 dark:group-hover:border-primary-700">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.img}
                      alt={t(service.title)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{t(service.title)}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {t(service.description)}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        title={t("home.aboutTitle")}
        subtitle={t("home.aboutDescription")}
      >
        <div className="text-center">
          <Button href="/about" variant="secondary" size="lg">
            {t("buttons.learn_more")}
          </Button>
        </div>
      </Section>

      <Section
        id="contact"
        title={t("home.contactTitle")}
        subtitle={t("home.contactDescription")}
        background="light"
      >
        <div className="text-center">
          <Button href="/contact" size="lg">
            {t("servicePages.contactButton")}
          </Button>
        </div>
      </Section>
    </main>
  );
}
