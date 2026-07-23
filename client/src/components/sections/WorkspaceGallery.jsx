import React from 'react';
import { Camera } from 'lucide-react';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80',
    alt: 'Quiet Focus Zone',
    description: 'Dedicated desks designed for distraction-free deep execution.',
    spanClass: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=600&q=80',
    alt: 'Client Meeting Room',
    description: 'Soundproof professional meeting boards to close high-end deals.',
    spanClass: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    alt: 'Premium Private Cabin',
    description: 'Customizable corporate lockable spaces for growing teams.',
    spanClass: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80',
    alt: 'Collaborative Workspace',
    description: 'Energetic community desks to brainstorm and align priorities.',
    spanClass: 'md:col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=600&q=80',
    alt: 'Coffee Break Area',
    spanClass: '',
    description: 'Fresh warm gourmet brew stations for mid-day recharge.',
  },
  {
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80',
    alt: 'Reception',
    description: 'Premium lobby assistance to handle guest arrivals and mail.',
    spanClass: '',
  },
];

const WorkspaceGallery = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF7F2]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold text-[#2E5E4E] uppercase tracking-wider bg-[#2E5E4E]/10 px-3 py-1.5 rounded-full">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2937] tracking-tight mt-4">
            Designed For Exceptional Work
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] mt-2">
            Walk into spaces tailored structurally for focus, client presentation, and comfort.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-[20px] border border-[#E9E2D8] group shadow-xs ${image.spanClass}`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-300 ease-out"
                loading="lazy"
              />
              {/* Natural captions overlay - no heavy dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/70 via-[#1F2937]/10 to-transparent flex flex-col justify-end p-5 text-left">
                <span className="text-sm sm:text-base font-bold text-white tracking-wide">{image.alt}</span>
                <p className="text-[11px] sm:text-xs text-[#FAF7F2]/90 mt-0.5 max-w-sm line-clamp-1 font-normal leading-relaxed">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => onOpenBooking('Dedicated Desk')}
            className="px-7 py-3.5 text-sm font-semibold text-[#2E5E4E] bg-white hover:bg-[#FAF7F2]/50 border border-[#2E5E4E] rounded-xl shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Camera className="w-4 h-4 text-[#2E5E4E]" />
            <span>View More Photos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkspaceGallery;
