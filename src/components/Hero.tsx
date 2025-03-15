"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white p-10">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold"
      >
        Hi, I'm <span className="text-blue-400">Tom</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-xl md:text-2xl mt-4 max-w-3xl text-gray-300"
      >
        Full Stack Developer | Building Modern Web Experiences
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-black rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
