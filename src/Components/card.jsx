import React from 'react';

const Card = ({ imgSrc, title, description }) => {
    return (
        <div className="mx-auto bg-white shadow-lg md:w-[381px] md:h-[554px]" style={{ width: '361px', height: '554px', borderRadius: '20.94px', border: '1.37px solid #373737' }}>
            <div className="flex justify-center p-10 md:p-4">
                <img src={imgSrc} alt={title} className="object-cover w-[326px] h-[237px] md:h-[297px] md:rounded-[21px] rounded-[27px]" />
            </div>
            <p className="text-[#0E2368] font-bold font-sans text-[21px] flex justify-center">{title}</p>
            <p className="text-[#444957] mx-8 mt-4 font-sans font-thin">{description}</p>
            <div className="flex justify-center md:justify-start">
  <button className="md:px-[20px] md:py-[10px] px-[50px] py-[10px] font-sans md:font-semibold font-medium rounded-full text-[#444957] md:border border-2 border-[#444957] mt-8 md:mt-[20px] md:ml-[20px]">
    Read More
  </button>
</div>
        </div>
    );
};

export default Card;
