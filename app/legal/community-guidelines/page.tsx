'use client';

import React, { useState } from 'react';
import {
  Users,
  HeartHandshake,
  MessageSquare,
  Ban,
  FileEdit,
  Share2,
  Handshake,
  Globe2,
  ShieldAlert,
  AlertOctagon,
  Baby,
  RefreshCw,
  Scale,
  HelpCircle,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface CommunitySection {
  id: string;
  number: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const COMMUNITY_DATA: CommunitySection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    icon: <Users className="w-5 h-5 text-amber-400" />,
    content: [
      'These Community Guidelines ("Guidelines") outline the standards of conduct expected from everyone who interacts with Cornor Tech Pvt. Ltd. ("Cornor Tech", "we", "us", or "our")—including clients, creators, partners, followers, and visitors across our website, social media platforms, events, and any other community spaces we operate.',
      'Our goal is to foster a respectful, inclusive, and productive environment where ideas can be shared openly and professionally. By engaging with any Cornor Tech platform or community space, you agree to follow these guidelines.'
    ]
  },
  {
    id: 'our-core-values',
    number: '02',
    title: 'Our Core Values',
    icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
    content: [
      'Everything we do at Cornor Tech is guided by the following core values:',
      '• Respect: We treat every person with dignity regardless of their background, experience level, or perspective.',
      '• Inclusion: We welcome and celebrate diversity in all forms—nationality, gender, religion, age, and more.',
      '• Integrity: We communicate honestly and transparently, and we expect the same from our community.',
      '• Collaboration: We believe the best outcomes come from working together and supporting one another.',
      '• Innovation: We encourage curiosity, creativity, and constructive challenge of ideas.',
      'These values are not just aspirational—they are the standard by which all community interactions are measured.'
    ]
  },
  {
    id: 'respectful-communication',
    number: '03',
    title: 'Respectful Communication',
    icon: <MessageSquare className="w-5 h-5 text-amber-400" />,
    content: [
      'All community members are expected to communicate respectfully and professionally at all times. This means:',
      '— Keeping discussions civil, constructive, and focused on professional growth.',
      '— Avoiding personal attacks, insults, derogatory remarks, or inflammatory language.',
      '— Disagreeing constructively without resorting to hostility or disrespect.'
    ]
  },
  {
    id: 'prohibited-behavior',
    number: '04',
    title: 'Prohibited Behavior',
    icon: <Ban className="w-5 h-5 text-amber-400" />,
    content: [
      'To maintain a safe environment, the following behaviors are strictly prohibited:',
      '• Harassment, bullying, or intimidation of any member.',
      '• Hate speech, discrimination, or slurs based on race, ethnicity, religion, gender, sexual orientation, or disability.',
      '• Spamming, unsolicited advertising, or excessive self-promotion.',
      '• Sharing explicit, violent, or inappropriate content.',
      '• Impersonating Cornor Tech staff, representatives, or other community members.'
    ]
  },
  {
    id: 'content-standards',
    number: '05',
    title: 'Content Standards',
    icon: <FileEdit className="w-5 h-5 text-amber-400" />,
    content: [
      'Any content you post, share, or submit across our community channels must be accurate, lawful, and relevant.',
      'You must not infringe upon the intellectual property rights of others or share proprietary material without explicit permission.'
    ]
  },
  {
    id: 'social-media-conduct',
    number: '06',
    title: 'Social Media Conduct',
    icon: <Share2 className="w-5 h-5 text-amber-400" />,
    content: [
      'When interacting with Cornor Tech posts across LinkedIn, Facebook, Instagram, or other platforms, please keep comments professional and respectful.',
      'Misleading statements or defamatory comments directed at our team, clients, or partners will be removed.'
    ]
  },
  {
    id: 'client-partner-interactions',
    number: '07',
    title: 'Client & Partner Interactions',
    icon: <Handshake className="w-5 h-5 text-amber-400" />,
    content: [
      'Clients and partners working with Cornor Tech are expected to maintain professional correspondence during project lifecycles.',
      'Constructive feedback is welcomed, but abuse or harassment of project managers, designers, or developers will not be tolerated.'
    ]
  },
  {
    id: 'diversity-inclusion',
    number: '08',
    title: 'Diversity & Inclusion',
    icon: <Globe2 className="w-5 h-5 text-amber-400" />,
    content: [
      'Cornor Tech champions a diverse and inclusive digital ecosystem. We celebrate contributors from all walks of life and strictly prohibit any form of exclusionary behavior in our spaces.'
    ]
  },
  {
    id: 'intellectual-property',
    number: '09',
    title: 'Intellectual Property in the Community',
    icon: <ShieldAlert className="w-5 h-5 text-amber-400" />,
    content: [
      'Respect the intellectual property rights of Cornor Tech and fellow community members. Do not plagiarize, steal, or redistribute community resources, code snippets, or designs without attribution.'
    ]
  },
  {
    id: 'reporting-violations',
    number: '10',
    title: 'Reporting Violations',
    icon: <AlertOctagon className="w-5 h-5 text-amber-400" />,
    content: [
      'If you encounter behavior or content that violates these Community Guidelines, please report it immediately to our moderation team at info@cornortech.com.',
      'All reports will be reviewed confidentially.'
    ]
  },
  {
    id: 'enforcement',
    number: '11',
    title: 'Enforcement & Consequences',
    icon: <Scale className="w-5 h-5 text-amber-400" />,
    content: [
      'Failure to follow these Community Guidelines may result in consequences including:',
      '— Warnings or removal of offending content.',
      '— Temporary suspension from community channels or events.',
      '— Permanent ban from Cornor Tech platforms and termination of client relationships in severe cases.'
    ]
  },
  {
    id: 'childrens-minors',
    number: '12',
    title: 'Children & Minors',
    icon: <Baby className="w-5 h-5 text-amber-400" />,
    content: [
      'Our community spaces are designed for professional and educational engagement. Minors under 18 participating in our student initiatives or tech clubs must do so under appropriate supervision.'
    ]
  },
  {
    id: 'updates',
    number: '13',
    title: 'Updates to These Guidelines',
    icon: <RefreshCw className="w-5 h-5 text-amber-400" />,
    content: [
      'We may update these Community Guidelines periodically to reflect new community standards and policies. Continued engagement with our community constitutes acceptance of updated terms.'
    ]
  }
];

export default function CommunityGuidelinesPage() {
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
          <span className="text-[18vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
            COMMUNITY
          </span>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 rounded-full  ">
            <span className="text-sm text-gray-500 tracking-widest ">Home {'>'} Legal </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Community <span className="bg-violet-400  bg-clip-text text-transparent">Guidelines</span>
          </h1>

          <p className="text-purple-200/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Our community thrives on respect, inclusion, and collaboration. These guidelines define the standards we hold for everyone who engages with Cornor Tech.
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
                {COMMUNITY_DATA.map((item) => (
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
            {COMMUNITY_DATA.map((section) => (
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