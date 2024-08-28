import React from 'react';

const Card = ({ imgSrc, title, description }) => {
  return (
    <div
      className="mx-auto bg-white shadow-lg max-w-[371px] md:h-[554px] w-full"
      style={{
        borderRadius: '20.94px',
        border: '1.37px solid #373737',
      }}
    >
      <div className="flex justify-center p-4 md:p-4">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-[237px] md:h-[297px] rounded-[21px]"
          style={{ maxWidth: '326px' }}
        />
      </div>
      <p className="text-[#0E2368] font-bold font-sans text-[21px] flex justify-center">
        {title}
      </p>
      <p className="text-[#444957] mx-8 mt-4 font-sans font-thin">
        {description}
      </p>
      <div className="flex justify-center md:justify-start">
        <button
          className="md:px-[20px] md:py-[10px] px-[50px] py-[10px] font-sans md:font-semibold font-medium rounded-full text-[#444957] md:border border-2 border-[#444957] mt-8 md:mt-[20px] md:ml-[20px] md:mb-0 mb-6"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
