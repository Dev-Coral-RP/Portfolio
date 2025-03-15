"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🔹 Define Type for Dots
interface Dot {
  id: string;
  x: number;
  y: number;
  delay: number;
}

// 🔹 Function to generate dots with unique positions
const generateDots = (numDots: number): Dot[] => {
  return Array.from({ length: numDots }, () => ({
    id: crypto.randomUUID(),
    x: Math.random() * window.innerWidth, // ✅ Random X position across the screen
    y: Math.random() * window.innerHeight, // ✅ Random Y position across the screen
    delay: Math.random() * 5,
  }));
};

const BackgroundDots = () => {
  const [dots, setDots] = useState<Dot[]>([]); // ✅ Explicitly define state type
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDots(generateDots(220)); // ✅ Now TypeScript understands the type
      window.addEventListener("scroll", () => setScrollY(window.scrollY));
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: dot.delay }}
          className={`absolute w-2 h-2 rounded-full ${scrollY > 500 ? "bg-green-400" : "bg-white"}`}
          style={{ top: dot.y, left: dot.x }}
        />
      ))}
    </div>
  );
};

export default BackgroundDots;
