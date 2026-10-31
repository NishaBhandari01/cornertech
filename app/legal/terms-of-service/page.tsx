'use client';

import React, { useState } from 'react';
import {
    ShieldCheck,
    FileText,
    Lock,
    CreditCard,
    Server,
    UserCheck,
    AlertCircle,
    RefreshCw,
    HelpCircle,
    Mail,
    ChevronRight,
    ExternalLink
} from 'lucide-react';

interface TermSection {
    id: string;
    number: string;
    title: string;
    icon: React.ReactNode;
    content: string[];
}

const TERMS_DATA: TermSection[] = [
    {
        id: 'acceptance',
        number: '01',
        title: 'Acceptance of Terms',
        icon: <UserCheck className="w-5 h-5 text-amber-400" />,
        content: [
            'By accessing or using the website and services provided by Cornor Tech Pvt. Ltd. ("Cornor Tech", "we", "us", or "our"), you agree to be bound by these Terms of Service.',
            'If you do not agree to these terms, please do not use our services. These terms apply to all visitors, clients, and anyone who accesses or uses our services.'
        ]
    },
    {
        id: 'services',
        number: '02',
        title: 'Services Provided',
        icon: <Server className="w-5 h-5 text-amber-400" />,
        content: [
            'Cornor Tech provides a range of digital services including but not limited to web development, mobile app development, UI/UX design, graphic design, digital marketing, cloud solutions, e-commerce development, branding & strategy, and content creation.',
            'The scope of services is defined in individual project agreements or contracts signed between Cornor Tech and the client.'
        ]
    },
    {
        id: 'client-responsibilities',
        number: '03',
        title: 'Client Responsibilities',
        icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
        content: [
            'Clients are responsible for providing accurate, complete, and timely information required for the execution of services. This includes project briefs, content, assets, feedback, and approvals.',
            'Delays caused by the client\'s failure to provide required materials may affect project timelines and deadlines, for which Cornor Tech shall not be held responsible.'
        ]
    },
    {
        id: 'payment-terms',
        number: '04',
        title: 'Payment Terms',
        icon: <CreditCard className="w-5 h-5 text-amber-400" />,
        content: [
            'Payment terms are outlined in individual project proposals or service agreements. Unless otherwise agreed, a deposit is required before project commencement.',
            'Final deliverables will be released upon receipt of full payment. Cornor Tech reserves the right to suspend or terminate services in the event of non-payment or delayed payment beyond the agreed terms.'
        ]
    },
    {
        id: 'intellectual-property',
        number: '05',
        title: 'Intellectual Property',
        icon: <FileText className="w-5 h-5 text-amber-400" />,
        content: [
            'Upon full and final payment, ownership of the final deliverables (source code, custom designs, and assets created specifically for the project) transfers to the client.',
            'Cornor Tech retains the right to display completed works in portfolios, case studies, and promotional channels unless explicitly agreed otherwise in a non-disclosure agreement (NDA).'
        ]
    },
    {
        id: 'confidentiality',
        number: '06',
        title: 'Confidentiality',
        icon: <Lock className="w-5 h-5 text-amber-400" />,
        content: [
            'Both parties agree to protect sensitive business information, proprietary data, passwords, and trade secrets shared during the course of the project.',
            'Neither party shall disclose confidential information to third parties without prior written consent, except as required by law.'
        ]
    },
    {
        id: 'revisions',
        number: '07',
        title: 'Revisions & Scope Changes',
        icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
        content: [
            'Projects include a specified number of revision rounds as defined in the project proposal. Additional changes or out-of-scope requests will be billed separately at standard hourly or milestone rates.',
            'Major scope changes require a formalized change order agreement.'
        ]
    },
    {
        id: 'limitation-liability',
        number: '08',
        title: 'Limitation of Liability',
        icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
        content: [
            'Cornor Tech shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our delivered solutions.',
            'Our total liability for any claim arising out of or relating to our services shall not exceed the total amount paid by the client for the specific project.'
        ]
    },
    {
        id: 'termination',
        number: '09',
        title: 'Termination',
        icon: <FileText className="w-5 h-5 text-amber-400" />,
        content: [
            'Either party may terminate a project agreement with written notice if the other party breaches material terms. Upon termination, the client is responsible for payment for all work completed up to the date of termination.'
        ]
    },
    {
        id: 'governing-law',
        number: '10',
        title: 'Governing Law',
        icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
        content: [
            'These Terms of Service shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.'
        ]
    },
    {
        id: 'changes',
        number: '11',
        title: 'Changes to Terms',
        icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
        content: [
            'We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the modified terms.'
        ]
    }
];


