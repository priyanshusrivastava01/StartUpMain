import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastProvider } from './components/common/Toast';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function AppContent() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleOpenBooking = (planInfo) => {
    // If planInfo is a string, default to monthly Dedicated Desk
    const info = typeof planInfo === 'string'
      ? { duration: 'monthly', planType: planInfo }
      : planInfo;
    
    setSelectedPlan(info);
    
    // Smooth scroll to the inline booking form
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MainLayout onOpenBooking={handleOpenBooking}>
      <Routes>
        <Route path="/" element={<Home onOpenBooking={handleOpenBooking} selectedPlan={selectedPlan} />} />
        {/* Wildcard redirect to Home for optimal conversion funnel */}
        <Route path="*" element={<Home onOpenBooking={handleOpenBooking} selectedPlan={selectedPlan} />} />
      </Routes>
    </MainLayout>
  );
}

function App() {
  return (
    <ToastProvider>
      <Router>
        <AppContent />
      </Router>
    </ToastProvider>
  );
}

export default App;
