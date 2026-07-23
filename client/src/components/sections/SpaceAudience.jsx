import React from 'react';
import { Armchair, Building2, Users, Clock, UserCheck, Zap } from 'lucide-react';

const blocks = [
  {
    icon: Armchair,
    title: 'Freelancers & Remote Workers',
    description: 'Get dedicated ergonomic desks & fast fiber internet. Say goodbye to isolating house chores.',
    iconBg: 'bg-[#FFDE4D]',
    cardBg: 'bg-[#FFFDF0]',
  },
  {
    icon: Building2,
    title: 'Startup Founders & Teams',
    description: 'Lockable private cabins (4-15 seats) with premium company branding and zero deposit options.',
    iconBg: 'bg-[#A3E635]',
    cardBg: 'bg-[#F7FEE7]',
  },
  {
    icon: Users,
    title: 'Consultants & Agencies',
    description: 'Soundproof client meeting rooms & whiteboard systems located in a prime Park Road spot.',
    iconBg: 'bg-[#C084FC]',
    cardBg: 'bg-[#FAF5FF]',
  },
  {
    icon: Clock,
    title: 'Creators & Marketers',
    description: 'Access the space safely 24/7. Quiet focus zones are perfect for editing, recording, and design.',
    iconBg: 'bg-[#F472B6]',
    cardBg: 'bg-[#FFF1F2]',
  },
  {
    icon: UserCheck,
    title: 'Small Business Owners',
    description: 'Get full reception support, guest greeting lobbies, and daily mail package handling.',
    iconBg: 'bg-[#FFDE4D]',
    cardBg: 'bg-[#FFFDF0]',
  },
  {
    icon: Zap,
    title: 'Independent Professionals',
    description: 'Dual UPS backup, printing nodes, secure vehicle parking, and unlimited gourmet coffee.',
    iconBg: 'bg-[#A3E635]',
    cardBg: 'bg-[#F7FEE7]',
  },
];

const SpaceAudience = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF9] border-y-4 border-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
          <span className="inline-block text-xs font-black text-black uppercase tracking-wider bg-[#FFDE4D] border-2 border-black px-3.5 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Space & Audience
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-5">
            Built For Your Growth
          </h2>
          <p className="text-xs sm:text-sm text-black font-semibold mt-2">
            Ditch WFH distractions. Move into a boutique office tailored specifically for your workflow.
          </p>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-6 rounded-2xl border-2 border-black text-left transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${item.cardBg}`}
              >
                <div className={`w-10 h-10 rounded-lg border-2 border-black flex items-center justify-center mb-4 shrink-0 text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] ${item.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-black text-black mb-1.5">{item.title}</h3>
                <p className="text-xs text-black font-medium leading-relaxed line-clamp-2">
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

export default SpaceAudience;


