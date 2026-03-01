import React from "react";
import profilePic from "../assets/Dipesh_photo.jpeg";

function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
        {/* LEFT SIDE CONTENT */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-cyan-400">Dipesh Dinesh Maurya</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I am a dedicated BSc IT (Third Year) student aspiring to become a
            skilled Software Developer. I build modern, responsive and
            professional web applications using React, JavaScript and Python.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300"
            >
              Contact Me
            </a>

            <a
              href="/Dipesh_Maurya_ATS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="flex-1 flex justify-center">
          <div className="relative group w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            {/* Rotating Border Ring */}
            <div className="absolute w-full h-full rounded-full border-2 border-cyan-400 border-t-transparent animate-spin [animation-duration:5s]"></div>

            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Dipesh Maurya"
              className="w-full h-full object-cover object-top rounded-full z-10 
             transition duration-500 
             group-hover:scale-105 
             group-hover:shadow-[0_0_60px_15px_rgba(34,211,238,0.6)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

// import React from "react";

// function Home() {
//   return (
//     <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white flex items-center justify-center px-6">
//       <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">
//         {/* LEFT SIDE CONTENT */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//             Hi, I'm <span className="text-cyan-400">Dipesh Maurya</span>
//           </h1>

//           <p className="text-gray-300 text-lg leading-relaxed mb-8">
//             I am a passionate Software Developer and BSc IT student. I build
//             modern, responsive and professional web applications using React,
//             JavaScript and Python.
//           </p>

//           <button className="bg-cyan-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-cyan-300 transition duration-300">
//             Contact Me
//           </button>
//         </div>

//         {/* RIGHT SIDE IMAGE */}
//         <div className="flex-1 flex justify-center">
//           <div className="relative group w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
//             {/* Rotating Border Ring */}
//             <div className="absolute w-full h-full rounded-full border-2 border-cyan-400 border-t-transparent animate-spin [animation-duration:5s]"></div>

//             {/* Profile Image */}
//             <img
//               src="https://i.pinimg.com/736x/91/50/5c/91505c4897e29ba95c802845473669a1.jpg"
//               alt="Profile"
//               className="w-[85%] h-[85%] object-cover rounded-full z-10
//                          transition duration-500
//                          group-hover:scale-105
//                          group-hover:shadow-[0_0_60px_15px_rgba(34,211,238,0.6)]"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;
