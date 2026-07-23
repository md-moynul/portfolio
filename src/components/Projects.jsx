"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";
import { FaGithub } from "react-icons/fa";

const PROJECTS_PER_PAGE = 3;

/* ─── Modal ─────────────────────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {/* Dynamic Backdrop for Light / Dark Mode */}
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/40 dark:bg-black/70 backdrop-blur-md"
      >
        {/* Dynamic Modal Card */}
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-gray-200 dark:border-white/15 shadow-2xl dark:shadow-[0_24px_80px_rgba(0,0,0,0.7)]"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-gray-500 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>

          {/* Project image */}
          <div className="h-44 w-full overflow-hidden rounded-t-2xl">
            <Image
              src={project.img}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col gap-4">
            {/* Year + tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-gray-500 dark:text-white/40 uppercase mr-2">
                {project.year}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-bold tracking-widest rounded-full uppercase bg-[#2D8CFF]/10 text-[#2D8CFF] border border-[#2D8CFF]/25"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="font-h2 text-2xl text-gray-900 dark:text-white">{project.title}</h3>

            {/* Long description */}
            <p className="text-gray-600 dark:text-white/70 text-sm leading-relaxed">
              {project.longDesc}
            </p>

            {/* Features */}
            {project.features?.length > 0 && (
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-white/40 mb-3">
                  Key Features
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700 dark:text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D8CFF] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-200 dark:border-white/10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 text-white bg-[#2D8CFF] hover:bg-[#2D8CFF]/90 transition-all"
              >
                Live Demo <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>

              {project.githubFrontend && project.githubBackend ? (
                <>
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/15 transition-all"
                  >
                    <FaGithub /> Frontend
                  </a>
                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/15 transition-all"
                  >
                    <FaGithub /> Backend
                  </a>
                </>
              ) : project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full font-bold text-xs flex items-center gap-2 text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/15 transition-all"
                >
                  <FaGithub /> GitHub
                </a>
              ) : null}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ─── Project Card ───────────────────────────────────────────────────────── */
const ProjectCard = ({ project, onViewDetails }) => (
  <motion.div
    {...fadeInUp}
    whileHover={{ y: -8 }}
    transition={{ duration: 0.25 }}
    className="glass-card rounded-2xl overflow-hidden group flex flex-col"
  >
    {/* Image */}
    <div className="h-56 overflow-hidden relative">
      <Image
        alt={project.title}
        src={project.img}
        width={800}
        height={400}
        className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-500" />
    </div>

    {/* Body */}
    <div className="p-6 flex flex-col flex-grow">
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-bold tracking-[0.2em] text-[#2D8CFF]">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="font-h2 text-xl text-gray-900 dark:text-white mb-2">{project.title}</h3>
      <p className="text-gray-600 dark:text-on-surface-variant mb-5 text-sm leading-relaxed line-clamp-3">
        {project.desc}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-3 mt-auto">
        {/* View Details */}
        <button
          onClick={() => onViewDetails(project)}
          className="px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 bg-[#2D8CFF]/10 border border-[#2D8CFF]/30 text-[#2D8CFF] hover:bg-[#2D8CFF] hover:text-white hover:border-[#2D8CFF] transition-all"
        >
          <span className="material-symbols-outlined text-sm">info</span>
          View Details
        </button>

        {/* Live Demo */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-300 dark:border-[#262626] rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-1.5 hover:border-[#2D8CFF] hover:text-[#2D8CFF] hover:bg-[#2D8CFF]/10 transition-all"
        >
          Live Demo
          <span className="material-symbols-outlined text-sm">arrow_outward</span>
        </a>

        {/* GitHub(s) */}
        {project.githubFrontend && project.githubBackend ? (
          <>
            <a
              href={project.githubFrontend}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-gray-300 dark:border-white/10 rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-1.5 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <FaGithub /> Frontend
            </a>
            <a
              href={project.githubBackend}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 border border-gray-300 dark:border-white/10 rounded-full text-gray-600 dark:text-[#zinc-300] font-bold text-xs flex items-center gap-1.5 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
            >
              <FaGithub /> Backend
            </a>
          </>
        ) : project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 border border-gray-300 dark:border-white/10 rounded-full text-gray-600 dark:text-zinc-300 font-bold text-xs flex items-center gap-1.5 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
          >
            <FaGithub /> GitHub
          </a>
        ) : null}
      </div>
    </div>
  </motion.div>
);

/* ─── Pagination ─────────────────────────────────────────────────────────── */
const Pagination = ({ current, total, onChange }) => {
  if (total <= 1) return null;
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Prev */}
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/10 text-gray-500 dark:text-zinc-400 hover:border-[#2D8CFF] hover:text-[#2D8CFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <span className="material-symbols-outlined text-lg">chevron_left</span>
      </button>

      {/* Page numbers */}
      {Array.from({ length: total }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onChange(page)}
          className={`w-9 h-9 rounded-full font-bold text-sm transition-all ${page === current
              ? "bg-[#2D8CFF] text-white border border-[#2D8CFF] shadow-[0_0_12px_rgba(45,140,255,0.4)]"
              : "border border-gray-300 dark:border-white/10 text-gray-500 dark:text-zinc-400 hover:border-[#2D8CFF] hover:text-[#2D8CFF]"
            }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 dark:border-white/10 text-gray-500 dark:text-zinc-400 hover:border-[#2D8CFF] hover:text-[#2D8CFF] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        <span className="material-symbols-outlined text-lg">chevron_right</span>
      </button>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────── */
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const visibleProjects = projects.slice(
    (page - 1) * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setPage(newPage);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="py-16 md:py-[120px] px-5 md:px-8 max-w-7xl mx-auto" id="projects">
        {/* Header */}
        <motion.div
          {...fadeInUp}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="font-h2 text-h2 text-gray-900 dark:text-white mb-4">Recent Projects</h2>
            <p className="text-gray-600 dark:text-zinc-400">
              A collection of technical solutions where architecture meets aesthetics.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-gray-400 dark:text-zinc-500 text-xs font-bold tracking-widest">
            <span>
              {(page - 1) * PROJECTS_PER_PAGE + 1}–{Math.min(page * PROJECTS_PER_PAGE, projects.length)}
            </span>
            <span className="opacity-40">/</span>
            <span>{projects.length} PROJECTS</span>
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          key={page}
          variants={staggerContainer}
          initial="initial"
          animate="whileInView"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={setSelectedProject}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        <Pagination current={page} total={totalPages} onChange={handlePageChange} />
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;