import React from 'react';

export const AboutUsHero: React.FC = () => {
  return (
    <div className="w-full bg-[#faf9fe]">

      <section className="relative w-full min-h-[420px] overflow-hidden flex items-center px-6 md:px-16 lg:px-24 pt-16 pb-12">

        <div className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#8b5cf6 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[120px] sm:text-[160px] md:text-[220px] lg:text-[260px] font-black uppercase text-[#8b5cf6]/[0.07] tracking-tighter whitespace-nowrap leading-none">
            ABOUT US
          </span>
        </div>


        <div className="relative z-10 max-w-2xl space-y-4 mx-auto md:mx-0">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-purple-600 rounded-full" />
            <span className="text-xs font-bold tracking-widest uppercase text-purple-600">
              WHO WE ARE
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-[#1a1033]">
            Meet the Team <br />
            <span className="text-[#8b5cf6]">Behind </span>
            <span className="text-[#a3a3c2]">Cornor Tech.</span>
          </h1>

          <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed max-w-xl pt-1">
            We&apos;re a passionate team of innovators, designers, and developers dedicated to transforming businesses through technology.
          </p>
        </div>
      </section>


      <section className="relative z-10 px-6 md:px-16 lg:px-24 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1f0b40] text-purple-100/90 rounded-3xl p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-sm sm:text-base md:text-lg leading-relaxed font-normal text-purple-200/80">
              <p>
                Founded in 2023, <strong className="font-semibold text-white">Cornor Tech</strong> started with a simple mission: to bridge the gap between innovative ideas and technological implementation. What began as a small team of passionate developers has grown into a full-service digital agency serving clients worldwide.
              </p>

              <p>
                Today, we&apos;re proud to be a trusted partner for businesses ranging from startups to enterprises. Our multidisciplinary team combines expertise in web development, mobile apps, AI/ML, digital marketing, and design to deliver comprehensive solutions that drive growth.
              </p>

              <p>
                With over <strong className="font-semibold text-white">50+ successful projects</strong> and <strong className="font-semibold text-white">90+ satisfied clients</strong>, we continue to push the boundaries of what&apos;s possible in the digital realm.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHero;