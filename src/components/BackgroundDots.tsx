"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🔹 Define Type for Dots
interface Dot {
  id: number;
  x: number;
  y: number;
  delay: number;
}

// 🔹 Function to generate dots with random positions
const generateDots = (numDots: number): Dot[] => {
  return Array.from({ length: numDots }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
  }));
};

const BackgroundDots = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDots(generateDots(120)); // ✅ Keep dots rendered at all times
      window.addEventListener("scroll", () => setScrollY(window.scrollY));
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [
              dot.x,
              dot.x + (Math.random() * 40 - 20), // Move slightly left/right
              dot.x + (Math.random() * 60 - 30), // Keep drifting
            ],
            y: [
              dot.y,
              dot.y + (Math.random() * 40 - 20), // Move slightly up/down
              dot.y + (Math.random() * 60 - 30), // Keep drifting
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 5 + Math.random() * 5,
            ease: "easeInOut",
          }}
          className={`absolute w-2 h-2 rounded-full ${
            scrollY > 500 ? "bg-green-400" : "bg-white"
          }`}
          style={{ top: dot.y, left: dot.x }}
        />
      ))}
    </div>
  );
};

export default BackgroundDots;
