import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const email = "emir_han_ataman@hotmail.com";

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gray-800 text-white px-6 py-16"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("contact_title")}
      </motion.h2>

      <motion.div
        className="text-center text-gray-300 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>{t("contact_text")}</p>
        <a
          href={`mailto:${email}`}
          className="text-blue-400 hover:text-white font-semibold underline mt-2 inline-block"
        >
          {email}
        </a>
      </motion.div>

      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Social links */}
        <a
          href="https://github.com/imemirhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/emirhan-ataman-830a78234/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-white transition"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
