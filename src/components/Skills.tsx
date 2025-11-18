import React from 'react';
import { motion } from 'framer-motion';
import {
  FiCode,
  FiGlobe,
  FiDatabase,
  FiTool
} from 'react-icons/fi';

// Skill-specific icons (react-icons)
import { SiPython, SiCplusplus, SiC, SiJava, SiHtml5, SiCss3, SiJavascript, SiReact, SiMysql, SiMongodb, SiGit, SiMicrosoftoffice, SiGnubash, SiVisualstudiocode } from 'react-icons/si';
import { TbBrandOracle } from 'react-icons/tb'; // oracle-ish icon
import { IconType } from 'react-icons';

type SkillItem = {
  name: string;
  Icon: IconType;
  colorClass: string; // Tailwind color class to tint icon
};

const skillCategories: {
  icon: IconType;
  title: string;
  skills: SkillItem[];
}[] = [
  {
    icon: FiCode,
    title: 'Programming Languages',
    skills: [
      { name: 'Python', Icon: SiPython, colorClass: 'text-yellow-400' },
      { name: 'C++', Icon: SiCplusplus, colorClass: 'text-sky-500' },
      { name: 'C', Icon: SiC, colorClass: 'text-indigo-400' },
      { name: 'Java', Icon: SiJava, colorClass: 'text-red-500' }
    ]
  },
  {
    icon: FiGlobe,
    title: 'Web Development',
    skills: [
      { name: 'HTML5', Icon: SiHtml5, colorClass: 'text-orange-500' },
      { name: 'CSS3', Icon: SiCss3, colorClass: 'text-sky-600' },
      { name: 'JavaScript', Icon: SiJavascript, colorClass: 'text-yellow-500' },
      { name: 'React.js', Icon: SiReact, colorClass: 'text-sky-400' }
    ]
  },
  {
    icon: FiDatabase,
    title: 'Databases',
    skills: [
      { name: 'MySQL', Icon: SiMysql, colorClass: 'text-cyan-600' },
      { name: 'Oracle', Icon: TbBrandOracle, colorClass: 'text-red-600' },
      { name: 'MongoDB', Icon: SiMongodb, colorClass: 'text-emerald-600' }
    ]
  },
  {
    icon: FiTool,
    title: 'Tools & Other Skills',
    skills: [
      { name: 'Git & GitHub', Icon: SiGit, colorClass: 'text-orange-600' },
      { name: 'MS Office', Icon: SiMicrosoftoffice, colorClass: 'text-green-600' },
      { name: 'Basic DSA', Icon: SiGnubash, colorClass: 'text-violet-500' },
      { name: 'OOP', Icon: SiVisualstudiocode, colorClass: 'text-blue-500' }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4">
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* GRID of skills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {category.skills.map((skill, sidx) => {
                    const { Icon, name, colorClass } = skill;
                    return (
                      <motion.div
                        key={name}
                        className="group relative flex items-center gap-3 p-3 rounded-lg cursor-pointer bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm hover:shadow-lg transition-shadow"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.18, delay: idx * 0.06 + sidx * 0.03 }}
                        viewport={{ once: true }}
                      >
                        {/* Icon circle */}
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 ${colorClass} bg-opacity-8`}
                          // keep icon colored using text color class on the Icon itself
                        >
                          <Icon className={`${colorClass} w-6 h-6`} />
                        </div>

                        {/* Name */}
                        <span className="text-gray-800 dark:text-gray-100 font-medium">
                          {name}
                        </span>

                        {/* subtle hover badge */}
                        <span className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500 dark:text-gray-300">
                          Tap
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Techs as colored pills in a grid */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Additional Technologies
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'GSAP', color: 'text-purple-500' },
              { name: 'Framer Motion', color: 'text-sky-500' },
              { name: 'TailwindCSS', color: 'text-cyan-500' },
              { name: 'Bootstrap', color: 'text-violet-600' },
              { name: 'Node.js', color: 'text-green-600' },
              { name: 'Express.js', color: 'text-gray-600' },
              { name: 'REST APIs', color: 'text-amber-600' },
              { name: 'Responsive Design', color: 'text-blue-500' },
              { name: 'Version Control', color: 'text-orange-600' }
            ].map((tech, i) => (
              <motion.div
                key={tech.name}
                className="flex items-center gap-3 px-3 py-2 rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm cursor-default"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.18, delay: i * 0.03 }}
                viewport={{ once: true }}
              >
                <span className={`${tech.color} w-3 h-3 rounded-full inline-block`} />
                <span className="text-sm text-gray-800 dark:text-gray-100 font-medium">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
