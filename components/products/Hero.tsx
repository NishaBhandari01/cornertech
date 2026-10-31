'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink, Calendar, User, Sparkles } from 'lucide-react';

export interface Product {
  id: number;
  category: string;
  title: string;
  description: string;
  client: string;
  serviceDate: string;
  tools: string[];
  banner: string;
  previewUrl?: string;
}

const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    category: 'Web Development',
    title: 'Enterprise E-Commerce Platform',
    description: 'High-performance e-commerce architecture engineered with server-side rendering, real-time inventory synchronization, and secure multi-payment gateway integrations.',
    client: 'Nav Yantra Pvt. Ltd.',
    serviceDate: '2025',
    tools: ['Next.js', 'Node.js', 'Redis', 'PostgreSQL'],
    banner: '/product/navyan.png',
    previewUrl: 'https://navyantra.com',
  },
  {
    id: 2,
    category: 'EdTech Platform',
    title: 'Writeasy — Gamified Writing Platform',
    description: 'Interactive comprehension and creative writing platform featuring live weekly contests, collaborative stories, adaptive AI feedback, and tiered subscription plans.',
    client: 'Cornor Tech Pvt. Ltd.',
    serviceDate: '2024',
    tools: ['Next.js', 'Node.js', 'EdTech', 'Gamification', 'PostgreSQL'],
    banner: '/product/writeasy.png',
    previewUrl: '',
  },
  {
    id: 3,
    category: 'Digital Marketing',
    title: 'Social Media & Political Branding',
    description: 'Comprehensive digital campaign strategy for political leader Sulav Kharel (RSP, Rupandehi-2)—encompassing content architecture, social graphic design, and audience engagement metrics.',
    client: 'Sulav Kharel',
    serviceDate: '2026',
    tools: ['Content Strategy', 'Political Branding', 'Meta Ads', 'Canva'],
    banner: '/product/sulav_rsp.png',
    previewUrl: '',
  },
  {
    id: 4,
    category: 'POS & Logistics System',
    title: 'Smart Agro POS & Supply Chain',
    description: 'Offline-first point-of-sale system bridging rural farmers with local consumers. Includes real-time inventory tracking, agricultural pricing models, and PWA support.',
    client: 'Cornor Tech Pvt. Ltd.',
    serviceDate: '2026',
    tools: ['React.js', 'Express', 'MySQL', 'Socket.io', 'PWA'],
    banner: '/product/pos.png',
    previewUrl: '',
  },
];

export default function OurProducts() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleProductSelect = (index: number) => {
    setOpenIndex(index);
  };

  return (
    <section id="our_works" className="relative w-full bg-white text-purple-100 py-24 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-y border-purple-500/20 selection:bg-purple-600 selection:text-white">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
 
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-0 overflow-hidden opacity-10">
        <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
          IMPACT
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
     
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 h-fit">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#993EEB] ">
            <span className="h-[3px] w-6 bg-[#993EEB]" />
            <span className="text-xs font-bold tracking-widest uppercase">OUR PORTFOLIO</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#1a1033]">
            Our Works <br />
            <span className="text-[#8b5cf6]">
              That Deliver
            </span>
            <br/>
            <span className="text-[#a3a3c2]"> Real Impact.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg">
            Discover how we&apos;ve helped ambitious startups, political figures, and enterprise clients transform their digital presence through tailored technological solutions.
          </p>

        </div>

       
        <div className="lg:col-span-7 space-y-4">
          {PRODUCTS_DATA.map((product, index) => {
            const isOpen = openIndex === index;

            return (
              <div  key={product.id}  className={`bg-[#e6dde9] transition-all duration-300 rounded-2xl border overflow-hidden ${
                  isOpen ? ' shadow-[0_0_25px_rgba(153,62,235,0.2)]' : ' hover:bg-[#e6dde9]/40 border-purple-500/20 hover:border-purple-500/40'
                }`}
              >

                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex items-center justify-between py-5 px-6 w-full text-black/60 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold  bg-white px-2.5 py-1 rounded-lg border border-purple-500/30">
                      0{product.id}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold  transition-colors">
                      {product.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-white border border-purple-500/20">
                      {product.category}
                    </span>
                    <div
                      className={`p-1.5 rounded-full transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-purple-800 text-white' : 'bg-white text-purple-300'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden border-t border-purple-500/20"
                    >
                      <div className="p-6 space-y-4">
                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-purple-300/80">
                          <div className="flex items-center gap-2 text-black/60 font-semibold">
                            <span>Client -</span>
                            <span className="font-semibold text-gray-600">{product.client}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-gray-600">{product.serviceDate}</span>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base leading-relaxed text-gray-600 max-w-xl  font-normal">
                          {product.description}
                        </p>

                        <div className="relative w-2/3 h-56 sm:h-64 rounded-xl overflow-hidden border border-purple-500/30 bg-white">
                          <Image
                            src={product.banner}
                            alt={product.title}
                            fill
                            sizes="(max-width: 500px) 30vw, 20vw"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0217] via-transparent to-transparent opacity-80" />
                          
                          {product.previewUrl && (
                            <a
                              href={product.previewUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-lg bg-purple-900/90 hover:bg-purple-800 text-white text-xs font-semibold flex items-center gap-1.5 border border-purple-400/40 shadow-lg backdrop-blur-md transition-colors"
                            >
                              <span>Live Preview</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </div>

                        <div className="space-y-2 pt-2">
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-black/80">
                            <span>Technologies </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.tools.map((tool, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-white border border-purple-500/30 text-gray-800"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

      
          <div className="pt-4 flex items-center justify-between">
            <div className="text-xs font-mono text-gray-700/70">
              Select product to expand view
            </div>

            <div className="flex items-center gap-2">
              {PRODUCTS_DATA.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => handleProductSelect(index)}
                  aria-label={`Show ${service.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === openIndex
                      ? 'w-8 bg-purple-500 shadow-md shadow-purple-500/30'
                      : 'w-2.5 bg-purple-900/60 hover:bg-purple-700/80 border border-purple-500/20'
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