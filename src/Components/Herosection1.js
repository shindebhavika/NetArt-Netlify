import React from 'react';

function Herosection1() {
  return (
    <div className=" container  flex flex-col min-h-full ">
      <div className=" container  flex flex-row herosection">
        <div className="left-side w-[30%]">
          <div className=" tropyimg">
            <img src="./images/1.png" alt="" />
          </div>
        </div>
        <div className="right-side  w-[70%]">
          <div className=" font-bold ">
            <p>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          </div>
          <div className='  ml-4 '><ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
            </li>
            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li></ul></div>
          <div className=" img-container">
            <img src="./images/2.png" alt="" className="h-full w-full object-cover" />
          </div>
          <div className='  '><p >Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p></div>
        </div>


      </div>
      <div className=' container flex flex-col min-h-[40px] mt-5'>
        <div className=" ">
          <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
        </div>
        <div className="img-container hrline text-center  ">
          <img src="./images/3.png" alt="" className="h-full w-full object-cover" />
          <p> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors  </p>
        </div>
      
       
        <div class="font-bold text-center">
          <p>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        </div>
        <div className="text-center service ">
          <p><span> CHEMICALS & PROCESS </span>
            <span> POWER </span>
            <span> WATER & WASTE WATER </span>
            <span> OILS & GAS </span>
            <span> PHARMA </span>
            <span> SUGARS & DISTILLERIES </span>
            <span> PAPER & PULP </span>
            <span> MARINE & DEFENCE </span>
            <span> METAL & MINING </span>
            <span> FOOD & BEVERAG </span>
            <span> PETROCHEMICAL & REFINERIES </span>
            <span> SOLAR </span>
            <span> BUILDING </span>
            <span> HVAC </span>
            <span> FIRE FIGHTING </span>
            <span> AGRICULTURE & RESIDENTIAL </span>
          </p>


        </div>


      </div>
    </div>
  );
}

export default Herosection1;
