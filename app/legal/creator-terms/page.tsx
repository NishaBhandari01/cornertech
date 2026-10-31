'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  UserCheck,
  ShieldCheck,
  FileEdit,
  Key,
  DollarSign,
  RefreshCw,
  Lock,
  AlertCircle,
  Ban,
  Briefcase,
  UserX,
  Scale,
  HelpCircle,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface CreatorSection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const CREATOR_TERMS_DATA: CreatorSection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    icon: <Sparkles className="w-5 h-5 text-amber-400" />,
    content: [
      'These Creator Terms ("Agreement") govern the relationship between Cornor Tech Pvt. Ltd. ("Cornor Tech", "we", "us", or "our") and individuals or entities ("Creators") who contribute content, services, or creative work to Cornor Tech or through our platforms.',
      'By registering as a creator, submitting content, or entering into a creative engagement with Cornor Tech, you agree to be bound by these terms.'
    ]
  },
  {
    id: 'who-is-a-creator',
    number: '02',
    title: 'Who Is a Creator',
    icon: <UserCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'For the purposes of this Agreement, a Creator is any individual or entity who:',
      '— Contributes written content, articles, or blog posts to Cornor Tech platforms.',
      '— Produces video, audio, or multimedia content for Cornor Tech.',
      '— Designs graphics, illustrations, or visual assets for Cornor Tech.',
      '— Develops software, code, or technical content in collaboration with Cornor Tech.',
      '— Participates in Cornor Tech’s affiliate, ambassador, or referral programs.',
      '— Provides freelance or contract creative services to Cornor Tech.',
      'Creators may be individuals, agencies, or businesses operating under a formal agreement with Cornor Tech.'
    ]
  },
  {
    id: 'registration-eligibility',
    number: '03',
    title: 'Creator Registration & Eligibility',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    content: [
      'To become a Creator with Cornor Tech, you must:',
      '— Be at least 18 years of age or have verifiable parental or guardian consent.',
      '— Provide accurate and complete information during registration or onboarding.',
      '— Have the legal right to enter into this Agreement in your jurisdiction.',
      '— Not be under any existing contractual obligation that prevents you from creating content for Cornor Tech.'
    ]
  },
  {
    id: 'content-standards',
    number: '04',
    title: 'Content Standards & Guidelines',
    icon: <FileEdit className="w-5 h-5 text-amber-400" />,
    content: [
      'All content submitted by Creators must comply with Cornor Tech’s quality and safety standards:',
      '• Originality: Content must be original, created by you, or properly licensed.',
      '• Accuracy: Technical content, tutorials, and articles must be factual and verified.',
      '• Appropriateness: Content must not contain hate speech, explicit material, or harmful instructions.',
      '• Brand Alignment: Content must reflect Cornor Tech’s professional values and visual identity.'
    ]
  },
  {
    id: 'intellectual-property',
    number: '05',
    title: 'Intellectual Property & Ownership',
    icon: <Key className="w-5 h-5 text-amber-400" />,
    content: [
      '• Work Made for Hire: Unless otherwise agreed in a separate written contract, content created specifically for Cornor Tech under a paid engagement is considered "work made for hire," and all rights transfer to Cornor Tech.',
      '• Pre-existing IP: Creators retain ownership of pre-existing materials, tools, or frameworks used within the project, granting Cornor Tech a perpetual, non-exclusive license to use them in connection with the deliverable.',
      '• Attribution: Cornor Tech will make reasonable efforts to credit Creators where appropriate (e.g., author bylines, video credits).'
    ]
  },
  {
    id: 'compensation-payment',
    number: '06',
    title: 'Compensation & Payment',
    icon: <DollarSign className="w-5 h-5 text-amber-400" />,
    content: [
      'Payment terms, rates, and schedules for Creator contributions are specified in individual engagement agreements, statement of works (SOW), or project briefs.',
      'Payments will be issued upon satisfactory completion and review of deliverables according to agreed milestones.'
    ]
  },
  {
    id: 'revisions-feedback',
    number: '07',
    title: 'Revisions & Feedback',
    icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    content: [
      'Creators agree to incorporate reasonable feedback and revisions requested by Cornor Tech’s editorial or project management team within agreed project timelines.'
    ]
  },
  {
    id: 'confidentiality',
    number: '08',
    title: 'Confidentiality',
    icon: <Lock className="w-5 h-5 text-amber-400" />,
    content: [
      'Creators may receive access to non-public information, project roadmaps, brand assets, or client data. Creators agree to keep all such information strictly confidential during and after their engagement.'
    ]
  },
  {
    id: 'representations-warranties',
    number: '09',
    title: 'Representations & Warranties',
    icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
    content: [
      'Creators represent and warrant that their submitted work does not infringe upon any third-party copyright, trademark, patent, trade secret, or privacy right.'
    ]
  },
  {
    id: 'prohibited-activities',
    number: '10',
    title: 'Prohibited Activities',
    icon: <Ban className="w-5 h-5 text-amber-400" />,
    content: [
      'Creators shall not:',
      '— Plagiarize or use uncredited AI-generated content where original human creation is specified.',
      '— Subcontract work to third parties without prior written consent from Cornor Tech.',
      '— Engage in unethical marketing practices, false advertising, or undisclosed affiliate links.'
    ]
  },
  {
    id: 'relationship-between-parties',
    number: '11',
    title: 'Relationship Between Parties',
    icon: <Briefcase className="w-5 h-5 text-amber-400" />,
    content: [
      'The relationship between Cornor Tech and the Creator is that of an independent contractor. Nothing in this Agreement creates an employment, partnership, or joint venture relationship.'
    ]
  },
  {
    id: 'termination',
    number: '12',
    title: 'Termination',
    icon: <UserX className="w-5 h-5 text-amber-400" />,
    content: [
      'Either party may terminate a Creator engagement with written notice. Upon termination, the Creator will be paid for approved work completed up to the termination date.'
    ]
  },
  {
    id: 'limitation-of-liability',
    number: '13',
    title: 'Limitation of Liability',
    icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
    content: [
      'Cornor Tech shall not be liable for any indirect, incidental, or consequential damages resulting from a Creator’s participation in our platforms or content programs.'
    ]
  },
  {
    id: 'governing-law',
    number: '14',
    title: 'Governing Law',
    icon: <Scale className="w-5 h-5 text-amber-400" />,
    content: [
      'These Creator Terms shall be governed by and construed in accordance with the laws of Nepal.'
    ]
  },
  {
    id: 'changes-to-terms',
    number: '15',
    title: 'Changes to These Terms',
    icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    content: [
      'We reserve the right to modify these terms at any time. Continued participation as a Creator following updates constitutes acceptance of the modified Creator Terms.'
    ]
  }
];

export default function CreatorTermsPage() {
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
          <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-600 to-purple-950 whitespace-nowrap">
            CREATOR
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 rounded-full  ">

            <span className="text-sm text-gray-500 tracking-widest ">Home {'>'} Legal </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Creator <span className="bg-violet-400 bg-clip-text text-transparent">Terms</span>
          </h1>

          <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            These terms govern the relationship between Cornor Tech and content creators, freelancers, and partners who contribute creative work to our platform.
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
                {CREATOR_TERMS_DATA.map((item) => (
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
            {CREATOR_TERMS_DATA.map((section) => (
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