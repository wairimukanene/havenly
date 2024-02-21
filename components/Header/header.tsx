import React from 'react';

const Header: React.FC = () => {
  const textStyle = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontStyle: 'normal',
    fontWeight: 400,
    color: 'rgb(0, 0, 0)',
    fontSize: '17px',
    lineHeight: '24px'
  };

  return (
    <div className="relative">
      <div className="flex justify-center md:flex-row flex-col mx-auto items-center">
        <div className="">
          <img src="/71.png" alt="Male Model" className="" />
        </div>
        <div className="">
          <img src="/70.png" alt="Second Image" className="" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center" style={{ marginTop: '-180px' }}>
        <div className="text-center" style={textStyle}>
          <h2 className="text-2xl font-bold hover:text-blue-200">UNISEX CHRIST BASED CASUALWEAR</h2>
          <h2 className="text-2xl font-bold hover:text-blue-200">Stay cool & Connected to faith</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
