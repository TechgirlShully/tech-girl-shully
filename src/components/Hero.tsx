"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080808] text-[#f5f2ea] pt-24 md:pt-28">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#c9a96e]/[0.04] blur-[120px]" />

      {/* Fine grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#f5f2ea 1px, transparent 1px), linear-gradient(90deg, #f5f2ea 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-[1500px] flex-col px-6 pt-16 md:px-10 md:pt-20 lg:px-14">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-7 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#c9a96e]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#a7a7a7]">
            Full Stack Developer
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="max-w-[1200px]">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.8] tracking-[-0.075em]"
            >
              I Build
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.8] tracking-[-0.075em]"
            >
              Digital
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.8] tracking-[-0.075em] text-[#c9a96e]"
            >
              Experiences.
            </motion.h1>
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-10 flex flex-col gap-8 border-t border-[#f5f2ea]/10 pt-5 md:mt-12 md:flex-row md:items-end md:justify-between">
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="max-w-md text-sm leading-7 text-[#8f8f8f] md:text-base"
          >
            I create modern, high-performance websites and digital products
            that combine thoughtful design with powerful technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="group flex items-center gap-3 bg-[#f5f2ea] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#080808] transition-all duration-300 hover:bg-[#c9a96e]"
            >
              View My Work

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-3 border border-[#f5f2ea]/20 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5f2ea] transition-all duration-300 hover:border-[#c9a96e] hover:text-[#c9a96e]"
            >
              Let's Work
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex lg:right-14"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown
              size={14}
              className="text-[#c9a96e]"
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}