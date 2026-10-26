"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Smigen Industries",
    category: "Corporate Website",
    description:
      "A modern corporate website built to establish a strong digital presence and showcase Smigen Industries' painting and finishing services.",
    image: "/projects/smigen.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Hook Form",
      "Supabase",
      "Resend",
      "Vercel",
    ],
    liveUrl: "https://smigenindustries.com",
    projectUrl: "/projects/smigen", 
  },

  {
    number: "02",
    title: "Vertex Capital Finance",
    category: "Finance / Corporate",
    description:
      "A professional financial services website designed around trust, clarity and a polished digital experience.",
    image: "/projects/vertex.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://vertex-capital-website.vercel.app/",
    projectUrl: "/projects/vertex",
  },

  {
    number: "03",
    title: "LaughterXchange",
    category: "Trading / Fintech",
    description:
      "A trading mentorship platform featuring authentication, trading signals and backend functionality.",
    image: "/projects/laughterxchange.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "PostgreSQL",
    ],
    liveUrl: "https://laughter-xchange.vercel.app/",
    projectUrl: "/projects/laughterxchange",
  },

];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="bg-[#0b0b0b] px-6 py-28 text-[#f5f2ea] md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Header */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
              03
            </span>

            <span className="h-px w-10 bg-[#c9a96e]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
              Selected Projects
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]"
          >
            Things
            <br />
            <span className="text-[#c9a96e]">I've Built.</span>
          </motion.h2>
        </div>

        {/* Projects */}
        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
            >
              {/* Project image */}
              <div className="group relative aspect-[16/9] overflow-hidden border border-[#f5f2ea]/10 bg-[#111]">
              <div className="mt-8 flex flex-wrap gap-3">
  {project.liveUrl && (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 bg-[#f5f2ea] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#080808] transition-colors duration-300 hover:bg-[#c9a96e]"
    >
      View Live Site

      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  )}

  {project.projectUrl && (
    <a
      href={project.projectUrl}
      className="group inline-flex items-center gap-3 border border-[#f5f2ea]/15 px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5f2ea] transition-colors duration-300 hover:border-[#c9a96e] hover:text-[#c9a96e]"
    >
      View Case Study

      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  )}
</div>

                {/* Image */}
                {project.liveUrl ? (
  <a
    href={project.liveUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block h-full w-full"
    aria-label={`View ${project.title} live website`}
  >
    <img
      src={project.image}
      alt={`${project.title} website preview`}
      className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-[1.01]"
    />
  </a>
) : (
  <img
    src={project.image}
    alt={`${project.title} website preview`}
    className="h-full w-full object-contain object-top transition-transform duration-700 group-hover:scale-[1.01]"
  />
)}

                {/* Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent opacity-70" />

                {/* Number */}
                <span className="absolute left-6 top-6 text-[10px] tracking-[0.2em] text-[#c9a96e]">
                  {project.number}
                </span>
              </div>

              {/* Project information */}
              <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

                {/* Title */}
                <div>
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#777]">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-3xl font-semibold uppercase tracking-[-0.04em] md:text-5xl">
                    {project.title}
                  </h3>
                </div>

                {/* Details */}
                <div>
                  <p className="max-w-xl text-sm leading-7 text-[#777] md:text-base">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="border border-[#f5f2ea]/10 px-3 py-2 text-[8px] uppercase tracking-[0.15em] text-[#888]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {project.liveUrl && (
  <div className="mt-8">
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 bg-[#f5f2ea] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#080808] transition-colors duration-300 hover:bg-[#c9a96e]"
    >
      View Live Site

      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </a>
  </div>
)}
                
                
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-20 h-px bg-[#f5f2ea]/10" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}