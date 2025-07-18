"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "Analyzed sales data and customer trends to identify improvement opportunities",
    "Collaborated with cross-functional teams to streamline retail operations",
    "Developed automated reporting solutions using Python and SQL",
    "Created comprehensive dashboards for stakeholder decision-making",
    "Implemented data-driven strategies that improved operational efficiency",
    "Managed stakeholder relationships and facilitated requirement gathering sessions"
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Building expertise through hands-on experience in business analysis and data-driven solutions
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          {/* Experience Card */}
          <motion.div
            className="relative pl-20"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Timeline Dot */}
            <motion.div
              className="absolute -left-[15px] top-8 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-black shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            />

            <motion.div
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-3">
                    Business Analyst - Retail Operations
                  </h3>
                  <div className="flex items-center gap-2 text-zinc-400 mb-2">
                    <Building2 className="w-5 h-5" />
                    <span className="text-lg">Shai Wood and Industrials</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500">
                    <MapPin className="w-4 h-4" />
                    <span>Chennai, India</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 mt-4 lg:mt-0">
                  <Calendar className="w-5 h-5" />
                  <span className="text-lg font-medium">May 2023 - April 2025</span>
                </div>
              </div>

              <div className="grid gap-4">
                {responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mt-0.5"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                    >
                      <CheckCircle className="w-3 h-3 text-white" />
                    </motion.div>
                    <p className="text-zinc-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Key Achievements */}
              <motion.div
                className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <h4 className="text-lg font-semibold text-white mb-3">Key Achievement</h4>
                <p className="text-zinc-300">
                  Successfully improved operational efficiency by <span className="text-indigo-400 font-bold">40%</span> through 
                  implementation of data-driven strategies and automated reporting solutions.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;