"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A passionate developer with a unique journey from medical studies to technology
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group">
              {/* Simple Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl blur-2xl opacity-20" />
              
              {/* Main Image Container */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800/20 to-slate-900/20 backdrop-blur-[2px]">
                <div className="relative h-full w-full flex items-center justify-center">
                  <Image
                    src="/one.png"
                    alt="Profile"
                    fill
                    className="object-contain transition-all duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={100}
                    priority
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center center',
                      transform: 'scale(1.3)',
                    }}
                  />
                </div>
                
                {/* Clean Border */}
                <div className="absolute inset-0 rounded-2xl border border-blue-400/10" />
              </div>

              {/* Minimal Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-3 -right-3 w-14 h-14 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-400/10"
              />
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  x: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-3 -left-3 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-cyan-400/10"
              />

              {/* Subtle Light Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-400 leading-relaxed">
                After completing my intermediate in medical studies, I discovered my true passion 
                for technology and made a bold transition into web development. This unique 
                background gives me a distinctive perspective in problem-solving and creating 
                user-centric solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">What I Do</h3>
              <p className="text-gray-400 leading-relaxed">
                I specialize in building modern web applications using cutting-edge technologies. 
                My focus is on creating performant, accessible, and user-friendly experiences 
                that solve real-world problems.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
              <p className="text-gray-400 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                My medical background has instilled in me a detail-oriented approach and a deep 
                understanding of user needs.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {[
            { icon: <FaCode />, count: "20+", label: "Projects Completed" },
            { icon: <FaLaptopCode />, count: "15+", label: "Technologies" },
            { icon: <FaServer />, count: "5+", label: "APIs Built" },
            { icon: <FaDatabase />, count: "10+", label: "Databases Managed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 text-center"
            >
              <div className="text-3xl text-blue-400 mb-4">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.count}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add this to your global styles or in a style tag */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            opacity: 0.5;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            opacity: 0.5;
            transform: rotate(360deg) scale(1);
          }
        }
        
        .animate-shine {
          animation: shine 10s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}