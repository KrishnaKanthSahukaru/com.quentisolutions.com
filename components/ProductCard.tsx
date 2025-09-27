import React from "react";
import { motion } from "framer-motion";

type ProductCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
};

export default function ProductCard({ title, description, imageUrl, alt }: ProductCardProps) {
  return (
    <motion.article
      className="bg-surface rounded-lg shadow-md overflow-hidden flex flex-col transition-shadow"
      whileHover={{ y: -8, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
      tabIndex={0}
      aria-label={title}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-sm flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-text mb-xs">{title}</h3>
        <p className="text-base text-muted mb-xs">{description}</p>
        <button
          className="mt-auto px-4 py-2 bg-primary text-white rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition"
        >
          [REPLACE] Learn More
        </button>
      </div>
    </motion.article>
  );
}
