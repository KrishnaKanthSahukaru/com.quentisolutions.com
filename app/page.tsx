import Hero from "../components/Hero";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="features" className="py-lg px-md bg-surface">
        <h2 className="text-2xl font-bold text-text mb-md text-center">[REPLACE] Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <div className="flex flex-col items-center text-center">
            <span className="text-accent text-3xl mb-xs" aria-hidden="true">★</span>
            <h3 className="text-lg font-semibold mb-xs">[REPLACE] Quality Materials</h3>
            <p className="text-base text-muted">[REPLACE] Only the best for your daily essentials.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-accent text-3xl mb-xs" aria-hidden="true">⏱</span>
            <h3 className="text-lg font-semibold mb-xs">[REPLACE] Fast Shipping</h3>
            <p className="text-base text-muted">[REPLACE] Get your order quickly, wherever you are.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-accent text-3xl mb-xs" aria-hidden="true">🌱</span>
            <h3 className="text-lg font-semibold mb-xs">[REPLACE] Sustainable</h3>
            <p className="text-base text-muted">[REPLACE] Designed with the planet in mind.</p>
          </div>
        </div>
      </section>
      <ProductGrid />
      <section id="about" className="py-lg px-md bg-surface">
        <h2 className="text-2xl font-bold text-text mb-md text-center">[REPLACE] About BrandName</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto text-center">
          [REPLACE] We believe in thoughtful design, honest materials, and products that last. Our mission is to bring premium quality to your everyday life.
        </p>
      </section>
    </>
  );
}
