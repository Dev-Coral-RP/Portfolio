"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "N/A", feedback: "N/A" },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen flex flex-col justify-center items-center text-center text-white p-10">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-4xl font-bold"
      >
        Testimonials
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center p-6 bg-gray-900/80 rounded-xl shadow-lg 
                       hover:scale-105 transition border border-gray-700 shadow-green-500/50"
          >
            <p className="text-lg italic text-gray-300">
              &quot;{testimonial.feedback}&quot;  {/* ✅ Fix: Escaped double quotes */}
            </p>
            <h3 className="mt-4 text-xl font-bold text-green-400">{testimonial.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
