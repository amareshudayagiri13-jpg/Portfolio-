import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { HangingIdCard } from "../lightswind/HangingIdCard";
import { DotPattern } from "../lightswind/dot-pattern";

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

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden bg-background">
      {/* Background Dot Pattern with Radial Vignette Shade */}
      <DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow />
      
      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 pb-12">
        
        {/* Left Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left pt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <Badge variant="outline" size="lg" className="gap-2.5 py-1.5 px-4 glass-panel border-foreground/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted-foreground">Open to internships</span>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
              Hi, I'm
            </h1>
            
            {/* Light Theme: Clean Vibrant Gradient Text */}
            <div className="block dark:hidden">
              <span className="bg-gradient-to-r from-violet-600 via-sky-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-[clamp(3rem,6.5vw,5.5rem)] leading-none tracking-tight block pb-2 select-none">
                Amaresh
              </span>
            </div>

            {/* Keep the name colors consistent in both themes */}
            <div className="hidden dark:block">
              <span className="bg-gradient-to-r from-violet-600 via-sky-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-extrabold text-[clamp(3rem,6.5vw,5.5rem)] leading-none tracking-tight block pb-2 select-none">
                Amaresh
              </span>
            </div>
          </motion.div>

          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            B.Tech Computer Science student building full-stack web projects and sharpening 
            my DSA skills — currently preparing for internships and campus placements.
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10 w-full md:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button 
              size="lg" 
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] hover:-translate-y-1"
            >
              View Work <ArrowRight className="w-4 h-4" />
            </Button>
            <a
              href="https://drive.google.com/file/d/1rcwtgsKT6-p0LIZMyB9rYISOmrJfxDUD/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-7 h-12 glass-panel text-foreground font-semibold flex items-center gap-2 hover:bg-foreground/10 transition-all hover:-translate-y-1 border-foreground/10 border justify-center"
            >
              Resume <Download className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-5 justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { Icon: Github, href: "https://github.com/amareshudayagiri13-jpg" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/amaresh-udayagiri-3a2b61348/" },
              { Icon: LeetCodeIcon, href: "https://leetcode.com/u/Teddy_rabbit/" },
              { Icon: CodeChefIcon, href: "https://www.codechef.com/users/amaresh_04" },
              { Icon: Mail, href: "mailto:amareshudayagiri13@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors hover:-translate-y-1 transform duration-200">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Visual Hanging ID Card */}
        <motion.div 
          className="flex-1 w-full max-w-md relative flex justify-center items-center py-2"
          initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HangingIdCard
            name="Amaresh"
            role="B.Tech CSE Student"
            badgeId="VIIT-2028-CSE"
            accentColor="#8b5cf6"
            ropeLength={75}
            ropeColor="#27272a"
            cardWidth="w-72 sm:w-80 md:w-84"
          >
            <div className="flex flex-col h-full bg-card w-full">
              {/* Card Header Banner — Full Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                <img 
                  src="image.png" 
                  alt="Amaresh" 
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-3 right-3 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-md z-10" />
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col items-center text-center bg-card text-card-foreground flex-1 gap-3">
                <div>
                  <h3 className="text-xl font-extrabold tracking-tight text-foreground">Amaresh</h3>
                  <div className="inline-flex items-center gap-1.5 mt-1 px-3 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold">
                    <span>B.Tech CSE · VIIT</span>
                  </div>
                </div>

                <div className="w-full border-t border-border/60 my-0.5" />

                {/* Details 2x2 Grid */}
                <div className="grid grid-cols-2 gap-2.5 w-full text-left bg-muted/40 p-3 rounded-xl border border-border/50">
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Specialty</span>
                    <span className="font-bold text-foreground text-xs">Full-Stack Web Dev</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Location</span>
                    <span className="font-bold text-foreground text-xs">Visakhapatnam, India</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">CGPA</span>
                    <span className="font-bold text-foreground text-xs">9.03</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[9px] uppercase tracking-widest font-bold">Status</span>
                    <span className="font-bold text-emerald-500 text-xs flex items-center gap-1">
                      ● Open to internships
                    </span>
                  </div>
                </div>

                {/* HD Barcode & Auth Tag */}
                <div className="flex flex-col items-center mt-1 w-full gap-1">
                  <div className="flex items-center justify-center w-full px-1 text-[10px]">
                    <span className="font-mono font-bold tracking-widest text-primary">
                      VIIT-2028-CSE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </HangingIdCard>
        </motion.div>

      </div>

      {/* Marquee appended natively to the bottom to span Full Width */}
      <div className="w-full relative z-10 mt-auto">
        <TechStackSection />
      </div>
    </section>
  );
};