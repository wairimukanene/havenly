// components/navbar/navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-black text-xl font-bold">My Website</a>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                            <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                            <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</a>
                            <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
