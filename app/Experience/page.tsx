import React from 'react';
import anju3 from '@/app/assets/mee@.png';
import Image from 'next/image';

const Experience = () => {
  return (
    <div className='bg-gray-950 h-screen text-white flex flex-col lg:flex-row items-center lg:items-start p-4 md:p-8'>
      <div className='lg:w-1/2 flex flex-col justify-center p-4 space-y-4'>
        <h1 className='text-3xl font-bold text-center lg:text-left'>
          <span className='text-red-800'>P</span>ersonal Experience
        </h1>
        <p className='text-lg py-14 md:text-2xl'>
          I am currently working as a Frontend Developer Intern at Bridgeon Solutions, where I have successfully completed one e-commerce project and one social media project. These projects were built using React, Next.js, TypeScript, and Redux, allowing me to develop dynamic and responsive interfaces. Each week, my work is reviewed by experienced industry experts, and I receive guidance from a mentor within an Agile environment, which has significantly contributed to my growth and technical skills.
        </p>
      </div>

      <div className='lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0'>
        <div className='w-full max-w-xs md:max-w-lg lg:max-w-full'>
          <Image
            src={anju3}
            alt='Anju Mol George'
            className='rounded-lg shadow-lg object-cover'
            layout='responsive'
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
