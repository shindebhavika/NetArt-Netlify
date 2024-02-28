import React from 'react';
import { IoCall } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

function Footer() {
  return (
    <footer className="bg-red-500 text-white ml-4 mr-4">
      <div className="container mx-auto py-3">
        <div className="flex flex-wrap justify-between items-center footer-content">
          <div className='foo'>
            <div className='inline-block p-1 rounded-full bg-white  mr-1'>
            <a href="">  <IoCall size={30} className='text-red-500' /></a>
            </div>
            Toll free 1800 200 1234
          </div>

          <div className='foo'>
            <div className='inline-block p-1 rounded-full bg-white  mr-1'>
              <FaFacebookF size={30} className='text-red-500' />
            </div>
            www.facebook.com/cripumps
          </div>

          <div className='foo'>
            <div className='inline-block rounded-full bg-white mr-1'>
              <TbWorld size={30} className='text-red-500' />
            </div>
            www.cringgroup.com
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
