import React from "react";

const certificates = [
  "Deloitte_certificate3.pdf",
  "deloitte_completion_certificate.pdf",
  "Deloitte_completion_certificate2.pdf",
  "geminiGooglecirt.pdf",
  "googlecloudCirt.pdf",
  "googlecloudCirt1.pdf",
  "Infosys python Cirtificate.pdf",
];

function formatName(fileName) {
  return fileName
    .replace(".pdf", "")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function Certificates() {
  return (
    <section className="bg-slate-950 text-white px-6 py-24">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold tracking-wide">
          My <span className="text-cyan-400">Certificates</span>
        </h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {certificates.map((file, index) => (
          <a
            key={index}
            href={`${import.meta.env.BASE_URL}certificates/${file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl overflow-hidden
                       bg-white/5 backdrop-blur-xl
                       border border-white/10
                       transition duration-500
                       hover:scale-105
                       hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >
            {/* Gradient Border Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>

            {/* Small Preview */}
            <iframe
              src={`${import.meta.env.BASE_URL}certificates/${file}#toolbar=0&navpanes=0&scrollbar=0`}
              title={file}
              className="w-full h-48 pointer-events-none relative z-10 overflow-hidden rounded-t-2xl"
              scrolling="no"
              style={{ overflow: "hidden" }}
            />

            {/* Text Content */}
            <div className="relative z-10 p-6 text-center">
              <h3 className="text-base font-semibold text-white tracking-wide mb-2">
                {formatName(file)}
              </h3>

              {/* <button
                className="mt-2 px-4 py-2 text-sm rounded-full
                                 bg-cyan-400 text-black font-medium
                                 transition duration-300
                                 group-hover:bg-cyan-300"
              >
                View Certificate
              </button> */}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;

// import React from "react";

// const certificates = [
//   "Deloitte_certificate3.pdf",
//   "deloitte_completion_certificate.pdf",
//   "Deloitte_completion_certificate2.pdf",
//   "geminiGooglecirt.pdf",
//   "googlecloudCirt.pdf",
//   "googlecloudCirt1.pdf",
//   "Infosys python Cirtificate.pdf",
// ];

// function Certificates() {
//   return (
//     <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-24">
//       <div className="text-center mb-20">
//         <h2 className="text-4xl md:text-5xl font-bold">
//           My <span className="text-cyan-400">Certificates</span>
//         </h2>
//         <p className="text-gray-400 mt-4">
//           Professional certifications and course completions.
//         </p>
//       </div>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {certificates.map((file, index) => (
//           <a
//             key={index}
//             href={`${import.meta.env.BASE_URL}certificates/${file}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group relative bg-white/5 backdrop-blur-xl
//                        border border-white/10 rounded-2xl p-8
//                        hover:scale-105 transition duration-500
//                        hover:border-cyan-400
//                        hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]"
//           >
//             {/* Glow Effect */}
//             <div
//               className="absolute inset-0 rounded-2xl
//                             bg-gradient-to-r from-cyan-400/10 to-purple-500/10
//                             opacity-0 group-hover:opacity-100
//                             transition duration-500 blur-xl"
//             ></div>

//             {/* Icon */}
//             <div
//               className="relative z-10 w-16 h-16 mx-auto mb-6
//                             bg-cyan-400 text-black
//                             flex items-center justify-center
//                             rounded-xl font-bold text-lg
//                             group-hover:rotate-6 transition duration-300"
//             >
//               PDF
//             </div>

//             {/* Title */}
//             <h3 className="relative z-10 text-lg font-semibold mb-4 text-center">
//               {file.replace(".pdf", "").replace(/_/g, " ")}
//             </h3>

//             {/* Button Text */}
//             <div
//               className="relative z-10 text-cyan-400 font-medium text-center
//                             group-hover:tracking-wider transition duration-300"
//             >
//               View Certificate →
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Certificates;
