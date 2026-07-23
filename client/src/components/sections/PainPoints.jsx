import React from 'react';
import { Home, Bed, WifiOff, Award, Handshake, Users2 } from 'lucide-react';

const painPoints = [
  {
    icon: Home,
    title: 'Family interrupts meetings',
    description: 'No quiet space for calls. Children playing or domestic noises interrupt your professional flow.',
    iconText: '🏠',
  },
  {
    icon: Bed,
    title: 'Working from bed hurts focus',
    description: 'Mixing rest with work hurts cognitive energy. Ergonomic comfort is non-existent at home.',
    iconText: '🛏',
  },
  {
    icon: WifiOff,
    title: 'Slow internet outages',
    description: 'Standard home broadband drops or slows down during critical deadlines and client syncs.',
    iconText: '📶',
  },
  {
    icon: Award,
    title: 'No professional workspace',
    description: 'Hard to set boundaries between work time and personal time. Motivation drains easily.',
    iconText: '☕',
  },
  {
    icon: Handshake,
    title: "Can't meet clients confidently",
    description: 'No professional room to host clients. Noisy coffee shops ruin first impressions.',
    iconText: '🤝',
  },
  {
    icon: Users2,
    title: 'Team scattered everywhere',
    description: 'Difficult to align team priorities, brainstorm on whiteboard, and build organic workspace momentum.',
    iconText: '👥',
  },
];

const PainPoints = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E9E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            The Daily Work Dilemma
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Does This Sound Like Your Daily Routine?
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            Working outside a real workspace comes with invisible costs to your sanity and business growth.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((item, index) => (
            <div
              key={index}
              className="bg-[#FDFBF7] p-8 rounded-[20px] border border-[#E9E2D8] text-left hover:translate-y-[-3px] transition-transform duration-300"
            >
              <div className="text-3xl mb-5 flex items-center justify-center w-12 h-12 bg-white border border-[#E9E2D8] rounded-xl">
                <span>{item.iconText}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#1F2937] mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
