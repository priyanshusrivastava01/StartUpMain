import React from 'react';
import Hero from '../components/sections/Hero';
import SpaceAudience from '../components/sections/SpaceAudience';
import TrustResults from '../components/sections/TrustResults';
import SpacesPricing from '../components/sections/SpacesPricing';
import LocationCTA from '../components/sections/LocationCTA';

const Home = ({ onOpenBooking, selectedPlan }) => {
  return (
    <>
      {/* SECTION 1 — HERO & PROBLEM */}
      <Hero onOpenBooking={onOpenBooking} />

      {/* SECTION 2 — SPACE & AUDIENCE (Merged Features, Benefits & Audience) */}
      <SpaceAudience />

      {/* SECTION 3 — TRUST & RESULTS (Merged Stats, Reviews & Logos) */}
      <TrustResults />

      {/* SECTION 4 — SPACES & PRICING (Merged Gallery & Pricing) */}
      <SpacesPricing onOpenBooking={onOpenBooking} />

      {/* SECTION 5 — LOCATION & FINAL CTA (Merged Map, Contacts & Booking Form) */}
      <LocationCTA selectedPlan={selectedPlan} />
    </>
  );
};

export default Home;
