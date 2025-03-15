"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek portfolio built with Next.js & Tailwind.",
    github: "https://github.com/Dev-Coral-RP/portfolio",
    live: "https://devcoral.xyz",
  },
  {
    title: "Discord Chat Bot",
    description: "A Discord bot using Discord.js, With a full Frontend & Backend.  ",
    github: "",
    live: "https://coralbot.xyz",
  },
  {
    title: "Coral AI",
    description: "A small side project, using ChatGPT API, Project was never finshed. This project was wrritten in Python using a flask server.",
    github: "https://github.com/Dev-Coral-RP/Coral-AI",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center text-center text-white p-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl font-bold"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center p-6 bg-gray-900/80 rounded-xl shadow-lg 
                       hover:scale-105 transition border border-blue-500 shadow-blue-500/50"
          >
            <h3 className="text-2xl font-bold">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-4">
              <a href={project.github} target="_blank" className="flex items-center gap-2 text-blue-400 hover:text-white transition">
                <FaGithub /> GitHub
              </a>
              {project.live && (
                <a href={project.live} target="_blank" className="flex items-center gap-2 text-green-400 hover:text-white transition">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
