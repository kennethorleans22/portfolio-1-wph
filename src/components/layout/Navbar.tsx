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
    <>
      <nav className="absolute inset-x-4 top-4 z-50 lg:inset-x-auto lg:left-1/2 lg:top-8 lg:-translate-x-1/2">
        {/* Mobile closed navbar */}
        <AnimatePresence initial={false} mode="wait">
          {!menuOpen && (
            <motion.div
              key="mobile-navbar"
              className="flex h-12 items-center justify-between rounded-full bg-black/20 px-4 backdrop-blur-xl lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-body-xl font-bold text-white">Edwin</span>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex size-6 items-center justify-center text-white"
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <Menu size={24} strokeWidth={2} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop navbar */}
        <div className="hidden h-12 w-138.25 items-center justify-center gap-6 rounded-full bg-black/20 px-6 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-11.5 items-center justify-center px-2 text-body-md font-medium text-white transition-colors hover:text-secondary-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile open menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="absolute inset-x-4 top-5 z-50 h-203 rounded-2xl bg-black/20 p-4 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="flex h-8.5 items-center justify-between">
              <span className="text-body-xl font-bold text-white">Edwin</span>

              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="flex size-6 items-center justify-center text-white"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={2} />
              </button>
            </div>

            <div className="mt-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11.5 items-center text-body-md font-medium text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}