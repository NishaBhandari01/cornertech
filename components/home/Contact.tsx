"use client";

import React, { useState } from 'react';
import { Mail, MapPin, ChevronUp, Loader2, ArrowRight, Phone } from 'lucide-react';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';

interface FormDataState {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function Contact() {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        if (name === 'message' && value.length > 1000) return;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                return;
            }

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <div className="bg-[#120524] text-purple-100 overflow-hidden pt-24">

            <section className="relative py-16 px-6 lg:px-16 min-h-[85vh] flex items-center justify-center">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >

                    <motion.div variants={itemVariants} className="space-y-6">

                        <div className="space-y-3">

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                                Fill <span className="bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">Contact Form</span>
                            </h2>
                            <p className='text-xl text-gray-500'> or</p>


                            <div className="inline-flex items-center  text-purple-300 text-sm font-medium tracking-wide ">
                                Choose your preferred way to reach us
                            </div>
                        </div>

                        <div className="space-y-4 pt-2">
                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center space-x-4">
                                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center text-purple-300 shadow-md">
                                    <Mail className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <span className='block text-purple-300'>Email</span>
                                    <a
                                        href="mailto:info@cornortech.com"
                                        className="inline-flex items-center gap-2 rounded-lg  text-white hover:text-white transition-colors font-medium text-sm md:text-base"
                                    >
                                        info@cornortech.com
                                    </a>

                                </div>

                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center space-x-4">
                                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center text-purple-300 shadow-md">
                                    <Phone className="w-5 h-5 text-purple-400" />
                                </div>

                                <div>
                                    <span className='block text-purple-300'>Phone</span>
                                    <a
                                        href="tel:+9779828750115"
                                        className="inline-flex items-center gap-2 rounded-lg  text-white hover:text-white transition-colors font-medium text-sm md:text-base"
                                    >
                                        +977 9828750115
                                    </a>
                                </div>

                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center space-x-4">
                                <div className="w-11 h-11 rounded-xl bg-purple-950/60 border border-purple-500/20 flex items-center justify-center text-purple-300 shadow-md">
                                    <MapPin className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <span className='block text-purple-300'>Location</span>
                                    <span className="text-purple-200/90 text-sm md:text-base font-medium">Tilottama, Butwal, Nepal</span>
                                </div>

                            </motion.div>
                        </div>
                    </motion.div>


                    <motion.div variants={itemVariants} className="bg-[#1b0a33]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl relative border border-purple-500/20">
                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#120524] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none  transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="you@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-[#120524] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+977 98XXXXXXXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#120524] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="space-y-1.5 relative">
                                <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Your message here..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#120524] border border-purple-500/30 rounded-xl p-4 text-sm text-white placeholder-purple-400/40 focus:outline-none transition-colors resize-none"
                                />
                                <span className="absolute right-3 bottom-3 text-[11px] text-purple-400/50 pointer-events-none">
                                    {formData.message.length}/1000
                                </span>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.015 }}
                                whileTap={{ scale: 0.985 }}
                                type="submit"
                                disabled={loading}
                                className="w-full appearance-none py-3.5 px-6 rounded-xl font-semibold bg-gradient-to-r from-purple-600 to-violet-500 hover:from-purple-500 hover:to-violet-400 text-white transition-all shadow-lg shadow-purple-900/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </section>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="px-6 py-16 "
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold md:text-4xl text-white">
                            Visit Our Office
                        </h2>
                        <p className="mt-3 text-purple-300/70">
                            Find Cornor Tech Pvt. Ltd. on Google Maps and plan your visit.
                        </p>
                    </div>

                    <div className="grid gap-6 overflow-hidden rounded-2xl border border-purple-500/20 bg-[#1b0a33]/40 p-4 md:grid-cols-2 md:p-8 backdrop-blur-md">
                        <div className="flex flex-col justify-center p-4 md:p-8 space-y-4">

                            <div className="flex items-center gap-4">
                                <div className="relative w-24 h-24 rounded-2xl    shadow-purple-950/50 flex items-center justify-center shrink-0 overflow-hidden">
                                    <Image
                                        src="/logo.png"
                                        alt="Cornor Tech Pvt. Ltd. Logo"
                                        fill
                                        className="object-contain p-1"
                                        priority
                                    />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white leading-tight">
                                        Cornor Tech Pvt. Ltd.
                                    </h3>
                                    <p className="text-xs text-purple-400 font-medium tracking-wide uppercase mt-0.5">
                                        Digital Solutions
                                    </p>
                                </div>
                            </div>


                            <p className="text-purple-200/80 leading-relaxed text-sm md:text-base">
                                Tilottama, Butwal, Nepal
                            </p>

                            <p className="text-xs text-purple-300/60 space-y-0.5 font-mono">
                                <span>Registration No: 366203/81/82</span> <br />
                                <span>PAN No: 622355199</span>
                            </p>

                            <motion.a
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                href="https://www.google.com/maps/place/Cornor+Tech/@27.6600192,83.4629464,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-900/30 transition-all hover:from-purple-500 hover:to-violet-400 text-sm"
                            >
                                <span>Open in Google Maps</span>
                                <span aria-hidden="true">↗</span>
                            </motion.a>
                        </div>

                        <div className="min-h-[420px] overflow-hidden rounded-xl border border-purple-500/20">
                            <iframe
                                title="Cornor Tech Pvt. Ltd Location"
                                src="https://maps.google.com/maps?q=Cornor+Tech,27.6600192,83.4629464&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                                width="100%"
                                height="100%"
                                style={{ minHeight: "420px", border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                    </div>
                </div>
            </motion.section>
        </div>
    );
}