import React from 'react';

const stats = [
  {
    number: '500+',
    label: 'Members',
    description: 'Thriving Gorakhpur professional network collaborating and executing daily.',
  },
  {
    number: '100+',
    label: 'Seats',
    description: 'Fully equipped high-end workspace nodes configured with ergonomic seating.',
  },
  {
    number: '24/7',
    label: 'Access',
    description: 'Work on your own schedule, day or night, with secure biometric pass entry.',
  },
  {
    number: '5+',
    label: 'Years',
    description: 'Gorakhpur’s first, most established and trusted coworking ecosystem.',
  },
];

const WhyPeopleChooseUs = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E9E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            More Productivity. Less Stress.
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            Our members report an average 40% increase in daily productivity after moving into Startup Cafe.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FDFBF7] p-8 rounded-[20px] border border-[#E9E2D8] text-center hover:translate-y-[-3px] transition-transform duration-300 shadow-xs"
            >
              <span className="block text-4xl sm:text-5xl font-black text-[#2E5E4E] tracking-tight mb-2">
                {stat.number}
              </span>
              <h3 className="text-sm font-bold text-[#1F2937] mb-1.5 uppercase tracking-wider">{stat.label}</h3>
              <p className="text-xs text-[#6B7280] font-normal leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPeopleChooseUs;
