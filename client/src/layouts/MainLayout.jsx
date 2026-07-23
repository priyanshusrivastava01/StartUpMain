import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

const MainLayout = ({ children, onOpenBooking }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header */}
      <Navbar onOpenBooking={onOpenBooking} />

      {/* Main Content Area */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Floating Button */}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
