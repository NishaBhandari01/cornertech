'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Database,
  Eye,
  Cookie,
  Share2,
  Lock,
  Clock,
  UserCheck,
  Link as LinkIcon,
  Baby,
  Globe,
  RefreshCw,
  HelpCircle,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const PRIVACY_DATA: PrivacySection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'Cornor Tech Pvt. Ltd. ("Cornor Tech", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.',
      'Please read this policy carefully. If you disagree with its terms, please discontinue use of our services.'
    ]
  },
  {
    id: 'information-we-collect',
    number: '02',
    title: 'Information We Collect',
    icon: <Database className="w-5 h-5 text-amber-400" />,
    content: [
      'We may collect information about you in the following ways:',
      '• Personal Data: Name, email address, phone number, company name, and other identifiers you voluntarily provide when contacting us, filling out forms, or engaging our services.',
      '• Usage Data: Information automatically collected when you visit our website, including IP address, browser type, operating system, referring URLs, pages visited, and time spent on pages.',
      '• Communication Data: Records of correspondence if you contact us via email, phone, or our contact forms.',
      '• Project Data: Information shared with us in the course of delivering services, including business documents, briefs, assets, and feedback.'
    ]
  },
  {
    id: 'how-we-use-your-information',
    number: '03',
    title: 'How We Use Your Information',
    icon: <Eye className="w-5 h-5 text-amber-400" />,
    content: [
      'We use the information we collect for the following purposes:',
      '— To deliver, manage, and improve our services.',
      '— To communicate with you regarding projects, proposals, and support.',
      '— To send newsletters or updates (only with your consent).',
      '— To analyze website performance and enhance user experience.',
      '— To ensure regulatory compliance and prevent security incidents.'
    ]
  },
  {
    id: 'cookies-tracking',
    number: '04',
    title: 'Cookies & Tracking Technologies',
    icon: <Cookie className="w-5 h-5 text-amber-400" />,
    content: [
      'We use cookies and similar tracking technologies to track activity on our website and store certain information.',
      'Cookies help us analyze web traffic, remember user preferences, and optimize site speed and security. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
    ]
  },
  {
    id: 'sharing-information',
    number: '05',
    title: 'Sharing Your Information',
    icon: <Share2 className="w-5 h-5 text-amber-400" />,
    content: [
      'We do not sell, trade, or rent your personal information to third parties.',
      'We may share data with trusted service providers who assist us in operating our website, conducting our business, or servicing you, provided those parties agree to keep this information confidential.'
    ]
  },
  {
    id: 'data-storage-security',
    number: '06',
    title: 'Data Storage & Security',
    icon: <Lock className="w-5 h-5 text-amber-400" />,
    content: [
      'We implement robust administrative, technical, and physical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      'However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.'
    ]
  },
  {
    id: 'data-retention',
    number: '07',
    title: 'Data Retention',
    icon: <Clock className="w-5 h-5 text-amber-400" />,
    content: [
      'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.'
    ]
  },
  {
    id: 'your-rights',
    number: '08',
    title: 'Your Rights',
    icon: <UserCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'You have the right to access, correct, or delete your personal data stored with us.',
      'You may also object to or restrict certain processing activities, or withdraw your consent for promotional communications at any time.'
    ]
  },
  {
    id: 'third-party-links',
    number: '09',
    title: 'Third-Party Links',
    icon: <LinkIcon className="w-5 h-5 text-amber-400" />,
    content: [
      'Our website may contain links to external sites not operated by us. We strongly advise you to review the Privacy Policy of every site you visit, as we have no control over their content or practices.'
    ]
  },
  {
    id: 'childrens-privacy',
    number: '10',
    title: "Children's Privacy",
    icon: <Baby className="w-5 h-5 text-amber-400" />,
    content: [
      'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we discover a child has provided us with personal data, we will delete it immediately.'
    ]
  },
  {
    id: 'international-transfers',
    number: '11',
    title: 'International Data Transfers',
    icon: <Globe className="w-5 h-5 text-amber-400" />,
    content: [
      'Your information may be transferred to and maintained on computers located outside of your state or country where data protection laws may differ. Your submission of such information represents your agreement to that transfer.'
    ]
  },
  {
    id: 'changes-to-policy',
    number: '12',
    title: 'Changes to This Policy',
    icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    content: [
      'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with an updated date.'
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState<string>('introduction');

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
          <span className="text-[22vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
            PRIVACY
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 rounded-full  ">
            <span className="text-sm text-gray-500 tracking-widest ">Home {'>'} Legal </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Privacy <span className="bg-violet-400 bg-clip-text text-transparent">Policy</span>
          </h1>

          <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Your privacy matters to us. This policy explains how Cornor Tech collects, uses, and protects your personal information.
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
                {PRIVACY_DATA.map((item) => (
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
            {PRIVACY_DATA.map((section) => (
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