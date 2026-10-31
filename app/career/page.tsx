'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    DollarSign,
    Globe,
    BookOpen,
    ShieldCheck,
    TrendingUp,
    Users,
    Clock,
    Cpu,
    ArrowRight,
    ChevronRight,
    MapPin
} from 'lucide-react';

interface PerkItem {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface OpenRole {
    id: number;
    title: string;
    department: string;
    type: string;
    location: string;
    experience: string;
}

const PERKS_DATA: PerkItem[] = [
    {
        id: 1,
        title: 'Competitive Salary',
        description: 'Market-rate pay evaluated annually with performance bonuses.',
        icon: <DollarSign className="w-5 h-5 " />
    },
    {
        id: 2,
        title: 'Remote Friendly',
        description: 'Work from anywhere, anytime with flexible hybrid options.',
        icon: <Globe className="w-5 h-5 " />
    },
    {
        id: 3,
        title: 'Learning Budget',
        description: 'NPR 30k/yr stipend for courses, certifications, & books.',
        icon: <BookOpen className="w-5 h-5 " />
    },
    {
        id: 4,
        title: 'Health Insurance',
        description: 'Comprehensive medical coverage for you and your dependents.',
        icon: <ShieldCheck className="w-5 h-5 " />
    },
    {
        id: 5,
        title: 'Fast Career Growth',
        description: 'Clear progression paths, mentorship, and rapid promotions.',
        icon: <TrendingUp className="w-5 h-5" />
    },
    {
        id: 6,
        title: 'Great Culture',
        description: 'Inclusive, async-first team focused on innovation & impact.',
        icon: <Users className="w-5 h-5" />
    },
    {
        id: 7,
        title: 'Flexible Time Off',
        description: 'Take the time you need to recharge and maintain balance.',
        icon: <Clock className="w-5 h-5" />
    },
    {
        id: 8,
        title: 'Cutting-edge Stack',
        description: 'Latest tools, modern frameworks, zero legacy bloat.',
        icon: <Cpu className="w-5 h-5" />
    }
];

const OPEN_ROLES: OpenRole[] = [
    {
        id: 1,
        title: 'Full-Stack Software Engineer (MERN / Next.js)',
        department: 'Engineering',
        type: 'Full-time / Internship',
        location: 'Butwal / Remote',
        experience: '1+ Years / Freshers with solid portfolio'
    },
    {
        id: 2,
        title: 'UI/UX Designer & Frontend Developer',
        department: 'Design & Product',
        type: 'Full-time / Internship',
        location: 'Butwal / Remote',
        experience: 'Figma & Tailwind CSS proficiency'
    },
    {
        id: 3,
        title: 'Digital Marketing & Growth Specialist',
        department: 'Marketing',
        type: 'Full-time',
        location: 'Butwal',
        experience: 'Social Media Strategy & Campaigns'
    }
];

export default function CareerPage() {
    const [selectedRole, setSelectedRole] = useState<OpenRole | null>(null);

    const scrollToRoles = () => {
        const el = document.getElementById('open-roles');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#0b0217] text-purple-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden pt-20">

            <div
                className="absolute inset-0 pointer-events-none opacity-20 z-0"
                style={{
                    backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }}
            />

            <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 md:px-16 lg:px-24 border-b border-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5">
                    <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
                        CAREERS
                    </span>
                </div>

                <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded text-gray-400 shadow shadow-purple-950/50"
                    >
                      
                        <span className="text-xs font-bold tracking-widest uppercase">WE’RE HIRING — 3 OPEN ROLES</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
                    >
                        Start your journey <br />
                        <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            with Cornor Tech
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-purple-200/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        Join our internship and career programs to gain hands-on experience with real-world projects. Work alongside experts to build the software of tomorrow.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center justify-center gap-4 pt-4"
                    >
                        <button
                            onClick={scrollToRoles}
                            className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm shadow-xl shadow-purple-950/30  transition-all flex items-center gap-2 cursor-pointer"
                        >
                            <span>View Open Roles</span>
                            <ChevronRight className="w-4 h-4" />
                        </button>
                        <a
                            href="mailto:info@cornortech.com?subject=General Application - Cornor Tech"
                            className="px-6 py-3 rounded-xl bg-slate-700/40 hover:bg-[#1c0a36] text-purple-200 hover:text-white font-semibold text-sm border border-purple-900/30 transition-all shadow-md"
                        >
                            General Application
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* "What We Offer" Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10">
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
                    <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                        WHY CORNOR TECH
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        What We Offer
                    </h2>
                    <p className="text-purple-200/70 text-sm sm:text-base">
                        We foster an ecosystem where top talent can thrive, experiment, and build meaningful digital solutions.
                    </p>
                </div>

            
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PERKS_DATA.map((perk, index) => (
                        <motion.div
                            key={perk.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            className="bg-gradient-to-b from-[#1c0a36]/90 via-[#120427]/95 to-[#0b0217] border border-purple-900/5 hover:border-purple-400/10 rounded-2xl p-6 shadow-xl transition-all duration-300 group space-y-4"
                        >
                            <div className="w-10 h-10   text-gray-400 border-purple-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                                {perk.icon}
                            </div>
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-bold text-violet-400 group-hover:text-gray-400 transition-colors">
                                    {perk.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-purple-200/70 leading-relaxed">
                                    {perk.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="open-roles" className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-16 relative z-10 ">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                    <div className="space-y-2">
                        <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
                            JOIN THE TEAM
                        </span>
                        <h2 className="text-3xl font-extrabold text-white">
                            Current Openings
                        </h2>
                    </div>
                    <p className="text-xs text-gray-300/70 font-mono">
                        Location: Tilottama, Butwal, Nepal / Remote
                    </p>
                </div>

                <div className="space-y-4">
                    {OPEN_ROLES.map((role) => (
                        <motion.div
                            key={role.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="bg-gradient-to-r from-[#1c0a36]/90 via-[#120427]/95 to-[#0b0217] border border-purple-500/30 hover:border-gray-400/50 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
                        >
                            <div className="space-y-2">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-950/80 text-gray-400 border border-purple-500/30">
                                        {role.department}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-900/40 text-purple-300 border border-purple-500/20">
                                        {role.type}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                                    {role.title}
                                </h3>

                                <div className="flex flex-wrap items-center gap-4 text-xs text-purple-300/80 font-mono pt-1">
                                    <span className="flex items-center gap-1">
                                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                                        {role.location}
                                    </span>
                                    <span>•</span>
                                    <span>{role.experience}</span>
                                </div>
                            </div>

                            <a
                                href={`mailto:info@cornortech.com?subject=Application for ${role.title}`}
                                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-purple-800 hover:bg-purple-700 text-white font-bold text-xs shadow-md border border-purple-400/40 transition-all flex items-center justify-center gap-2 shrink-0"
                            >
                                <span>Apply Now</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}