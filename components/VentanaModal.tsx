import React, { useState } from 'react';

export default function VentanaModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className='bg-cyan-500 py-2 px-6 text-white font-bold m-5'
        onClick={() => setIsOpen(true)}
      >
        CLICK
      </button>
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items'>
          <div className='bg-white p-5 rounded flex flex-col justify-center'>
            <div>
              <label htmlFor='' className='mr-3 font-semibold font-[poppins]'>
                Nombre
              </label>
              <input
                type='text'
                className='w-64 px-4 border-2 border-gray-300 rounded-lg focus:outline-none'
              />
            </div>
            <div>
              <label htmlFor='' className='mr-3 font-semibold font-[poppins]'>
                Apellido
              </label>
              <input
                type='text'
                className='w-64 px-4 border-2 border-gray-300 rounded-lg focus:outline-none'
              />
            </div>
            <div>
              <button
                className='bg-red-500 py-2 px-6 text-white font-bold m-5'
                onClick={() => setIsOpen(false)}
              >
                Close modal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
