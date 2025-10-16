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
        className="text-4xl font-bold mb-12 text-blue-400 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("about_title")}
      </motion.h2>

      <motion.div
        className="max-w-6xl flex flex-col md:flex-row items-center gap-10 md:gap-16"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* IMAGE PLACEHOLDER */}
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-blue-400 flex items-center justify-center bg-gray-700">
          <img src="photo.jpg" alt="Emirhan" />
        </div>

        {/* TEXT SECTION */}
        <div className="text-gray-300 leading-relaxed text-center md:text-left max-w-2xl">
          <p className="mb-4">{t("about_text")}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
