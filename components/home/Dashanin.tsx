"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, } from 'lucide-react';
import { TikaIcon, JamaraIcon, ChangaIcon, PingIcon, PujaFlowerIcon } from './DashainIcons';

const DiyaIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 text-amber-400" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 3-3 5-3 8a3 3 0 0 0 6 0c0-3-3-5-3-8z" fill="currentColor" opacity="0.9" />
        <path d="M2 17h20c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5z" />
        <path d="M12 6v1" />
    </svg>
);


const dashainCards = [
    {
        id: 'tika',
        icon: <TikaIcon className="w-6 h-6" />,
        nepaliText: 'टीका',
        title: 'Tika - Blessings',
        subtitle: 'Foundation of Trust',
        description: "Elders' blessings and our clients' trust — the foundation of everything we build.",
        accentColor: 'from-red-500/30 via-amber-500/10 to-transparent',
    },
    {
        id: 'jamara',
        icon: <JamaraIcon className="w-6 h-6" />,
        nepaliText: 'जमरा',
        title: 'Jamara - Growth',
        subtitle: 'Nurtured Success',
        description: 'Nine days of patient care. That is exactly how we grow your brand and technology stack.',
        accentColor: 'from-emerald-500/30 via-green-500/10 to-transparent',
    },
    {
        id: 'changa',
        icon: <ChangaIcon className="w-6 h-6" />,
        nepaliText: 'चङ्गा',
        title: 'Changa - New Heights',
        subtitle: 'Soaring Digital Reach',
        description: 'Kites soaring high in the October sky — your business, flying higher every season.',
        accentColor: 'from-amber-500/30 via-yellow-500/10 to-transparent',
    },
    {
        id: 'ping',
        icon: <PingIcon className="w-6 h-6" />,
        nepaliText: 'पिङ',
        title: 'Ping - Joy',
        subtitle: 'Effortless Flow',
        description: 'The thrill of the bamboo swing — delightful digital experiences that feel completely effortless.',
        accentColor: 'from-purple-500/30 via-indigo-500/10 to-transparent',
    },
];


export const DashainBanner: React.FC = () => {

    return (
        <section className="relative w-full bg-[#120524] text-white overflow-hidden py-16 px-4 sm:px-8 lg:px-16 border-y border-[#d76c24]" >
            <div className="absolute top-0 inset-x-0 flex justify-between items-start pointer-events-none z-20 px-2 sm:px-6">
                {[...Array(16)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ y: [0, 4, 0], rotate: [0, i % 2 === 0 ? 2 : -2, 0] }}
                        transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center"
                    >

                        <div className="w-0.5 h-4 sm:h-6 bg-emerald-600/80" />
                        <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 border border-yellow-300/40 shadow-[0_0_10px_rgba(245,158,11,0.6)] flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-200 opacity-90" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-amber-300/40"
                        style={{
                            width: Math.random() * 4 + 4 + 'px',
                            height: Math.random() * 4 + 4 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.8, 0.2],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>


            <div className="max-w-7xl mx-auto relative mt-10 z-10 space-y-12">

                <div className="text-center space-y-4 pt-4">
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2.5  text-amber-300 text-xs sm:text-sm font-semibold tracking-wider uppercase"
                    >
                        <DiyaIcon className="w-4 h-4 text-amber-400 animate-pulse" />
                        <span>VIJAYA DASHAMI 2083</span>
                        <DiyaIcon className="w-4 h-4 text-amber-400 animate-pulse" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-6xl md:text-7xl pt-4 pb-2 mt-2 font-extrabold tracking-wide leading-normal overflow-visible text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 drop-shadow-[0_4px_25px_rgba(245,158,11,0.4)]"
                    >
                        शुभ विजयादशमी
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto space-y-1 text-slate-300 text-sm sm:text-base md:text-lg font-normal"
                    >
                        <p>May Maa Durga&apos;s blessings bring you success, prosperity and fresh beginnings.</p>
                        <p className="font-semibold text-purple-200">
                            Happy Dashain from all of us at <span className="text-amber-300 font-bold">Cornor Tech</span>. 🙏
                        </p>
                    </motion.div>
                </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-12 gap-6">
                {dashainCards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -6 }}
                        className="group relative bg-[#1c0a38]/80 hover:bg-[#250d4a] rounded-2xl p-6 border border-purple-500/20 shadow-xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
                    >
                        <motion.span
                            className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent"
                            animate={{ width: ['20%', '70%', '20%'] }}
                            whileHover={{ width: '90%' }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <motion.span
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                            animate={{ width: ['40%', '80%', '40%'] }}
                            whileHover={{ width: '90%' }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                        />

                        <div className={`absolute inset-0 bg-gradient-to-br ${card.accentColor} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                        <div className="relative z-10 flex items-center justify-between mb-4">
                            <div className="w-11 h-11 rounded-xl bg-purple-950/80 border border-purple-400/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                {card.icon}
                            </div>
                            <span className="text-3xl font-black text-purple-600/20 group-hover:text-amber-400/30 transition-colors select-none">
                                {card.nepaliText}
                            </span>
                        </div>

                        <div className="relative z-10 space-y-2">
                            <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                                {card.title}
                            </h3>

                            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed pt-1">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center mt-10 pt-2">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-bold text-sm sm:text-base shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] flex items-center gap-2 transition-all duration-300"
                >
                    <span>Start your new beginning this Dashain</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>

            <div className="mt-14 -mx-4 sm:-mx-8 lg:-mx-16 pt-3 pb-3 bg-purple-950/70 border-t border-purple-500/20 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="flex items-center gap-8 font-bold text-xs sm:text-sm tracking-widest text-purple-200 uppercase"
                >
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            <PujaFlowerIcon className="w-5 h-5" />
                            <span>BLESSINGS</span>
                            <PujaFlowerIcon className="w-5 h-5" />
                            <span>NEW BEGINNINGS</span>
                            <PujaFlowerIcon className="w-5 h-5" />
                            <span>FAMILY</span>
                            <PujaFlowerIcon className="w-5 h-5" />
                            <span>PROSPERITY</span>
                            <PujaFlowerIcon className="w-5 h-5" />
                            <span>SUCCESS</span>
                            <PujaFlowerIcon className="w-5 h-5" />
                            <span>शुभ विजयादशमी</span>
                            <PingIcon className="w-6 h-6" />
                            <span>पिङ</span>
                            <ChangaIcon className="w-6 h-6" />
                            <span>चङ्गा</span>
                            <TikaIcon className="w-6 h-6" />
                            <span>टीका</span>
                            <JamaraIcon className="w-6 h-6" />
                            <span>जमरा</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>

        </section>
    )
}