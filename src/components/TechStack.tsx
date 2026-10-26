"use client";

import { motion } from "framer-motion";

const categories = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Building responsive, accessible and visually refined interfaces.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Creating reliable application logic, databases and connected experiences.",
    technologies: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "Tools",
    description:
      "The tools I use to build, manage and deploy digital products.",
    technologies: [
      "Git",
      "GitHub",
      "Vercel",
      "VS Code",
      "Figma",
    ],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="bg-[#080808] px-6 py-28 text-[#f5f2ea] md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* Heading */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
              04
            </span>

            <span className="h-px w-10 bg-[#c9a96e]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
              Stack
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]"
          >
            Built With
            <br />
            <span className="text-[#c9a96e]">Purpose.</span>
          </motion.h2>

          <p className="mt-10 max-w-2xl text-sm leading-7 text-[#777] md:text-base">
            The technologies and tools I use to turn ideas into responsive,
            scalable and functional digital experiences.
          </p>
        </div>

        {/* Categories */}
        <div className="border-t border-[#f5f2ea]/10">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid gap-10 border-b border-[#f5f2ea]/10 py-12 lg:grid-cols-[0.7fr_1fr_1.5fr] lg:items-start"
            >
              {/* Number */}
              <div>
                <span className="text-[10px] tracking-[0.2em] text-[#c9a96e]">
                  {category.number}
                </span>

                <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[-0.04em] md:text-3xl">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="max-w-sm text-sm leading-7 text-[#777]">
                {category.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-[#f5f2ea]/10 px-4 py-3 text-[9px] uppercase tracking-[0.15em] text-[#999] transition-colors duration-300 hover:border-[#c9a96e]/50 hover:text-[#c9a96e]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-28 border-t border-[#f5f2ea]/10 pt-8 md:mt-40"
        >
          <p className="max-w-4xl text-2xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
            The stack is just the toolset.
            <br />
            <span className="text-[#c9a96e]">
              The real skill is knowing what to build with it.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}