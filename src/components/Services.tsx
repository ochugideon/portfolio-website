import { motion } from 'motion/react';
import { SERVICES } from '../data';
import SmartIcon from './SmartIcon';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0C] relative overflow-hidden">
      {/* Decorative gradient lights */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

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
            04. PROFESSIONAL CAPABILITIES
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight"
          >
            Services I{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Provide & Specialize In
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

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group w-full rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 p-6 shadow-xl relative transition-all duration-300 flex flex-col justify-between h-full transform hover:-translate-y-1.5"
            >
              <div className="space-y-5">
                {/* Icon box */}
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                  <SmartIcon name={service.icon} className="w-6 h-6" />
                </div>

                {/* Service Title */}
                <h3 className="text-base md:text-lg font-bold text-white font-sans tracking-tight group-hover:text-blue-300 transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>

              {/* Little detail dot inside card corner */}
              <div className="pt-4 flex justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-blue-400 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
