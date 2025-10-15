import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  const experienceData = t("experience", { returnObjects: true }); // array from JSON

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white px-6 py-16"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("experience_title")}
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 w-full md:w-4/5">
        {experienceData.map((job, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-xl shadow-lg border border-blue-400"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-400">{job.position}</h3>
            <p className="italic text-gray-300">{job.company}</p>
            <span className="text-gray-500">{job.duration}</span>
            <p className="mt-2 text-gray-300">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
