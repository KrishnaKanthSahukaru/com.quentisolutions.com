import React from "react";

export default function Wordmark() {
  return (
    <svg
      width="140"
      height="32"
      viewBox="0 0 140 32"
      fill="none"
      aria-label="Site wordmark"
      role="img"
      className="block"
    >
      <text
        x="0"
        y="24"
        fontFamily="'Space Grotesk', 'Inter', sans-serif"
        fontWeight="bold"
        fontSize="2rem"
        fill="currentColor"
        letterSpacing="2"
      >
        BrandName
      </text>
      <rect
        x="120"
        y="8"
        width="16"
        height="16"
        rx="4"
        fill="#F59E42"
        aria-hidden="true"
      />
    </svg>
  );
}
