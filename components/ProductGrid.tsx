import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "[REPLACE] Minimalist Lamp",
    description: "[REPLACE] Soft light, modern form.",
    imageUrl: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    alt: "Minimalist lamp on a table"
  },
  {
    title: "[REPLACE] Ceramic Mug",
    description: "[REPLACE] Crafted for comfort.",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Ceramic mug on a wooden surface"
  },
  {
    title: "[REPLACE] Desk Organizer",
    description: "[REPLACE] Tidy up your workspace.",
    imageUrl: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    alt: "Desk organizer with stationery"
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-lg px-md bg-background">
      <h2 className="text-2xl font-bold text-text mb-md text-center">[REPLACE] Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
