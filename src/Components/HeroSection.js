import React from 'react';

function HeroSection() {
  return (

    <div className='h-[45%] flex  gap-1 border border-black bottom-96'>
      <div className='w-[10%]  border border-black '>
        <img src="./images/1.png" alt="" className='h-[100%] w-[100%] ' />
      </div>
      <div className='w-[75%] h-[100%]  border border-black  '>
        <div className=' border border-black font-bold  w-[100%]'><p> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p></div>
        <div className=' border border-black ml-4 w-[100%]'><ul>
          <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
          </li>
          <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li></ul></div>
        <div className='border border-black  ml-4 h-7 img-container'>
          <img src="./images/2.png" alt="" className='' />

        </div>
        <div className='border border-black  bottom-4'><p >Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p></div>

      </div>

    </div>

  );
}

export default HeroSection;
