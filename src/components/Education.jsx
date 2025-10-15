import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();
  const educationData = t("education", { returnObjects: true }); // array from JSON

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("education_title")}
      </motion.h2>

      <div className="flex flex-col md:w-2/3">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="relative mb-10 pl-8 md:pl-16 border-l-4 border-blue-400"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-6 top-0 bg-blue-400 w-4 h-4 rounded-full"></span>
            <h3 className="text-xl font-semibold">{item.degree}</h3>
            <p className="text-blue-300 italic">{item.school}</p>
            <span className="text-gray-400">{item.year}</span>
            <p className="mt-2 text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
