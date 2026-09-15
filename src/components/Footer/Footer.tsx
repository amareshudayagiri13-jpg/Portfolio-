import { motion } from "framer-motion";
import { Github, Linkedin,ArrowUp, Heart } from "lucide-react";
import { MorphingText } from "../lightswind/morphing-text";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.83c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

const CodeChefIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.257.004c-.437.01-.868.055-1.293.135-1.703.317-3.284 1.174-4.457 2.42a8.774 8.774 0 0 0-2.29 4.98c-.096.68-.115 1.376-.058 2.062.198 2.37 1.399 4.575 3.29 6.018.223.17.457.325.7.464-.19.29-.35.6-.48.926a4.22 4.22 0 0 0-.29 1.53c0 1.09.42 2.13 1.18 2.9.76.78 1.79 1.22 2.87 1.24h.05c1.08 0 2.11-.42 2.88-1.19.13-.13.25-.27.36-.42.11.15.23.29.36.42.77.77 1.8 1.19 2.88 1.19h.05c1.08-.02 2.11-.46 2.87-1.24.76-.77 1.18-1.81 1.18-2.9 0-.53-.1-1.05-.29-1.53-.13-.32-.29-.63-.48-.92.24-.14.47-.3.7-.47 1.89-1.44 3.09-3.65 3.29-6.02a8.9 8.9 0 0 0-.06-2.06 8.774 8.774 0 0 0-2.29-4.98c-1.17-1.246-2.75-2.103-4.45-2.42a8.99 8.99 0 0 0-1.3-.135 9.05 9.05 0 0 0-1.86.02c-.6-.02-1.21-.02-1.81 0a9.02 9.02 0 0 0-1.87-.02zM12 6.4a5.6 5.6 0 1 1 0 11.2 5.6 5.6 0 0 1 0-11.2z"/>
  </svg>
);

export const Footer = () => {
  const morphingTexts = [
    "B.Tech CSE Student",
    "Full-Stack Developer",
    "DSA Practitioner",
    "U Amaresh",
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };



  const socialLinks = [
    { icon: Github, href: "https://github.com/amareshudayagiri13-jpg", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/amaresh-udayagiri-3a2b61348/", label: "LinkedIn" },
    { icon: LeetCodeIcon, href: "https://leetcode.com/u/Teddy_rabbit/", label: "LeetCode" },
    { icon: CodeChefIcon, href: "https://www.codechef.com/users/amaresh_04", label: "CodeChef" },
  ];

  return (
    <footer className="w-full relative z-10 pt-16 pb-28 md:pb-36 bg-card/60 backdrop-blur-2xl border-t border-black/5 dark:border-white/10 shadow-2xl rounded-t-[3rem] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-10">
        
        {/* Top Header Row: Logo & Back-to-Top Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/5 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] shadow-lg">
              <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent">
                  AU
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-foreground text-base leading-none">
                U Amaresh
              </span>
              <span className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                B.Tech CSE Student
              </span>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-black/5 dark:border-white/10 text-xs font-bold text-foreground hover:text-primary hover:border-primary/40 transition-all shadow-sm cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>

        {/* Center Banner: Morphing Text Container with Mild Borders */}
        <div className="py-12 px-6 rounded-3xl bg-black/[0.015] dark:bg-white/[0.02] border border-black/5 dark:border-white/10 text-center flex flex-col items-center justify-center my-2 shadow-sm">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary mb-3 bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20 shadow-sm">
            Learn & Build
          </span>

          <MorphingText
            texts={morphingTexts}
            morphTime={2.8}
            cooldownTime={1.8}
            className="text-3xl md:text-5xl lg:text-6xl text-foreground font-extrabold min-h-[70px] text-center"
          />
        </div>

        {/* Quick Navigation Links */}
       

        {/* Bottom Row: Social Icons & Copyright */}
        <div className="pt-6 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-foreground">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, i) => {
              const Icon = social.icon;
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full glass-panel border border-black/5 dark:border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Copyright notice */}
          <div className="flex items-center gap-1.5 font-medium text-center md:text-right">
            <span>© {new Date().getFullYear()} Udayagiri Amaresh. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline-block" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;