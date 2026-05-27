import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Filter, FolderGit2, X, AlertTriangle } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Frontend' | 'Backend' | 'Full-Stack'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = ['All', 'Frontend', 'Backend', 'Full-Stack'] as const;

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'All') return true;
    return project.category.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section id="projects" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Visual glowing effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono"
          >
            03. RECENT WORK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            Showcasing Active{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Software Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm text-slate-400 max-w-lg leading-relaxed"
          >
            A curated list of web apps, modular REST APIs, and client-focused systems built with clean architectures.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-md">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/15'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid Container with motion exit animations */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group w-full max-w-sm rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 shadow-xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                {/* Project Image Panel */}
                <div className="relative h-48 overflow-hidden bg-black/40">
                  {/* Glass Card Blur Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10 opacity-70" />
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                    loading="lazy"
                  />

                  {/* Top-Right Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md border border-white/10 text-blue-400 rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card Main Info */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-sans tracking-tight group-hover:text-blue-300 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech Badges List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[9px] font-mono font-bold uppercase bg-black/40 text-slate-400 border border-white/5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="h-[1px] bg-white/10" />

                    {/* Action button triggers */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-blue-400 hover:text-white transition-colors duration-200 flex items-center space-x-1.5 focus:outline-none cursor-pointer"
                      >
                        <FolderGit2 className="w-3.5 h-3.5" />
                        <span>Read Case Study</span>
                      </button>

                      <div className="flex items-center space-x-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-black/40 border border-white/10 hover:bg-white/10 hover:text-white text-gray-400 hover:scale-105 active:scale-95 transition-all focus:outline-none"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && project.liveUrl !== '#' ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 px-3 rounded-lg bg-blue-600/15 border border-blue-500/20 text-blue-400 hover:bg-blue-600/30 hover:text-white text-xs font-semibold hover:scale-105 active:scale-95 transition-all focus:outline-none flex items-center space-x-1"
                            title="Checkout Website"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Checkout Website</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="p-2 px-3 rounded-lg bg-black/40 border border-white/10 hover:bg-white/10 hover:text-blue-400 text-gray-400 hover:scale-105 active:scale-95 transition-all focus:outline-none flex items-center space-x-1"
                            title="View Case Study Details"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Read Details</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Dynamic Popover Modal Case Study Details (Advanced React Showcase) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-6">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#09090C] border border-white/10 shadow-2xl overflow-hidden z-10"
            >
              {/* Image Hero banner inside modal */}
              <div className="relative h-48 md:h-60 overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] to-transparent z-10" />
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                {/* Close Button top-right corner */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-gray-400 hover:text-white border border-white/10 active:scale-90 transition-all focus:outline-none cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text Detailed Info */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-2.5 py-1 text-[10px] font-bold font-mono uppercase bg-black text-blue-400 border border-white/10 rounded">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white font-sans">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="space-y-2 text-sm text-slate-300 font-sans leading-relaxed">
                  <p className="font-semibold text-white">Project Case Study & Architectural Overview:</p>
                  <p>{selectedProject.longDescription}</p>
                </div>

                {/* Modal Tech tags */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                    System Architecture Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-bold uppercase bg-black text-slate-400 border border-white/10 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-white/10" />

                {/* Confirm buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all focus:outline-none"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository Source</span>
                  </a>

                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-500/15 focus:outline-none cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Checkout Website</span>
                    </a>
                  ) : (
                    <button
                      className="flex items-center justify-center space-x-2 w-full px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-slate-500 font-semibold text-xs uppercase tracking-wider cursor-not-allowed"
                      disabled
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>No Live Website</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
