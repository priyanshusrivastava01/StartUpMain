import React from 'react';
import { User, Shield, Rocket, Users2, Building2, HelpCircle, Video } from 'lucide-react';

const targets = [
  {
    icon: User,
    title: 'Freelancers',
    description: 'Ditch the isolation of coffee shops. Secure a fixed desk, boost focus, and join a high-network community of builders.',
  },
  {
    icon: Shield,
    title: 'Remote Employees',
    description: 'Draw clear boundaries between home and office. Enjoy high-speed fiber internet and professional desks.',
  },
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Scale rapidly. Save massive capital on office setups. Upgrade seats from desks to private cabins instantly.',
  },
  {
    icon: Users2,
    title: 'Small Teams',
    description: 'Private lockable cabins designed for 4-15 members to brainstorm, align whiteboards, and build momentum.',
  },
  {
    icon: Building2,
    title: 'Agencies',
    description: 'Impress clients. Host formal presentations in premium soundproof conference meeting rooms.',
  },
  {
    icon: HelpCircle,
    title: 'Consultants',
    description: 'Establish a prestigious, central office location on Park Road. Network and attract high-paying local business clients.',
  },
  {
    icon: Video,
    title: 'Creators & Marketers',
    description: 'Access quiet cabins for audio/video calls, collaborate on campaigns, and connect with technical developers.',
  },
];

const WhoIsThisFor = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E9E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            Target Audience Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Built For People Who Want To Grow
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            No matter your business scale or industry, we provide the infrastructure so you can focus on executing.
          </p>
        </div>

        {/* Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FDFBF7] p-8 rounded-[20px] border border-[#E9E2D8] text-left hover:translate-y-[-3px] transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E9E2D8] text-[#2E5E4E] flex items-center justify-center mb-5 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1F2937] mb-2">{item.title}</h3>
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

export default WhoIsThisFor;
