import React from 'react';
import Image from 'next/image';

export interface SocialLinks {
  linkedin?: string;
  github?: string;
  x?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
  skills: string[];
  socials: SocialLinks;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ramit',
    name: 'Ramit Neupane',
    role: 'Founder & CEO',
    image: '/team/founder.webp', 
    description: 'Visionary leader driving the strategic direction, business growth, and overall corporate innovation at Cornor Tech.',
    skills: ['Leadership', 'Business Strategy', 'Innovation'],
    socials: {
      linkedin: 'https://linkedin.com/in/ramit-neupane',
      github: 'https://github.com/ramitneupane',
      x: 'https://x.com/ramitneupane',
    },
  },
  {
    id: 'santosh',
    name: 'Santosh Kunwar',
    role: 'Chief Operational Officer',
    image: '/team/coo.webp',
    description: 'Oversees day-to-day operations and technical architectures, specializing in full-stack engineering, cloud infrastructure, and AI/ML solutions.',
    skills: ['Full-Stack', 'AI/ML', 'Cloud'],
    socials: {
      linkedin: 'https://linkedin.com/in/santosh-kunwar',
      github: 'https://github.com/santoshkunwar',
      x: 'https://x.com/santoshkunwar',
    },
  },
  {
    id: 'rubi',
    name: 'Rubi Ale',
    role: 'Marketing Head',
    image: '/team/mh.webp',
    description: 'Directs market positioning, brand identity expansion, and targeted digital acquisition campaigns to elevate client reach.',
    skills: ['Digital Marketing', 'Brand Strategy', 'Market Research'],
    socials: {
      linkedin: 'https://linkedin.com/in/rubi-ale',
      github: 'https://github.com/rubiale',
      x: 'https://x.com/rubiale',
    },
  },
  {
    id: 'laxman',
    name: 'Laxman Neupane',
    role: 'Chief Financial Officer',
    image: '/team/cfo.webp',
    description: 'Manages financial planning, resource budgeting, and fiscal risk mitigation to ensure sustainable enterprise development.',
    skills: ['Financial Planning', 'Budget Management', 'Risk Analysis'],
    socials: {
      linkedin: 'https://linkedin.com/in/laxman-neupane',
      github: 'https://github.com/laxmanneupane',
      x: 'https://x.com/laxmanneupane',
    },
  },
  {
    id: 'aman',
    name: 'Aman Pokhrel',
    role: 'Organizational Manager',
    image: '/team/om.webp',
    description: 'Coordinates cross-functional teams and optimizes internal project workflows to guarantee seamless organizational productivity.',
    skills: ['Team Management', 'Operations', 'Coordination'],
    socials: {
      linkedin: 'https://linkedin.com/in/aman-pokhrel',
      github: 'https://github.com/amanpokhrel',
      x: 'https://x.com/amanpokhrel',
    },
  },
];

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="group bg-white rounded-3xl border border-purple-100/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden h-full">
  
      <div className="bg-gradient-to-b from-[#f3eeff] to-[#e8ddff] pt-8 pb-6 px-4 flex items-center justify-center relative">
        <div className="relative w-46 h-46 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="164px"
          />
        </div>
      </div>

   
      <div className="p-6 flex flex-col flex-grow text-center bg-white">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
          {member.name}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mt-1 mb-3">
          {member.role}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-grow font-normal">
          {member.description}
        </p>

        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100"
            >
              {skill}
            </span>
          ))}
        </div>


        <div className="flex items-center justify-center gap-3 pt-4 border-t border-slate-100">
    
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s LinkedIn`}
              className="w-8 h-8 rounded-full bg-slate-50 hover:bg-purple-600 hover:text-white border border-slate-200/80 text-slate-600 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}

   
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s GitHub`}
              className="w-8 h-8 rounded-full bg-slate-50 hover:bg-purple-600 hover:text-white border border-slate-200/80 text-slate-600 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}

   
          {member.socials.x && (
            <a
              href={member.socials.x}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name}'s X profile`}
              className="w-8 h-8 rounded-full bg-slate-50 hover:bg-purple-600 hover:text-white border border-slate-200/80 text-slate-600 flex items-center justify-center transition-all duration-200 transform hover:scale-110"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const LeadershipTeam: React.FC = () => {
  const topRow = teamMembers.slice(0, 2); 
  const centerMember = teamMembers[2];   
  const bottomRow = teamMembers.slice(3, 5); 

  return (
    <section className="w-full bg-[#faf9fe] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">

        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1033] tracking-tight">
            Leadership Team
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            Meet the talented individuals driving innovation and success at Cornor Tech.
          </p>
        </div>

        <div className="space-y-8">
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {topRow.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>


          <div className="max-w-md mx-auto">
            <MemberCard member={centerMember} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bottomRow.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;