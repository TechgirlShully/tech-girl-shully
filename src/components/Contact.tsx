"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-[#f5f2ea] md:px-10 md:py-36 lg:px-14"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c9a96e]/[0.04] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* Section label */}
        <div className="mb-16 flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a96e]">
            05
          </span>

          <span className="h-px w-10 bg-[#c9a96e]" />

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#777]">
            Contact
          </span>
        </div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="max-w-6xl text-[clamp(4rem,10vw,10rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em]">
            Have An
            <br />
            <span className="text-[#c9a96e]">Idea?</span>
          </h2>

          <p className="mt-10 max-w-xl text-sm leading-8 text-[#777] md:text-base">
            Whether you need a website, a web application or a complete digital
            product, let's turn your idea into something people can actually
            use.
          </p>
        </motion.div>

        {/* Contact options */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">

          {/* Email */}
          <motion.a
            href="mailto:theshullysignature@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group border border-[#f5f2ea]/10 p-8 transition-all duration-500 hover:border-[#c9a96e]/50 hover:bg-[#c9a96e]/[0.03] md:p-10"
          >
            <Mail
              size={20}
              strokeWidth={1.5}
              className="text-[#c9a96e]"
            />

            <div className="mt-16 flex items-end justify-between gap-5">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                  Email
                </span>

                <p className="mt-3 break-all text-sm uppercase tracking-[0.08em] md:text-base">
                  theshullysignature@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/2348162672719"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group border border-[#f5f2ea]/10 p-8 transition-all duration-500 hover:border-[#c9a96e]/50 hover:bg-[#c9a96e]/[0.03] md:p-10"
          >
            <MessageCircle
              size={20}
              strokeWidth={1.5}
              className="text-[#c9a96e]"
            />

            <div className="mt-16 flex items-end justify-between gap-5">
              <div>
                <span className="text-[9px] uppercase tracking-[0.3em] text-[#666]">
                  WhatsApp
                </span>

                <p className="mt-3 text-sm uppercase tracking-[0.08em] md:text-base">
                  Let's Talk
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </div>
          </motion.a>

        </div>

        {/* Bottom line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 border-t border-[#f5f2ea]/10 pt-8"
        >
          <div className="flex flex-col gap-4 text-[9px] uppercase tracking-[0.25em] text-[#555] md:flex-row md:items-center md:justify-between">
            <span>Tech Girl Shully</span>

            <span>Full Stack Developer</span>

            <span>© {new Date().getFullYear()}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}