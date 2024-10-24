"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PayMyBill = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ value: '', address: '' });
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle submission can be added here (API call, form validation, etc.)
    
    // Show success popup
    setShowPopup(true);
    
    // Clear the form after submission
    setFormData({ value: '', address: '' });
  };

  const goToYourBills = () => {
    router.push('/pages/PayMybill/YourBills');
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-teal-500">
      <div className="relative bg-[#FFFAA0] w-[40vw] p-6 rounded-lg border-2 border-black shadow-lg">
        {/* "Your bills" button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={goToYourBills}
            className="bg-[#ADD8E6] hover:bg-[#87CEEB] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-black"
          >
            Your bills
          </button>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-serif font-bold text-gray-700 mb-6">Pay my bill</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="number"
              placeholder="value"
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: e.target.value })}
              className="w-full h-[8vh] border-2 border-black rounded-md py-2 px-4 text-gray-700"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full h-[8vh] border-2 border-black rounded-md py-2 px-4 text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-[8vh] bg-[#FADA5E] hover:bg-[#FFD700] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-gray"
          >
            Submit
          </button>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg border-2 border-black shadow-lg">
              <p className="text-gray-700 font-mono font-bold">Bill submitted successfully!</p>
              <button
                className="mt-4 bg-[#ADD8E6] hover:bg-[#87CEEB] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-black"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PayMyBill;
