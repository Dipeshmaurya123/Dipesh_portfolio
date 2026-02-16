import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0r5n4pg",
        "template_cgkzamo",
        form.current,
        "JjKbp1f4Zk9bnxYz4", // 👈 yaha apni public key daalo
      )
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to Send ❌");
          console.log(error.text);
        },
      );
  };

  return (
    <section className="bg-slate-950 text-white px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Contact <span className="text-cyan-400">Me</span>
        </h2>
      </div>

      <div
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl 
                      border border-white/10 rounded-2xl p-10 shadow-xl"
      >
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:border-cyan-400"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-cyan-400 text-black font-semibold 
                       hover:bg-cyan-300 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
