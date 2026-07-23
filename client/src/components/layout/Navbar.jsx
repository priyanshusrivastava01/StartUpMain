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
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.63 1.98 14.153.957 11.53.957c-5.444 0-9.87 4.372-9.873 9.802-.001 1.714.463 3.39 1.34 4.869l-.988 3.604 3.738-.971zm12.39-6.381c-.329-.165-1.95-.961-2.254-1.074-.303-.113-.524-.17-.745.165-.22.336-.85 1.074-1.041 1.299-.191.225-.383.253-.712.088-1.517-.76-2.61-1.326-3.654-3.118-.276-.475.276-.442.791-1.472.088-.176.044-.33-.022-.462-.066-.132-.524-1.262-.719-1.73-.19-.459-.383-.396-.525-.403-.135-.007-.29-.008-.445-.008-.155 0-.408.058-.62.294-.213.235-.812.794-.812 1.936 0 1.143.832 2.247.948 2.404.116.157 1.637 2.503 3.966 3.507.554.239 1.002.38 1.344.488.556.177 1.061.152 1.46.093.446-.066 1.95-.797 2.224-1.528.274-.732.274-1.36.191-1.488-.083-.129-.303-.186-.632-.351z"/>
            </svg>
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


