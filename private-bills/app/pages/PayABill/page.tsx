"use client";
import React, { useState } from 'react';

const BillCard = ({ billNumber, value, onSelect }: { billNumber: number; value: number; onSelect: () => void }) => {
  return (
    <div className="bg-yellow-200 border-2 border-black rounded-lg p-3 text-center shadow-md h-32 flex flex-col justify-between w-64">
      <div>
        <h2 className="text-md font-bold text-teal-900">Bill {billNumber}</h2>
        <p className="text-teal-700 text-sm">value: {value} </p>
      </div>
      <button
        className="bg-green-200 text-teal-900 font-bold border border-black rounded-lg px-2 py-2 mt-2 hover:bg-green-300"
        onClick={onSelect}
      >
        select
      </button>
    </div>
  );
};

// Componente principal
const BillSelectionPage = () => {
  const [bills] = useState([
    { id: 1, value: 1.23 },
    { id: 2, value: 4.56 },
    { id: 3, value: 7.89 },
    { id: 4, value: 0.99 },
  ]);

  const [filteredBills, setFilteredBills] = useState(bills);
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');
  const [showFilter, setShowFilter] = useState(false);

  const applyFilter = () => {
    const min = parseFloat(minValue) || 0;
    const max = parseFloat(maxValue) || Number.MAX_VALUE;

    const filtered = bills.filter((bill) => bill.value >= min && bill.value <= max);
    setFilteredBills(filtered);
    setShowFilter(false);
  };

  const removeFilters = () => {
    setFilteredBills(bills); // Redefine para todas as contas
    setMinValue(''); // Limpa o campo Min Value
    setMaxValue(''); // Limpa o campo Max Value
    setShowFilter(false); // Fecha o modal
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-teal-500">
      <h1 className="text-4xl font-serif font-bold text-white my-4 text-center">That's on me!</h1>

      <div className="flex justify-center items-center mb-4 px-6">
        <button 
          className="bg-[#ADD8E6] hover:bg-[#87CEEB] text-gray-700 font-mono font-bold py-2 px-4 rounded-lg border-2 border-black flex items-center justify-between"
          onClick={() => setShowFilter(!showFilter)}
        >
          Filter
          <img src="/filtro.png" alt="Filter Icon" className="w-5 h-5 ml-2" />
        </button>
      </div>

      {showFilter && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-yellow-200 border border-black p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold text-teal-900 mb-4">Filter Bills by Value</h2>
            <div className="mb-2">
              <label htmlFor="minValue" className="block text-sm font-medium text-teal-900">Min Value</label>
              <input
                id="minValue"
                type="number"
                value={minValue}
                onChange={(e) => setMinValue(e.target.value)}
                className="border border-teal-700 p-2 w-full rounded-lg"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="maxValue" className="block text-sm font-medium text-teal-900">Max Value</label>
              <input
                id="maxValue"
                type="number"
                value={maxValue}
                onChange={(e) => setMaxValue(e.target.value)}
                className="border border-teal-700 p-2 w-full rounded-lg"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={applyFilter}
                className="bg-green-300 text-teal-900 font-bold px-4 py-2 rounded-lg hover:bg-green-400"
              >
                Apply
              </button>
              <button
                onClick={() => setShowFilter(false)}
                className="bg-red-300 text-teal-900 font-bold px-4 py-2 rounded-lg hover:bg-red-400"
              >
                Cancel
              </button>
            </div>
            <button onClick={removeFilters} className="bg-[#ADD8E6] text-teal-900 font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 mt-4 w-full">
              Remove Filters
            </button>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center w-full px-6 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredBills.map((bill) => (
            <BillCard
              key={bill.id}
              billNumber={bill.id}
              value={bill.value}
              onSelect={() => alert(`Bill ${bill.id} selected!`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BillSelectionPage;