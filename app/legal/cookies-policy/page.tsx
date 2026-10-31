'use client';

import React, { useState } from 'react';
import {
  Cookie,
  Eye,
  Layers,
  Share2,
  Clock,
  Settings,
  ShieldCheck,
  Sliders,
  Smartphone,
  RefreshCw,
  Scale,
  HelpCircle,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface CookieSection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const COOKIES_DATA: CookieSection[] = [
  {
    id: 'what-are-cookies',
    number: '01',
    title: 'What Are Cookies',
    icon: <Cookie className="w-5 h-5 text-amber-400" />,
    content: [
      'Cookies are small text files that are placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide information to website owners.',
      'Cookies do not contain personally identifiable information on their own, but they can be linked to personal data we hold about you.'
    ]
  },
  {
    id: 'how-we-use-cookies',
    number: '02',
    title: 'How We Use Cookies',
    icon: <Eye className="w-5 h-5 text-amber-400" />,
    content: [
      'Cornor Tech Pvt. Ltd. uses cookies and similar tracking technologies on our website for the following purposes:',
      '— To ensure our website functions correctly and securely',
      '— To remember your preferences and settings',
      '— To analyze how visitors use our website',
      '— To measure the effectiveness of our content and marketing',
      '— To improve the overall user experience',
      'We do not use cookies to serve third-party advertisements or sell your data to advertisers.'
    ]
  },
  {
    id: 'types-of-cookies',
    number: '03',
    title: 'Types of Cookies We Use',
    icon: <Layers className="w-5 h-5 text-amber-400" />,
    content: [
      '• Essential Cookies: These cookies are strictly necessary for our website to function. They enable core features such as page navigation, security, and access to protected areas. Without these cookies, the website cannot operate properly.',
      '• Analytics Cookies: These help us understand how visitors interact with our website by collecting anonymous information such as pages visited, time spent, and traffic sources. We use this data to improve our website. (e.g., Google Analytics)',
      '• Functional Cookies: These allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalized features.',
      '• Marketing / Tracking Cookies: Used to track visitors across websites to display relevant promotional campaigns and measure campaign performance.'
    ]
  },
  {
    id: 'third-party-cookies',
    number: '04',
    title: 'Third-Party Cookies',
    icon: <Share2 className="w-5 h-5 text-amber-400" />,
    content: [
      'In addition to our own cookies, we may also use various third-party cookies from trusted partners (such as analytics providers and embedded media services) to report usage statistics and deliver certain features.',
      'These third parties have their own privacy and cookie policies governing how they use information.'
    ]
  },
  {
    id: 'cookie-duration',
    number: '05',
    title: 'Cookie Duration',
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    content: [
      '• Session Cookies: These are temporary cookies that expire and are automatically deleted as soon as you close your web browser.',
      '• Persistent Cookies: These remain on your device for a set period or until you manually delete them. They are used to recognize you when you return to our site and remember your preferences.'
    ]
  },
  {
    id: 'managing-preferences',
    number: '06',
    title: 'Managing Your Cookie Preferences',
    icon: <Settings className="w-5 h-5 text-amber-400" />,
    content: [
      'You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting your browser settings.',
      'Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. Please note that blocking essential cookies may impact your ability to use certain features of our website.'
    ]
  },
  {
    id: 'cookies-personal-data',
    number: '07',
    title: 'Cookies & Personal Data',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'Information collected through cookies may be combined with other personal data we collect from you, in accordance with our Privacy Policy. For more details on how we handle personal data, please review our Privacy Policy.'
    ]
  },
  {
    id: 'do-not-track',
    number: '08',
    title: 'Do Not Track Signals',
    icon: <Sliders className="w-5 h-5 text-amber-400" />,
    content: [
      'Some web browsers incorporate "Do Not Track" (DNT) features. At this time, our website does not respond to browser DNT signals as there is no uniform industry standard for compliance.'
    ]
  },
  {
    id: 'mobile-devices',
    number: '09',
    title: 'Cookies on Mobile Devices',
    icon: <Smartphone className="w-5 h-5 text-amber-400" />,
    content: [
      'When accessing our website or services via mobile devices, similar tracking technologies or identifier tokens may be used. You can manage these permissions directly within your mobile operating system settings.'
    ]
  },
  {
    id: 'updates-to-policy',
    number: '10',
    title: 'Updates to This Policy',
    icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    content: [
      'We may update this Cookies Policy from time to time to reflect changes in technology, legal requirements, or our operational practices. Any changes will be posted on this page with an updated revision date.'
    ]
  },
  {
    id: 'governing-law',
    number: '11',
    title: 'Governing Law',
    icon: <Scale className="w-5 h-5 text-amber-400" />,
    content: [
      'This Cookies Policy is governed by and construed in accordance with the laws of Nepal, without regard to conflict of law principles.'
    ]
  }
];

export default function CookiesPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('what-are-cookies');

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

      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <section className="relative w-full pt-24 pb-16 px-6 sm:px-8 md:px-16 lg:px-24 border-b border-purple-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-5">
          <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
            COOKIES
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 rounded-full  ">
            <span className="text-sm text-gray-500 tracking-widest ">Home {'>'} Legal </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Cookies <span className="bg-violet-400  bg-clip-text text-transparent">Policy</span>
          </h1>

          <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            This policy explains how Cornor Tech uses cookies and similar tracking technologies when you visit our website.
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
                {COOKIES_DATA.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group cursor-pointer ${activeSection === item.id
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
            {COOKIES_DATA.map((section) => (
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