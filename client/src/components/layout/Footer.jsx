import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#FFFDF9] text-black/70 border-t-4 border-black font-semibold">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b-2 border-black/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFDE4D] border-2 border-black flex items-center justify-center text-black font-black text-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] select-none">
                SC
              </div>
              <span className="text-xl font-black text-black tracking-tight">Startup Cafe</span>
            </div>
            <p className="text-xs sm:text-sm text-black/70 max-w-md leading-relaxed">
              Gorakhpur’s premier modern coworking space. Designed specifically for freelancers, startups, remote professionals, and growing enterprises seeking speed, community, and work flexibility.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-black uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-black/70">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4.5 h-4.5 text-black bg-[#FFDE4D] p-0.5 border border-black rounded-md shrink-0 mt-0.5" />
                <a href="tel:+919670111167" className="hover:text-black hover:underline transition-colors">
                  +91 96701 11167
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4.5 h-4.5 text-black bg-[#C084FC] p-0.5 border border-black rounded-md shrink-0 mt-0.5" />
                <a href="mailto:info@startupcafe.co.in" className="hover:text-black hover:underline transition-colors">
                  info@startupcafe.co.in
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-black bg-[#A3E635] p-0.5 border border-black rounded-md shrink-0 mt-0.5" />
                <span>2nd Floor, Opposite Vijay Cinema, Vijay Chowk, Gorakhpur, India, 273001</span>
              </li>
            </ul>
          </div>

          {/* Workspaces */}
          <div className="space-y-3">
            <h4 className="text-sm font-black text-black uppercase tracking-wider">Workspaces</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-black/70">
              <li>Dedicated Desks</li>
              <li>Private Offices / Cabins</li>
              <li>Conference & Meeting Rooms</li>
              <li>Virtual Office Address</li>
              <li>Event Space Hire</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-black/50 gap-4">
          <p>© {new Date().getFullYear()} Startup Cafe Gorakhpur. All rights reserved.</p>
          <div className="flex items-center gap-6 font-bold">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
