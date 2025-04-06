"use client";
import React from "react";
import { motion } from "framer-motion";
import {  SiTypescript, SiTailwindcss, SiSanity, SiFigma, SiFramer, SiVercel, SiGithub, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiFirebase } from "react-icons/si";
import { FaCode, FaServer, FaDatabase, FaTools, FaPalette, FaBrain } from "react-icons/fa";

export default function Skill() {
  const skills = [
    { name: "Frontend Development", level: "95%", category: "Development" },
    { name: "Backend Development", level: "85%", category: "Development" },
    { name: "UI/UX Design", level: "90%", category: "Design" },
    { name: "Database Management", level: "80%", category: "Development" },
    { name: "API Integration", level: "85%", category: "Development" },
    { name: "Cloud Services", level: "75%", category: "Infrastructure" },
  ];

  const technologies = [
    { 
      category: "Frontend",
      tools: [
        { icon: <SiReact className="text-[#61DAFB]" />, name: "React" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
        { icon: <SiTailwindcss className="text-[#38B2AC]" />, name: "Tailwind" },
        { icon: <SiFramer className="text-[#BB4AFF]" />, name: "Framer" },
      ]
    },
    {
      category: "Backend & Database",
      tools: [
        { icon: <SiNodedotjs className="text-[#339933]" />, name: "Node.js" },
        { icon: <SiSanity className="text-[#F03E2F]" />, name: "Sanity" },
        { icon: <SiMongodb className="text-[#47A248]" />, name: "MongoDB" },
        { icon: <SiFirebase className="text-[#FFCA28]" />, name: "Firebase" },
      ]
    },
    {
      category: "Design & Tools",
      tools: [
        { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma" },
        { icon: <SiVercel className="text-white" />, name: "Vercel" },
        { icon: <SiGithub className="text-white" />, name: "GitHub" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks, with expertise in both frontend and backend development.
          </p>
        </motion.div>

        {/* Technologies by Category */}
        {technologies.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <h3 className="text-2xl font-bold text-white text-center mb-10">
              {category.category}
            </h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {category.tools.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <span className="text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        {/* Skills Progress Bars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-blue-400 font-medium">{skill.level}</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Development Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { icon: <FaPalette />, title: "UI/UX Design", desc: "Creating intuitive and beautiful user interfaces with Figma" },
            { icon: <FaCode />, title: "Frontend", desc: "Building responsive and interactive web applications" },
            { icon: <FaServer />, title: "Backend", desc: "Developing robust server-side applications" },
            { icon: <FaDatabase />, title: "Database", desc: "Managing data with Sanity and MongoDB" },
            { icon: <FaBrain />, title: "AI Integration", desc: "Implementing AI features and chatbots" },
            { icon: <FaTools />, title: "DevOps", desc: "Deployment and maintenance with modern tools" },
          ].map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-3xl text-blue-400 mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
              <p className="text-gray-400">{category.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
