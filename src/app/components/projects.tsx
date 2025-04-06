"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Quick Ecomerce Platform",
      description: "An advanced AI-powered chat platform featuring real-time messaging, code highlighting, and intelligent responses. Built with cutting-edge technologies for seamless communication.",
      image: "/burger.png",
      tech: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS"],
      features: ["Real-time Chat", "Code Highlighting", "AI Integration", "Dark Mode"],
      link: "#",
      github: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with advanced product filtering, real-time inventory management, and secure payment processing. Complete with analytics dashboard.",
      image: "/ecomerce_furniture.png",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Product Search", "Cart System", "Admin Panel", "Analytics"],
      link: "#",
      github: "#"
    },
    {
      title: "Travel Guide Website",
      description: "A modern, responsive portfolio showcasing projects and skills with smooth animations and interactive elements. Built with performance and user experience in mind.",
      image: "/travel.png",
      tech: ["Next.js", "Framer Motion", "TailwindCSS", "TypeScript"],
      features: ["Responsive Design", "Animations", "Dark Mode", "SEO Optimized"],
      link: "#",
      github: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="px-8 mx-auto sm:px-12 lg:px-16 max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Explore my latest work showcasing modern web development practices and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-16 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 px-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden group shadow-xl"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-sm font-medium text-white bg-blue-500/80 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 px-4">
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-6 pt-6">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.link}
                      className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium group hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex items-center gap-2 px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 