import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';

const FinalCTA = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="relative rounded-[30px] bg-[#2E5E4E] overflow-hidden py-16 px-6 sm:px-12 text-center shadow-xl">
          {/* Subtle warm gold glow background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C69C6D]/25 via-transparent to-transparent opacity-60"></div>

          <div className="relative max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#C69C6D] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Limited Availability</span>
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Stop Working Around Distractions. <br />
              Start Working Around Opportunities.
            </h2>

            <p className="text-sm sm:text-base text-[#FAF7F2]/80 max-w-md mx-auto leading-relaxed">
              Visit Startup Cafe today and experience what a real workspace feels like.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking({ duration: 'monthly', planType: 'Dedicated Desk' })}
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-[#2E5E4E] bg-white hover:bg-[#FAF7F2] active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Book My Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://wa.me/919670111167?text=Hi%20Startup%20Cafe,%20I'd%20like%20to%20schedule%20a%20workspace%20tour."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-4 text-base font-semibold text-white bg-transparent hover:bg-white/5 border border-white rounded-xl transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 text-[#C69C6D] fill-[#C69C6D]/10" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 pt-2">
              No reservation fee required • Includes free 1-day pass
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
