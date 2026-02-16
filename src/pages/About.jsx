import React from "react";

function About() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT SIDE TEXT */}
        <div>
          <p className="text-cyan-400 uppercase tracking-widest text-5xl mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-4xl font-bold mb-8 leading-tight">
            Crafting Modern & Scalable Digital Solutions.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm <span className="text-white font-semibold">Dipesh Maurya</span>,
            a dedicated{" "}
            <span className="text-white font-semibold">
              BSc IT (Third Year)
            </span>{" "}
            student aspiring to become a skilled Software Developer. I enjoy
            building responsive and user-friendly web applications using
            <span className="text-cyan-400"> React</span>,
            <span className="text-cyan-400"> JavaScript</span>, and
            <span className="text-cyan-400"> Python</span>.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I am continuously learning new technologies and improving my
            problem-solving skills. I strongly believe in writing clean,
            maintainable code and delivering high-quality projects with
            attention to detail. My goal is to grow into a full-stack developer
            and contribute to impactful real-world solutions.
          </p>
        </div>

        {/* RIGHT SIDE 3D CARD */}
        <div className="flex justify-center perspective-[1000px]">
          <div
            className="bg-white/5 backdrop-blur-xl border border-white/10 
                       rounded-2xl p-10 w-80 md:w-96 
                       transform transition duration-500 
                       hover:rotate-y-12 hover:-rotate-x-6 
                       hover:scale-105 
                       shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Developer Profile
            </h3>

            <div className="space-y-4 text-gray-300">
              <p>
                <span className="text-white">Education:</span> BSc IT (Third
                Year)
              </p>
              <p>
                <span className="text-white">Stack:</span> React • JavaScript •
                Python
              </p>
              <p>
                <span className="text-white">Focus:</span> Full Stack
                Development
              </p>
              <p>
                <span className="text-white">Experience:</span> Academic &
                Personal Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
