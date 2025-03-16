"use client";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaRocket, FaPaintBrush, FaServer, FaCogs } from "react-icons/fa";

const services = [
  { icon: <FaCode className="text-blue-400 text-4xl" />, title: "Web Development", desc: "Building fast, responsive, and scalable web applications." },
  { icon: <FaDatabase className="text-blue-400 text-4xl" />, title: "Backend Development", desc: "Secure and efficient backend solutions with databases and APIs." },
  { icon: <FaPaintBrush className="text-blue-400 text-4xl" />, title: "UI/UX Design", desc: "Creating clean, modern, and user-friendly interfaces." },
  { icon: <FaRocket className="text-blue-400 text-4xl" />, title: "Performance Optimization", desc: "Improving speed, SEO, and overall web performance." },
  { icon: <FaServer className="text-blue-400 text-4xl" />, title: "Hosting & Deployment", desc: "Deploying and maintaining your project on the web." },
  { icon: <FaCogs className="text-blue-400 text-4xl" />, title: "Consultation & Troubleshooting", desc: "Helping solve tech challenges and provide guidance." },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-white mb-6"
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-gray-900 rounded-lg shadow-lg border border-gray-700 
                       shadow-blue-500/40 hover:shadow-blue-400/60 hover:scale-105 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="text-gray-400 mt-2">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
