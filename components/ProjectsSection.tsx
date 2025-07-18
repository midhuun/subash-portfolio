"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, BarChart3, Settings, TrendingUp, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: "House Price Prediction using Machine Learning",
      description: "Advanced machine learning model for accurate real estate valuation using comprehensive data analysis and ensemble methods.",
      icon: BarChart3,
      gradient: "from-blue-500 to-cyan-500",
      achievements: [
        "Performed comprehensive data cleaning and feature engineering",
        "Applied multiple regression algorithms for optimal accuracy",
        "Achieved 92% prediction accuracy using ensemble methods",
        "Developed interactive visualization dashboard"
      ],
      technologies: ["Python", "Scikit-Learn", "Pandas", "Matplotlib", "Jupyter"],
      metrics: { accuracy: "92%", dataPoints: "10K+", features: "25+" }
    },
    {
      id: 2,
      title: "Vehicle Service Management System",
      description: "Comprehensive system streamlining automotive service operations with automated scheduling and real-time tracking.",
      icon: Settings,
      gradient: "from-purple-500 to-pink-500",
      achievements: [
        "Designed user-friendly interface for service tracking",
        "Implemented automated scheduling and notification system",
        "Improved service process efficiency by 40%",
        "Developed real-time dashboard for service metrics"
      ],
      technologies: ["Python", "MySQL", "Dashboard", "Automation", "UI/UX"],
      metrics: { efficiency: "40%", users: "500+", uptime: "99.9%" }
    }
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => {
    const cardRef = useRef(null);
    const cardInView = useInView(cardRef, { once: true, margin: "-50px" });
    const isEven = index % 2 === 0;

    return (
      <motion.div
        ref={cardRef}
        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-20`}
        initial={{ opacity: 0 }}
        animate={cardInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Project Visual */}
        <motion.div
          className="flex-1 relative group"
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative glass rounded-2xl p-8 group-hover:bg-white/10 transition-all duration-500 min-h-[400px] flex flex-col items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />
            </div>
            
            {/* Main Icon */}
            <motion.div
              className={`relative z-10 p-8 rounded-3xl bg-gradient-to-br ${project.gradient} mb-6 group-hover:scale-110 transition-transform duration-500`}
              whileHover={{ rotate: 5 }}
            >
              <project.icon className="w-16 h-16 text-white" />
            </motion.div>

            {/* Floating Elements */}
            <div className="absolute top-6 right-6">
              <motion.div
                className={`w-4 h-4 rounded-full bg-gradient-to-r ${project.gradient}`}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="absolute bottom-8 left-8">
              <motion.div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            {/* Metrics */}
            <div className="relative z-10 grid grid-cols-3 gap-4 w-full">
              {Object.entries(project.metrics).map(([key, value], i) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-white">{String(value)}</div>
                  <div className="text-xs text-zinc-400 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Project Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p
            className="text-lg text-zinc-400 mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {project.technologies.map((tech: string, techIndex: number) => (
              <span
                key={techIndex}
                className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-current rounded-full text-sm text-white`}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Achievements */}
          <div className="space-y-3 mb-8">
            {project.achievements.map((achievement: string, achievementIndex: number) => (
              <motion.div
                key={achievementIndex}
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={cardInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.9 + achievementIndex * 0.1 }}
              >
                <motion.div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`}
                  initial={{ scale: 0 }}
                  animate={cardInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 1 + achievementIndex * 0.1 }}
                />
                <p className="text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className={`group relative px-8 py-4 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
            initial={{ opacity: 0, y: 20 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Project Details
              <ExternalLink className="w-4 h-4" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Showcasing innovation through data science and intelligent automation solutions
          </p>
        </motion.div>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;