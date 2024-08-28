import React from 'react';
import WebIcon from '../Assets/Webicon.png';
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='bg-[#F8F8F8] p-10 mt-10'>
<div className='justify-between mx-10 md:flex'>
<div className='flex justify-center md:justify-start'>
    <img src={WebIcon} alt="" className='md:my-10 w-[161px] h-[125px] mx-auto md:mx-0' />
  </div>
<div >
    {/* Contact us */}
    <p className='text-[#0E2368] md:text-[19px] font-sans font-bold text-left mt-10 text-[14px]'>Contact Us</p>
        <p className='text-[#444957]  mt-4 font-sans font-thin text-[12px] md:text-[15px]'>Lorem Ipsum Pvt Ltd.5/1, Magalton <br/>Road, Phartosh Gate near YTM<br/> Market, XYZ-343434</p>
        <p className='text-[#444957]  mt-4 font-sans font-thin text-[12px] md:text-[15px]'>example2020@gmail.com</p>
        <p className='text-[#444957]  mt-4 font-sans font-thin text-[12px] md:text-[15px]'>(904) 443-0343</p>
</div>
<div >
    {/* Contact us */}
    <p className='text-[#0E2368] text-[19px] font-sans font-bold text-left mt-10'>More</p>
        <p className='text-[#444957] mt-4 font-sans font-thin text-[12px] md:text-[15px]'>About us</p>
        <p className='text-[#444957] mt-4 font-sans font-thin text-[12px] md:text-[15px]'>Product</p>
        <p className='text-[#444957] mt-4 font-sans font-thin text-[12px] md:text-[15px]'>Career</p>
        <p className='text-[#444957] mt-4 font-sans font-thin text-[12px] md:text-[15px]'>Contact Us</p>
</div>
<div className='hidden sm:block'>
    {/* social links */}
    <p className='text-[#0E2368] text-[19px] font-sans font-bold text-center mt-10'>Social Links</p>
        <div className='flex justify-center'>
        <p className='text-[#444957] mt-4 font-sans font-thin mx-2'><FaInstagram/></p>
        <p className='text-[#444957] mt-4 font-sans font-thin mx-2'><FaTwitter/></p>
        <p className='text-[#444957] mt-4 font-sans font-thin mx-2'><FaFacebookF/></p>
        </div>
        <p><br/></p>
        <p><br/></p>
        <p><br/></p>
        <p><br/></p>
        <p className='text-[#444957] mt-4 font-sans font-thin'>© 2022 Food Truck Example</p>
     
</div>
<div className="md:hidden">
  <p className='text-[#444957] mt-10 font-sans font-thin text-center'>© 2022 Food Truck Example</p>
  <div className='flex justify-center mt-4'>
    <p className='text-[#444957] font-sans font-thin mx-2'><FaInstagram/></p>
    <p className='text-[#444957] font-sans font-thin mx-2'><FaTwitter/></p>
    <p className='text-[#444957] font-sans font-thin mx-2'><FaFacebookF/></p>
  </div> 
</div>
</div>
        </footer>
    );
};

export default Footer;