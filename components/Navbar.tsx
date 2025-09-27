import React from "react";
import Wordmark from "./Wordmark";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#products", label: "Products" },
  { href: "#about", label: "About" }
];

export default function Navbar() {
  return (
    <nav
      className="flex items-center justify-between px-md py-sm bg-surface shadow-sm"
      aria-label="Main navigation"
    >
      <Wordmark />
      <ul className="flex gap-md">
        {navLinks.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-base text-text hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent transition-colors duration-150"
              tabIndex={0}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
