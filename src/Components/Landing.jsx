import React from 'react';
// Import the images
import BgMainImg from '../Assets/BgMainImg.jpeg';
import RedCurveImg from '../Assets/RedbgCurve.png';
import webIcon from '../Assets/Webicon.png';

const Landing = () => {
    return (
        <div className="relative flex flex-col-reverse h-screen lg:flex-row">
            <div className="lg:w-1/2 lg:flex-shrink-0 flex flex-col justify-center items-center lg:items-start lg:ml-[100px]">
                <img src={webIcon} alt="Web Icon" className='hidden sm:block' />
                <p className="font-sans text-[#0E2368] font-bold text-center lg:text-left lg:text-[62px] lg:leading-[69px] text-[38px] leading-[46px] md:mt-10 lg:mt-[100px] mt-16">
                    Discover the <span className="text-[#E23744]"><br />Best</span> Food <br />and Drinks
                </p>
                <p className='text-center lg:text-left text-[#444957] mt-4 lg:mt-[20px] font-sans font-thin md:text-[20px] md:text-[15px]'>
                    Naturally made Healthcare Products for the <br />better care & support of your body.
                </p>
                <button className='px-[20px] py-[14px] font-sans font-semibold rounded-full text-white bg-[#E23744] mt-4 lg:mt-[20px]'>
                    Explore Now!
                </button>
            </div>
            <div className="relative lg:w-1/2 lg:h-full">
                <img
                    src={BgMainImg}
                    alt="Main Background"
                    className='w-full h-full sm:w-[378.21px] sm:h-[413.72px] lg:rounded-bl-[198.9px] object-cover md:w-full md:h-full rounded-bl-[102.3px]'
                />
                <img
                    src={RedCurveImg}
                    alt="Red Curve"
                    className="absolute top-0 left-0 w-full h-full"
                />
               <button className='absolute top-8 right-4 px-3 py-2 mt-5 text-[10px] sm:px-[20px] sm:py-[14px] sm:text-base font-sans font-semibold rounded-full text-white bg-[#E23744] border-white border-2'>
  Get In Touch
</button>
            </div>
        </div>
    );
};

export default Landing;
