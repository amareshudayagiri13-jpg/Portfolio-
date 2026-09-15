import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Lost & Found",
      subtitle: "Campus lost-and-found platform with MongoDB Atlas, deployed on Netlify and Render",
      link: "https://lostfoundforu.netlify.app",
      image: "lostfound.png",
      gridClass: "md:col-span-7 h-[420px]",
      inProgress: false,
    },
    {
      id: 2,
      title: "ProgressHub",
      subtitle: "Student attendance and course management platform — attendance, tasks, quizzes, and dashboards",
      link: "https://progresshub-app.vercel.app/",
      image: "progressHub.png",
      gridClass: "md:col-span-5 h-[420px]",
      inProgress: false,
    },
    {
      id: 3,
      title: "QuickPick Campus",
      subtitle: "Digitizes campus food ordering — connects students, vendors, and admins on one platform",
      link: "https://quick-pick-student.vercel.app/",
      image: "QuickPick.png",
      gridClass: "md:col-span-4 h-[360px]",
      inProgress: false,
    },
    {
      id: 4,
      title: "Sacred Places Hub",
      subtitle: "Informational platform for temple and sacred site details",
      link: "https://temple-info-bptra8srt-amareshudayagiri13-jpgs-projects.vercel.app/",
      image: "templeHub.png",
      gridClass: "md:col-span-4 h-[360px]",
      inProgress: false,
    },
    {
      id: 5,
      title: "VIIT College Chatbot",
      subtitle: "Bilingual (Telugu/English) AI chatbot for VIIT info, built on the Gemini API — currently in development",
      link: "#",
      image: "chatbot.png",
      gridClass: "md:col-span-4 h-[360px]",
      inProgress: true,
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      {/* Local keyframes for the rotating shine ring */}
      <style>{`
        @keyframes shine-spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          Full-stack projects I've built, solo and with teammates.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => {
          const CardTag = project.inProgress ? "div" : motion.a;
          return (
            <CardTag
              key={project.id}
              {...(!project.inProgress && {
                href: project.link,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass} ${project.inProgress ? "cursor-default" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Rotating shine outline */}
              <div
                className="absolute inset-0 rounded-[2.25rem] pointer-events-none z-30 overflow-hidden"
                style={{
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              >
                <div
                  className="absolute -inset-[75%]"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.95) 12deg, transparent 45deg, transparent 360deg)",
                    animation: "shine-spin 3.5s linear infinite",
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              </div>

              {/* Background Image Container */}
              <div className="absolute inset-0 bg-neutral-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              </div>

              {/* In Progress Badge */}
              {project.inProgress && (
                <div className="absolute top-6 right-6 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-amber-200 text-xs font-bold">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  In Progress
                </div>
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                  <div className="z-10 max-w-lg">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Arrow Action Icon */}
                  {!project.inProgress && (
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                      <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                  )}
                </div>
              </div>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
};