export default function TermsOfServicePage() {
    const [activeSection, setActiveSection] = useState<string>('acceptance');

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-[#17052e] mt-20 text-purple-100 font-sans selection:bg-purple-600 selection:text-white relative">
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0"
                style={{
                    backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.45) 1px, transparent 1px)',
                    backgroundSize: '28px 28px'
                }}
            />


            <section className="relative w-full pt-28 pb-16 px-6 sm:px-8 md:px-16 lg:px-24 border-b border-purple-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5">
                    <span className="text-[22vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-purple-950 whitespace-nowrap">
                        TERMS
                    </span>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 rounded-full">
                        <span className="text-sm text-purple-300/70 tracking-widest">Home {'>'} Legal</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                        Terms of <span className="bg-violet-400 bg-clip-text text-transparent">Service</span>
                    </h1>

                    <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
                        Please read these terms carefully before using our services. By engaging with Cornor Tech, you agree to be bound by the following conditions.
                    </p>

                    <div className="text-xs font-mono text-purple-400/70 pt-2">
                        Last Updated: October 2026 • Cornor Tech Pvt. Ltd.
                    </div>
                </div>
            </section>


            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 lg:px-24 py-16 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6 self-start">
                        <div className="bg-gradient-to-b from-[#1c0a36]/90 via-[#120427]/95 to-[#0b0217] border border-purple-900/30 rounded-2xl p-6 shadow-xl backdrop-blur-md">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 pb-3 ">
                                On This Page
                            </h3>

                            <nav className="space-y-1.5 pr-2">
                                {TERMS_DATA.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${
                                            activeSection === item.id
                                                ? 'bg-purple-800/80 text-white font-semibold border border-purple-400/50 shadow-md'
                                                : 'text-purple-300/80 hover:bg-purple-950/60 hover:text-white'
                                        }`}
                                    >
                                        <span className="truncate flex items-center gap-2">
                                            <span className="font-mono text-[#B87AF2] text-[10px]">{item.number}.</span>
                                            {item.title}
                                        </span>
                                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeSection === item.id ? 'text-white-400 translate-x-0.5' : 'opacity-0 group-hover:opacity-50'}`} />
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="bg-gradient-to-b from-[#1c0a36]/90 to-[#0b0217] border border-purple-900/30 rounded-2xl p-6 shadow-xl space-y-4">
                            <div className="w-10 h-10 rounded-xl border border-purple-900/30 flex items-center justify-center  shadow-inner">
                                <HelpCircle className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-sm font-bold text-white">Have questions?</h4>
                                <p className="text-xs text-purple-200/70 leading-relaxed">
                                    Reach out to us directly and we’ll get back to you within 24 hours.
                                </p>
                            </div>
                            <a
                                href="mailto:info@cornortech.com"
                                className="w-full py-2.5 px-4 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md border border-purple-400/40 transition-all flex items-center justify-center gap-2"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                <span>info@cornortech.com</span>
                            </a>
                        </div>

        
                        <div className="space-y-2.5 text-left bg-gradient-to-b from-[#1c0a36]/60 to-[#0b0217]/60 border border-purple-900/20 rounded-2xl p-5">
                            <span className="text-[11px] font-mono tracking-wider uppercase text-white font-bold block mb-2">Other Legal Pages</span>
                            <div>
                                <a href="/privacy" className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-amber-400 transition-colors font-medium">
                                    <span>View Privacy Policy</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div>
                                <a href="/license-agreement" className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-amber-400 transition-colors font-medium">
                                    <span>View License Agreement</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div>
                                <a href="/creator-terms" className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-amber-400 transition-colors font-medium">
                                    <span>View Creator Terms</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div>
                                <a href="/cookies-policy" className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-amber-400 transition-colors font-medium">
                                    <span>View Cookies Policy</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <div>
                                <a href="/community-guidelines" className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-amber-400 transition-colors font-medium">
                                    <span>View Community Guidelines</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                        {TERMS_DATA.map((section) => (
                            <div
                                key={section.id}
                                id={section.id}
                                className="bg-[#1c0a36]/90 border border-purple-900/25 hover:border-purple-900/50 rounded-2xl p-6 sm:p-8 shadow-2xl transition-all duration-300 space-y-4 relative overflow-hidden group scroll-mt-32"
                            >
                                <div className="flex items-center gap-3 ">
                                    <span className="text-sm font-mono font-bold text-[#B87AF2] tracking-wider">
                                        {section.number}.
                                    </span>
                                    <h2 className="text-xl font-bold text-white">
                                        {section.title}
                                    </h2>
                                </div>

                                <div className="space-y-4 text-purple-100/90 text-sm sm:text-base leading-relaxed font-normal">
                                    {section.content.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </div>
    );
}