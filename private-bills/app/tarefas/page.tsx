"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BillButtons: React.FC = () => {
  const router = useRouter();

  const goToPayMyBill = () => {
    router.push('/PayMyBill');
  };

  const goToPayABill = () => {
    router.push('/PayABill');
  };

  return (
    <div className="flex flex-col bg-teal-500 justify-center items-center h-screen w-screen gap-x-8">

      <h1 className="text-6xl font-serif font-bold text-white my-2">Sorry, was that your bill?</h1>
      <h2 className="text-xl font-serif italic text-white mb-4">Using Lightning to provide a private bill payment solution</h2>
      <h3 className="text-xl font-serif font-semibold text-white mb-4">Select an option:</h3>

      <div className="flex justify-center gap-8">
      <button  
        className="bg-[#FFFAA0] h-[15vh] w-[30vw] hover:bg-[#FADA5E] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-black"
        onClick={goToPayMyBill}
      >
        Pay my bill, please
      </button>

      <button
        className="bg-[#FFFAA0] h-[15vh] w-[30vw] hover:bg-[#FADA5E] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-black"
        onClick={goToPayABill}
      >
        That's on me!
      </button>

      </div>
    </div>
  );
};

export default BillButtons;
