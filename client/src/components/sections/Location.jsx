import React from 'react';
import { Phone, MessageCircle, Navigation, MapPin, Mail, Clock } from 'lucide-react';

const Location = () => {
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.909569720536!2d83.3731993753051!3d26.747285176747204!2m3!1f0!2f0!3f0!3m2!1i1242!2i768!4f13.1!3m3!1m2!1s0x3991448b11111111%3A0x1111111111111111!2sPark%20Road%20Gorakhpur!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin';

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16 text-center">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Prime Gorakhpur Location
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            Perfect connection links, high safety, and premium dining spots nearby.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Side */}
          <div className="lg:col-span-7 h-[350px] lg:h-auto min-h-[350px] rounded-[20px] overflow-hidden border border-[#E9E2D8] shadow-xs relative">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Startup Cafe Gorakhpur Location Map"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Location details Side */}
          <div className="lg:col-span-5 bg-[#FDFBF7] p-8 rounded-[20px] border border-[#E9E2D8] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-[#2E5E4E] bg-[#2E5E4E]/10 rounded-full mb-3">
                  📍 Gorakhpur HQ
                </span>
                <h3 className="text-xl font-bold text-[#1F2937]">Startup Cafe</h3>
                <p className="text-xs text-[#6B7280] mt-0.5">Premium Coworking Spaces</p>
              </div>

              {/* Detail Items */}
              <div className="space-y-4 text-sm text-[#6B7280]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2E5E4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F2937] font-bold mb-0.5">Address</strong>
                    <span>2nd Floor, Opposite Vijay Cinema, Vijay Chowk, Gorakhpur, India, 273001</span>
                  </div>
                </div>
 
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#2E5E4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F2937] font-bold mb-0.5">Working Hours</strong>
                    <span>Open 24/7 for members. Reception: 9:00 AM - 8:00 PM</span>
                  </div>
                </div>
 
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#2E5E4E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1F2937] font-bold mb-0.5">Email Support</strong>
                    <a href="mailto:info@startupcafe.co.in" className="hover:underline">info@startupcafe.co.in</a>
                  </div>
                </div>
              </div>
            </div>
 
            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 border-t border-[#E9E2D8] mt-6">
              <a
                href="https://maps.google.com/?q=2nd+Floor,+Opposite+Vijay+Cinema,+Vijay+Chowk,+Gorakhpur"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-white hover:bg-[#FAF7F2]/30 border border-[#2E5E4E] text-[#2E5E4E] text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#2E5E4E]" />
                <span>Get Directions</span>
              </a>
 
              <a
                href="https://wa.me/919670111167?text=Hi%20Startup%20Cafe,%20I'd%20like%20to%20visit%20your%20coworking%20space%20at%20Vijay%20Chowk."
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 bg-[#2E5E4E] hover:bg-[#23493D] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/10" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
