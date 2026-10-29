

"use client"






import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ChevronRight,
    Code2,
    Megaphone,
    Palette,
    PenTool,
    Smartphone,
    Cloud,
    ShoppingCart,
    HandHelping,
    CheckCircle2,
    Zap,
    ArrowRight,
    Pause,
    Play,
} from "lucide-react";
import Image from "next/image";

const servicesData = [
    {
        id: "web-development",
        badge: "DEVELOPMENT",
        popularBadge: "POPULAR",
        bannerTitle: "Build Beyond Boundaries",
        bannerImage: "/services/web_dev.webp",
        bannerSubtitle: "Custom websites that are fast, secure, and built to scale your business.",
        title: "Web Development",
        description: "Build modern, responsive, and scalable web applications using cutting-edge technologies and best practices.",
        features: [
            "Custom Website Development",
            "Progressive Web Apps (PWA)",
            "API Integration & Development"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "digital-marketing",
        badge: "MARKETING",
        popularBadge: "POPULAR",
        bannerTitle: "Make Your Brand Go Viral",
        bannerImage: "/services/digital.webp",
        bannerSubtitle: "SEO, social media, ads & campaigns that get results and ROI you can see.",
        title: "Digital Marketing",
        description: "Grow your business with data-driven digital marketing strategies that deliver measurable results.",
        features: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Analytics & Reporting"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "graphic-design",
        badge: "DESIGN",
        bannerTitle: "Branding With Impact",
        bannerImage: "/services/graphic.webp",
        bannerSubtitle: "Crafting strategies and identities that leave a lasting impression.",
        title: "Graphic Design",
        description: "Create stunning visual designs that communicate your brand message and captivate your audience.",
        features: [
            "Brand Identity Design",
            "Logo & Visual Assets",
            "Social Media Graphics"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "ui-ux-design",
        badge: "DESIGN",
        bannerTitle: "Design That Speaks!",
        bannerImage: "/services/UIUX.png",
        bannerSubtitle: "Seamless interfaces that make every click delightful and intuitive.",
        title: "UI/UX Design",
        description: "Design intuitive and beautiful user experiences that keep your customers engaged and satisfied.",
        features: [
            "User Research & Testing",
            "Wireframing & Prototyping",
            "Design System Creation"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "mobile-app-development",
        badge: "MOBILE",
        bannerTitle: "Apps People Love to Use",
        bannerImage: "/services/mobile_dev.webp",
        bannerSubtitle: "User-friendly and innovative apps for iOS and Android that drive engagement.",
        title: "Mobile App Development",
        description: "Develop powerful mobile applications for iOS and Android that engage users and drive growth.",
        features: [
            "Native iOS & Android Apps",
            "Cross-Platform Development",
            "App Store Optimization"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "cloud-solutions",
        badge: "CLOUD",
        bannerTitle: "Power Your Business From the Cloud",
        bannerImage: "/services/cloud.png",
        bannerSubtitle: "Seamless interfaces that make every click delightful and intuitive.",
        title: "Cloud Solutions",
        description: "Leverage cloud technology to scale your infrastructure and optimize your business operations.",
        features: [
            "AWS / Azure / GCP Setup",
            "DevOps & CI/CD",
            "Cost Optimization"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "e-commerce-solutions",
        badge: "E-COMMERCE",
        bannerTitle: "Your Store, Supercharged",
        bannerImage: "/services/e_com.webp",
        bannerSubtitle: "From shopping carts to payments, we build e-commerce platforms that sell.",
        title: "E-commerce Solutions",
        description: "Build powerful online stores that convert visitors into customers and drive revenue growth.",
        features: [
            "Custom E-commerce Platforms",
            "Payment Gateway Integration",
            "Order Management Systems"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    },
    {
        id: "content-creation",
        badge: "CONTENT",
        bannerTitle: "Content That Converts",
        bannerImage: "/services/content_creation.jpg",
        bannerSubtitle: "Engaging visuals, videos, and copy that captivate your audience.",
        title: "Content Creation",
        description: "Engage your audience with high-quality content that tells your story and builds trust.",
        features: [
            "Blog Writing & Articles",
            "Video Production",
            "Content Strategy Planning"
        ],
        tags: ["FAST", "QUALITY"],
        ctaText: "Get Started →"
    }
];


const serviceIcons = {
    "web-development": Code2,
    "digital-marketing": Megaphone,
    "graphic-design": Palette,
    "ui-ux-design": PenTool,
    "mobile-app-development": Smartphone,
    "cloud-solutions": Cloud,
    "e-commerce-solutions": ShoppingCart,
    "content-creation": HandHelping,
};

const serviceColors = [
    "from-violet-600 to-purple-500",
    "from-fuchsia-600 to-pink-500",
    "from-blue-600 to-indigo-500",
    "from-cyan-500 to-blue-600",
    "from-emerald-500 to-teal-600",
    "from-sky-500 to-indigo-600",
    "from-orange-500 to-rose-500",
    "from-amber-500 to-orange-600",
];

export default function ServicesShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(
        null
    );

    const activeService = servicesData[activeIndex];
    const ActiveIcon = serviceIcons[activeService.id];

    useEffect(() => {
        if (!isPlaying) return;

        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % servicesData.length);
        }, 6000);

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying]);

    const handleSelectService = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section className="relative isolate overflow-hidden border-y border-purple-500/20  px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-12 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-30"  style={{ backgroundImage:"radial-gradient(rgba(168,85,247,0.3) 1px, transparent 1px)",  backgroundSize: "28px 28px" }}/>

            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-20 -z-10 -translate-x-1/2 select-none whitespace-nowrap text-[17vw] font-black tracking-widest text-white/[0.025]">
                SERVICES
            </div>

            <div className="relative mx-auto max-w-7xl space-y-10 sm:space-y-14">
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">

                    <div className="space-y-5 lg:col-span-5">
                        <div className="flex items-center gap-2">
                            <span className="h-0.5 w-8 bg-purple-500" />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-300">
                                What We Do
                            </span>
                        </div>

                        <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                            We Build
                            <br />
                            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                                Digital Products
                            </span>
                            <br />
                            <span className="text-white/60">That Scale</span>
                        </h2>

                        <p className="max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
                            Every service is crafted with precision, performance,
                            and your growth in mind. Explore our solutions to
                            discover how we can help your business grow.
                        </p>
                    </div>

                    <div className="space-y-4 lg:col-span-7">
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-sm font-bold text-white sm:text-base">
                                Explore Our Services
                            </h3>

                            <span className="shrink-0 text-xs tabular-nums text-gray-500">
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(servicesData.length).padStart(2, "0")}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {servicesData.map((service, index) => {
                                const Icon = serviceIcons[service.id];
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={service.id}
                                        type="button"
                                        onClick={() => handleSelectService(index)}
                                        aria-pressed={isActive}
                                        className={`group flex min-w-0 items-center justify-between gap-3 rounded-xl border p-3.5 text-left transition-all duration-300 sm:p-4 ${isActive
                                            ? "border-purple-400/60 bg-purple-500/[0.13] shadow-[0_0_24px_rgba(139,92,246,0.12)]"
                                            : "border-white/[0.08] bg-white/[0.025] hover:border-purple-400/40 hover:bg-white/[0.05]"
                                            }`}
                                    >
                                        <div className="flex min-w-0 items-center gap-3">
                                            <div
                                                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all ${isActive
                                                    ? `bg-gradient-to-br ${serviceColors[index]} text-white`
                                                    : "border border-white/10 bg-white/[0.04] text-gray-400 group-hover:text-purple-300"
                                                    }`}
                                            >
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0 space-y-1">
                                                <p className="truncate text-sm font-semibold text-white">
                                                    {service.title}
                                                </p>
                                                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">
                                                    {service.badge}
                                                </p>
                                            </div>
                                        </div>

                                        <ChevronRight
                                            className={`h-4 w-4 shrink-0 transition-all ${isActive
                                                ? "translate-x-0.5 text-purple-300"
                                                : "text-gray-600 group-hover:translate-x-0.5 group-hover:text-purple-300"
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

   
                <div
                    className="relative"
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeService.id}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#19102b] via-[#100b1c] to-[#090711] shadow-[0_20px_80px_rgba(0,0,0,0.3)]"
                        >

                            <div className="grid grid-cols-1 lg:grid-cols-5">

                         
                                <div className="order-1 space-y-6 p-5 sm:p-8 lg:col-span-2 lg:p-10">

                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-purple-200">
                                            {activeService.badge}
                                        </span>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                                            {activeService.title}
                                        </h3>

                                        <p className="text-sm leading-7 text-gray-400 sm:text-base">
                                            {activeService.description}
                                        </p>
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-4 pt-2">
                                        <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-gray-300">
                                            What We Offer
                                        </h4>

                                        <div className="grid grid-cols-1 gap-2">
                                            {activeService.features.map((feature, index) => (
                                                <div
                                                    key={`${activeService.id}-${index}`}
                                                    className="flex items-start gap-2.5 rounded-lg p-2"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />

                                                    <span className="text-sm leading-5 text-gray-300">
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={`mailto:contact@yourdomain.com?subject=${encodeURIComponent(
                                            `Inquiry about ${activeService.title}`
                                        )}`}
                                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-950/30 transition-all hover:scale-[1.02] hover:shadow-purple-500/20"
                                    >
                                        Get Started
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </div>

            
                                <div className="relative order-2 col-span-1 min-h-[260px] overflow-hidden sm:min-h-[360px] lg:col-span-3 lg:min-h-[500px]">
                                    <Image
                                        src={activeService.bannerImage}
                                        alt={activeService.title}
                                        fill
                                        priority
                                        sizes="(max-width: 1023px) 100vw, 60vw"
                                        className="object-contain object-center"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#10091d] via-[#10091d]/30 to-transparent lg:bg-gradient-to-r lg:from-[#10091d]/50 lg:via-transparent lg:to-transparent" />
                                </div>

                            </div>

                        </motion.div>
                    </AnimatePresence>

                    <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            {servicesData.map((service, index) => (
                                <button
                                    key={service.id}
                                    type="button"
                                    onClick={() => handleSelectService(index)}
                                    aria-label={`Show ${service.title}`}
                                    aria-current={index === activeIndex ? "true" : undefined}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "w-8 bg-gradient-to-r from-violet-500 to-fuchsia-400"
                                        : "w-2 bg-white/20 hover:bg-purple-400/60"
                                        }`}
                                />
                            ))}
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
