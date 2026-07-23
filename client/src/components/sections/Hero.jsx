import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';

const LOGO_PATHS = [
  '/logos/cropped_circle_image.png',
  '/logos/cropped_circle_image copy.png',
  '/logos/cropped_circle_image (2).png',
  '/logos/cropped_circle_image (3).png',
  '/logos/cropped_circle_image (5).png',
  '/logos/cropped_circle_image (6).png',
  '/logos/cropped_circle_image (7).png',
  '/logos/cropped_circle_image (8).png',
  '/logos/cropped_circle_image (9).png',
  '/logos/cropped_circle_image (10).png',
  '/logos/cropped_circle_image (11).png',
  '/logos/cropped_circle_image (12).png',
];

const Hero = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-12 pb-0 bg-gradient-to-b from-[#FFFDF9] via-white to-[#FFFDF9]">
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-[#FFDE4D]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/10 w-80 h-80 rounded-full bg-[#A3E635]/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text & Conversion CTA */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#F472B6] border-2 border-black text-black text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-md"
            >
              <span>Premium Workspace Experience</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-[1.25] sm:leading-[1.2]"
              >
                Your Premium Office <br className="hidden sm:inline" />
                @ <br className="sm:hidden" />
                <span className="inline-block bg-[#FFDE4D] text-black border-2 border-black px-3.5 py-0.5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-1.5deg] mt-1.5">
                  Startup Cafe
                </span>
              </motion.h1>
            </div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="text-base sm:text-lg text-black font-semibold max-w-lg leading-relaxed"
            >
              Elevate your work in a dynamic, futuristic ecosystem designed for creators, entrepreneurs, and visionaries.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                onClick={() => onOpenBooking({ duration: 'monthly', planType: 'Dedicated Desk' })}
                className="px-6 py-3.5 text-sm font-black text-black bg-[#FFDE4D] border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Book a Seat</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="https://wa.me/919670111167?text=Hi%20Startup%20Cafe,%20I'd%20like%20to%20schedule%20a%20visit%20in%20Gorakhpur."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 text-sm font-black text-black bg-[#A3E635] border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[4.5px_4.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-black fill-black/10" />
                <span>Schedule a Visit</span>
              </a>
            </motion.div>

            {/* Compact Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              className="flex flex-wrap items-center gap-2.5 pt-2 text-[10px] text-black font-black"
            >
              
              <span className="flex items-center gap-1 bg-[#E0F2FE] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                👥 500+ Members
              </span>
              <span className="flex items-center gap-1 bg-[#F3E8FF] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                🏢 9+ Years
              </span>
              <span className="flex items-center gap-1 bg-[#FEF08A] border border-black px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                🇮🇳 Startup India Recognized
              </span>
            </motion.div>

            {/* Quick Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex items-center gap-4 pt-1 text-xs text-black font-extrabold"
            >
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#A3E635] fill-black stroke-black border-2 border-black rounded-full" />
                Prime Location 
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFDE4D] fill-black stroke-black border-2 border-black rounded-full" />
                Move In Within 1 Hour
              </span>
            </motion.div>
          </div>

          {/* Right Column Imagery with Floating Glass/Luxury Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 relative pt-4 sm:pt-0"
          >
            <div className="relative rounded-2xl overflow-hidden border-4 border-black aspect-[4/3] sm:aspect-[16/11] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/ChatGPT Image Jul 22, 2026, 01_23_09 PM.webp"
                alt="Startup Cafe Modern Coworking Space Gorakhpur"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

              {/* Subtle Floating Trust Badges overlaying the image */}
              <div className="absolute top-2.5 left-2.5 bg-white/95 border border-black px-2 py-0.5 rounded text-[8.5px] font-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 select-none">
                <span className="sm:hidden">Home</span>
                <span className="hidden sm:inline">Home</span>
              </div>
              <div className="absolute bottom-2.5 right-2.5 bg-[#FFDE4D] border border-black px-2 py-0.5 rounded text-[8.5px] font-black text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1 select-none">
                <span>🇮🇳 StartupCafe</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Recognized By Full Width Strip below Hero layout */}
      <div className="border-t-4 border-black bg-white py-12 sm:py-16 mt-6 sm:mt-8 overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-black text-black uppercase tracking-wider bg-[#F472B6] border-2 border-black px-3.5 py-1.5 rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            ACKNOWLEDGED BY
          </span>
        </div>
 
        {/* Infinite Horizontal Marquee Carousel */}
        <div className="relative w-full overflow-hidden mt-8 sm:mt-10">
          <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {/* First set of logos */}
            {LOGO_PATHS.map((path, idx) => (
              <div key={`logo-1-${idx}`} className="hover:scale-105 transition-all duration-200 cursor-default shrink-0">
                <img src={path} alt={`Partner Logo ${idx + 1}`} className="h-20 sm:h-28 object-contain" />
              </div>
            ))}
            {/* Duplicate set of logos for infinite scrolling effect */}
            {LOGO_PATHS.map((path, idx) => (
              <div key={`logo-2-${idx}`} className="hover:scale-105 transition-all duration-200 cursor-default shrink-0">
                <img src={path} alt={`Partner Logo ${idx + 1}`} className="h-20 sm:h-28 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


