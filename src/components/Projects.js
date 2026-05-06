"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animations";
import bookVibeImg from "../assets/Book-vibe .png";
import dragonNewsImg from "../assets/dragon news.png";
import { FaGithub } from "react-icons/fa";

const Projects = () => (
  <section className="py-[120px] px-8 max-w-7xl mx-auto" id="projects">
    <motion.div
      {...fadeInUp}
      className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
    >
      <div className="max-w-2xl">
        <h2 className="font-h2 text-h2 text-gray-900 dark:text-white mb-4">Selected Works</h2>
        <p className="text-gray-600 dark:text-on-surface-variant">Exploring the intersection of design and development through real-world applications.</p>
      </div>
      <div className="hidden md:block">
        <span className="text-[#2D8CFF] font-bold text-sm tracking-widest">SCROLL TO EXPLORE →</span>
      </div>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          id: 0,
          title: "The Dragon News",
          tags: ["REACT", "FIREBASE", "TAILWIND"],
          desc: "A comprehensive news portal featuring category-based filtering, real-time news marquees, and secure social authentication.",
          img: dragonNewsImg,
          link: "https://dragon-news-kohl-tau.vercel.app",
          github: "https://github.com/md-moynul/dragon-news"
        },
        {
          id: 1,
          title: "Book Vibe",
          tags: ["REACT", "TAILWIND", "NODE.JS"],
          desc: "A vibrant book collection platform to discover, review, and track your favorite reads.",
          img: bookVibeImg,
          link: "https://books-vibe-2-j4eowzzu2-md-moynuls-projects.vercel.app/books",
          github: "https://github.com/md-moynul/books-vibe-2"
        },
        {
          id: 2,
          title: "Flux Commerce Ecosystem",
          tags: ["NEXT.JS", "STRIPE"],
          desc: "A headless commerce solution featuring rapid search, multi-currency support, and optimized checkout flow.",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAO5nvEtUS2sMkIodn0IbBSKkr4041FKYKlObjiVEuk0EabuYpCd-_KP7wuKoFFS3JfX9KGb4fdwWl2jGIZf7sdZ22WcQ6h2N3cgTl5GdmGKD6P5z3BOAkcCI8c1n-qQ6EuF-wsrm97pZ_-ZVwaFauOKACACiEVNCyvo3_EFqxG5E_Q1S8MMnYuLXGyI6coj_eYnZ1oNrpBteezY9fYre6de-PbTiYfjRJ6_Tlwju4uRXhdMmI_ygo_VEqNogqMjdkZjnt8rInZSg",
          link: "#",
          github: "#"
        },
        {
          id: 3,
          title: "Nexus Task Management",
          tags: ["MONGODB", "EXPRESS"],
          desc: "Enterprise-grade kanban system with dynamic drag-and-drop, team silos, and automated reporting hooks.",
          img: "https://lh3.googleusercontent.com/aida-public/AB6AXuApm2LmIr7XQz7J5N3b6lMqeI0ts4hq_w4_ndYspOJf4zX20r5zQ10Rf6ZsWcO140TSQfeVEb1xQNX6QQ0IqgkuRl42WvAn5VmnnxGm9pS3JBl-9HXCFyLVb-Yh_klI7Zb6KlMQQtei5TLQa_K3njJY1yniVo4X3GmRQ0Nz2oeNmVbm5MfEcZ06UkNs1yN-5L5iYA7JS8hc6ak8pHl7XBThpMMQ9pLR9Ae_UQeqNcKyN9o5CcY2V555hSkZxoJ9TuT0VKAi_HDBFbg",
          link: "#",
          github: "#"
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
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={project.img}
              width={800}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0A0A0B] to-transparent opacity-90 dark:opacity-60 transition-colors"></div>
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <div className="flex gap-2 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold tracking-widest text-[#2D8CFF] bg-[#2D8CFF]/10 px-2 py-1 rounded">{tag}</span>
              ))}
            </div>
            <h3 className="font-h2 text-xl text-gray-900 dark:text-white mb-3">{project.title}</h3>
            <p className="text-gray-600 dark:text-on-surface-variant mb-6 text-sm">{project.desc}</p>
            <div className="flex items-center gap-4 mt-auto">
              <a
                className="px-4 py-2 border border-gray-300 dark:border-[#262626] rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-2 group/link hover:border-[#2D8CFF] dark:hover:border-[#2D8CFF] hover:text-[#2D8CFF] dark:hover:text-[#2D8CFF] hover:bg-[#2D8CFF]/10 transition-all"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_outward</span>
              </a>
              {project.github && (
                <a
                  className="px-4 py-2 border border-gray-300 dark:border-[#262626] rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-2 group/link hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <FaGithub className="text-sm group-hover/link:scale-110 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
