import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Trusted Members', color: 'text-black', bgColor: 'bg-[#FFDE4D]' },
  { value: '9-7', label: 'Access', color: 'text-black', bgColor: 'bg-[#A3E635]' },
  { value: '100+', label: 'Dedicated Desk', color: 'text-black', bgColor: 'bg-[#C084FC]' },
  { value: '24/7', label: 'Power Backup', color: 'text-black', bgColor: 'bg-[#F472B6]' },
];

const reviews = [
  {
    name: 'Sanya Sharma',
    role: 'Freelance Designer',
    text: 'The best co-working space I\'ve ever worked in! The aesthetic is literally what I try to design for my clients. Super productive atmosphere.',
  },
  {
    name: 'Pooja Jaiswal',
    role: 'Freelance UI/UX Designer',
    text: 'I love the minimalist aesthetic and the peaceful work vibe here. Coffee and tea are always fresh, and the community is highly professional.',
  },
  {
    name: 'Vikram Aditya',
    role: 'Remote Software Engineer',
    text: 'Excellent power backup system and ergonomic seats. Startup Cafe is easily the most premium and standard coworking facility in UP.',
  },
];

const logos = [
  'TechCorp Solutions',
  'Nexus Digital',
  'Design Studio',
  'GrowMedia Group',
  'Fintech Labs',
];

const TrustResults = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-b-4 border-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12 text-center">
          <span className="inline-block text-xs font-black text-black uppercase tracking-wider bg-[#F472B6] border-2 border-black px-3.5 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Our Impact
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-5">
            More than just <span className="text-[#C084FC]">desk.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Metrics */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl border-2 border-black text-center shadow-[3.3px_3.3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all ${stat.bgColor}`}
              >
                <span className={`block text-3xl font-black tracking-tight mb-1 ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="text-xs font-black text-black uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Rotating Testimonial */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-black bg-[#FFDE4D] px-2 py-0.5 border-2 border-black rounded-md shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black stroke-black" />
                  ))}
                </div>
                {/* Manual toggles */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevReview}
                    className="p-1.5 rounded-full border-2 border-black bg-white hover:bg-[#FFDE4D] text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-1.5 rounded-full border-2 border-black bg-white hover:bg-[#FFDE4D] text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-black italic font-semibold leading-relaxed">
                "{reviews[activeIndex].text}"
              </p>
            </div>

            <div className="pt-4 border-t-2 border-black mt-4">
              <h4 className="text-xs sm:text-sm font-black text-black leading-none">
                {reviews[activeIndex].name}
              </h4>
              <span className="text-[10px] sm:text-xs text-black font-semibold mt-1.5 block">
                {reviews[activeIndex].role}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom: Logos */}
        <div className="text-center pt-8 border-t-2 border-black mt-10">
          <p className="text-[11px] font-black text-black uppercase tracking-wider mb-4">
            Professional teams working from our spaces
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3.5 text-xs">
            {logos.map((logo, idx) => (
              <span key={idx} className="px-3.5 py-1.5 bg-white border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs text-black font-extrabold uppercase hover:-translate-y-0.5 transition-all">
                💼 {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustResults;


