"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skill", href: "#skill" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute inset-x-4 top-4 z-50 lg:inset-x-auto lg:left-1/2 lg:top-15 lg:-translate-x-1/2">
      {/* Navbar Container */}
     <div className="flex h-12 items-center justify-between rounded-full bg-black/20 px-6 backdrop-blur-[20px] lg:justify-center lg:gap-6 lg:px-6 w-full max-w-[553px] mx-auto">
        <span className="text-body-xl font-bold text-white lg:hidden">Edwin</span>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-body-sm font-semibold text-white transition-colors hover:text-secondary-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mt-2 rounded-3xl bg-black/20 p-3 backdrop-blur-[40px] lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-full px-4 py-2 text-body-sm font-semibold text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}