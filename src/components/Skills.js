"use client";

import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import { fadeInUp, staggerContainer } from "./Animations";

const Skills = () => (
  <section className="py-[120px] bg-[#050505]" id="skills">
    <div className="max-w-7xl mx-auto px-8">
      <motion.div 
        {...fadeInUp}
        className="text-center mb-20"
      >
        <h2 className="font-h2 text-h2 text-white mb-4">The Tech Stack</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">A specialized selection of tools and languages I use to bring digital ideas to life.</p>
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {[
          { Icon: SiHtml5, label: 'HTML5', color: '#E34F26' },
          { Icon: SiCss, label: 'CSS3', color: '#1572B6' },
          { Icon: SiJavascript, label: 'JavaScript', color: '#F7DF1E' },
          { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
          { Icon: SiReact, label: 'React', color: '#61DAFB' },
          { Icon: SiNextdotjs, label: 'Next.js', color: '#FFFFFF' },
          { Icon: SiTailwindcss, label: 'Tailwind', color: '#06B6D4' },
          { Icon: SiNodedotjs, label: 'Node.js', color: '#339933' },
          { Icon: SiExpress, label: 'Express.js', color: '#FFFFFF' },
          { Icon: SiMongodb, label: 'MongoDB', color: '#47A248' }
        ].map((skill, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="skill-node p-8 rounded-2xl flex flex-col items-center gap-4 text-center group"
          >
            <skill.Icon className="text-5xl transition-all duration-300 group-hover:scale-110" style={{ color: skill.color }} />
            <span className="font-bold text-white uppercase tracking-widest text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">{skill.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
