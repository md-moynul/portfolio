"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "./Animations";

const Contact = () => (
  <section className="bg-surface-dim pt-section-padding" id="contact">
    <div className="max-w-7xl mx-auto px-6 mb-20">
      <motion.div 
        {...fadeInUp}
        className="bg-surface-container p-12 rounded-3xl border border-[#262626] flex flex-col lg:flex-row gap-16 relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full"></div>
        <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
        <p className="text-on-surface-variant text-body-lg">Currently available for internships, junior roles, or freelance projects. Let's build something great together.</p>
          <span className="font-label-caps text-primary">Get In Touch</span>
          <h2 className="font-display text-h1 text-gray-900 dark:text-white leading-tight">Ready to build something <span className="text-primary">extraordinary</span>?</h2>
          <p className="text-on-surface-variant text-body-lg">Currently available for senior-level opportunities or high-impact contract projects. Let's discuss your vision.</p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <span className="block font-label-caps text-on-surface-variant">Email Me</span>
                <span className="text-gray-900 dark:text-white font-bold">mmmdmoynulislam@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <span className="block font-label-caps text-on-surface-variant">Location</span>
                <span className="text-gray-900 dark:text-white font-bold">Rangpur, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>
        <form className="w-full lg:w-1/2 flex flex-col gap-4 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[10px] text-zinc-500 ml-2">Name</label>
              <input className="bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-[#262626] rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-primary-container transition-colors" placeholder="John Doe" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Email</label>
              <input className="bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-[#262626] rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-primary-container transition-colors" placeholder="john@example.com" type="email" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Subject</label>
            <input className="bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-[#262626] rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-primary-container transition-colors" placeholder="Project Inquiry" type="text" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps text-[10px] text-gray-500 dark:text-zinc-500 ml-2">Message</label>
            <textarea className="bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-[#262626] rounded-xl px-6 py-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-zinc-600 focus:outline-none focus:border-primary-container transition-colors resize-none" placeholder="Tell me about your project..." rows="5"></textarea>
          </div>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary text-on-primary-fixed font-label-caps py-5 rounded-xl mt-2 hover:bg-primary-fixed transition-all flex items-center justify-center gap-3" 
            type="submit"
          >
            Send Message
            <span className="material-symbols-outlined">send</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  </section>
);

export default Contact;
