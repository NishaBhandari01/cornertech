import React from 'react';
import Image from 'next/image';
import { ArrowRight, Newspaper, Lightbulb, Globe, NewspaperIcon, ExternalLink } from 'lucide-react';

interface NewsArticle {
  id: string;
  title: string;
  category: string;
  image: string;
  date?: string;
  link?: string;
}

interface NewsSectionProps {
  articles?: NewsArticle[];
}

const DEFAULT_ARTICLES: NewsArticle[] = [
  {
    id: '1',
    title: 'Cornor Tech ka CEO Ramit neupane "Annapurna Post" ma sammanit',
    category: 'HONORED',
    image: '/ramit.jpeg',
    date: 'March 28, 2026',
  },
  {
    id: '2',
    title: 'Skillful Saturday: Mapping Your Future',
    category: 'WEBINAR',
    image: '/ss.jpeg',
    date: 'June 12, 2026',
  },
  {
    id: '3',
    title: ' Digital literacy at Gaurichaur academy: Empowering Communities',
    category: 'NEWS',
    image: '/dh.jpeg',
    date: 'August 7, 2026',
  },
  {
    id: '4',
    title: 'Robotics Competition & Tech Expo',
    category: 'EVENT',
    image: '/expso.jpeg',
    date: 'November 20, 2026',
  },
];

export const NewsUpdatesSection: React.FC<NewsSectionProps> = ({
  articles = DEFAULT_ARTICLES,
}) => {
  return (
    <section className="relative w-full overflow-hidden py-16 px-6 sm:px-12 md:px-16 ">
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
        
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-4 py-1.5 border border-purple-500/20 text-xs font-semibold uppercase tracking-wider text-purple-300 backdrop-blur-md">
            <Newspaper className="h-3.5 w-3.5 text-purple-400" />
            <span>News & Updates</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-tight">
            Stay <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">
              updated with
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-200 to-slate-400 bg-clip-text text-transparent">
              Cornor Tech News
            </span>
          </h2>

          <p className="text-base text-slate-300 sm:text-lg leading-relaxed font-normal">
            Explore our latest articles, technical insights, and company updates.
            We share our expertise on modern technology trends and digital strategies
            to help your business stay ahead.
          </p>

          <div className="flex flex-col justify-start items-start gap-2 pt-2">
            <a
              href="#all-updates"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:scale-105 shadow-lg shadow-violet-600/30"
            >
              <NewspaperIcon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
              <span>View All Updates</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <span className="mt-2 text-xs text-slate-400 font-medium tracking-wide">
              Stay updated with Cornor Tech
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700/50 backdrop-blur-md transition-all hover:border-purple-500/40 hover:bg-slate-800/80">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              Insights
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700/50 backdrop-blur-md transition-all hover:border-purple-500/40 hover:bg-slate-800/80">
              <NewspaperIcon className="h-4 w-4 text-blue-400" />
              Tech News
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 border border-slate-700/50 backdrop-blur-md transition-all hover:border-purple-500/40 hover:bg-slate-800/80">
              <Globe className="h-4 w-4 text-emerald-400" />
              Community
            </span>
          </div>
        </div>

        <div className="w-full lg:max-w-xl grid grid-cols-2 gap-4">
          
          <div className="group relative row-span-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl transition-all duration-300 hover:border-violet-500/50 ">
            <div className="relative h-full min-h-[280px] sm:min-h-[340px] w-full overflow-hidden">
              <Image
                src={articles[0]?.image}
                alt={articles[0]?.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-4 sm:p-5 flex flex-col justify-end">
              <span className="mb-2 self-start rounded-md bg-purple-600/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                {articles[0]?.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white line-clamp-2 leading-snug group-hover:text-purple-300 transition-colors">
                {articles[0]?.title}
              </h3>
              {articles[0]?.date && (
                <p className="mt-1 text-xs text-slate-400">{articles[0]?.date}</p>
              )}
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl transition-all duration-300 hover:border-violet-500/50 ">
            <div className="relative h-36 sm:h-40 w-full overflow-hidden">
              <Image
                src={articles[1]?.image}
                alt={articles[1]?.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-3 sm:p-4 flex flex-col justify-end">
              <span className="mb-1 self-start rounded bg-indigo-600/80 px-2 py-0.5 text-[9px] font-bold uppercase text-white backdrop-blur-sm">
                {articles[1]?.category}
              </span>
              <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-1 group-hover:text-purple-300 transition-colors">
                {articles[1]?.title}
              </h3>
            </div>
          </div>


          <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl transition-all duration-300 hover:border-violet-500/50 ">
            <div className="relative h-36 sm:h-40 w-full overflow-hidden">
              <Image
                src={articles[2]?.image}
                alt={articles[2]?.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-3 sm:p-4 flex flex-col justify-end">
              <span className="mb-1 self-start rounded bg-pink-600/80 px-2 py-0.5 text-[9px] font-bold uppercase text-white backdrop-blur-sm">
                {articles[2]?.category}
              </span>
              <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-1 group-hover:text-purple-300 transition-colors">
                {articles[2]?.title}
              </h3>
            </div>
          </div>

          {/* Box 4: Wide Banner Card (Spans across 2 columns) */}
          <div className="group relative col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-xl transition-all duration-300 hover:border-violet-500/50">
            <div className="relative h-28 sm:h-32 w-full overflow-hidden">
              <Image
                src={articles[3]?.image}
                alt={articles[3]?.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent p-4 flex items-center justify-between">
              <div className="max-w-[75%] space-y-1">
                <span className="rounded bg-emerald-600/80 px-2 py-0.5 text-[9px] font-bold uppercase text-white backdrop-blur-sm">
                  {articles[3]?.category}
                </span>
                <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-1 group-hover:text-purple-300 transition-colors">
                  {articles[3]?.title}
                </h3>
              </div>
              <div className="rounded-full bg-white/10 p-2 text-white group-hover:bg-violet-600 transition-colors">
                <ExternalLink className="h-4 w-4" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewsUpdatesSection;