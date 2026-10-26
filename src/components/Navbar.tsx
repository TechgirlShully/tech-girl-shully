"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#f5f2ea]/10 bg-[#080808]/90 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-6 md:px-10 lg:px-14">
        
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="group flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-[#c9a96e] text-[11px] font-semibold text-[#c9a96e]">
            TS
          </span>

          <div className="leading-none">
            <span className="block text-[11px] font-semibold uppercase tracking-[0.18em]">
              Tech Girl
            </span>

            <span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-[#777]">
              Shully
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center gap-2 text-[9px] font-medium uppercase tracking-[0.2em] text-[#888] transition-colors duration-300 hover:text-[#f5f2ea]"
            >
              <span className="text-[7px] text-[#c9a96e]">
                0{index + 1}
              </span>

              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 border border-[#f5f2ea]/20 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:border-[#c9a96e] hover:text-[#c9a96e] md:flex"
        >
          Let's Work
          <ArrowUpRight size={13} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center border border-[#f5f2ea]/10 text-[#f5f2ea] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-[#f5f2ea]/10 bg-[#080808] transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-[#f5f2ea]/10 py-5 text-sm uppercase tracking-[0.15em] text-[#f5f2ea]"
            >
              <span>
                <span className="mr-4 text-[9px] text-[#c9a96e]">
                  0{index + 1}
                </span>

                {link.name}
              </span>

              <ArrowUpRight
                size={15}
                className="text-[#666]"
              />
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 flex items-center justify-center gap-3 bg-[#f5f2ea] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#080808]"
          >
            Let's Work
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}