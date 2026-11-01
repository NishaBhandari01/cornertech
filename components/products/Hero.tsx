import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Tag, CheckCircle2, Layers } from 'lucide-react';
import Image from 'next/image';

const PRODUCTS = [
  {
    id: 1,
    category: "HOSPITALITY SOFTWARE",
    badge: "FESTIVE OFFER - 44% OFF",
    title: "Atithi RMS",
    subtitle: "Restaurant Management, Simplified",
    bannerImage: "/product/athiti.png",
    description: "One system for your whole restaurant — orders, tables, kitchen (KOT), IRD-ready billing with VAT, online orders with delivery riders, stock, staff...",
    hasPricing: true,
    tag: "DASHAIN FESTIVE PRICE",
    originalPrice: "NPR 20,000",
    currentPrice: "NPR 11,111 / year",
    savings: "You save NPR 8,889 • Premium plan",
    features: ["Order & KOT Management", "Kitchen Display System", "IRD Billing & VAT"],
    link: "#"
  },
  {
    id: 2,
    category: "RETAIL SOFTWARE",
    badge: "DASHAIN OFFER - 44% OFF",
    title: "Artha POS",
    subtitle: "Point of Sale, Reimagined",
    bannerImage: "/product/artha pos.png",
    description: "An offline-capable point-of-sale system for retail stores, grocery shops, supermarkets, and beverage outlets — built for fast billing, accurate inventory,...",
    hasPricing: true,
    tag: "DASHAIN FESTIVE PRICE",
    originalPrice: "NPR 20,000",
    currentPrice: "NPR 11,111 / year",
    savings: "You save NPR 8,889 • Premium plan",
    features: ["Offline Billing", "Barcode Scanning", "Inventory"],
    link: "#"
  },
  {
    id: 3,
    category: "ARTIFICIAL INTELLIGENCE",
    badge: null,
    title: "Cornor Tech AI",
    subtitle: "AI-based solutions & automation products and services.",
    bannerImage: "/product/cornor ai.png",
    description: "Cutting-edge AI-based solutions, intelligent automation products, and custom software services built to streamline workflows, enhance decision-...",
    hasPricing: false,
    features: ["AI Automation", "Custom Solutions", "Workflow Pipelines"],
    link: "#"
  },
  {
    id: 4,
    category: "COMMUNICATION & MESSAGING",
    badge: null,
    title: "Cornor SMS",
    subtitle: "SMS platform for bulk messaging, OTP and API integrations.",
    bannerImage: "/product/cornor sms.png",
    description: "A reliable, scalable SMS platform built for businesses — offering high-volume bulk promotions, secure transactional OTPs, and robust RESTful API...",
    hasPricing: false,
    features: ["Bulk SMS", "Transactional OTP", "API Integration"],
    link: "#"
  },
  {
    id: 5,
    category: "HEALTHCARE",
    badge: "COMING SOON",
    title: "Arogya CMS",
    subtitle: "Clinic Management System.",
    bannerImage: "/product/aarogya.png",
    description: "An offline-capable clinic management system for medical practices, healthcare centers, and outpatient clinics — built for fast patient billing,...",
    hasPricing: false,
    features: ["Offline Billing", "Barcode Scanning", "Medical Inventory"],
    link: "#"
  }
];

export default function ProductShowcase() {
  return (


    <section id="products" className="relative w-full bg-[#0b0217] text-purple-100 py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden font-sans  selection:bg-purple-600 selection:text-white">
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />


      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5">
        <span className="text-[16vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
          Products
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#eae9eb] shadow-inner">
              <span className="h-[3px] w-8 bg-[#993EEB]"></span>
              <span className="text-xs font-bold tracking-widest uppercase">Our Products</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Digital
              <span className="bg-violet-400  bg-clip-text text-transparent"> Solutions
              </span>
              <br />
              <span className="text-white/60">For the future.</span>
            </h2>

            <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
              From restaurant management to retail POS, AI solutions, our products are designed to handle business operations fast, reliably, and with seamless user experiences.
            </p>
          </div>


        </div>

      </div>


      <div className="min-h-screen p-6 md:p-12 text-white ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-gradient-to-b from-[#16102f] to-[#0d0922] rounded-3xl border border-purple-900/20 shadow-2xl  flex flex-col justify-between group overflow-hidden"
            >

              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500 pointer-events-none" />

              <div>

                <div className="relative h-44 w-full overflow-hidden bg-purple-950/40 flex items-center justify-center">
               {product.bannerImage ? (
                  <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                    <Image
                      src={product.bannerImage}
                      alt={product.title}
                      fill
                      className="object-cover "
                      sizes="(max-width: 768px) 100vw, 112px"
                      priority={index < 3}
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-purple-900/60 via-purple-950 to-indigo-950 flex flex-col items-center justify-center p-4 relative">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 text-purple-300" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-purple-200/80 uppercase">
                      {product.title}
                    </span>
                  </div>
                )}

                  {/* Styled Geometric Fallback Container */}
                  <div
                    className={`w-full h-full bg-gradient-to-tr from-purple-900/60 via-purple-950 to-indigo-950 flex flex-col items-center justify-center p-4 relative ${product.bannerImage ? 'hidden' : 'flex'
                      }`}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-400/30 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Layers className="w-6 h-6 text-purple-300" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-purple-200/80 uppercase">
                      {product.title}
                    </span>
                  </div>

                  {/* Gradient Overlay for Smooth Visual Flow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16102f] via-transparent to-black/30 pointer-events-none" />

                  {/* Top Category Badge over Banner */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                    <span className="text-[10px] font-extrabold tracking-widest text-purple-200 uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-purple-500/30">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1 backdrop-blur-md ${product.badge.includes("OFF")
                            ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black animate-pulse"
                            : "bg-purple-600/90 text-white border border-purple-400/40"
                          }`}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body Details */}
                <div className="p-6 pt-4">
                  <h2 className="text-2xl font-black tracking-tight text-white group-hover:text-purple-400 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-xs font-semibold text-purple-200/70 mt-1">
                    {product.subtitle}
                  </p>

                  <p className="text-xs text-gray-300/80 mt-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Festive Pricing Box */}
                  {product.hasPricing && (
                    <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-purple-900/20 to-purple-950/40 border border-amber-500/30 relative">
                      <div className="text-[10px] font-bold text-amber-400 tracking-wider flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {product.tag}
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xs text-gray-400 line-through font-mono">
                          {product.originalPrice}
                        </span>
                        <span className="text-lg font-extrabold text-amber-300 font-mono">
                          {product.currentPrice}
                        </span>
                      </div>
                      <div className="text-[10px] text-purple-300 font-medium mt-1">
                        {product.savings}
                      </div>
                    </div>
                  )}

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 my-5">
                    {product.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-xl text-[11px] font-medium bg-purple-950/60 text-purple-200 border border-purple-500/20 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0" />
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Action Link */}
              <div className="px-6 pb-6 pt-4 border-t border-purple-900/40">
                <a
                  href={product.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Read Full Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>




  );
}