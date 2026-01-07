"use client";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/ui/Section";
import ServiceItem from "../../components/ui/ServiceItem";

export default function Services() {
  const { t } = useLanguage();
  
  const services = [
    {
      id: "immobilier",
      title: t("services.realEstate"),
      description: t("services.realEstateDesc"),
      link: "/immobilier",
    },
    {
      id: "construction",
      title: t("services.construction"),
      description: t("services.constructionDesc"),
      link: "/construction",
    },
    {
      id: "agronomie",
      title: t("services.agronomy"),
      description: t("services.agronomyDesc"),
      link: "/agronomie",
    },
    {
      id: "import_export",
      title: t("services.importExport"),
      description: t("services.importExportDesc"),
      link: "/import-export",
    },
  ];

  return (
    <Section
      title={t("services.title")}
      subtitle={t("services.subtitle")}
      background="light"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceItem
            key={service.id}
            serviceId={service.id}
            title={service.title}
            description={service.description}
            link={service.link}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
}
