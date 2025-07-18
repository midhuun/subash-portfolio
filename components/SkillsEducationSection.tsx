"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const softSkills = [
  "Stakeholder Management",
  "People Management", 
  "Excellent Communication",
  "Team Collaboration",
  "Rapport Building"
];

const education = [
  {
    degree: "Bachelor of Science",
    institution: "PSG College of Arts & Science",
    type: "degree",
    icon: GraduationCap
  },
  {
    degree: "SQL for Data Science",
    institution: "Coursera",
    type: "certificate",
    icon: Award
  }
];

const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="inline-block">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.05, 
            delay: delay + index * 0.02,
            ease: "easeOut"
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

const TagCloud = () => {
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="relative h-80 flex items-center justify-center">
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isInView ? 360 : 0 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {softSkills.map((skill, index) => {
          const angle = (index / softSkills.length) * 360;
          const radius = 120;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={skill}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                x: x,
                y: y,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.2,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredTag(skill)}
              onHoverEnd={() => setHoveredTag(null)}
            >
              <div className={`
                px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300
                ${hoveredTag === skill 
                  ? 'bg-[#00D4FF] text-black border-[#00D4FF] shadow-lg shadow-[#00D4FF]/50' 
                  : 'bg-[#1a1a1a] text-[#cccccc] border-[#333333] hover:border-[#00D4FF]'
                }
              `}>
                {skill}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const SkillsEducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills-education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-[#00D4FF]">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Core <span className="text-[#00D4FF]">Competencies</span>
            </h3>
            <TagCloud />
          </motion.div>

          {/* Education */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              Academic <span className="text-[#00D4FF]">Foundation</span>
            </h3>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1a1a1a] border border-[#333333] rounded-xl p-6 hover:border-[#00D4FF] transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#00D4FF]/10 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#00D4FF]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-1">
                        <AnimatedText text={item.degree} delay={0.8 + index * 0.2} />
                      </h4>
                      <p className="text-[#888888]">
                        <AnimatedText text={item.institution} delay={1 + index * 0.2} />
                      </p>
                    </div>
                    <div className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${item.type === 'degree' 
                        ? 'bg-[#00D4FF]/20 text-[#00D4FF]' 
                        : 'bg-[#00D4FF]/10 text-[#888888]'
                      }
                    `}>
                      {item.type === 'degree' ? 'Degree' : 'Certificate'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducationSection;