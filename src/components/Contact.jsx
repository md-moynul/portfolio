"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animations";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE",
          ...formState,
          subject: `New Portfolio Message: ${formState.subject}`,
          from_name: formState.name,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: result.message || "Something went wrong. Please try again." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-transparent py-16 md:py-32 transition-colors" id="contact">
      <div className="max-w-7xl mx-auto px-5 mb-16 md:mb-20">
        <motion.div
          {...fadeInUp}
          className="bg-white dark:bg-surface-container p-6 md:p-16 rounded-3xl border border-gray-200 dark:border-white/5 flex flex-col lg:flex-row gap-10 lg:gap-20 relative overflow-hidden shadow-sm dark:shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full"></div>
          <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
            <span className="font-label-caps text-primary text-[10px] tracking-[0.2em]">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-h1 text-gray-900 dark:text-white leading-tight">Ready to build something <span className="text-gradient">extraordinary</span>?</h2>
            <p className="text-gray-600 dark:text-zinc-400 text-base md:text-body-lg text-left md:text-justify hyphens-auto">Currently available for internships, junior roles, or freelance projects. Let&apos;s build something great together.</p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <span className="block font-label-caps text-gray-500 dark:text-on-surface-variant text-[10px]">Email Me</span>
                  <span className="text-gray-900 dark:text-white font-bold">mmmdmoynulislam@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <span className="block font-label-caps text-gray-500 dark:text-on-surface-variant text-[10px]">Location</span>
                  <span className="text-gray-900 dark:text-white font-bold">Rangpur, Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <form className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Name</label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Email</label>
                <input
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Subject</label>
              <input
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm"
                placeholder="Project Inquiry"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                className="bg-gray-50/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm rounded-xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all shadow-sm resize-none"
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="bg-[#2D8CFF] text-white font-bold uppercase tracking-widest py-5 rounded-xl mt-4 hover:bg-[#1a6fd8] transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_10px_20px_rgba(45,140,255,0.25)] hover:shadow-[0_15px_30px_rgba(45,140,255,0.35)]"
              type="submit"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <span className={`material-symbols-outlined text-sm ${isSubmitting ? "animate-spin" : ""}`}>
                {isSubmitting ? "sync" : "send"}
              </span>
            </motion.button>
            {status.message && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm font-medium mt-2 ${status.type === "success" ? "text-emerald-500" : "text-red-500"}`}
              >
                {status.message}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
