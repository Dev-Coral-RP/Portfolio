"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🔹 Define Type for Dots
interface Dot {
  id: number;
  x: number;
  y: number;
  delay: number;
  color: string;
}

// 🔹 Function to generate dots with random positions & colors
const generateDots = (numDots: number): Dot[] => {
  return Array.from({ length: numDots }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
    color: Math.random() > 0.5 ? "bg-white" : "bg-blue-400", // 50% White, 50% Blue
  }));
};

const BackgroundDots = () => {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDots(generateDots(150)); // ✅ Keep dots rendered at all times
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
              dot.x + (Math.random() * 50 - 25), // Move slightly left/right
              dot.x + (Math.random() * 80 - 40), // Keep drifting
            ],
            y: [
              dot.y,
              dot.y + (Math.random() * 50 - 25), // Move slightly up/down
              dot.y + (Math.random() * 80 - 40), // Keep drifting
            ],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 8 + Math.random() * 5, // Randomized speed per dot
            ease: "easeInOut",
          }}
          className={`absolute w-2 h-2 rounded-full ${dot.color}`}
          style={{ top: dot.y, left: dot.x }}
        />
      ))}
    </div>
  );
};

export default BackgroundDots;
