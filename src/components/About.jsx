import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white px-6 py-16"
    >
      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("about_title")}
      </motion.h2>

      <motion.div
        className="max-w-4xl text-gray-300 leading-relaxed text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="mb-4">{t("about_text")}</p>
      </motion.div>
    </section>
  );
};

export default About;
