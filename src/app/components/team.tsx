"use client"
import Image from 'next/image'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaGlobe } from 'react-icons/fa';


export default function Team() {

  const teamMembers = [
    {
      id: 1,
      name: "Hamza Rafique",
      role: "Founder & Lead Developer",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      bio: "Full-stack developer with expertise in Next.js and modern web technologies.",
      skills: ["Next.js", "React", "TypeScript", "Node.js"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 2,
      name: "Umama Rajput",
      role: "UI/UX Designer",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      bio: "Creative designer focused on creating intuitive and beautiful user experiences.",
      skills: ["Figma", "UI Design", "User Research", "Prototyping"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 3,
      name: "Ali",
      role: "Backend Developer",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      bio: "Backend specialist with strong focus on scalable architecture and performance.",
      skills: ["Node.js", "MongoDB", "AWS", "Docker"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      id: 4,
      name: "Zara",
      role: "Frontend Developer",
      image:"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      bio: "Frontend expert specializing in responsive design and modern frameworks.",
      skills: ["React", "Vue.js", "CSS", "JavaScript"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

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
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A talented group of professionals dedicated to creating amazing web experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 overflow-hidden group hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium text-white bg-blue-500/20 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center gap-4">
                  {Object.entries(member.social).map(([platform, link], index) => {
                    const Icon = {
                      github: FaGithub,
                      linkedin: FaLinkedin,
                      twitter: FaTwitter,
                      website: FaGlobe
                    }[platform];

                    return (
                      Icon && (
                        <motion.a
                          key={index}
                          href={link}
                          whileHover={{ scale: 1.2 }}
                          className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      )
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
          >
            Join Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
