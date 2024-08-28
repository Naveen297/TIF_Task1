import React from 'react';
import HeroImg from '../Assets/HeroImg.jpeg';

const Hero = () => {
    return (
        <div className='bg-[#F0F1F7] md:mt-4 mt-10'>
            <div className='flex flex-col md:flex-row'>
                <img 
                    src={HeroImg} 
                    alt="Hero" 
                    className='w-[384px] h-[438px] hidden md:block md:ml-[200px]' 
                />
               <div className='mx-6 my-20 text-center sm:text-left md:ml-48 md:mr-48 md:mt-28'>
                    <p className='text-[#0E2368] text-4xl font-sans font-bold'>
                        About Us
                    </p>
                    <p className='text-[#444957] mt-4 font-sans'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                    <button className='px-[20px] py-[14px] font-sans font-semibold rounded-full text-white bg-[#E23744] mt-4 md:mt-[20px]'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
