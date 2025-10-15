import React from "react";
import { motion } from "framer-motion";
import { 
  SiDotnet, 
  SiReact, 
  SiRedux, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiJavascript,
  SiPrometheus,
  SiGrafana
} from "react-icons/si";

const skills = [
  { name: "C# / .NET / EF Core", icon: <SiDotnet size={50} className="text-[#512bd4]" /> },
  { name: "React", icon: <SiReact size={50} className="text-[#61dafb]" /> },
  { name: "Redux", icon: <SiRedux size={50} className="text-[#764abc]" /> },
  { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" /> },
  { name: "SQL / PostgreSQL", icon: <SiPostgresql size={50} className="text-[#336791]" /> },
  { name: "NoSQL / MongoDB", icon: <SiMongodb size={50} className="text-[#4db33d]" /> },
  { name: "Docker", icon: <SiDocker size={50} className="text-[#2496ed]" /> },
  { name: "Prometheus", icon: <SiPrometheus size={50} className="text-red-500" /> },
  { name: "Grafana", icon: <SiGrafana size={50} className="text-orange-600" /> }
];

export default function SkillsCarousel() {
  return (
    <div className="flex justify-center py-8">
      <div className="overflow-hidden w-[90%] md:w-3/4 rounded-xl">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {skills.concat(skills).map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center w-28 flex-shrink-0 hover:scale-110 transition-transform duration-300"
            >
              {skill.icon}
              <span className="text-gray-200 mt-2 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
