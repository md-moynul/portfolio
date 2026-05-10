"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animations";

const Education = () => (
  <section className="py-[120px] px-8 max-w-7xl mx-auto" id="education">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="aspect-square glass-card rounded-2xl overflow-hidden group">
          <Image
            alt="Academic Foundation - Computer Science Study"
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
            src="/images/education.png"
            width={800}
            height={800}
            priority
          />
        </div>
      </motion.div>

      <motion.div {...fadeInUp} className="flex flex-col gap-8">
        <h2 className="font-h2 text-h2 text-gray-900 dark:text-white">
          Academic Foundation
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 border-l-2 border-surface-container-highest flex flex-col gap-8">

          {/* Diploma Entry */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -left-[calc(2rem+9px)] top-1 w-4 h-4 rounded-full bg-[#2D8CFF] shadow-[0_0_10px_#2D8CFF]"
            />
            <div className="glass-card p-card-padding rounded-xl">
              <span className="font-label-caps text-[#2D8CFF] mb-2 block tracking-widest text-xs uppercase">
                2023 — Present
              </span>
              <h3 className="font-h2 text-xl text-gray-900 dark:text-white mb-1">
                Diploma in Computer Science &amp; Technology
              </h3>
              <p className="text-sm text-gray-500 dark:text-on-surface-variant mb-3">
                Rangpur Polytechnic Institute · Bangladesh
              </p>
              <p className="text-gray-600 dark:text-on-surface-variant leading-relaxed">
                Building a solid foundation in core computing principles —
                covering data structures, algorithms, operating systems,
                database management, and modern web technologies as part of
                the four-year diploma programme.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Data Structures",
                  "Algorithms",
                  "Web Development",
                  "Database",
                  "Networking",
                  "OOP",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-[#2D8CFF]/10 text-[#2D8CFF] border border-[#2D8CFF]/20 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Status badge */}
          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -left-[calc(2rem+9px)] top-1 w-4 h-4 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"
            />
            <div className="glass-card p-4 rounded-xl flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-on-surface-variant">
                Currently in{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  2nd Year
                </span>{" "}
                — actively learning &amp; building projects
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;