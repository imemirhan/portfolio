import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close menu on link click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <div className="font-bold text-xl cursor-pointer" onClick={() => scrollToSection("hero")}>
          Babuş
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </li>
          ))}
          <li>
            <button onClick={() => i18n.changeLanguage("en")} className="px-2 py-1 border rounded border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 transition">
              EN
            </button>
          </li>
          <li>
            <button onClick={() => i18n.changeLanguage("tr")} className="px-2 py-1 border rounded border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 transition">
              TR
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile menu links */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white flex flex-col gap-4 p-6">
          {sections.map((sec) => (
            <span
              key={sec.id}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </span>
          ))}
          <div className="flex gap-2 mt-2">
            <button onClick={() => i18n.changeLanguage("en")} className="px-2 py-1 border rounded border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 transition">
              EN
            </button>
            <button onClick={() => i18n.changeLanguage("tr")} className="px-2 py-1 border rounded border-blue-400 text-white hover:bg-blue-400 hover:text-gray-900 transition">
              TR
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
