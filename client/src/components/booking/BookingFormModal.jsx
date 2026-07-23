import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { createLeadInquiry } from '../../services/leadService';
import { useToast } from '../common/Toast';

const BookingFormModal = ({ isOpen, onClose, initialWorkspace = 'Dedicated Desk' }) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    workspaceType: initialWorkspace,
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, workspaceType: initialWorkspace }));
    setErrors({});
  }, [initialWorkspace, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const cleaned = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: cleaned }));
      if (errors[name] && cleaned.length === 10) {
        setErrors((prev) => ({ ...prev, [name]: '' }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!formData.workspaceType) {
      newErrors.workspaceType = 'Please select a workspace type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await createLeadInquiry(formData);
      addToast(
        response.message || 'Thank you! Your visit has been booked successfully. We will call you shortly!',
        'success'
      );
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        workspaceType: initialWorkspace,
        message: '',
      });
      onClose();
    } catch (err) {
      const errorMsg =
        (err.errors && err.errors[0]?.message) || err.message || 'Failed to submit inquiry. Please try again.';
      addToast(errorMsg, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E9E2D8] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100">
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 rounded-full mb-1">
                ⭐ Instant Booking
              </span>
              <h3 className="text-xl font-bold text-gray-900">Book a Free Visit</h3>
              <p className="text-xs text-gray-500 mt-0.5">Startup Cafe • Gorakhpur Workspace</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="e.g. Rahul Sharma"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/50 border rounded-xl focus:bg-white focus:outline-none transition-all ${
                  errors.fullName ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-[#E9E2D8] focus:ring-2 focus:ring-[#3B82F6]/10 focus:border-[#3B82F6]'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* Grid for Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  maxLength="10"
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/50 border rounded-xl focus:bg-white focus:outline-none transition-all ${
                    errors.phone ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-[#E9E2D8] focus:ring-2 focus:ring-[#3B82F6]/10 focus:border-[#3B82F6]'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="e.g. rahul@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/50 border rounded-xl focus:bg-white focus:outline-none transition-all ${
                    errors.email ? 'border-red-400 focus:ring-2 focus:ring-red-100' : 'border-[#E9E2D8] focus:ring-2 focus:ring-[#3B82F6]/10 focus:border-[#3B82F6]'
                  }`}
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Workspace Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Workspace Type <span className="text-red-500">*</span>
              </label>
              <select
                name="workspaceType"
                value={formData.workspaceType}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/50 border border-[#E9E2D8] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 focus:border-[#3B82F6] transition-all"
              >
                <option value="Dedicated Desk">Dedicated Desk (₹6,999/month)</option>
                <option value="Private Cabin">Private Cabin (Starting ₹29,999/month)</option>
                <option value="Day Pass">Day Pass (₹499/day)</option>
                <option value="Conference Room">Conference Room (₹999/hour)</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Message / Preferred Visit Date <span className="text-gray-400 text-[10px] uppercase font-normal">(Optional)</span>
              </label>
              <textarea
                name="message"
                rows="2"
                placeholder="Let us know your team size or any special requirements..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm bg-[#FAF7F2]/50 border border-[#E9E2D8] rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/10 focus:border-[#3B82F6] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-[0.99] rounded-xl shadow-md shadow-[#3B82F6]/15 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span>Confirm Free Visit</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1F8A70]" />
              <span>No spam. 100% free visit with coffee included.</span>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingFormModal;
