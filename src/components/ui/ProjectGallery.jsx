"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export default function ProjectGallery({ images = [], title }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!images || images.length === 0) {
    return null; // Ne rien afficher si pas d'images
  }

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="max-w-7xl mx-auto px-6">
          {title && (
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-neutral-900 dark:text-white">
              {title}
            </h2>
          )}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `Image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modal pour image agrandie */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors"
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt || `Image ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors"
                aria-label="Image précédente"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary-400 transition-colors"
                aria-label="Image suivante"
              >
                →
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

