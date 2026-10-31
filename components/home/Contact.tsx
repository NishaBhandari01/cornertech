"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Loader2, ArrowRight, Phone } from 'lucide-react';
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
        <div className=" text-purple-100 overflow-hidden pt-12 pb-20 relative font-sans selection:bg-purple-600 selection:text-white">
            <div
                className="absolute inset-0 pointer-events-none opacity-20 z-0"
                style={{
                    backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }}
            />
            <section className="relative py-8 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                    <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                     
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                                Let's Build <br />
                                <span className="bg-violet-400 bg-clip-text text-transparent">
                                    Something Great
                                </span>
                            </h2>

                            <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
                                Have a project in mind or want to learn more about our services? Choose your preferred way to reach out or fill out the contact form.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center space-x-4  p-4 rounded-2xl shadow-lg">
                                <div className="w-11 h-11 rounded-xl  border border-purple-500/30 flex items-center justify-center text-white shadow-inner shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block text-xs font-semibold text-purple-300 uppercase tracking-wider">Email Us</span>
                                    <a
                                        href="mailto:info@cornortech.com"
                                        className="text-white hover:text-amber-300 transition-colors font-medium text-sm sm:text-base truncate block"
                                    >
                                        info@cornortech.com
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center space-x-4  p-4 rounded-2xl shadow-lg">
                                <div className="w-11 h-11 rounded-xl border border-purple-500/30 flex items-center justify-center text-white shadow-inner shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block text-xs font-semibold text-purple-300 uppercase tracking-wider">Call Us</span>
                                    <a
                                        href="tel:+9779828750115"
                                        className="text-white hover:text-amber-300 transition-colors font-medium text-sm sm:text-base truncate block"
                                    >
                                        +977 9828750115
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} className="flex items-center space-x-4  p-4 rounded-2xl shadow-lg">
                                <div className="w-11 h-11 rounded-xl  border border-purple-500/30 flex items-center justify-center text-white shadow-inner shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden">
                                    <span className="block text-xs font-semibold text-purple-300 uppercase tracking-wider">Office Location</span>
                                    <span className="text-purple-100 text-sm sm:text-base font-medium truncate block">Tilottama, Butwal, Nepal</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-7 bg-[#1c0a36]/90   rounded-xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="block text-xs font-semibold text-purple-200 uppercase tracking-wider">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Ramesh Adhikari"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400 transition-colors"
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
                                        className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400 transition-colors"
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
                                    className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-4 py-3 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400 transition-colors"
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
                                    placeholder="Describe your project requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl p-4 text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                                />
                                <span className="absolute right-3 bottom-3 text-[11px] text-purple-400/50 pointer-events-none font-mono">
                                    {formData.message.length}/1000
                                </span>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-purple-600   text-white transition-all shadow-lg shadow-purple-950/80 border border-purple-400/40 cursor-pointer disabled:opacity-50  flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending Message...</span>
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
                className="px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto pt-16 z-10 relative"
            >
                <div className="grid gap-8 overflow-hidden rounded-3xl bg-[#1c0a36]/90 border border-purple-900/30 p-6 md:p-10 lg:grid-cols-2 shadow-2xl backdrop-blur-md items-center">
            
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl  border border-purple-900/30 flex items-center justify-center shrink-0 overflow-hidden shadow-inner">
                                <Image
                                    src="/logo.png"
                                    alt="Cornor Tech Pvt. Ltd. Logo"
                                    fill
                                    className="object-contain p-2"
                                    priority
                                />
                            </div>
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                                    Cornor Tech Pvt. Ltd.
                                </h3>
                                <p className="text-xs text-violet-400 font-semibold tracking-wider uppercase mt-1">
                                    Digital Solutions Agency
                                </p>
                            </div>
                        </div>

                        <p className="text-purple-200/90 leading-relaxed text-sm md:text-base">
                            Tilottama, Butwal, Rupandehi, Nepal
                        </p>

                        <div className="text-xs text-purple-300/70 space-y-1 font-mono bg-purple-950/60 p-4 rounded-xl border border-purple-500/20 w-fit">
                            <div>Registration No: <span className="text-white font-semibold">366203/81/82</span></div>
                            <div>PAN No: <span className="text-white font-semibold">622355199</span></div>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            href="https://www.google.com/maps/place/Cornor+Tech/@27.6600192,83.4629464,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-2 rounded-xl bg-purple-800 hover:bg-purple-700 text-white px-5 py-2.5 font-semibold shadow-md border border-purple-400/40 transition-all text-xs sm:text-sm"
                        >
                            <span>Open in Google Maps</span>
                            <span aria-hidden="true">↗</span>
                        </motion.a>
                    </div>

                    <div className="min-h-[380px]  overflow-hidden rounded shadow-inner">
                        <iframe
                            title="Cornor Tech Pvt. Ltd Location"
                            src="https://maps.google.com/maps?q=Cornor+Tech,27.6600192,83.4629464&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                            width="100%"
                            height="100%"
                            style={{ minHeight: "380px", border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                </div>
            </motion.section>
        </div>
    );
}