import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface FooterLink {
    label: string;
    href: string;
}


const servicesLinks: FooterLink[] = [
    { label: 'Digital Marketing', href: '#' },
    { label: 'Web Development', href: '#' },
    { label: 'App Development', href: '#' },
    { label: 'SEO', href: '#' },
];

const worksLinks: FooterLink[] = [
    { label: 'Web Development', href: '#' },
    { label: 'Mobile Development', href: '#' },
    { label: 'AI & ML', href: '#' },
    { label: 'Digital Marketing', href: '#' },
];

const discoverLinks: FooterLink[] = [
    { label: 'News & Updates', href: '#' },
    { label: 'Blog & Insights', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Help', href: '#' },
];

const aboutLinks: FooterLink[] = [
    { label: 'Vision & Mission', href: '#' },
    { label: 'Team', href: '#' },
    { label: 'Contact', href: '#' },
];

const bottomLinks: FooterLink[] = [
    { label: 'Terms of Service', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookies Policy', href: '#' },
    { label: 'License Agreement', href: '#' },
    { label: 'Creator Terms', href: '#' },
    { label: 'Community Guidelines', href: '#' },
];

export const Footer: React.FC = () => {
    return (
        <footer className="relative  text-white pt-16 pb-12 px-6 lg:px-16 overflow-hidden">
            <div className="relative top-0 mb-10  translate-x-1/3 z-50">
            </div>
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12">

                    <div className="lg:col-span-2 space-y-4">
                        <div className="flex items-center gap-3">

                            <div className="relative w-14 h-14 rounded-xl  flex items-center justify-center shadow-sm overflow-hidden bg-violet-300">
                                <Image
                                    src="/logo.png"
                                    alt="Cornor Tech Pvt. Ltd. Logo"
                                    fill
                                    className="object-contain"
                                    sizes="44px"
                                    priority
                                />
                            </div>

                            <div>
                                <h3 className="font-bold text-lg  leading-tight">
                                    Cornor Tech <br />
                                    <span className="text-base font-semibold ">Pvt. Ltd</span>
                                </h3>
                                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-1">
                                    REG NO. 366203/81/82 <br />
                                    PAN NO. 622355199
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-300 text-sm leading-relaxed max-w-sm pt-2">
                            Where tech meets solution ! Empowering individuals and businesses with cutting-edge digital solutions.
                        </p>

                        <a
                            href="mailto:info@cornortech.com"
                            className="inline-flex items-center gap-2 text-slate-300 font-medium text-sm hover:text-purple-600 transition-colors pt-2 group"
                        >
                            <Mail className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                            <span>info@cornortech.com</span>
                        </a>
                    </div>


                    <div>
                        <h4 className="font-bold text-xs tracking-wider uppercase text-purple-800 mb-4">SERVICES</h4>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-300 hover:text-purple-600 hover:scale-105  hover:font-semibold  transition-all">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs tracking-wider uppercase text-purple-800 mb-4">OUR WORKS</h4>
                        <ul className="space-y-3">
                            {worksLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-300 hover:text-purple-600 hover:scale-105  hover:font-semibold  transition-all">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs tracking-wider uppercase text-purple-800 mb-4">DISCOVER</h4>
                        <ul className="space-y-3">
                            {discoverLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-300 hover:text-purple-600 hover:scale-105  hover:font-semibold  transition-all">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xs tracking-wider uppercase text-purple-800 mb-4">ABOUT US</h4>
                        <ul className="space-y-3">
                            {aboutLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-slate-300 hover:text-purple-600 hover:scale-105  hover:font-semibold  transition-all">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>


                <div className="border-t border-slate-900 my-4" />

                <div className="pt-4 flex flex-col items-center gap-4 text-xs text-slate-400">
                    <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                        {bottomLinks.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <a href={link.href} className="hover:text-purple-600 transition-colors">
                                    {link.label}
                                </a>
                                {index < bottomLinks.length - 1 && (
                                    <span className="text-slate-300">·</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <p className="text-slate-500 font-medium">
                        © 2026 Cornor Tech Pvt. Ltd. All Rights Reserved
                    </p>
                </div>
            </div>



        </footer>
    );
};

export default Footer;