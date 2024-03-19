// Navbar.tsx

import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    return (
        <nav className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Image src="/logoo.png" alt="Login Image" width={200} height={100} priority={true} />
                    </div>
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <a href="#header" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#about" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Collections</a>
                            <a href="#services" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Fave Collections</a>
                            <a href="#contact" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Shop With Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
