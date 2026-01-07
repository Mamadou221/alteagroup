export const metadata = {
  title: "Services — Altea Group",
  description: "Découvrez nos services — immobilier, construction, import/export (voitures), agronomie."
};
export default function Head(){ return (<><title>{metadata.title}</title><meta name="description" content={metadata.description} /></>); }