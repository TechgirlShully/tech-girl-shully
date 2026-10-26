"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "React Hook Form",
  "Zod",
  "Supabase",
  "Resend",
  "Vercel",
];

export default function SmigenProject() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f2ea]">

      {/* Header */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pt-40 lg:px-14">
        <div className="mx-auto max-w-[1500px]">

          <Link
            href="/#work"
            className="group mb-16 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-[#777] transition-colors hover:text-[#f5f2ea]"
          >
            <ArrowLeft
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back to Projects
          </Link>

          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
              01
            </span>

            <span className="h-px w-10 bg-[#c9a96e]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
              Corporate Website
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]"
          >
            Smigen
            <br />
            <span className="text-[#c9a96e]">Industries.</span>
          </motion.h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-[#777] md:text-lg">
            A modern corporate website built to give Smigen Industries a
            professional digital presence while clearly presenting its
            painting, finishing and surface treatment services.
          </p>
        </div>
      </section>

      {/* Project image */}
      <section className="px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px] overflow-hidden border border-[#f5f2ea]/10 bg-[#111]">
          <img
            src="/projects/smigen.jpg"
            alt="Smigen Industries website"
            className="h-auto w-full object-contain"
          />
        </div>
      </section>

      {/* Project details */}
      <section className="px-6 py-28 md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto grid max-w-[1500px] gap-20 lg:grid-cols-[0.7fr_1.3fr]">

          {/* Sidebar */}
          <div>
            <div className="border-t border-[#f5f2ea]/10">

              <div className="border-b border-[#f5f2ea]/10 py-7">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                  Role
                </span>

                <p className="mt-3 text-sm uppercase tracking-[0.12em]">
                  Full Stack Developer
                </p>
              </div>

              <div className="border-b border-[#f5f2ea]/10 py-7">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                  Year
                </span>

                <p className="mt-3 text-sm uppercase tracking-[0.12em]">
                  2026
                </p>
              </div>

              <div className="border-b border-[#f5f2ea]/10 py-7">
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                  Stack
                </span>

                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.map((technology) => (
                    <span
                      key={technology}
                      className="border border-[#f5f2ea]/10 px-3 py-2 text-[8px] uppercase tracking-[0.12em] text-[#888]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-7">
                <a
                  href="https://smigenindustries.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#f5f2ea] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#080808] transition-colors duration-300 hover:bg-[#c9a96e]"
                >
                  Visit Live Website

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>

            </div>
          </div>

          {/* Content */}
          <div className="space-y-20">

            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                01 / Overview
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                Building a stronger digital presence.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                Smigen Industries needed a professional website that could
                communicate the quality of its work while making its services
                easy for potential customers to understand.
              </p>
            </div>

            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                02 / The Challenge
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                Turning a traditional service into a modern brand.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                The website needed to feel trustworthy and professional while
                still being visually engaging. It also needed to work smoothly
                across mobile and desktop devices.
              </p>
            </div>

            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                03 / The Solution
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                A clean, responsive and conversion-focused experience.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                I designed and developed a responsive experience with clear
                service information, strong calls to action, contact
                functionality and a visual system built around the company's
                identity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#f5f2ea]/10 px-6 py-28 md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto max-w-[1500px]">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#777]">
            Have a project in mind?
          </span>

          <h2 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,7rem)] font-semibold uppercase leading-[0.85] tracking-[-0.06em]">
            Let's build
            <br />
            <span className="text-[#c9a96e]">something.</span>
          </h2>

          <Link
            href="/#contact"
            className="group mt-10 inline-flex items-center gap-3 border-b border-[#c9a96e] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
          >
            Start a conversation

            <ArrowUpRight
              size={14}
              className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

    </main>
  );
}