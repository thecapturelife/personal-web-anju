// 'use client';
// import React from 'react';
// import anju2 from '@/app/assets/anjug.png';
// import Image from 'next/image';
// import DownloadButton from '../components/btndw';
// import About from '../About/page';

// const Main = () => {
//   return (
//    <div>
//     <div className='bg-gray-950 h-full min-h-screen flex flex-col-reverse md:flex-row items-center md:h-screen'>
//       <div className='text-white w-full md:w-1/2 flex flex-col justify-center items-center p-4'>
//         <div className='text-center'>
//           <h1 className='text-3xl md:text-4xl font-extrabold'>
//             Hey, I am&nbsp;
//             <span className='text-red-800'>Anjumol George,&nbsp;</span>
//           </h1>
//           <h2 className='text-xl md:text-2xl font-semibold'>Frontend Developer</h2>
//           <p className='mt-6 md:mt-10 text-lg md:text-xl'>
//             I am a passionate frontend developer with experience in creating engaging and dynamic user interfaces. I enjoy working with the latest technologies to build web applications that provide seamless and intuitive experiences for users.
//           </p>
//           <div className='mt-8 md:mt-10'>
//             <DownloadButton />
//           </div>
//         </div>
//       </div>
//       <div className='w-full md:w-1/2 flex justify-center items-center p-4'>
//         <Image 
//           src={anju2}
//           alt='Anjumol George'
//           className='w-[16rem] h-[16rem] md:w-[32rem] md:h-[28rem] lg:w-[40rem] lg:h-[36rem] shadow-2xl'
//           priority={true}
//         />
//       </div>
     
//     </div>
//     <About/>
//   </div>
//   );
// };

// export default Main;



'use client';
import React from 'react';
import anju2 from '@/app/assets/anjug.png';
import Image from 'next/image';
import DownloadButton from '../components/btndw';
import About from '../About/page';
import Experienece from '../Experience/page';
import Education from '../Education/page';

const Main = () => {
  return (
    <div>
      <div className="bg-gray-950 h-full min-h-screen flex flex-col-reverse md:flex-row  md:h-screen">
        <div className="text-white w-full md:w-1/2 flex flex-col justify-center items-center text-center p-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Hey, I am <span className="text-red-800">Anjumol George,</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-2 md:mt-4">Frontend Developer</h2>
          <p className="mt-6 md:mt-8 text-lg md:text-xl">
            I am a passionate frontend developer with experience in creating engaging and dynamic user interfaces. I enjoy working with the latest technologies to build web applications that provide seamless and intuitive experiences for users.
          </p>
          <div className="mt-8">
            <DownloadButton />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center items-center p-4">
          <Image 
            src={anju2}
            alt="Anjumol George"
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl"
            priority={true}
          />
        </div>
      </div>

      <About />
      <Experienece/>
      <Education/>
    </div>
  );
};

export default Main;
