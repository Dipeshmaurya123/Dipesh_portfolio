import { percent } from "framer-motion";
import React from "react";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "React", percent: 75 },
  { name: "Python", percent: 90 },
  { name: "Django", percent: 65 },
  { name: "MySQL", percent: 65 },
];

const certificates = [
  {
    title: "React Development",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Python Programming",
    image: "https://via.placeholder.com/400x250",
  },
  {
    title: "Web Development",
    image: "https://via.placeholder.com/400x250",
  },
];

function Skills() {
  return (
    <section className="bg-slate-950 text-white px-6 py-24">
      {/* ================= SKILLS HEADING ================= */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-cyan-400">Skills</span>
        </h2>
      </div>

      {/* ================= SKILLS CIRCULAR PROGRESS ================= */}
      <div className="flex flex-wrap justify-center gap-16 max-w-6xl mx-auto mb-24">
        {skills.map((skill, index) => {
          const radius = 60;
          const circumference = 2 * Math.PI * radius;
          const offset = circumference - (skill.percent / 100) * circumference;

          return (
            <div
              key={index}
              className="relative w-40 h-40 flex items-center justify-center group"
            >
              <svg className="absolute w-full h-full rotate-[-90deg]">
                {/* Background Circle */}
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#1e293b"
                  strokeWidth="8"
                  fill="transparent"
                />

                {/* Progress Light Ring */}
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#22d3ee"
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-700 group-hover:drop-shadow-[0_0_8px_#22d3ee]"
                />
              </svg>

              {/* Skill Name */}
              <div className="z-10 text-center font-semibold text-lg group-hover:text-cyan-400 transition">
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
