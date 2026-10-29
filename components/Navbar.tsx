import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Works', href: '/works' },
    { label: 'Products', href: '/products' },
    { label: 'Career', href: '/career' },
];

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#120524]/85 backdrop-blur-md shadow-lg shadow-purple-950/30 py-3'
                    : 'bg-[#120524] py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="relative w-11 h-11 flex items-center justify-center"
                    >
                        <div className="absolute inset-0 bg-purple-600/30 rounded-xl blur-md group-hover:bg-purple-500/40    0 transition-all" />
                        <Image
                            src="/logo.png" 
                            alt="Cornor Tech Logo"
                            width={44}
                            height={44}
                            className="relative object-contain drop-shadow"
                            priority
                        />
                    </motion.div>
                    <span className="font-bold tracking-wider text-white text-base sm:text-lg bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                        CORNOR TECH
                    </span>
                </Link>

        
                <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-inner">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="relative px-4 py-2 text-sm font-medium text-purple-100/80 hover:text-[#FBD384] transition-colors group"
                        >
                            {item.label}
        
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-violet-600/40 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                layoutId="nav-pill"
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        </Link>
                    ))}
                </nav>

      
                <div className="flex items-center gap-3">
                    <div className="hidden sm:flex items-center gap-4 pl-2 border-l border-white/10">
    
                        <motion.a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 border border-white/10 flex items-center justify-center text-purple-200 hover:text-white transition-colors"
                            aria-label="Facebook"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </motion.a>

 
                        <motion.a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 border border-white/10 flex items-center justify-center text-purple-200 hover:text-white transition-colors"
                            aria-label="Instagram"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </motion.a>


                        <motion.a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            whileHover={{ scale: 1.15, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 rounded-full bg-white/5 hover:bg-purple-600/30 border border-white/10 flex items-center justify-center text-purple-200 hover:text-white transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </motion.a>
                    </div>

  
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none hover:bg-white/10 transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>


            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-[#120524]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 overflow-hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-base font-medium text-purple-200 hover:text-white hover:bg-purple-600/20 px-4 py-3 rounded-xl transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="flex items-center gap-4 pt-4 mt-3 border-t border-white/10 justify-center">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 text-purple-200 hover:text-white border border-white/10" aria-label="Facebook">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 text-purple-200 hover:text-white border border-white/10" aria-label="Instagram">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white/5 text-purple-200 hover:text-white border border-white/10" aria-label="LinkedIn">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Navbar;