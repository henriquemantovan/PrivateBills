'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const PayMyBill = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ value: '', address: '' });
  const [image, setImage] = useState<File | null>(null); // New state for image file
  const [showPopup, setShowPopup] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Create FormData object to handle both form data and image
    const data = new FormData();
    data.append('value', formData.value);
    data.append('address', formData.address);
    if (image) data.append('image', image);

    try {
      await axios.post('/api/paybill', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShowPopup(true);
      setFormData({ value: '', address: '' });
      setImage(null); // Clear image after submission
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  const goToYourBills = () => {
    router.push('/pages/PayMybill/YourBills');
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-teal-500">
      <div className="relative bg-[#FFFAA0] w-[40vw] p-6 rounded-lg border-2 border-black shadow-lg">
        <div className="absolute top-4 right-4">
          <button
            onClick={goToYourBills}
            className="bg-[#ADD8E6] hover:bg-[#87CEEB] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-black"
          >
            Your bills
          </button>
        </div>
        <h1 className="text-4xl font-serif font-bold text-gray-700 mb-6">Pay my bill</h1>

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
          <h1 className="text-md font-serif font-bold text-gray-700 mb-4">Submit an image from your bill (with a PIX copy and paste or barcode):</h1>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full border-2 border-black rounded-md py-2 px-4 text-gray-700"
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
