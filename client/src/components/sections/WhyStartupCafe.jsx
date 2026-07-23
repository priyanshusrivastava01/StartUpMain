import React from 'react';
import {
  Building,
  Armchair,
  Users,
  Clock,
  Zap,
  Wifi,
  Coffee,
  UserCheck, 
  Printer,
  Car,
} from 'lucide-react';

const solutions = [
  {
    icon: Building,
    title: 'Private Cabins',
    description: 'Fully lockable offices for team privacy, confidential whiteboards, and high collaboration.',
  },
  {
    icon: Armchair,
    title: 'Dedicated Desks',
    description: 'Your own designated station. Ergonomically designed to maximize individual output.',
  },
  {
    icon: Users,
    title: 'Meeting Rooms',
    description: 'Professional boardrooms to host clients, pitch ideas, or sync with remote members.',
  },
  {
    icon: Clock,
    title: '24×7 Access',
    description: 'Work around global client schedules or catch late-night inspiration safely.',
  },
  {
    icon: Zap,
    title: 'Uninterrupted Power',
    description: 'Dual UPS backup and heavy generator setups ensure you never lose progress.',
  },
  {
    icon: Wifi,
    title: 'Blazing Fiber Internet',
    description: 'Fast, secure connectivity. Multi-ISP load balancer guarantees backup lines.',
  },
  {
    icon: Coffee,
    title: 'Gourmet Tea & Coffee',
    description: 'Fresh warm beverages available round the clock to keep your team energized.',
  },
  {
    icon: UserCheck,
    title: 'Reception Support',
    description: 'Front-desk coordinators to handle mail, welcome clients, and assist visitor check-ins.',
  },
  {
    icon: Printer,
    title: 'Modern Printing Node',
    description: 'Access fast document scanning, copying, and printing nodes instantly.',
  },
  {
    icon: Car,
    title: 'Secured Parking',
    description: 'Convenient vehicle parking slots for community members and client visits.',
  },
];

const WhyStartupCafe = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#E9E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            The Direct Solution
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Everything You Need To Work Better
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            No capital outlay, no facility management stress. We take care of the space while you build your future.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-[20px] border border-[#E9E2D8] text-left hover:translate-y-[-3px] transition-transform duration-300 shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-[#E9E2D8] bg-[#FAF7F2] text-[#2E5E4E]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#1F2937] mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyStartupCafe;
