import React, { useState, useMemo, useRef } from 'react';
import {
  Quote,
  Star,
  CheckCircle2,
  X,
  Send,
  MessageSquarePlus,
  LayoutGrid,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import Image from 'next/image';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  tag: string;
  avatar: string;
  quote: string;
  rating: number;
  impactMetrics?: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Sulav Kharel',
    role: 'MP Of Nepal & Political Leader',
    organization: 'Rastriya Swatantra Party (RSP)',
    tag: 'Social Media Marketing',
    avatar: '/testimonial/sulav_kharel.webp',
    quote:
      'Cornor Tech managed our social media content with excellent professionalism and creativity. Their team understood our audience and delivered clear, engaging, and impactful content consistently. Our digital presence saw noticeable improvement in a short time.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Bhusan Giri',
    role: 'Co-Founder',
    organization: 'ARKBO Technologies Pvt. Ltd',
    tag: 'Web Development',
    avatar: '/testimonial/bhusan_giri.webp',
    quote:
      'We had a great experience working with the team. They took the time to understand our needs and delivered a clean, well-structured design that truly fits our vision.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Padam Neupane',
    role: 'Branch Manager',
    organization: 'Siddhartha Cottage Butwal',
    tag: 'Social Media Marketing',
    avatar: '/testimonial/padam_neupane.webp',
    quote:
      'Cornor Tech transformed our digital marketing and Meta boosting campaigns at Siddhartha Cottage Butwal. Their strategies, insights, and execution helped us reach more customers effectively and improve engagement. The team is professional, responsive, and results-driven—I highly recommend their services.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Manish Thapa',
    role: 'Managing Director',
    organization: 'Nav Yantra Trading Pvt. Ltd',
    tag: 'Web Development',
    avatar: '/testimonial/manish_thapa.webp',
    quote:
      "Cornor Tech delivered an outstanding website for Nav Yantra Trading. Their professionalism, technical expertise, and attention to detail made the process smooth and efficient. I'm very impressed with the final product and highly recommend their web development services.",
    rating: 5,
  },
  {
    id: '5',
    name: 'Roshan Neupane',
    role: 'Managing Director',
    organization: 'SR Creations Pvt. Ltd',
    tag: 'Web Development',
    avatar: '/testimonial/roshan_neupane.webp',
    quote:
      'Cornor Tech has been fantastic in handling both our web development and video editing needs. Their creativity, technical skills, and timely delivery helped SR Creations Pvt. Ltd. enhance its digital presence and content quality. Highly recommended for anyone looking for reliable tech solutions.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Bardan Acharya',
    role: 'Managing Director',
    organization: 'Dynamic Education Center',
    tag: 'Social Media Marketing',
    avatar: '/testimonial/bardan_acharya.webp',
    quote:
      'Cornor Tech helped Dynamic Education strengthen its digital marketing efforts. Their expertise, strategic approach, and timely execution significantly boosted our online reach and engagement. The team is professional, creative, and highly reliable—I highly recommend their services.',
    rating: 5,
  },
];

