import React from "react";

export default function SkipNav() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-primary px-4 py-2 rounded shadow-md"
    >
      Skip to main content
    </a>
  );
}
