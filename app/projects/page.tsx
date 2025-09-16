"use client";
import { projects } from "@/app/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Proyek</h2>
      <div className="grid" style={{ marginTop: 16 }}>
        {projects.map((p) => (
          <div key={p.name} className="card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <div className="btns">
              {p.github && (
                <a
                  className="btn"
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
