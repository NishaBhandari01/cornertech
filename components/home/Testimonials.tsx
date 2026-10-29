"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Users, Zap } from 'lucide-react';

interface StatItem {
  id: string;
  icon: React.ReactNode;
  value: string;
  title: string;
  subtitle: string;
  accentColor: string;
}

const statsData: StatItem[] = [
  {
    id: 'years',
    icon: <Clock className="w-6 h-6 text-purple-300" />,
    value: '3+',
    title: 'Years of Excellence',
    subtitle: 'Since 2024',
    accentColor: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'projects',
    icon: <CheckCircle2 className="w-6 h-6 text-violet-300" />,
    value: '50+',
    title: 'Projects Delivered',
    subtitle: 'Across Industries',
    accentColor: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 'clients',
    icon: <Users className="w-6 h-6 text-fuchsia-300" />,
    value: '90+',
    title: 'Happy Clients',
    subtitle: 'Worldwide',
    accentColor: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'team',
    icon: <Zap className="w-6 h-6 text-indigo-300" />,
    value: '15+',
    title: 'Team Members',
    subtitle: 'Expert engineers',
    accentColor: 'from-indigo-500 to-purple-500',
  },
];

interface CardProps {
  stat: StatItem;
  index: number;
}

const AnimatedStatCard: React.FC<CardProps> = ({ stat, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.21, 1.11, 0.81, 0.99] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, scale: 1.025 }}
      className="group relative bg-[#1b0a33]/90 hover:bg-[#250d47] rounded-2xl p-7 flex flex-col items-center text-center shadow-xl border border-purple-500/20 overflow-hidden transition-colors duration-300 backdrop-blur-md"
    >
    
      <motion.span
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-b-md shadow-[0_0_12px_rgba(168,85,247,0.9)] z-20"
        animate={{ width: isHovered ? "92%" : ["20%", "60%", "20%"] }}
        transition={isHovered ? { duration: 0.3 } : { duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 rounded-t-md shadow-[0_0_12px_rgba(168,85,247,0.9)] z-20"
        animate={{ width: isHovered ? "92%" : ["45%", "15%", "45%"] }}
        transition={isHovered ? { duration: 0.3 } : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] bg-gradient-to-b from-purple-400 to-violet-500 rounded-r-md shadow-[0_0_12px_rgba(168,85,247,0.9)] z-20"
        animate={{ height: isHovered ? "88%" : ["25%", "70%", "25%"] }}
        transition={isHovered ? { duration: 0.3 } : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[3px] bg-gradient-to-b from-violet-500 to-fuchsia-400 rounded-l-md shadow-[0_0_12px_rgba(168,85,247,0.9)] z-20"
        animate={{ height: isHovered ? "88%" : ["65%", "20%", "65%"] }}
        transition={isHovered ? { duration: 0.3 } : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />


      <div  className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-fuchsia-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" 
      />

      <motion.div
        animate={isHovered ? { rotate: [0, -12, 12, -6, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-14 h-14 rounded-2xl bg-purple-950/70 border border-purple-400/30 flex items-center justify-center mb-5 shadow-lg shadow-purple-950/50"
      >
        {stat.icon}
      </motion.div>

      <h3 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
        {stat.value}
      </h3>

      <p className="text-white font-semibold text-base sm:text-lg leading-tight mb-1">
        {stat.title}
      </p>

      <p className="text-purple-300/60 text-xs sm:text-sm font-medium">
        {stat.subtitle}
      </p>
    </motion.div>
  );
};

export const StatsGlance: React.FC = () => {
  return (
    <section className="w-full bg-[#120524] py-24 px-6 md:px-16 lg:px-24 text-purple-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="relative bg-[#180733]/90 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl border border-purple-500/20 backdrop-blur-xl">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 pointer-events-auto">
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 flex gap-12 z-40">
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800   shadow-inner" />
              <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800  shadow-inner" />
            </div>

            <motion.div
              initial={{ rotate: -4 }}
              animate={{ rotate: [3, -3, 2, -2, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              whileHover={{ rotate: [-8, 8, -4, 4, 0], scale: 1.05 }}
              className="flex flex-col items-center origin-top cursor-grab active:cursor-grabbing"
            >
  
              <div className="flex gap-14 h-12 relative">
             
                <div className="w-1.5 h-full bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-full shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.4)_2px,rgba(0,0,0,0.4)_4px)]" />
                </div>

                <div className="w-1.5 h-full bg-gradient-to-b from-amber-700 via-amber-600 to-amber-800 rounded-full shadow-md relative overflow-hidden">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.4)_2px,rgba(0,0,0,0.4)_4px)]" />
                </div>
              </div>


              <div className="relative -mt-1 px-5 py-2 rounded-full bg-gradient-to-r from-purple-900 via-purple-850 to-indigo-900 border border-purple-400/40 text-purple-200 text-xs font-bold tracking-widest uppercase shadow-2xl flex items-center gap-2 backdrop-blur-md group">
                <span>BY THE NUMBERS</span>
              </div>
            </motion.div>
          </div>

   
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-purple-500/10 pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full border border-purple-500/10 pointer-events-none" />

          <div className="text-center space-y-3 mb-14 pt-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Cornor Tech at a Glance
            </h2>

            <p className="text-purple-200/70 text-sm sm:text-base max-w-lg mx-auto font-medium">
              Numbers that reflect our commitment to digital excellence
            </p>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {statsData.map((stat, index) => (
              <AnimatedStatCard key={stat.id} stat={stat} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsGlance;