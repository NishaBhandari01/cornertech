"use client";

import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Code2, Lightbulb } from 'lucide-react';
import Image from 'next/image';


const AnimatedKite = ({
    initialX,
    initialY,
    size = 40,
    delay = 0,
    duration = 6,
    color = "#a855f7"
}: {
    initialX: string;
    initialY: string;
    size?: number;
    delay?: number;
    duration?: number;
    color?: string;
}) => {
    return (
        <motion.div
            className="absolute pointer-events-none z-10 select-none"
            style={{ left: initialX, top: initialY }}
            animate={{
                y: [0, -20, 5, -15, 0],
                x: [0, 10, -10, 8, 0],
                rotate: [0, 8, -6, 4, 0],
            }}
            transition={{
                duration,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay,
            }}
        >
            <div className="relative" style={{ width: size, height: size }}>
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]">

                    <polygon points="50,0 100,50 50,100 0,50" fill={color} />
                    <polygon points="50,0 100,50 50,50" fill="#f43f5e" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
                    <path d="M 0,50 Q 50,20 100,50" fill="none" stroke="#ffffff" strokeWidth="3" opacity="0.6" />
                    <polygon points="50,100 65,115 50,130 35,115" fill="#eab308" />
                </svg>

                <motion.div
                    className="absolute left-1/2 top-[120%] -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 via-rose-500 to-transparent rounded-full origin-top"
                    style={{ height: size * 1.2 }}
                    animate={{
                        rotate: [-15, 18, -12, 15, -15],
                        scaleY: [0.9, 1.1, 0.95, 1.05, 0.9],
                    }}
                    transition={{
                        duration: duration * 0.7,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                />
            </div>
        </motion.div>
    );
};


const SparkleParticle = ({ top, left, delay, size }: { top: string; left: string; delay: number; size: number }) => (
    <motion.div
        className="absolute rounded-full bg-purple-300 pointer-events-none z-0"
        style={{ top, left, width: size, height: size }}
        animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
            y: [0, -30, -60],
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
        }}
    />
);

export default function HeroSection() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative w-full min-h-screen bg-[#120524] text-white overflow-hidden pt-28 pb-16 px-4 sm:px-8 lg:px-14 flex flex-col justify-between selection:bg-purple-500 selection:text-white">

            <motion.div
                className="pointer-events-none fixed inset-0 z-0 opacity-40"
                style={{
                    background: useTransform(
                        [springX, springY],
                        ([x, y]) => `radial-gradient(650px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.25), transparent 80%)`
                    ),
                }}
            />

            <div className="absolute inset-0 opacity-20 pointer-events-none z-0"
                style={{
                    backgroundImage: `radial-gradient(#a855f7 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
                    backgroundSize: '36px 36px, 72px 72px, 72px 72px',
                }}
            />


            <AnimatedKite initialX="6%" initialY="14%" size={42} delay={0} duration={6.5} color="#eab308" />
            <AnimatedKite initialX="48%" initialY="4%" size={34} delay={1.2} duration={5.8} color="#f43f5e" />
            <AnimatedKite initialX="92%" initialY="10%" size={48} delay={0.5} duration={7.2} color="#a855f7" />
            <AnimatedKite initialX="1%" initialY="52%" size={38} delay={1.8} duration={6} color="#3b82f6" />
            <AnimatedKite initialX="64%" initialY="2%" size={28} delay={2.3} duration={5.2} color="#10b981" />


            <SparkleParticle top="20%" left="15%" delay={0.2} size={4} />
            <SparkleParticle top="40%" left="80%" delay={1.1} size={6} />
            <SparkleParticle top="70%" left="25%" delay={2.3} size={3} />
            <SparkleParticle top="15%" left="65%" delay={0.8} size={5} />
            <SparkleParticle top="85%" left="88%" delay={1.7} size={4} />


            <div className="relative z-20 max-w-7xl w-full mx-auto flex flex-wrap items-center justify-between gap-4 mb-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-950/70 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-purple-950/50 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    <span className="text-amber-200">HAPPY DASHAIN</span>
                    <span className="text-amber-500/60">|</span>
                    <span className="font-nepali">शुभ विजयादशमी २०८१</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 text-purple-200 text-xs font-medium tracking-wider backdrop-blur-md"
                >
                    <Code2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Where tech meets solution!</span>
                    <Lightbulb className="w-3.5 h-3.5 text-purple-400" />
                </motion.div>
            </div>

            <div className="relative z-20 max-w-7xl w-full mx-auto my-auto py-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
                    <div className="lg:col-span-9 space-y-2">
                        <motion.h1
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-none uppercase drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
                        >
                            CORNOR
                        </motion.h1>

                     
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-3 sm:gap-5"
                        >
                            <motion.div
                                whileHover={{ rotate: 12, scale: 1.1 }}
                                className="w-14 h-10 sm:w-20 sm:h-14 rounded-2xl bg-purple-600/30 border border-purple-400/50 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-950/60 backdrop-blur-md"
                            >
                                <Code2 className="w-6 h-6 sm:w-9 sm:h-9" />
                            </motion.div>

                
                            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase leading-none bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                                TECH <span className="text-purple-300/90 font-extrabold">PVT. LTD</span>
                            </h1>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-3 flex flex-col justify-end items-start lg:items-end space-y-1.5 pb-2 border-l lg:border-l-0 lg:border-r border-purple-500/20 pl-4 lg:pl-0 lg:pr-4"
                    >
                        <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold">OUR CAPABILITIES</span>
                        <span className="text-xs sm:text-sm font-mono tracking-wider text-purple-200/80 uppercase hover:text-white transition-colors cursor-pointer">DIGITAL MARKETING</span>
                        <span className="text-xs sm:text-sm font-mono tracking-wider text-purple-200/80 uppercase hover:text-white transition-colors cursor-pointer">GRAPHIC DESIGN</span>
                        <span className="text-xs sm:text-sm font-mono tracking-wider text-purple-200/80 uppercase hover:text-white transition-colors cursor-pointer">MOBILE APP DEV</span>
                    </motion.div>

                </div>
            </div>

            <div className="relative z-20 max-w-7xl w-full mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        whileHover={{ y: -6 }}
                        className="md:col-span-3 bg-[#1b0a33]/90 rounded-3xl p-6 border border-purple-500/20 flex flex-col justify-between shadow-xl backdrop-blur-md relative overflow-hidden group"
                    >
             
                        <div className="flex items-center justify-between mb-6">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-xs font-mono font-semibold text-purple-300/70 tracking-wider">EST. 2023</span>
                        </div>

                        {/* Logo Watermark Preview */}
                        <div className="my-6 flex items-center justify-center relative">
                            <div className="w-44 h-44 rounded-2xl bg-gray-300 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                               
                                    <Image
                                        src="/logo.png"
                                        alt="Cornor Tech Pvt. Ltd. Logo"
                                        fill
                                        className="object-contain p-1"
                                        priority
                                    />
                            
                            </div>
                        </div>

                        {/* Description Text */}
                        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed font-normal">
                            Not freelancers. Not outsourcing. PM-led teams that work like your own.
                        </p>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        whileHover={{ y: -6 }}
                        className="md:col-span-6 bg-[#1b0a33]/90 rounded-3xl p-6 md:p-8 border border-purple-500/20 flex flex-col justify-between shadow-2xl relative overflow-hidden group min-h-[260px]"
                    >
                        <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                            <Image
                                src="/hero-second.jpg"
                                alt="Cornor Tech Workstation"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover"
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#120524] via-[#120524]/10 to-transparent" />
                        </div>


                        {/* Top Availability Badge */}
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-medium backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Available for new projects
                            </div>

                            {/* Play / Action Floating Button */}
                            <motion.button
                                whileHover={{ scale: 1.15, rotate: 45 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-900/50 cursor-pointer"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Center Overlay Text */}
                        <div className="relative z-10 mt-12">
                            <h3 className="text-xl sm:text-2xl font-bold text-white max-w-lg leading-snug drop-shadow-md">
                                We help businesses scale delivery with accountable, structured tech teams.
                            </h3>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN: CARDS 3 & 4 STACKED (Col span 3) */}
                    <div className="md:col-span-3 flex flex-col gap-5">

                        {/* CARD 3: PURPLE SERVICE MODEL CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            whileHover={{ y: -4 }}
                            className="bg-gradient-to-br from-purple-600 to-violet-700 rounded-3xl p-5 flex flex-col justify-between shadow-lg relative overflow-hidden group min-h-[120px]"
                        >
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-mono tracking-widest text-purple-200 uppercase font-bold">SERVICE MODEL</span>
                                <span className="text-2xl font-black text-purple-300/40">01</span>
                            </div>
                            <h4 className="text-lg font-bold text-white mt-2 leading-tight">
                                Fully Managed <span className="block text-purple-200 text-sm font-normal">Projects</span>
                            </h4>
                        </motion.div>

                        {/* CARD 4: WHITE LUXURY CTA CARD */}
                        <motion.a
                            href="/contact"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white rounded-3xl p-5 flex flex-col justify-between shadow-xl relative overflow-hidden group min-h-[120px] cursor-pointer"
                        >
                            <div className="flex items-center justify-between text-purple-900">
                                <span className="text-xs font-extrabold tracking-wider uppercase">START A PROJECT</span>
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                            <h4 className="text-lg font-black text-slate-900 mt-2 leading-tight">
                                Digitalize Your Business
                            </h4>
                        </motion.a>

                    </div>

                </div>
            </div>

        </section>
    );
}