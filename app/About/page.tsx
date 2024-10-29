// import Image from 'next/image';
// import anju1 from '@/app/assets/anjjjjj.jpg';
// import anju2 from '@/app/assets/1716237651678.jpg';
// import React from 'react';

// const About = () => {
//   return (
//     <div className="bg-gray-950 h-screen flex flex-col items-center justify-center">
//       <div className="flex justify-center mb-8">
//         <h1 className="text-white font-bold text-3xl ml-48">
//           <span className="text-3xl text-red-700">A</span>bout Me
//         </h1>
//       </div>
//       <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 px-8">
//         <div className="w-64 h-64 ml-40 lg:w-96 lg:h-96 rounded-full border-4 border-gray-300 shadow-lg shadow-black overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//           <Image
//             src={anju2}
//             alt="Anju Mol George"
//             className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
//           />
//         </div>
        
//         <div className="mt-8  lg:mt-0 lg:w-1/2 text-gray-200 text-lg">
//           <p className='ml-60'>
//             Hi, I'm Anju Mol George, a frontend developer dedicated to crafting seamless and engaging web experiences. With a strong foundation in Next.js, React, TypeScript, JavaScript, CSS, and HTML, I specialize in creating dynamic, user-friendly interfaces. I’m passionate about using the latest frameworks and libraries to deliver innovative solutions that meet both aesthetic and functional needs.
//           </p>
//           <br />
//           <p className='ml-60'>
//             From single-page applications to full-scale responsive websites, my goal is to build web applications that provide an intuitive and polished user experience. I am always eager to learn new technologies, embrace challenges, and grow as a developer in a collaborative environment. Let’s create something amazing together!
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import Image from 'next/image';
import anju2 from '@/app/assets/1716237651678.jpg';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 py-12">
      <div className="flex justify-center mb-8">
        <h1 className="text-white font-bold text-3xl">
          <span className="text-red-700">A</span>bout Me
        </h1>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-gray-300 shadow-lg shadow-black overflow-hidden hover:shadow-2xl transition-shadow duration-300 mb-8 lg:mb-0">
          <Image
            src={anju2}
            alt="Anju Mol George"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        <div className="text-gray-200  text-lg lg:w-1/2 leading-relaxed text-center lg:text-left">
          <p className='ml-16'>
            Hi, I'm Anju Mol George, a frontend developer dedicated to crafting seamless and engaging web experiences. With a strong foundation in Next.js, React, TypeScript, JavaScript, CSS, and HTML, I specialize in creating dynamic, user-friendly interfaces. I’m passionate about using the latest frameworks and libraries to deliver innovative solutions that meet both aesthetic and functional needs.
          </p>
          <br />
          <p className='ml-16'>
            From single-page applications to full-scale responsive websites, my goal is to build web applications that provide an intuitive and polished user experience. I am always eager to learn new technologies, embrace challenges, and grow as a developer in a collaborative environment. Let’s create something amazing together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
