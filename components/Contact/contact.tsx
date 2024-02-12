"use client"
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative">
            <div className="flex justify-center md:flex-row flex-col mx-auto items-center">
                <div className="">
                    <img src="/2.jpg" alt="Male Model" className="" />
                </div>
                <div className="">
                    <img src="/1.jpg" alt="Second Image" className="" />
                </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
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
