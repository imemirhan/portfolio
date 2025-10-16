import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const { i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

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
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const languages = {
    en: { name: "English", countryCode: "GB" },
    tr: { name: "Türkçe", countryCode: "TR" },
  };

  const currentLang = i18n.language === "tr" ? "tr" : "en";

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <div
          className="font-bold text-xl cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          Emirhan Ataman
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 items-center">
          {sections.map((sec) => (
            <li
              key={sec.id}
              className="cursor-pointer hover:text-blue-400 transition"
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </li>
          ))}

          {/* Language dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-gray-900 transition"
            >
              <ReactCountryFlag
                countryCode={languages[currentLang].countryCode}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "3px",
                }}
              />
              <span className="font-medium">{currentLang.toUpperCase()}</span>
              <HiChevronDown
                className={`transition-transform ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 bg-gray-800 border border-blue-400 rounded shadow-lg overflow-hidden">
                {Object.entries(languages).map(([code, { name, countryCode }]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-blue-500 hover:text-gray-900 transition ${
                      currentLang === code ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={countryCode}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        borderRadius: "3px",
                      }}
                    />
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </ul>

        {/* Mobile menu button */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile menu */}
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

          {/* Mobile language dropdown */}
          <div className="relative mt-4">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-gray-900 transition"
            >
              <ReactCountryFlag
                countryCode={languages[currentLang].countryCode}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em",
                  borderRadius: "3px",
                }}
              />
              <span className="font-medium">{currentLang.toUpperCase()}</span>
              <HiChevronDown
                className={`transition-transform ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {langOpen && (
              <div className="absolute left-0 mt-2 bg-gray-800 border border-blue-400 rounded shadow-lg overflow-hidden">
                {Object.entries(languages).map(([code, { name, countryCode }]) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-blue-500 hover:text-gray-900 transition ${
                      currentLang === code ? "bg-blue-600 text-white" : ""
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={countryCode}
                      svg
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                        borderRadius: "3px",
                      }}
                    />
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
