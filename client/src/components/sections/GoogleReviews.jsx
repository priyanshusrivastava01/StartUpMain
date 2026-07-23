import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Anoop Srivastava',
    role: 'Founder, EdTech Startup',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    text: 'Startup Cafe has completely changed how our team works. The high-speed internet is incredibly reliable, and the premium office environment makes client meetings a breeze. Highly recommended for anyone in Gorakhpur!',
  },
  {
    name: 'Pooja Jaiswal',
    role: 'Freelance UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    text: 'I love the minimalist aesthetic and the peaceful work vibe here. Coffee and tea are always fresh, and the community is highly professional. Perfect place to focus and get things done!',
  },
  {
    name: 'Vikram Aditya',
    role: 'Remote Software Engineer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    stars: 5,
    text: 'Excellent power backup system and ergonomic seats. I have tried multiple other spaces in UP, but Startup Cafe is easily the most premium and standard coworking facility. Great pricing plans too.',
  },
];

const companies = [
  'TechCorp Solutions',
  'Nexus Digital',
  'Design Studio',
  'GrowMedia Group',
  'Fintech Labs',
];

const GoogleReviews = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E9E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            Social Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Trusted by Founders and Professionals
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            Join the community of ambitious individuals who choose speed, stability, and premium aesthetics.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-[20px] border border-[#E9E2D8] shadow-xs flex flex-col justify-between hover:translate-y-[-3px] transition-transform duration-300"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-0.5 text-[#C69C6D] mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C69C6D]" />
                  ))}
                </div>
                {/* Content */}
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal italic">
                  "{review.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-[#E9E2D8]/50">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#E9E2D8]"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1F2937] leading-none">{review.name}</h4>
                  <span className="text-[10px] sm:text-xs text-[#6B7280] mt-1 block">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Companies Logos Section */}
        <div className="text-center pt-8 border-t border-[#E9E2D8]/60">
          <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-6">
            Teams & Companies working from our space
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#1F2937] font-semibold text-sm">
            {companies.map((company, index) => (
              <span key={index} className="opacity-60 hover:opacity-100 transition-opacity">
                💼 {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
