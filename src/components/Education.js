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
        <div className="aspect-square glass-card rounded-2xl overflow-hidden">
          <Image 
            alt="Developer Workspace" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVxuNnob9ek-olqzWSPreB9cqiRMvJ7spDobyXFmAMikydE2BWfz-qxUAt3t3mduN7eboU3GzbD3YxtziqgUrsDQU841YY98DIduxNEvkbyAXQ18qcCHvTT07zVRTP07DNg3D3tfkTEhTzoilZ5JgPy9yeQyCo8UP8ACcpa_ufWJQkUXF7aiBJZCPq6s-64BloP0jBdbJ9Im-EOoNuKgJ0-IDAyL2TMqqDmPiPN0pE-WcSg8zhDHjDicpovwieY4PRna8BscQMzVY"
            width={600}
            height={600}
          />
        </div>
      </motion.div>
      <motion.div 
        {...fadeInUp}
        className="flex flex-col gap-8"
      >
        <h2 className="font-h2 text-h2 text-gray-900 dark:text-white">Academic Foundation</h2>
        <div className="relative pl-8 border-l-2 border-surface-container-highest">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#2D8CFF] shadow-[0_0_10px_#2D8CFF]"
          />
          <div className="glass-card p-card-padding rounded-xl">
            <span className="font-label-caps text-[#2D8CFF] mb-2 block">2022 — PRESENT</span>
            <h3 className="font-h2 text-xl text-gray-900 dark:text-white mb-4">Diploma in Computer Science and Engineering</h3>
            <p className="text-gray-600 dark:text-on-surface-variant">Focusing on core computing principles, data structures, and advanced algorithm design while mastering the modern web stack.</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;
