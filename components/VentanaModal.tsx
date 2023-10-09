import React, { useState } from 'react';
import { Descripcion } from './Descripcion';

interface VentanaModalProps {
  nombre: string;
  valor: string;
}

export default function VentanaModal({ nombre, valor }: VentanaModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="bg-yellow-500 text-gray-900 py-2 px-6 font-inter rounded-lg font-medium text-base break-words"
        onClick={openModal}
      >
        {nombre} ➔
      </button>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items'>
          <div className='bg-white p-5 rounded flex flex-col justify-center'>
            <div>
              <Descripcion valor={valor} />
            </div>

            <div>
              <button
                className='bg-red-500 py-2 px-6 text-white font-bold m-5'
                onClick={closeModal}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
