import React from 'react';

const Education = () => {
  return (
    <div className='bg-gray-950 h-screen text-white flex flex-col items-center justify-center p-4 md:p-8'>
      <h1 className='text-3xl font-bold text-center mb-4'>
        <span className='text-red-800'>E</span>ducation
      </h1>
      <div className='bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl w-full'>
        <h2 className='text-2xl font-semibold mb-2'>Bachelor of Commerce and Computer Applications</h2>
        <p className='text-lg'>
          Marmatha Arts and Science College, Alakode
        </p>
      </div>
    </div>
  );
};

export default Education;
