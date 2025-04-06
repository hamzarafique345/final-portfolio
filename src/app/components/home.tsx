"use client"
import React, { useState } from 'react'
import Typewriter from "typewriter-effect";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown, FaUsers, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import About from './about';
import Projects from './projects';
import Skill from './skill';
import Team from './team';
import Contact from './contact';

// Types
type QuickLink = {
  icon: React.ReactNode;
  title: string;
  href: string;
  color: string;
  description: string;
};

type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  { 
    icon: <FaGithub className="w-6 h-6" />, 
    href: "https://github.com/yourusername",
    label: "GitHub Profile"
  },
  { 
    icon: <FaLinkedin className="w-6 h-6" />, 
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn Profile"
  },
  { 
    icon: <FaTwitter className="w-6 h-6" />, 
    href: "https://twitter.com/yourusername",
    label: "Twitter Profile"
  },
];

const QUICK_LINKS: QuickLink[] = [
  { 
    icon: <FaCode />, 
    title: 'Skills', 
    href: '#skills', 
    color: 'from-blue-500 to-cyan-500',
    description: 'Technical Expertise'
  },
  { 
    icon: <FaBriefcase />, 
    title: 'Projects', 
    href: '#projects', 
    color: 'from-purple-500 to-pink-500',
    description: 'Portfolio Showcase'
  },
  { 
    icon: <FaUsers />, 
    title: 'Experience', 
    href: '#experience', 
    color: 'from-green-500 to-emerald-500',
    description: 'Work History'
  },
  { 
    icon: <FaEnvelope />, 
    title: 'Contact', 
    href: '#contact', 
    color: 'from-orange-500 to-red-500',
    description: 'Get in Touch'
  },
];

const TYPEWRITER_STRINGS = [
  "Full Stack Developer",
  "React & Next.js Expert",
  "Problem Solver",
  "Clean Code Advocate"
];

// Components
const SocialLinks: React.FC = () => (
  <div className="flex gap-6 mt-8 justify-center lg:justify-start">
    {SOCIAL_LINKS.map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2 }}
        className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
        aria-label={social.label}
      >
        {social.icon}
      </motion.a>
    ))}
  </div>
);

const ProfileImage: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative flex-1 flex justify-center items-center"
  >
    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] -mt-12 md:-mt-20">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative h-full w-full rounded-full overflow-hidden bg-gradient-to-b from-slate-800/20 to-slate-900/20 backdrop-blur-sm"
      >
        <div className="relative h-full w-full flex items-center justify-center p-1">
          <Image
            src="/one.png"
            alt="Hamza Rafique"
            fill
            className="object-cover transition-all duration-500"
            priority
            sizes="(max-width: 768px) 300px, 400px"
            quality={100}
            style={{ 
              objectFit: 'cover',
              objectPosition: '50% 36%',
              transform: 'scale(1.15)',
            }}
          />
          <BorderEffects />
        </div>
      </motion.div>
      <DecorativeElements />
    </div>
  </motion.div>
);

const BorderEffects: React.FC = () => (
  <>
    <motion.div
      animate={{
        scale: [1, 1.02, 1],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 rounded-full border-2 border-blue-400/20"
    />
    <motion.div
      animate={{
        scale: [1.02, 1.04, 1.02],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 rounded-full border border-blue-400/10"
    />
  </>
);

const DecorativeElements: React.FC = () => (
  <>
    <motion.div
      animate={{
        y: [0, -15, 0],
        x: [0, 15, 0],
        rotate: [0, 15, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute -top-8 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-blue-400/10"
    />
    <motion.div
      animate={{
        y: [0, 15, 0],
        x: [0, -15, 0],
        rotate: [0, -15, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute -bottom-8 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full backdrop-blur-sm border border-cyan-400/10"
    />
  </>
);

export default function MyHome() {
  // const [activeSection, setActiveSection] = useState('hero');
  const [showTeamModal, setShowTeamModal] = useState(false);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <section className="relative min-h-screen overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80" />
          
          <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Hi, I{"'"}m{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    Hamza Rafique
                  </span>
                </h1>
                
                <div className="text-2xl md:text-3xl font-bold text-gray-300 mb-8">
                  <Typewriter
                    options={{
                      strings: TYPEWRITER_STRINGS,
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl">
                  A results-driven Full Stack Developer with expertise in React, Next.js, and modern web technologies. 
                  Passionate about creating scalable, maintainable applications and solving complex problems. 
                  Currently seeking opportunities to contribute to innovative projects and teams.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center gap-2"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <FaBriefcase className="w-5 h-5" />
                    <span>View Portfolio</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-blue-400 text-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <span>Contact Me</span>
                  </motion.button>
                </div>

                <SocialLinks />
              </motion.div>

              <ProfileImage />
            </div>

            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={scrollToNextSection}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-blue-400 flex flex-col items-center"
              >
                <span className="text-sm mb-2">Explore More</span>
                <FaArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Quick Links Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Projects", count: "20+", desc: "Completed Projects" },
                { title: "Experience", count: "2+", desc: "Years of Experience" },
                { title: "Technologies", count: "15+", desc: "Technologies Mastered" },
                { title: "Clients", count: "10+", desc: "Happy Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-700/50 p-6 rounded-xl backdrop-blur-sm border border-slate-600/50"
                >
                  <h3 className="text-2xl font-bold text-blue-400">{stat.count}</h3>
                  <p className="text-lg font-medium text-white mb-2">{stat.title}</p>
                  <p className="text-gray-400">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Navigation */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
          <div className="flex flex-col gap-4">
            {QUICK_LINKS.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1, x: -10 }}
                className={`p-3 rounded-full bg-gradient-to-r ${link.color} text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
                title={link.description}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Team Modal */}
        <AnimatePresence>
          {showTeamModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowTeamModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-800 rounded-2xl p-6 max-w-lg w-full shadow-xl"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
                <p className="text-gray-300 mb-6">
                  {"We're always looking for talented individuals to join our team. Fill out the form below and we'll get back to you!"}
                </p>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about yourself..."
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700 rounded-lg border border-slate-600 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none resize-none"
                    />
                  </div>
                  <div className="flex justify-end gap-4">
                    <button
                      type="button"
                      onClick={() => setShowTeamModal(false)}
                      className="px-6 py-2 text-gray-300 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Include other sections */}
        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skill />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="team">
          <Team />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>

      <style jsx global>{`
        @keyframes gradient-shift {
          0% {
            opacity: 0.3;
            transform: rotate(0deg) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            opacity: 0.3;
            transform: rotate(360deg) scale(1);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 10s infinite;
        }

        @keyframes shine {
          0% {
            opacity: 0.3;
            transform: rotate(0deg);
          }
          50% {
            opacity: 0.5;
            transform: rotate(180deg);
          }
          100% {
            opacity: 0.3;
            transform: rotate(360deg);
          }
        }

        .animate-shine {
          animation: shine 8s linear infinite;
        }
      `}</style>
    </>
  );
}
