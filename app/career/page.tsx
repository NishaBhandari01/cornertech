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
    Layers,
    ArrowRight,
    ChevronRight,
    MapPin,
    CheckCircle2
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
    status: string;
    description: string;
    key_skills: string[];
    responsibilities: string[];
    job_type: string;
    location: string;
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
        icon: <Layers
            className="w-5 h-5" />
    }
];

const OPEN_ROLES: OpenRole[] = [
    {
        id: 1,
        "title": "Graphics Design Intern",
        "status": "OPEN",
        "description": "Work closely with our creative team on real projects, creating graphics for social media, websites, and campaigns.",
        "key_skills": ["Photoshop", "Illustrator", "Canva"],
        "responsibilities": [
            "Design graphics for social media campaigns and websites",
            "Assist marketing and design teams",
            "Maintain brand consistency"
        ],
        "location": "Remote / Hybrid (Butwal)",
        "job_type": "Internship (F/P)"
    },
    {
        id: 2,
        "title": "Video Editing Intern",
        "status": "OPEN",
        "description": "Assist in producing and editing engaging video content for marketing, product demos, and campaigns.",
        "key_skills": ["Premiere Pro", "After Effects", "Final Cut"],
        "responsibilities": [
            "Edit and assemble video footage for campaigns",
            "Add motion graphics and effects",
            "Ensure brand alignment and quality"
        ],
        "location": "Remote / Hybrid",
        "job_type": "Internship"
    },
    {
        id: 3,
        "title": "MERN Stack Intern",
        "status": "OPEN",
        "description": "Join our development team to build real-world applications using MongoDB, Express, React, and Node.js.",
        "key_skills": ["JavaScript", "React.js", "Node.js", "MongoDB", "Git"],
        "responsibilities": [
            "Develop frontend and backend features",
            "Integrate databases and APIs",
            "Collaborate with designers and developers"
        ],
        "location": "Remote",
        "job_type": "Internship"
    }
];

export default function CareerPage() {
    const [selectedRole, setSelectedRole] = useState<OpenRole | null>(null);

    const scrollToRoles = () => {
        const el = document.getElementById('open-roles');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-[#1b0637] text-purple-100 font-sans selection:bg-purple-600 selection:text-white relative overflow-hidden pt-20">

            <div
                className="absolute inset-0 pointer-events-none opacity-20 z-0"
                style={{
                    backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }}
            />

            <section className="relative w-full pt-16 pb-20 px-6 sm:px-8 md:px-16 lg:px-24 border-b border-purple-500/20 overflow-hidden">
                <div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5">
                        <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-purple-400 whitespace-nowrap">
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
                            <span className="bg-violet-400  bg-clip-text text-transparent">
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
                </div>

            </section>


            <section className="bg-white ">
                <div className="max-w-7xl bg-white mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-20 relative z-10">
                    <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
                        <span className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase">
                            WHY CORNOR TECH
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-violet-500 ">
                            What We Offer
                        </h2>
                        <p className="text-slate-500 text-sm sm:text-base">
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
                                className="bg-[#FFFFFF] border border-purple-900/5 hover:border-purple-400/10 rounded-2xl p-6 shadow shadow-neutral-300 transition-all duration-300 group space-y-4"
                            >
                                <div className="w-10 h-10 bg-[#F1E3FC]  text-purple-600  rounded-xl  flex items-center justify-center  group-hover:scale-110 transition-transform">
                                    {perk.icon}
                                </div>
                                <div className="space-y-1.5">
                                    <h3 className="text-lg font-bold text-black hover:text-[#9810FB] transition-colors">
                                        {perk.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-700/70 leading-relaxed">
                                        {perk.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="open-roles" className="bg-white ">
                <div className="max-w-5xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-16 relative z-10 ">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                        <div className="space-y-2">
                            <span className="text-xs font-mono font-bold tracking-widest text-gray-500 uppercase">
                                JOIN THE TEAM
                            </span>
                            <h2 className="text-3xl font-extrabold text-violet-500">
                                Current Openings
                            </h2>
                        </div>
                        <p className="text-xs text-gray-600/80 font-mono">
                            Location: Tilottama, Butwal, Nepal / Remote
                        </p>
                    </div>

                       <div className="space-y-6">
                        {OPEN_ROLES.map((role) => (
                            <motion.div
                                key={role.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="bg-white text-black/80 hover:bg-slate-50 rounded-2xl p-6 shadow-xl border max-w-4xl mx-auto border-violet-200 transition-all duration-300 flex flex-col justify-between gap-6 group"
                            >
                   
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="text-xl font-bold group-hover:text-purple-600 transition-colors">
                                                {role.title}
                                            </h3>
                                            {role.status && (
                                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-green-100 text-green-700 uppercase tracking-wide">
                                                    {role.status}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-600 font-medium">
                                            {role.description}
                                        </p>
                                    </div>

                                    <a
                                        href={`mailto:info@cornortech.com?subject=Application for ${role.title}`}
                                        className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md border border-purple-400/40 transition-all flex items-center justify-center gap-2 shrink-0"
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 border-t border-gray-100">

                                    <div className="space-y-2">
                                        <span className="text-[11px] font-bold tracking-wider  uppercase block">
                                            Key Skills
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {role.key_skills?.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 rounded-xl text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <span className="text-[11px] font-bold tracking-wider  uppercase block">
                                             Responsibilities
                                        </span>
                                        <ul className="space-y-1.5">
                                            {role.responsibilities?.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                                    <CheckCircle2
                                                     className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>


                                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-medium pt-2 border-t border-gray-100">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-purple-600" />
                                        {role.location}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5 text-purple-600" />
                                        {role.job_type}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>

        </div>
    );
}