import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  const roles = t("roles", { returnObjects: true }) || ["Yazılım Geliştirici", ".NET Developer", "Freelancer"];
  const TYPING_SPEED = 100; // ms per character
  const PAUSE_TIME = 2000; // pause after full word

  const [displayedText, setDisplayedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [typingForward, setTypingForward] = useState(true);

  useEffect(() => {
    let timeout;

    if (typingForward) {
      // typing forward
      if (displayedText.length < roles[currentRole].length) {
        timeout = setTimeout(() => {
          setDisplayedText(roles[currentRole].slice(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        // finished typing, pause
        timeout = setTimeout(() => setTypingForward(false), PAUSE_TIME);
      }
    } else {
      // erasing
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(roles[currentRole].slice(0, displayedText.length - 1));
        }, TYPING_SPEED / 2);
      } else {
        // finished erasing, next role
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setTypingForward(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typingForward, currentRole, roles]);

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
        {t("greeting")}
      </motion.h1>

      <motion.h2
        className="text-2xl md:text-3xl font-semibold text-cyan-400 min-h-[3rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {displayedText.split("").map((char, idx) => (
          <span key={idx}>{char === " " ? "\u00A0" : char}</span>
        ))}
        <span className="ml-1 inline-block w-[2px] h-6 bg-cyan-400 animate-[blink_1s_steps(2, start)_infinite]" />
      </motion.h2>

      <motion.p
        className="mt-4 text-gray-400 max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {t("hero_description")}
      </motion.p>

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
