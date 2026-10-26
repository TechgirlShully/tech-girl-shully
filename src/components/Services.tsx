"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Database,
  Rocket,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites built with clean code, thoughtful architecture and a strong focus on performance.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Full Stack Applications",
    description:
      "Complete digital products built across the frontend and backend, including APIs, authentication and databases.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Backend & Integration",
    description:
      "Reliable backend systems, databases, APIs and third-party integrations that keep your product running smoothly.",
    icon: Database,
  },
  {
    number: "04",
    title: "Deployment & Optimization",
    description:
      "Taking projects from development to production with performance, responsiveness, SEO and deployment in mind.",
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-[#f5f2ea] md:px-10 md:py-40 lg:px-14"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="mb-20 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
            03
          </span>

          <span className="h-px w-10 bg-[#c9a96e]" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
            What I Do
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Intro */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(3.5rem,7vw,7rem)] font-semibold uppercase leading-[0.84] tracking-[-0.07em]"
            >
              What
              <br />
              <span className="text-[#c9a96e]">I Do.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10 max-w-sm text-sm leading-7 text-[#777]"
            >
              From a simple idea to a complete digital product, I combine
              development, design and technology to create experiences that
              work beautifully.
            </motion.p>
          </div>

          {/* Services list */}
          <div className="border-t border-[#f5f2ea]/10">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="group border-b border-[#f5f2ea]/10 py-8 md:py-10"
                >
                  <div className="flex gap-6 md:gap-10">
                    {/* Number */}
                    <span className="pt-1 text-[10px] tracking-[0.2em] text-[#c9a96e]">
                      {service.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-6">
                        <div>
                          <div className="mb-4 flex items-center gap-3">
                            <Icon
                              size={17}
                              strokeWidth={1.2}
                              className="text-[#c9a96e]"
                            />

                            <h3 className="text-xl font-medium uppercase tracking-[-0.02em] md:text-3xl">
                              {service.title}
                            </h3>
                          </div>

                          <p className="max-w-lg text-sm leading-7 text-[#777]">
                            {service.description}
                          </p>
                        </div>

                        <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#f5f2ea]/10 transition-all duration-300 group-hover:border-[#c9a96e] group-hover:bg-[#c9a96e] group-hover:text-[#080808] md:flex">
                          <ArrowUpRight size={15} strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[#f5f2ea]/10 pt-8">
          <p className="max-w-3xl text-xl font-medium leading-tight tracking-[-0.03em] text-[#f5f2ea] md:text-3xl">
            Good development is more than making something work.
            <span className="text-[#666]">
              {" "}
              It's about making it work beautifully.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}