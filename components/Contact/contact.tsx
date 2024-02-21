"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const textStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontStyle: 'normal',
        fontWeight: 400,
        color: 'rgb(0, 0, 0)',
        fontSize: '17px',
        lineHeight: '24px'
      };
    const [hovered, setHovered] = useState(false);

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
            <div className="absolute inset-0 flex items-center justify-center"style={{ marginTop: '-180px' }}>
                <div className="text-center" style={textStyle}>
                    <a 
                        href="https://www.instagram.com/havenley.ke?igsh=bHBpbGd4MG11ZzRl" 
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-md ${hovered ? 'bg-black text-white' : 'bg-blue-200 text-white'} `}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        Shop with us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
