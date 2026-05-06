"use client";

const Footer = () => (
  <footer className="w-full py-12 border-t border-[#262626] bg-[#0A0A0B]">
    <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
      <span className="text-sm font-black text-white">MERN.DEV</span>
      <span className="font-manrope text-xs text-zinc-500 uppercase tracking-widest">© 2024 Built with MERN Stack</span>
      <div className="flex gap-8">
        <a className="font-manrope text-xs text-zinc-500 uppercase tracking-widest hover:text-[#2D8CFF] transition-colors" href="https://github.com/md-moynul" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a className="font-manrope text-xs text-zinc-500 uppercase tracking-widest hover:text-[#2D8CFF] transition-colors" href="https://www.linkedin.com/in/md-moynul-islam47" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="font-manrope text-xs text-zinc-500 uppercase tracking-widest hover:text-[#2D8CFF] transition-colors" href="#">Source Code</a>
      </div>
    </div>
  </footer>
);

export default Footer;
