import { motion } from 'motion/react';
import { DEVELOPER_PROFILE, STATISTICS } from '../data';
import SmartIcon from './SmartIcon';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0A0A0C] to-[#111113] relative overflow-hidden">
      {/* Visual neon gradients */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

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
            01. BIO SUMMARY
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            About My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Journey & Philosophy
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 64 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* About Left: Interactive Mock Code Editor Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-2xl bg-white/5 border border-white/10 shadow-xl overflow-hidden font-mono text-xs text-gray-400"
          >
            {/* Top Bar */}
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] text-gray-500 font-medium">developer_bio.ts - Ochu Gideon</span>
              <div className="w-4 h-4" />
            </div>

            {/* Code Body */}
            <div className="p-6 space-y-4.5 leading-relaxed overflow-x-auto select-none">
              <div>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-400">developer</span>{' '}
                <span className="text-gray-300">=</span>{' '}
                <span className="text-gray-300">&#123;</span>
              </div>

              <div className="pl-6">
                <span className="text-gray-400">name:</span>{' '}
                <span className="text-emerald-400">'{DEVELOPER_PROFILE.name}'</span>,
              </div>

              <div className="pl-6">
                <span className="text-gray-400">role:</span>{' '}
                <span className="text-emerald-400">'Full Stack Engineer'</span>,
              </div>

              <div className="pl-6">
                <span className="text-gray-400">mindset:</span>{' '}
                <span className="text-purple-400 font-bold">[</span>
                <span className="text-emerald-400">'ProblemSolver'</span>,{' '}
                <span className="text-emerald-400">'DetailOriented'</span>,{' '}
                <span className="text-emerald-400">'ContinuousLearner'</span>
                <span className="text-purple-400 font-bold font-mono">]</span>,
              </div>

              <div className="pl-6">
                <span className="text-gray-400">passion:</span>{' '}
                <span className="text-emerald-400">'Building ultra-clean interfaces & highly secure APIs'</span>,
              </div>

              <div className="pl-6">
                <span className="text-gray-400">goals:</span>{' '}
                <span className="text-purple-400">()</span>{' '}
                <span className="text-blue-400">=&gt;</span>{' '}
                <span className="text-gray-300">&#123;</span>
                <div className="pl-6 text-gray-500">
                  return <span className="text-yellow-500">'Translate complex problems into elegant web applications.'</span>;
                </div>
                <span className="pl-6 text-gray-300">&#125;</span>
              </div>

              <div>
                <span className="text-gray-300">&#125;;</span>
              </div>
            </div>
          </motion.div>

          {/* About Right: Text & Objective summary & Stats */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-white font-sans">
                Professional Overview & Mission
              </h3>
              <p className="text-slate-400 leading-relaxed font-sans text-sm md:text-base">
                {DEVELOPER_PROFILE.aboutSummary}
              </p>
              <p className="text-slate-400 leading-relaxed font-sans text-sm md:text-base">
                {DEVELOPER_PROFILE.aboutDetails}
              </p>
            </motion.div>

            {/* Statistics Bento Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 flex items-start space-x-4 shadow-lg group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <SmartIcon name={stat.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-black text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 font-medium font-sans">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
