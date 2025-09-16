"use client";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";


const skills = [
{ name: "HTML", icon: <FaHtml5 size={28} /> },
{ name: "CSS", icon: <FaCss3Alt size={28} /> },
{ name: "JavaScript/TypeScript", icon: <SiTypescript size={28} /> },
{ name: "React", icon: <FaReact size={28} /> },
{ name: "Next.js", icon: <SiNextdotjs size={28} /> },
{ name: "Tailwind CSS", icon: <SiTailwindcss size={28} /> },
];


export default function Skills() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-2 sm:grid-cols-3 gap-6 p-6"
    >
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center gap-2 p-4 bg-white/10 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          {skill.icon}
          <p className="font-semibold">{skill.name}</p>
        </div>
      ))}
    </motion.section>
  );
}
