import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const projectsData = t("projects", { returnObjects: true });

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-6 py-16"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("projects_title")}
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-4/5">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-400 flex flex-col justify-between"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{project.name}</h3>
            <p className="text-gray-300 mb-2">{project.description}</p>
            <p className="text-gray-400 mb-4 italic">{project.tech}</p>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border rounded border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 border rounded border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
