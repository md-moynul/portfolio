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
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiDaisyui,
  SiHeroui,
  SiVercel,
  SiNetlify,
  SiGithubpages,
  SiFigma,
  SiPenpot,
  SiJsonwebtokens,
  SiBetterauth,
  SiTypescript,
} from "react-icons/si";
import { fadeInUp, staggerContainer } from "./Animations";

const VscodeIcon = ({ className, style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
  </svg>
);

const categories = [
  {
    title: "Frontend Technologies",
    dotColor: "#61DAFB",
    skills: [
      { Icon: SiReact, label: "React.js", color: "#61DAFB", level: 88 },
      { Icon: SiNextdotjs, label: "Next.js", color: "inherit", className: "text-gray-900 dark:text-white", level: 82 },
      { Icon: SiHtml5, label: "HTML5", color: "#E34F26", level: 95 },
      { Icon: SiCss, label: "CSS3", color: "#1572B6", level: 90 },
    ],
  },
  {
    title: "Backend & Authentication",
    dotColor: "#339933",
    skills: [
      { Icon: SiNodedotjs, label: "Node.js", color: "#339933", level: 78 },
      { Icon: SiExpress, label: "Express.js", color: "inherit", className: "text-gray-900 dark:text-white", level: 75 },
      { Icon: SiJsonwebtokens, label: "JWT", color: "#535151", level: 80 },
      { Icon: SiBetterauth, label: "Better Auth", color: "inherit", className: "text-gray-900 dark:text-white", level: 74 },
    ],
  },
  {
    title: "Database",
    dotColor: "#47A248",
    skills: [
      { Icon: SiMongodb, label: "MongoDB", color: "#47A248", level: 80 },
    ],
  },
  {
    title: "Programming Languages",
    dotColor: "#3178C6",
    skills: [
      { Icon: SiJavascript, label: "JavaScript (ES6+)", color: "#D4A017", level: 90 },
      { Icon: SiTypescript, label: "TypeScript", color: "#3178C6", level: 45 },
    ],
  },
  {
    title: "UI & Styling",
    dotColor: "#06B6D4",
    skills: [
      { Icon: SiTailwindcss, label: "Tailwind CSS", color: "#06B6D4", level: 92 },
      { Icon: SiDaisyui, label: "DaisyUI", color: "#5A0EF8", level: 85 },
      { Icon: SiHeroui, label: "HeroUI", color: "inherit", className: "text-gray-900 dark:text-white", level: 80 },
    ],
  },
  {
    title: "Tools & Version Control",
    dotColor: "#F05032",
    skills: [
      { Icon: SiGit, label: "Git", color: "#F05032", level: 85 },
      { Icon: SiGithub, label: "GitHub", color: "inherit", className: "text-gray-900 dark:text-white", level: 88 },
      { Icon: VscodeIcon, label: "VS Code", color: "#007ACC", level: 95 },
      { Icon: SiFigma, label: "Figma", color: "#F24E1E", level: 70 },
      { Icon: SiPenpot, label: "Penpot", color: "#3449FF", level: 65 },
    ],
  },
  {
    title: "Deployment & Platforms",
    dotColor: "#00C7B7",
    skills: [
      { Icon: SiVercel, label: "Vercel", color: "inherit", className: "text-gray-900 dark:text-white", level: 90 },
      { Icon: SiNetlify, label: "Netlify", color: "#00C7B7", level: 85 },
      { Icon: SiGithubpages, label: "GitHub Pages", color: "inherit", className: "text-gray-900 dark:text-white", level: 88 },
    ],
  },
];

/* Animated progress bar for a single skill */
const SkillBar = ({ skill, accentColor }) => (
  <div className="flex flex-col gap-1.5">
    {/* Icon + label row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <skill.Icon
          className={`text-lg flex-shrink-0 ${skill.className || ""}`}
          style={skill.color !== "inherit" ? { color: skill.color } : {}}
        />
        <span className="text-sm font-medium text-gray-700 dark:text-white/80">
          {skill.label}
        </span>
      </div>
      <motion.span
        className="text-xs font-bold tabular-nums"
        style={{ color: accentColor }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        {skill.level}%
      </motion.span>
    </div>

    {/* Progress track */}
    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: accentColor }}
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  </div>
);

const Skills = () => (
  <section className="py-16 md:py-[120px] bg-transparent transition-colors" id="skills">
    <div className="max-w-7xl mx-auto px-5 md:px-8">
      <motion.div {...fadeInUp} className="text-center mb-20">
        <h2 className="font-h2 text-h2 text-gray-900 dark:text-white mb-4">The Tech Stack</h2>
        <p className="text-gray-600 dark:text-on-surface-variant max-w-xl mx-auto">
          A specialized selection of tools and languages I use to bring digital ideas to life.
        </p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="relative pl-8 timeline-line flex flex-col gap-8 max-w-3xl mx-auto"
      >
        {categories.map((category) => (
          <motion.div key={category.title} variants={fadeInUp} className="relative">

            {/* Glowing dot node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="absolute -left-[calc(2rem+9px)] top-6 w-4 h-4 rounded-full"
              style={{
                backgroundColor: category.dotColor,
                boxShadow: `0 0 10px ${category.dotColor}`,
              }}
            />

            {/* Card */}
            <div className="glass-card p-6 md:p-8 rounded-xl">
              {/* Category label */}
              <span
                className="font-label-caps text-xs uppercase tracking-widest mb-5 block"
                style={{ color: category.dotColor }}
              >
                {category.title}
              </span>

              {/* Skill bars */}
              <div className="flex flex-col gap-4">
                {category.skills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skill={skill}
                    accentColor={skill.color !== "inherit" ? skill.color : category.dotColor}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
