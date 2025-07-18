"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "SQL"],
    icon: "💻"
  },
  {
    title: "Data Science & BI",
    skills: ["Pandas", "Numpy", "Scikit-Learn", "Matplotlib", "Power BI", "Tableau"],
    icon: "📊"
  },
  {
    title: "Development Tools",
    skills: ["Excel", "MySQL", "SQLite", "PyCharm", "Jupyter Notebook", "Visual Studio Code"],
    icon: "🛠️"
  }
];

const SkillCard = ({ category, index }: { category: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="group relative bg-[#1a1a1a] border border-[#333333] rounded-xl p-6 hover:border-[#00D4FF] transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
        z: 50
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#0080B8] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1 }}
      />
      
      <div className="relative z-10">
        <div className="text-3xl mb-4">{category.icon}</div>
        <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#00D4FF] transition-colors duration-300">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string, skillIndex: number) => (
            <motion.span
              key={skill}
              className="px-3 py-1 bg-[#333333] text-sm rounded-full text-[#888888] group-hover:bg-[#00D4FF] group-hover:text-black transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.2 + skillIndex * 0.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-[#00D4FF]">Toolkit</span>
          </h2>
          <p className="text-[#888888] text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;