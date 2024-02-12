import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="relative">
      <div className="flex justify-center md:flex-row flex-col  mx-auto items-center ">
        <div className="">
          <img src="/1.jpg" alt="Male Model" className="" />
        </div>
        <div className="">
          <img src="/2.jpg" alt="Second Image" className="" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold hover:text-blue-200">UNISEX CHRIST BASED CASUALWEAR</h2>
          <h2 className="text-4xl font-bold hover:text-blue-200">Comfort + Love</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
