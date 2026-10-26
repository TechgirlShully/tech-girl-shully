"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const stack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Supabase",
  "PostgreSQL",
];

export default function LaughterXchangeProject() {
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
              03
            </span>

            <span className="h-px w-10 bg-[#c9a96e]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
              Personal Project · Trading
            </span>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl text-[clamp(3.5rem,9vw,9rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]"
          >
            Laughter
            <br />
            <span className="text-[#c9a96e]">Xchange.</span>
          </motion.h1>

          <p className="mt-10 max-w-2xl text-base leading-8 text-[#777] md:text-lg">
            A full-stack trading mentorship platform built to provide
            structured access to trading education, signals and a modern
            financial experience.
          </p>
        </div>
      </section>

      {/* Project image */}
      <section className="px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1500px] overflow-hidden border border-[#f5f2ea]/10 bg-[#111]">
          <img
            src="/projects/laughterxchange.jpg"
            alt="LaughterXchange website"
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
                  Project Type
                </span>

                <p className="mt-3 text-sm uppercase tracking-[0.12em]">
                  Personal Project
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
                  href="https://laughter-xchange.vercel.app/"
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

            {/* Overview */}
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                01 / Overview
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                More than a trading website.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                LaughterXchange was built as a trading mentorship platform
                where users can access educational resources and trading
                signals through a structured digital experience.
              </p>
            </div>

            {/* Challenge */}
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                02 / The Challenge
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                Combining content with functionality.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                The platform needed to go beyond a static marketing website.
                It required user authentication, structured trading signals
                and a backend capable of handling dynamic information.
              </p>
            </div>

            {/* Solution */}
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                03 / The Solution
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                A connected full-stack experience.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                I built the frontend with Next.js and Tailwind CSS while
                integrating Supabase for authentication, database management
                and dynamic trading signal functionality.
              </p>
            </div>

            {/* Technical highlight */}
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#c9a96e]">
                04 / Technical Focus
              </span>

              <h2 className="mt-5 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                Frontend meets backend.
              </h2>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-[#777] md:text-base">
                This project allowed me to work across the entire application
                stack — from interface design and responsive layouts to
                authentication, database structures and real-time application
                functionality.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
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