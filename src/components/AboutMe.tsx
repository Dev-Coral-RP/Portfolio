"use client";
import { motion } from "framer-motion";
// Git push Test
const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center text-white p-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl p-6 md:p-8 rounded-xl shadow-lg transition-all"
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          I&apos;m a passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> with a strong focus on
          <span className="text-blue-400 font-semibold"> web development and backend technologies</span>. I thrive on building
          seamless, high-performance digital experiences that bring ideas to life. Whether it&apos;s crafting intuitive user
          interfaces or developing robust backend infrastructures, I enjoy the entire process of transforming concepts
          into reality.
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          My journey into development started when I first saw others creating <span className="text-blue-400 font-semibold">games and websites</span>.
          The idea that a few lines of code could create something interactive and engaging fascinated me. That curiosity quickly turned into a passion,
          leading me to experiment with various technologies and frameworks.
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          One of my proudest moments as a developer happened in <span className="text-blue-400 font-semibold">high school</span>,
          when I created a <span className="text-blue-400 font-semibold">platform game in Unity</span>. It was simple but engaging enough that my school
          <span className="text-blue-400 font-semibold"> added it to the computers for other students to play</span>. Seeing others enjoy something I built
          was a defining moment that reinforced my love for coding.
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          Beyond just development, my approach is centered on
          <span className="text-blue-400 font-semibold"> providing affordable and high-quality web experiences</span>.
          I believe that great digital solutions shouldn&apos;t be locked behind high costs or unnecessary complexity. Instead, I strive to create
          <span className="text-blue-400 font-semibold"> efficient, scalable, and user-friendly applications</span> that cater to both small businesses and larger enterprises.
        </p>
        <br />
        <p className="text-lg text-gray-300 leading-relaxed">
          When I&apos;m not coding, you&apos;ll probably find me <span className="text-blue-400 font-semibold">playing games</span>—a hobby that
          not only helps me unwind but also fuels my creativity. I love exploring different game mechanics, which sometimes even inspire my development work.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
