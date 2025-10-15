import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Software Developer", "React Enthusiast", "Problem Solver"];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let i = 0;
    if (typing) {
      const interval = setInterval(() => {
        setDisplayedText(roles[currentRole].slice(0, i + 1));
        i++;
        if (i === roles[currentRole].length) {
          setTyping(false);
          clearInterval(interval);
          setTimeout(() => setTyping(true), 2000); // pause 2s before next role
        }
      }, 100);
      return () => clearInterval(interval);
    } else {
      setCurrentRole((prev) => (prev + 1) % roles.length);
      setDisplayedText("");
    }
  }, [currentRole, typing]);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 px-6 text-center"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi! I&apos;m Babuş
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-cyan-400 h-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {displayedText}
      </motion.h2>

      <motion.div
        className="mt-12 animate-bounce text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        ↓ Scroll Down ↓
      </motion.div>
    </section>
  );
};

export default Hero;
