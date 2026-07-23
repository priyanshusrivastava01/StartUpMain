import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-[#FFDE4D] border-2 border-black flex items-center justify-center text-black font-black text-xl transition-all duration-250 group-hover:-translate-y-0.5 group-hover:shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
            SC
          </div>
          <div>
            <span className="text-lg font-black text-black tracking-tight block leading-none">
              Startup Cafe
            </span>
            <span className="text-[11px] font-black text-[#F97316] uppercase tracking-wider">
              Gorakhpur
            </span>
          </div>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919670111167"
            className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-black text-black hover:underline transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-black" />
            <span>+91 96701 11167</span>
          </a>

          <a
            href="https://wa.me/919670111167?text=Hi%20Startup%20Cafe,%20I'd%20like%20to%20inquire%20about%20workspace%20availability%20in%20Gorakhpur."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 p-2.5 sm:px-3.5 sm:py-2.5 text-xs font-extrabold text-black bg-[#A3E635] border-2 border-black rounded-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
            aria-label="WhatsApp Support"
          >
            <MessageCircle className="w-3.5 h-3.5 text-black fill-black/10" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenBooking({ duration: 'monthly', planType: 'Dedicated Desk' })}
            className="px-4 py-2.5 text-xs sm:text-sm font-extrabold text-black bg-[#FFDE4D] border-2 border-black rounded-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:shadow-[3.5px_3.5px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
          >
            Book a Seat
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


