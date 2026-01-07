"use client";
import { useLanguage } from "../context/LanguageContext";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Link from "next/link";

export default function ServiceCard({ title, description, image, link }) {
  const { t } = useLanguage();
  
  return (
    <Card>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{title}</h3>
      <p className="text-neutral-700 dark:text-neutral-300 mb-4">{description}</p>
      {link && (
        <Button href={link} variant="secondary" size="sm">
          {t("buttons.learn_more")}
        </Button>
      )}
    </Card>
  );
}
