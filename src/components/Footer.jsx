import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer className="relative w-full py-20 border-t border-gray-200 dark:border-white/5 bg-white dark:bg-[#0A0A0B] overflow-hidden transition-colors">
    {/* Background Glow */}
    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#2D8CFF]/5 blur-[120px] rounded-full"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 mb-16">
        <div className="flex flex-col gap-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-15 w-auto object-contain dark:brightness-110 mb-2"
          />
          <p className="text-sm text-gray-500 dark:text-zinc-500 max-w-xs leading-relaxed">
            Architecting the future of web apps with clean code and intuitive design. Let&apos;s build something extraordinary.
          </p>
        </div>

        <div className="flex flex-col md:items-end gap-6">
          <div className="flex gap-4">
            {[
              { icon: <FaGithub />, href: "https://github.com/md-moynul" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/md-moynul-islam47" },
              { icon: <FaTwitter />, href: "#" },
              { icon: <FaInstagram />, href: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-zinc-400 hover:text-[#2D8CFF] hover:border-[#2D8CFF] hover:bg-[#2D8CFF]/5 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex gap-8 flex-wrap">
            {['About', 'Education', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[10px] text-gray-400 dark:text-zinc-600 uppercase tracking-[0.3em] font-semibold">
          © {new Date().getFullYear()} Md. Moynul Islam · All Rights Reserved
        </span>
        <div className="flex items-center gap-2 text-[10px] text-gray-400 dark:text-zinc-600 uppercase tracking-widest">
          <span>Built with</span>
          <span className="text-[#2D8CFF] font-bold">MERN STACK</span>
          <span>&</span>
          <span className="text-primary font-bold">NEXT.JS</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
