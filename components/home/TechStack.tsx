"use client";

import { motion } from 'framer-motion';
import React from 'react';
import { 
  NextJsLogo, FlutterLogo, FigmaLogo, WordPressLogo, GitHubLogo, MySqlLogo, ReactLogo,
  CanvaLogo, PhotoshopLogo, KotlinLogo, CloudinaryLogo, NodeJsLogo, TypeScriptLogo, TailwindLogo 
} from './TechLogos';

export interface TechItem {
  name: string;
  category: string;
  iconBg: string;
  badgeColor: string;
  iconNode: React.ReactNode;
}

export const techRow1: TechItem[] = [
  { 
    name: 'Next.js', 
    category: 'Framework', 
    iconBg: 'bg-black text-white border border-white/20', 
    badgeColor: 'text-purple-300',
    iconNode: <NextJsLogo className="w-5 h-5" />
  },
  { 
    name: 'Flutter', 
    category: 'Mobile', 
    iconBg: 'bg-blue-950/80 border border-blue-500/30', 
    badgeColor: 'text-blue-300',
    iconNode: <FlutterLogo className="w-5 h-5" />
  },
  { 
    name: 'Figma', 
    category: 'Design', 
    iconBg: 'bg-slate-900 border border-pink-500/30', 
    badgeColor: 'text-pink-300',
    iconNode: <FigmaLogo className="w-5 h-5" />
  },
  { 
    name: 'WordPress', 
    category: 'CMS', 
    iconBg: 'bg-blue-900/60 border border-blue-400/30 text-blue-400', 
    badgeColor: 'text-blue-200',
    iconNode: <WordPressLogo className="w-5 h-5" />
  },
  { 
    name: 'GitHub', 
    category: 'DevOps', 
    iconBg: 'bg-slate-950 border border-slate-700 text-white', 
    badgeColor: 'text-slate-300',
    iconNode: <GitHubLogo className="w-5 h-5" />
  },
  { 
    name: 'MySQL', 
    category: 'Database', 
    iconBg: 'bg-slate-900 border border-indigo-500/30 text-indigo-400', 
    badgeColor: 'text-indigo-300',
    iconNode: <MySqlLogo className="w-5 h-5" />
  },
  { 
    name: 'React', 
    category: 'Frontend', 
    iconBg: 'bg-slate-950 border border-cyan-500/30', 
    badgeColor: 'text-cyan-300',
    iconNode: <ReactLogo className="w-5 h-5" />
  },
];

export const techRow2: TechItem[] = [
  { 
    name: 'Canva', 
    category: 'Design', 
    iconBg: 'bg-teal-950/80 border border-teal-500/30 text-teal-300', 
    badgeColor: 'text-teal-300',
    iconNode: <CanvaLogo className="w-5 h-5" />
  },
  { 
    name: 'Photoshop', 
    category: 'Design', 
    iconBg: 'bg-blue-950 border border-blue-600/30 text-cyan-400', 
    badgeColor: 'text-blue-300',
    iconNode: <PhotoshopLogo className="w-5 h-5" />
  },
  { 
    name: 'Kotlin', 
    category: 'Mobile', 
    iconBg: 'bg-purple-950/80 border border-purple-500/30', 
    badgeColor: 'text-purple-300',
    iconNode: <KotlinLogo className="w-5 h-5" />
  },
  { 
    name: 'Cloudinary', 
    category: 'Cloud', 
    iconBg: 'bg-indigo-950/80 border border-indigo-500/30 text-indigo-400', 
    badgeColor: 'text-indigo-200',
    iconNode: <CloudinaryLogo className="w-5 h-5" />
  },
  { 
    name: 'Node.js', 
    category: 'Backend', 
    iconBg: 'bg-emerald-950/80 border border-emerald-500/30 text-emerald-400', 
    badgeColor: 'text-emerald-300',
    iconNode: <NodeJsLogo className="w-5 h-5" />
  },
  { 
    name: 'TypeScript', 
    category: 'Language', 
    iconBg: 'bg-blue-950 border border-blue-500/30 text-blue-400', 
    badgeColor: 'text-blue-300',
    iconNode: <TypeScriptLogo className="w-5 h-5" />
  },
  { 
    name: 'Tailwind', 
    category: 'Frontend', 
    iconBg: 'bg-cyan-950/80 border border-cyan-500/30 text-cyan-400', 
    badgeColor: 'text-cyan-200',
    iconNode: <TailwindLogo className="w-5 h-5" />
  },
];




const TechCard: React.FC<{ tech: TechItem }> = ({ tech }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -4 }}
    className="group min-w-[200px] bg-[#1c0a38]/90 hover:bg-[#280e52] border border-purple-500/20 hover:border-purple-400/60 rounded-2xl p-4 flex items-center gap-3.5 shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0"
  >
    <div className={`w-11 h-11 rounded-xl ${tech.iconBg} flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 transition-transform`}>
      {tech.iconNode}
    </div>
    <div>
      <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-purple-300 transition-colors">
        {tech.name}
      </h4>
      <p className={`text-xs font-medium uppercase tracking-wider ${tech.badgeColor} opacity-80`}>
        {tech.category}
      </p>
    </div>
  </motion.div>
);

export const TechStack: React.FC = () => {
  return (
    <section className="relative w-full bg-[#120524] py-20 text-white overflow-hidden border-y border-purple-500/20">
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 z-0" 
        style={{
          backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.45) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="text-[14vw] font-black uppercase tracking-widest text-purple-950/40 whitespace-nowrap">
          TECHNOLOGY
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 relative z-10 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-purple-500/20 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-[2px] bg-purple-400" />
              <span className="text-purple-300 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                BUILT WITH THE BEST
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Our Tech Stack
            </h2>
          </div>
          <p className="text-purple-200/70 text-sm sm:text-base max-w-sm md:text-right">
            Tools we use every day to ship fast, scale reliably, and design beautifully.
          </p>
        </div>
      </div>


      <div className="mt-10 space-y-6 relative z-10 overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#120524] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#120524] to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            whileHover={{ transition: { duration: 0 } }}
            className="flex gap-4 pr-4 flex-nowrap"
          >
            {[...techRow1, ...techRow1].map((tech, i) => (
              <TechCard key={`row1-${tech.name}-${i}`} tech={tech} />
            ))}
          </motion.div>
        </div>


        <div className="flex overflow-hidden select-none">
          <motion.div
            animate={{ x: ['-50%', '0%'] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            whileHover={{ transition: { duration: 0 } }}
            className="flex gap-4 pr-4 flex-nowrap"
          >
            {[...techRow2, ...techRow2].map((tech, i) => (
              <TechCard key={`row2-${tech.name}-${i}`} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;