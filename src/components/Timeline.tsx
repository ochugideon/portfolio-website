import { motion } from 'motion/react';
import { Calendar, Briefcase, Award } from 'lucide-react';
import { TIMELINE } from '../data';

export default function Timeline() {
  return (
    <section id="journey" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Visual background elements */}
      <div className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest font-mono"
          >
            05. DEVELOPER MILESTONES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            My Learning &{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Career Journey
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

        {/* Alternating Symmetrical Vertical Timeline */}
        <div className="relative border-l-2 border-white/10 md:border-l-0 max-w-4xl mx-auto">
          {/* Centered timeline divider rule on desktop */}
          <div className="absolute left-[0px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-white/10 hidden md:block" />

          <div className="space-y-12 relative">
            {TIMELINE.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row items-stretch md:justify-between relative pl-8 md:pl-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-[-6px] md:left-1/2 md:-translate-x-1.5 top-0 w-3.5 h-3.5 rounded-full bg-[#0A0A0C] border-2 border-blue-400 z-20 shadow-md shadow-blue-400/50 animate-pulse" />

                  {/* Left Spacer space on Desktop */}
                  <div className="w-full md:w-[45%] hidden md:block" />

                  {/* Right Detail Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-[46%] rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 p-6 shadow-xl relative transition-all duration-300 hover:shadow-2xl hover:bg-white/10"
                  >
                    {/* Corner badge container */}
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                       <span className="flex items-center space-x-1.5 p-1 px-2 text-[10px] font-bold uppercase tracking-wider bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{event.year}</span>
                      </span>

                      <span className="text-[10px] text-gray-500 font-mono font-semibold">
                        Milestone 0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-base md:text-lg font-bold text-white font-sans tracking-tight">
                        {event.title}
                      </h3>
                      <div className="text-xs font-semibold text-blue-400 font-sans">
                        {event.organization}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans pt-1">
                        {event.description}
                      </p>
                    </div>

                    <div className="h-[1px] bg-white/10 my-4" />

                    {/* Skill-tags inside the timeline milestone */}
                    <div className="flex flex-wrap gap-1.5">
                      {event.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 text-[9px] font-mono font-bold bg-black/40 text-slate-400 border border-white/5 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
