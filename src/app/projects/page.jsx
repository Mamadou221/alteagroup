"use client";
import { useLanguage } from "../../context/LanguageContext";
import Section from "../../components/ui/Section";
import ProjectCard from "../../components/ui/ProjectCard";

export default function ProjectsPage() {
  const { t } = useLanguage();

  // Structure flexible pour accueillir de vrais projets plus tard
  // Pour ajouter un projet réel, il suffit d'ajouter un objet avec :
  // - image: "/path/to/image.jpg"
  // - imageAlt: "Description de l'image"
  // - date: "2024-01-15" (format ISO)
  // - status: "completed" | "inProgress" | "comingSoon"
  // - detailedDescription: "Description détaillée..."
  // - link: "/projects/project-slug" (optionnel, pour page détaillée)
  // - tags: ["Tag1", "Tag2"] (optionnel)
  // TEST : Textes de longueurs différentes pour vérifier l'alignement
  // À remplacer par les vraies traductions après validation
  const testDescriptions = {
    short: "Projet court.",
    medium: t("projects.realEstate.description"), // Description normale
    long: "Projets immobiliers axés sur la qualité, la durabilité et la valeur à long terme. Nous développons des solutions innovantes qui allient excellence architecturale et respect de l'environnement, tout en créant de la valeur durable pour nos clients et les communautés locales.",
    veryLong: "Projets immobiliers axés sur la qualité, la durabilité et la valeur à long terme. Nous développons des solutions innovantes qui allient excellence architecturale et respect de l'environnement, tout en créant de la valeur durable pour nos clients et les communautés locales. Notre approche intègre les dernières technologies durables, une gestion rigoureuse des projets et un accompagnement personnalisé de A à Z."
  };

  const projects = [
    {
      id: "immobilier",
      title: t("projects.realEstate.title"),
      description: testDescriptions.veryLong, // TEST : Texte très long
      status: "comingSoon",
      link: "/projets/immobilier",
    },
    {
      id: "construction",
      title: t("projects.construction.title"),
      description: testDescriptions.short, // TEST : Texte court
      status: "comingSoon",
      link: "/projets/construction",
    },
    {
      id: "agronomie",
      title: t("projects.agronomy.title"),
      description: testDescriptions.medium, // TEST : Texte moyen
      status: "comingSoon",
      link: "/projets/agronomie",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <Section
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
        background="light"
      >
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              projectId={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              date={project.date}
              status={project.status}
              detailedDescription={project.detailedDescription}
              link={project.link}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>
      </Section>
    </main>
  );
}
