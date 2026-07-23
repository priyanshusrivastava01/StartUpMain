import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Dedicated Desk',
    price: '₹6,999',
    period: '/month',
    badge: 'Most Flexible',
    description: 'Perfect for freelancers, remote professionals and consultants needing a fixed desk.',
    features: [
      'High Speed WiFi (Dual ISP backup)',
      'Unlimited Gourmet Tea & Coffee',
      'Meeting Room Access (4 Hrs/month)',
      '24/7 Power Backup (UPS & Gen)',
      'Dedicated Locker Storage',
      'Receive Courier & Mail packages',
    ],
    ctaText: 'Book Desk Now',
    workspaceType: 'Dedicated Desk',
    accentColor: 'border-[#E9E2D8]',
    btnColor: 'bg-white text-[#2E5E4E] border border-[#2E5E4E] hover:bg-[#2E5E4E]/5',
  },
  {
    name: 'Private Cabin',
    price: 'Starting ₹29,999',
    period: '/month',
    badge: 'Popular for Teams',
    description: 'Lockable corporate cabins customisable for startup teams of 4 to 12 members.',
    features: [
      'High Speed WiFi (Dedicated line)',
      'Unlimited Gourmet Tea & Coffee',
      'Meeting Room Access (10 Hrs/month)',
      '24/7 Power Backup (UPS & Gen)',
      'Premium Ergonomic Furniture',
      'Company Branding / Logo signage',
      'Dedicated Air Conditioning',
    ],
    ctaText: 'Book Cabin Now',
    workspaceType: 'Private Cabin',
    accentColor: 'border-[#2E5E4E] ring-2 ring-[#2E5E4E]/10 relative',
    btnColor: 'bg-[#2E5E4E] hover:bg-[#23493D] text-white shadow-xs',
    popular: true,
  },
];

const riskReversals = [
  {
    title: 'No Office Setup Cost',
    description: 'Save on heavy fit-out and furniture capitals.',
  },
  {
    title: 'No Security Deposit',
    description: 'Maintain maximum working capital flexibility.',
  },
  {
    title: 'Ready-to-Move Workspace',
    description: 'Walk in, plug in, start executing.',
  },
  {
    title: 'Utilities Included',
    description: 'Unlimited WiFi, power backup, AC, and cleaning covered.',
  },
];

const Pricing = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E9E2D8]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Zero Setup Hustle. Clear Pricing.
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            No capital outlay, no facility management stress. We take care of the space while you build your future.
          </p>
        </div>

        {/* Risk Reversals Checklist Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {riskReversals.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#E9E2D8] flex items-start gap-3 shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#E9E2D8] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 text-[#2E5E4E] font-extrabold" />
              </div>
              <div>
                <strong className="block text-sm font-bold text-[#1F2937] leading-none mb-1">
                  {item.title}
                </strong>
                <span className="text-xs text-[#6B7280]">{item.description}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 sm:p-10 rounded-[20px] border shadow-xs flex flex-col justify-between ${plan.accentColor}`}
            >
              <div>
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                    {plan.name}
                  </span>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    plan.popular ? 'bg-[#C69C6D]/15 text-[#C69C6D]' : 'bg-[#FAF7F2] text-[#6B7280]'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#1F2937] tracking-tight">{plan.price}</span>
                  <span className="text-sm font-semibold text-[#6B7280]">{plan.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#6B7280] mb-8 leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#1F2937]">
                      <div className="w-5 h-5 rounded-full bg-[#FAF7F2] border border-[#E9E2D8] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#2E5E4E] font-bold" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking(plan.workspaceType)}
                className={`w-full py-4 text-sm font-semibold rounded-xl text-center active:scale-[0.98] transition-all cursor-pointer ${plan.btnColor}`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
