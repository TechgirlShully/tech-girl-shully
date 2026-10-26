"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#080808] px-6 py-28 text-[#f5f2ea] md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
            01
          </span>

          <span className="h-px w-10 bg-[#c9a96e]" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
            About Me
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[clamp(3rem,7vw,7rem)] font-semibold uppercase leading-[0.85] tracking-[-0.07em]"
            >
              The Person
              <br />
              <span className="text-[#c9a96e]">Behind The Code.</span>
            </motion.h2>

            <p className="mt-10 max-w-xl text-sm leading-8 text-[#8f8f8f] md:text-base">
              I'm Shully — a Full Stack Developer passionate about turning
              ideas into thoughtful, functional and visually refined digital
              experiences.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#8f8f8f] md:text-base">
              I build responsive websites and digital products across the
              frontend and backend, with a focus on clean interfaces,
              performance and real-world usability.
            </p>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[#c9a96e] pb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
            >
              Let's Build Something

              <ArrowUpRight
                size={14}
                className="text-[#c9a96e] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div className="border-t border-[#f5f2ea]/10">
            <div className="border-b border-[#f5f2ea]/10 py-7">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                Focus
              </span>

              <p className="mt-3 text-sm uppercase tracking-[0.12em]">
                Full Stack Development
              </p>
            </div>

            <div className="border-b border-[#f5f2ea]/10 py-7">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                Technologies
              </span>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#f5f2ea]/10 px-3 py-2 text-[9px] uppercase tracking-[0.12em] text-[#999]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-b border-[#f5f2ea]/10 py-7">
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                Approach
              </span>

              <p className="mt-3 max-w-md text-sm leading-7 text-[#777]">
                Technology should solve problems, look good doing it, and feel
                effortless to use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}