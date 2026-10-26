"use client";

import { ArrowUpRight, ArrowUp } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "#",
  },
  {
    name: "LinkedIn",
    href: "#",
  },
  {
    name: "Instagram",
    href: "#",
  },
  {
    name: "TikTok",
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-[#f5f2ea]/10 bg-[#080808] px-6 py-10 text-[#f5f2ea] md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1500px]">

        {/* Top */}
        <div className="flex flex-col gap-10 border-b border-[#f5f2ea]/10 pb-10 md:flex-row md:items-end md:justify-between">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-[#c9a96e] text-[11px] font-semibold text-[#c9a96e]">
                TS
              </span>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                  Tech Girl Shully
                </p>

                <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-[#666]">
                  Full Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9a96e] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9a96e]" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.2em] text-[#777]">
              Available for projects
            </span>
          </div>
        </div>

        {/* Middle */}
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">

          {/* Social links */}
          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-[#777] transition-colors duration-300 hover:text-[#f5f2ea]"
              >
                {social.name}

                <ArrowUpRight
                  size={12}
                  className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#777] transition-colors duration-300 hover:text-[#f5f2ea]"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center border border-[#f5f2ea]/10 transition-colors duration-300 group-hover:border-[#c9a96e]">
              <ArrowUp
                size={13}
                className="text-[#c9a96e]"
              />
            </span>
          </button>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-3 border-t border-[#f5f2ea]/10 pt-6 text-[8px] uppercase tracking-[0.18em] text-[#555] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Tech Girl Shully. All rights reserved.
          </p>

          <p>
            Designed & Built by Tech Girl Shully
          </p>
        </div>
      </div>
    </footer>
  );
}