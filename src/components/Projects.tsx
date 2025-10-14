import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCalendar, FiCode } from 'react-icons/fi';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Emma – Web-Based Virtual Assistant',
      description: 'An intelligent web-based virtual assistant built with modern web technologies, featuring voice recognition, natural language processing, and interactive responses.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Web APIs', 'Speech Recognition'],
      date: '2024',
      features: [
        'Voice command recognition',
        'Interactive user interface',
        'Real-time responses',
        'Modern design patterns'
      ],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Rock Paper Scissor Game',
      description: 'Interactive web-based game with sleek animations, score tracking, and responsive design. Features engaging user experience with smooth transitions.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      date: '2024',
      features: [
        'Score tracking system',
        'Smooth animations',
        'Responsive design',
        'Interactive gameplay'
      ],
      image: 'https://images.pexels.com/photos/1040157/pexels-photo-1040157.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Animated Landing Page',
      description: 'Dynamic landing page showcasing advanced GSAP animations, smooth scrolling effects, and modern design principles for enhanced user engagement.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'ScrollTrigger'],
      date: '2023',
      features: [
        'Advanced GSAP animations',
        'Smooth scroll effects',
        'Timeline animations',
        'Performance optimized'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Fully Responsive Website',
      description: 'Modern responsive website featuring animated hamburger menu, mobile-first design, and cross-browser compatibility with clean, professional aesthetics.',
      techStack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'CSS Grid'],
      date: '2023',
      features: [
        'Mobile-first approach',
        'Animated hamburger menu',
        'Cross-browser compatibility',
        'SEO optimized'
      ],
      image: 'https://images.pexels.com/photos/326513/pexels-photo-326513.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Some of my recent work and contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full">
                    <FiCalendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                    <FiCode className="w-4 h-4 mr-1" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiGithub className="w-4 h-4 mr-2" />
                    View Code
                  </motion.button>
                  
                  <motion.button
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work?
          </p>
          <motion.button
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium rounded-lg hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
             <a
      href="https://github.com/ankit6392-git"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-blue-600 hover:underline"
    >
            <FiGithub className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