export default function TestimonialsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalItem, setActiveModalItem] = useState<Testimonial | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    tag: 'Web Development',
    quote: '',
    rating: 5
  });

  const filteredTestimonials = useMemo(() => {
    if (selectedCategory === 'All') return TESTIMONIALS_DATA;
    return TESTIMONIALS_DATA.filter(t => t.tag === selectedCategory);
  }, [selectedCategory]);

  // Handle slide navigation via left/right arrows
  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const cardWidth = 380 + 24; // Card width + gap
    const newIndex = direction === 'left'
      ? Math.max(0, activeIndex - 1)
      : Math.min(filteredTestimonials.length - 1, activeIndex + 1);

    setActiveIndex(newIndex);
    sliderRef.current.scrollTo({
      left: newIndex * cardWidth,
      behavior: 'smooth'
    });
  };

  // Handle slide navigation via pagination dots
  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const cardWidth = 380 + 24;
    setActiveIndex(index);
    sliderRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsSubmitModalOpen(false);
      setFormData({
        name: '',
        role: '',
        organization: '',
        tag: 'Web Development',
        quote: '',
        rating: 5
      });
    }, 2000);
  };

  return (
    <section className="relative w-full bg-[#0b0217] text-purple-100 py-20 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden font-sans border-y border-purple-500/20 selection:bg-purple-600 selection:text-white">
    
      <div
        className="absolute inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(192, 132, 252, 0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

   
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden opacity-10">
        <span className="text-[20vw] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-purple-950 whitespace-nowrap">
          VOICES
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[#993EEB] shadow-inner">
              <span className="h-[3px] w-8 bg-[#993EEB]"></span>
              <span className="text-xs font-bold tracking-widest uppercase">TESTIMONIALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              What Our <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Clients & Partners
              </span>
              <br />
              <span className="text-white/60">Say.</span>
            </h2>

            <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed">
              Trusted by businesses across industries — hear from the teams we have helped build, scale, and secure their IT infrastructure.
            </p>
          </div>

          <button
            onClick={() => setIsSubmitModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-950/90 border border-purple-400/40 transition-all duration-300 flex items-center gap-2.5 group cursor-pointer self-start lg:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Share Your Experience</span>
          </button>
        </div>


        <div className="flex flex-wrap items-center justify-between gap-4  py-3">


          <div className="flex items-center gap-3">

            {!isExpanded && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={activeIndex === 0}
                  className="p-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 text-purple-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  disabled={activeIndex === filteredTestimonials.length - 1}
                  className="p-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 text-purple-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 border border-purple-500/30 text-purple-200 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>{isExpanded ? 'Collapse View' : 'Expand Grid'}</span>
            </button>
          </div>
        </div>


        <div className="relative ">
          <div
            ref={sliderRef}
            className={
              isExpanded
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex gap-6 overflow-x-hidden pt-2 scroll-smooth'
            }
          >
            {filteredTestimonials.map((item) => {
              const isLong = item.quote.length > 170;
              const displayQuote = isLong ? item.quote.substring(0, 180) + '...' : item.quote;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveModalItem(item)}
                  className={`bg-gradient-to-b from-[#1c0a36]/90 via-[#120427]/95 to-[#0b0217] border border-purple-500/25 hover:border-purple-400/70 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_0_20px_rgba(11,2,23,0.8)] group relative overflow-hidden cursor-pointer ${!isExpanded ? 'w-[320px] sm:w-[380px] flex-shrink-0' : ''
                    }`}
                >
                  <div className="space-y-4 p-6 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 shadow-inner">
                        <Quote className="w-5 h-5 rotate-180" />
                      </div>
                      <div className="flex gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                    </div>

                    <p className="text-purple-100 text-sm sm:text-base leading-relaxed italic font-normal">
                      "{displayQuote}"
                    </p>
                  </div>

                  <div className="pt-3 mt-2 px-7 pb-7 border-t border-purple-500/20 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-purple-950/90 border border-purple-500/30 text-purple-200 tracking-wide">
                        {item.tag}
                      </span>
                      <span className="text-[11px] font-medium text-amber-300 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read Full <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <div className="relative flex-shrink-0">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-purple-400/40 shadow-md flex-shrink-0">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate">
                          {item.name}
                        </h4>
                        <p className="text-[12px] text-gray-400 font-medium truncate">{item.role}</p>
                        <p className="text-[11px] text-purple-300/60 truncate">{item.organization}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {!isExpanded && (
            <div className="flex items-center justify-center gap-2 pt-6">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeIndex === idx
                      ? 'w-8 bg-purple-500 shadow-md shadow-amber-400/30'
                      : 'w-2.5 bg-purple-900/60 hover:bg-purple-700/80 border border-purple-500/20'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
          <div className='flex items-center justify-center'>
            <div className="text-xs mt-4 w-fit m-5  font-mono text-purple-300/80 bg-purple-950/70 px-3.5 py-1.5 rounded-lg border border-purple-500/20">
              Showing <span className="text-amber-400 font-bold">{filteredTestimonials.length}</span> of {TESTIMONIALS_DATA.length} reviews
            </div>

          </div>

        </div>
      </div>


      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all">
          <div className="bg-[#16062f] border border-purple-400/50 rounded-xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl relative space-y-6">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute -top-10 right-0 p-2 rounded bg-purple-950/80 hover:bg-purple-800 text-purple-300 hover:text-white border border-purple-500/30 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-between mt-6">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-950 border border-gray-400/40 text-gray-500">
                {activeModalItem.tag}
              </span>
              <div className="flex gap-1 text-amber-400">
                {[...Array(activeModalItem.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            <div className="relative pl-6 border-l-2 border-purple-500/50">

              <p className="text-purple-100 text-base sm:text-lg leading-relaxed italic">
                "{activeModalItem.quote}"
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-purple-500/20">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-purple-400/50 shadow-md flex-shrink-0">
                <Image
                  src={activeModalItem.avatar}
                  alt={activeModalItem.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-bold text-white">{activeModalItem.name}</h4>
                  <CheckCircle2 className="w-5 h-5 text-purple-400 fill-purple-950" />
                </div>
                <p className="text-xs text-amber-300 font-medium">{activeModalItem.role}</p>
                <p className="text-xs text-purple-300/70">{activeModalItem.organization}</p>
              </div>
            </div>
          </div>
        </div>
      )}


      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all">
          <div className="bg-[#16062f] border border-purple-400/50 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative space-y-5">
            <button
              onClick={() => setIsSubmitModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-purple-950/80 hover:bg-purple-800 text-purple-300 hover:text-white border border-purple-500/30 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submittedSuccess ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Review Submitted!</h3>
                <p className="text-sm text-purple-200/80">
                  Thank you for your feedback. Our team will verify and publish your review shortly.
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-white">Write a Review</h3>
                  <p className="text-xs text-purple-300/70">
                    Your feedback helps Cornor Tech continuously elevate digital solutions.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Adhikari"
                        className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">Role / Designation</label>
                      <input
                        type="text"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        placeholder="e.g. Founder & CEO"
                        className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">Organization</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Nepal Tech Pvt. Ltd."
                        className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-purple-200 mb-1">Service Category</label>
                      <select
                        value={formData.tag}
                        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                        className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="Social Media Marketing">Social Media Marketing</option>
                        <option value="Web Development">Web Development</option>
                        <option value="IT Infrastructure">IT Infrastructure</option>
                        <option value="Graphic Design">Graphic Design</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-purple-200 mb-1">Your Testimonial</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      placeholder="Describe your experience working with Cornor Tech..."
                      className="w-full bg-[#0e0321] border border-purple-500/30 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 text-white font-bold text-sm shadow-lg shadow-purple-950/80 border border-purple-400/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Review</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}