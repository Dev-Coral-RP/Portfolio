"use client";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiLinux, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "Linux", icon: <SiLinux className="text-yellow-400" /> },
];

const Features = () => {
  return (
    <section 
      id="features" 
      className="min-h-screen flex flex-col justify-center items-center text-center text-white p-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }} // ✅ Repeats animation on scroll
        className="text-4xl font-bold"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }} // ✅ Moves but resets to normal
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: false }} // ✅ Repeats every scroll
            className="flex flex-col items-center justify-center p-6 bg-gray-900/80 rounded-xl shadow-lg 
                       hover:scale-110 transition border border-blue-500 shadow-blue-500/50"
          >
            <span className="text-5xl">{skill.icon}</span>
            <p className="text-lg font-semibold mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
