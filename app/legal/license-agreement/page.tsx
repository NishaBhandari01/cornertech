'use client';

import React, { useState } from 'react';
import {
  FileCheck,
  BookOpen,
  Key,
  ShieldCheck,
  Cpu,
  Lock,
  Code2,
  AlertTriangle,
  UserX,
  RefreshCw,
  Scale,
  HelpCircle,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface LicenseSection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const LICENSE_DATA: LicenseSection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    icon: <FileCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'This License Agreement ("Agreement") governs the terms under which Cornor Tech Pvt. Ltd. ("Cornor Tech", "we", "us", or "our") licenses deliverables, software, design assets, and other intellectual property to clients and users. By receiving, downloading, or using any deliverable from Cornor Tech, you agree to be bound by this Agreement. If you do not agree, please do not use or retain any licensed materials.'
    ]
  },
  {
    id: 'definitions',
    number: '02',
    title: 'Definitions',
    icon: <BookOpen className="w-5 h-5 text-amber-400" />,
    content: [
      'For the purposes of this Agreement:',
      '• Deliverables: Any software, code, design files, graphics, websites, mobile applications, or other creative works produced by Cornor Tech for a client.',
      '• Licensor: Cornor Tech Pvt. Ltd., the creator and owner of the deliverables.',
      '• Licensee: The client or individual who has engaged Cornor Tech and received deliverables under a signed project agreement.',
      '• Intellectual Property (IP): All creative works, inventions, designs, code, trade secrets, and other proprietary materials created by Cornor Tech.',
      '• Third-Party Components: Open-source libraries, stock assets, fonts, plugins, or tools incorporated into deliverables that are owned by parties other than Cornor Tech.'
    ]
  },
  {
    id: 'grant-of-license',
    number: '03',
    title: 'Grant of License',
    icon: <Key className="w-5 h-5 text-amber-400" />,
    content: [
      'Upon receipt of full payment as outlined in the project agreement, Cornor Tech grants the Licensee a non-exclusive, non-transferable, perpetual license to use the deliverables for the purposes specified in the project agreement.',
      'This license permits the Licensee to operate, deploy, and display the deliverables within their organization or business.'
    ]
  },
  {
    id: 'ownership-ip',
    number: '04',
    title: 'Ownership & Intellectual Property',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'Cornor Tech retains all underlying intellectual property rights, proprietary frameworks, and reusable code libraries developed prior to or during the project.',
      'The Licensee receives ownership of the customized final deliverables upon full payment, while Cornor Tech maintains the right to showcase the project in professional portfolios and case studies.'
    ]
  },
  {
    id: 'third-party-components',
    number: '05',
    title: 'Third-Party Components',
    icon: <Cpu className="w-5 h-5 text-amber-400" />,
    content: [
      'Deliverables may incorporate open-source software, plugins, fonts, or third-party assets. Use of these components is subject to their respective individual licenses and terms.',
      'Cornor Tech is not responsible for future changes, restrictions, or licensing fees imposed by third-party component providers.'
    ]
  },
  {
    id: 'restrictions',
    number: '06',
    title: 'Restrictions',
    icon: <Lock className="w-5 h-5 text-amber-400" />,
    content: [
      'Unless explicitly authorized in writing, the Licensee shall not:',
      '— Resell, sublicense, rent, lease, or redistribute the deliverables to third parties.',
      '— Reverse engineer, decompile, or extract source code from proprietary compiled systems.',
      '— Remove any copyright notices, branding marks, or proprietary legends embedded within deliverables.'
    ]
  },
  {
    id: 'source-code-design',
    number: '07',
    title: 'Source Code & Design Files',
    icon: <Code2 className="w-5 h-5 text-amber-400" />,
    content: [
      'Raw source files (such as Figma designs, uncompiled codebases, or project project configurations) are only provided if explicitly agreed upon in the project proposal.',
      'Additional fees may apply for the handover of raw editable design assets or proprietary backend architectures.'
    ]
  },
  {
    id: 'warranties-disclaimers',
    number: '08',
    title: 'Warranties & Disclaimers',
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    content: [
      'Deliverables are provided "as is" without warranty of any kind, either express or implied, including but not limited to merchantability or fitness for a particular purpose.',
      'Cornor Tech does not warrant that software deliverables will be uninterrupted or error-free in all environments.'
    ]
  },
  {
    id: 'indemnification',
    number: '09',
    title: 'Indemnification',
    icon: <Scale className="w-5 h-5 text-amber-400" />,
    content: [
      'The Licensee agrees to indemnify and hold Cornor Tech harmless from any claims, damages, or expenses resulting from misuse of deliverables or unauthorized modifications made by the client.'
    ]
  },
  {
    id: 'termination',
    number: '10',
    title: 'Termination',
    icon: <UserX className="w-5 h-5 text-amber-400" />,
    content: [
      'This license is effective until terminated. Cornor Tech reserves the right to terminate this license agreement immediately if the Licensee breaches any material terms or fails to complete agreed financial obligations.'
    ]
  },
  {
    id: 'limitation-liability',
    number: '11',
    title: 'Limitation of Liability',
    icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
    content: [
      'In no event shall Cornor Tech be liable for any indirect, special, incidental, or consequential damages arising out of the use or inability to use the deliverables.'
    ]
  },
  {
    id: 'governing-law',
    number: '12',
    title: 'Governing Law',
    icon: <Scale className="w-5 h-5 text-amber-400" />,
    content: [
      'This License Agreement shall be governed by and construed in accordance with the laws of Nepal, without regard to conflict of law principles.'
    ]
  },
  {
    id: 'amendments',
    number: '13',
    title: 'Amendments',
    icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    content: [
      'Cornor Tech reserves the right to modify or update this License Agreement at any time. Continued use of deliverables following updates constitutes acceptance of the modified terms.'
    ]
  }
];

export default function LicenseAgreementPage() {
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
          <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
            LICENSE
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 rounded-full  ">
            <span className="text-sm text-gray-500 tracking-widest ">Home {'>'} Legal </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            License <span className="bg-violet-400  bg-clip-text text-transparent">Agreement</span>
          </h1>

          <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            This agreement defines how deliverables, software, and intellectual property created by Cornor Tech may be used by clients and licensees.
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
                {LICENSE_DATA.map((item) => (
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
            {LICENSE_DATA.map((section) => (
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