"use client";
import { motion } from "framer-motion";

const experience = [
  { role: "Frontend Developer", company: "Company A", duration: "2021 - Present" },
  { role: "Backend Developer", company: "Company B", duration: "2019 - 2021" },
];

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-gray-700 text-white p-10 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold"
      >
        Experience
      </motion.h2>

      <div className="mt-8 space-y-4">
        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="p-6 bg-gray-600 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold">{job.role} - {job.company}</h3>
            <p className="text-gray-300">{job.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
