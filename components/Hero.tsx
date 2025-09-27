import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[60vh] bg-background px-md py-lg"
      id="main-content"
      tabIndex={-1}
    >
      <motion.h1
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl font-bold text-text text-center mb-sm"
      >
        [REPLACE] Elevate Your Everyday
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="text-lg text-muted text-center max-w-xl"
      >
        [REPLACE] Discover thoughtfully designed products for modern living.
      </motion.p>
    </section>
  );
}
