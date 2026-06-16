"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animations";
import bookVibeImg from "../assets/Book-vibe .png";
import dragonNewsImg from "../assets/dragon news.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => (
  <section className="py-16 md:py-[120px] px-5 md:px-8 max-w-7xl mx-auto" id="projects">
    <motion.div
      {...fadeInUp}
      className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
    >
      <div className="max-w-2xl">
        <h2 className="font-h2 text-h2 text-gray-900 dark:text-white mb-4">Recent  Projects</h2>
        <p className="text-gray-600 dark:text-zinc-400">A collection of technical solutions where architecture meets aesthetics.</p>
      </div>
      <div className="hidden md:block">
        <span className="text-[#2D8CFF] font-bold text-sm tracking-widest">SCROLL TO EXPLORE →</span>
      </div>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          id: 0,
          title: "SportNest",
          tags: ["NEXT.JS", "TAILWIND", "MongoDB", "Better Auth"],
          desc: "A modern sports equipment and gear e-commerce platform featuring product browsing, secure user authentication, cart management, and order systems.",
          img: "/images/sportnest.png",
          link: "https://sportnest-gamma.vercel.app/",
          githubFrontend: "https://github.com/md-moynul/sportnest",
          githubBackend: "https://github.com/md-moynul/sportnest-server",
        },
        {
          id: 1,
          title: "Qurbani Hat",
          tags: [  "NODE.JS" ,"TAILWIND","Butter Auth","MongoDB",],
          desc: "QurbaniHat connects you with premium livestock for your Eid-ul-Adha. Select, book, and relax—we handle the rest.",
          img: "/images/kurbani-hat.png",
          link: "https://qurbani-hat-nine.vercel.app/",
          github: "https://github.com/md-moynul/qurbani-hat"
        },
        {
          id: 2,
          title: "The Dragon News",
          tags: ["NEXT.JS", "MongoDB", "TAILWIND"],
          desc: "A comprehensive news portal featuring category-based filtering, real-time news marquees, and secure social authentication.",
          img: dragonNewsImg,
          link: "https://dragon-news-kohl-tau.vercel.app",
          github: "https://github.com/md-moynul/dragon-news"
        },
        {
          id: 3,
          title: "Keen Keeper",
          tags: ["REACT", "TAILWIND", "RECHARTS", "VITE"],
          desc: "A friendship management web app that helps you track and maintain meaningful relationships by logging interactions, monitoring contact frequency, and visualizing your social habits.",
          img: "/images/keenkeper.png",
          link: "https://keen-keeper-iota.vercel.app/",
          github: "https://github.com/md-moynul/keen-keeper"
        },
        {
          id: 4,
          title: "Book Vibe",
          tags: ["REACT", "TAILWIND"],
          desc: "A vibrant book collection platform to discover, review, and track your favorite reads.",
          img: bookVibeImg,
          link: "https://books-vibe-2-j4eowzzu2-md-moynuls-projects.vercel.app",
          github: "https://github.com/md-moynul/books-vibe-2"
        }
      ].map((project) => (
        <motion.div
          key={project.id}
          {...fadeInUp}
          whileHover={{ y: -10 }}
          className="glass-card rounded-2xl overflow-hidden group flex flex-col"
        >
          <div className="h-64 overflow-hidden relative">
            <Image
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
              src={project.img}
              width={800}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-500"></div>
          </div>
          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex gap-3 mb-5">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold tracking-[0.2em] text-[#2D8CFF] ">{tag}</span>
              ))}
            </div>
            <h3 className="font-h2 text-xl text-gray-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-gray-600 dark:text-on-surface-variant mb-6 text-sm text-left md:text-justify hyphens-auto">{project.desc}</p>
            <div className="flex items-center gap-4 mt-auto">
              <a
                className="px-4 py-2 border border-gray-300 dark:border-[#262626] rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-2 group/link hover:border-[#2D8CFF] dark:hover:border-[#2D8CFF] hover:text-[#2D8CFF] dark:hover:text-[#2D8CFF] hover:bg-[#2D8CFF]/10 transition-all"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_outward</span>
              </a>
              {project.githubFrontend && project.githubBackend ? (
                <>
                  <a
                    className="px-3 py-2 border border-gray-300 dark:border-white/10 rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-1.5 group/link hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-sm group-hover/link:rotate-12 transition-transform" /> Frontend
                  </a>
                  <a
                    className="px-3 py-2 border border-gray-300 dark:border-white/10 rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-1.5 group/link hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-sm group-hover/link:rotate-12 transition-transform" /> Backend
                  </a>
                </>
              ) : project.github ? (
                <a
                  className="px-5 py-2.5 border border-gray-300 dark:border-white/10 rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-2 group/link hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FaGithub className="text-sm group-hover/link:rotate-12 transition-transform" />
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
