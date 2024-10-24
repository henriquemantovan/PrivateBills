"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const BillButtons: React.FC = () => {
  const router = useRouter();

  const goToPagador = () => {
    router.push('/pagador');
  };

  const goToComprador = () => {
    router.push('/comprador');
  };

  return (
    <div className="flex justify-center items-center h-screen gap-x-8">
      <button
        className="button"
        onClick={goToPagador}
      >
        pay my bill, please
      </button>
      <button
        className="button"
        onClick={goToComprador}
      >
        that's on me!
      </button>
    </div>
  );
};

export default BillButtons;
