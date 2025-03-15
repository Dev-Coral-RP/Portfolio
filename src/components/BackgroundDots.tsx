"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const generateDots = (numDots: number) => {
  return Array.from({ length: numDots }, () => ({
    id: crypto.randomUUID(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
  }));
};

const BackgroundDots = () => {
  const [dots, setDots] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDots(generateDots(220)); // ✅ Increase number of dots
      window.addEventListener("scroll", () => setScrollY(window.scrollY));
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, scale: 0.5, x: dot.x, y: dot.y }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [dot.x, dot.x + Math.random() * 50 - 25, dot.x - Math.random() * 50 + 25, dot.x],
            y: [dot.y, dot.y + Math.random() * 50 - 25, dot.y - Math.random() * 50 + 25, dot.y],
          }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full w-2 h-2 transition-colors duration-500 
                      ${
                        dot.y + scrollY < document.getElementById("testimonials")?.offsetTop
                          ? "bg-white"
                          : "bg-green-400"
                      }`}
        />
      ))}
    </div>
  );
};

export default BackgroundDots;
