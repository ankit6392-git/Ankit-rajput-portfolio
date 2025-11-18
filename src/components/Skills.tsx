import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiGlobe, FiDatabase, FiTool } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: FiCode,
      title: 'Programming Languages',
      skills: ['Python', 'C++', 'C', 'Java']
    },
    {
      icon: FiGlobe,
      title: 'Web Development',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js']
    },
    {
      icon: FiDatabase,
      title: 'Databases',
      skills: ['MySQL', 'Oracle', 'MongoDB']
    },
    {
      icon: FiTool,
      title: 'Tools & Other Skills',
      skills: ['Git & GitHub', 'MS Office', 'Basic DSA', 'OOP']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with Icons */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1
                    }}
                    viewport={{ once: true }}
                  >
                    <AiOutlineCheck className="text-blue-600 dark:text-blue-400 text-lg" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Additional Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'GSAP', 'Framer Motion', 'TailwindCSS', 'Bootstrap',
              'Node.js', 'Express.js', 'REST APIs',
              'Responsive Design', 'Version Control'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 
                dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 
                rounded-full text-sm font-medium flex items-center gap-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <AiOutlineCheck className="text-blue-700 dark:text-blue-300" />
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
