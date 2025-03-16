"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// 🔹 Define Type for Dots
interface Dot {
  id: string;
  x: number;
  y: number;
  delay: number;
  size: number;
}

// 🔹 Custom UUID Function (No `crypto.randomUUID()`)
const generateUUID = () => {
  return (
    Date.now().toString(36) + Math.random().toString(36).substring(2, 10)
  );
};

// 🔹 Function to generate dots with random positions & sizes
const generateDots = (numDots: number): Dot[] => {
  return Array.from({ length: numDots }, () => ({
    id: generateUUID(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    delay: Math.random() * 5,
    size: Math.random() * 3 + 2, // ✅ Random size between 2px - 5px
  }));
};

const BackgroundDots = () => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDots(generateDots(150)); // ✅ Generates dots on mount

      // 🔹 Update dots every 5 seconds to create movement
      const interval = setInterval(() => {
        setDots((prevDots) =>
          prevDots.map((dot) => ({
            ...dot,
            x: Math.max(0, Math.min(window.innerWidth, dot.x + (Math.random() * 50 - 25))), // ✅ Small random drift
            y: Math.max(0, Math.min(window.innerHeight, dot.y + (Math.random() * 50 - 25))),
          }))
        );
      }, 5000);

      // 🔹 Track scroll position for parallax effect & color changes
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        clearInterval(interval);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: [0.8, 1, 0.8], // 🔄 Pulsating effect
            x: dot.x + (Math.random() * 50 - 25), // ✅ Moves slightly
            y: dot.y + (Math.random() * 50 - 25 - scrollY * 0.02), // ✅ Parallax effect
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full transition-colors duration-1000" // ✅ Smooth color transition
          style={{
            top: dot.y,
            left: dot.x,
            width: `${dot.size}px`, // ✅ Random dot size
            height: `${dot.size}px`,
            backgroundColor: scrollY > 800 ? "rgb(34, 197, 94)" : Math.random() > 0.5 ? "white" : "rgb(59, 130, 246)", // ✅ White & blue normally, turns green in testimonials
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundDots;
