import { motion } from 'motion/react';
import { SKILLS } from '../data';
import SmartIcon from './SmartIcon';

export default function Skills() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Architecture',
      subtitle: 'Creating visual fidelity, smooth interactions, and fluid responsive layouts.',
      color: 'from-blue-500 to-indigo-500',
      badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    },
    {
      id: 'backend',
      title: 'Backend Engineering',
      subtitle: 'Constructing robust servers, fast route handlers, and secure architectures.',
      color: 'from-purple-500 to-pink-500',
      badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
    },
    {
      id: 'database',
      title: 'Data & Modeling',
      subtitle: 'Modeling robust relations, optimizing queries, and managing structures.',
      color: 'from-indigo-500 to-purple-500',
      badgeColor: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-80 h-80 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

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
            02. SPECIALIZATION
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Toolbox & Competencies
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

        {/* Categories Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {categories.map((category, catIdx) => {
            const categorySkills = SKILLS.filter((s) => s.category === category.id);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: catIdx * 0.15 }}
                className="rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 p-6 shadow-xl relative group flex flex-col h-full"
              >
                {/* Visual Glow Header Accent */}
                <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${category.color} rounded-t-2xl opacity-80`} />

                {/* Header info */}
                <div className="mb-6 space-y-2">
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${category.badgeColor}`}>
                    {category.id} stack
                  </span>
                  <h3 className="text-lg font-bold text-white font-sans tracking-tight group-hover:text-blue-300 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-505 leading-relaxed font-sans">
                    {category.subtitle}
                  </p>
                </div>

                <div className="h-[1px] bg-white/10 mb-6" />

                {/* Detailed Skills Progress List */}
                <div className="space-y-5 flex-grow">
                  {categorySkills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2.5">
                          <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
                            <SmartIcon name={skill.icon} className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-300 font-sans">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-gray-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Slider Progress Bar */}
                      <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: skillIdx * 0.1 + 0.3, ease: 'easeOut' }}
                          className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
