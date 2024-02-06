
import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Card 1</h3>
                        <p className="text-gray-700">Content for card 1...</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Card 2</h3>
                        <p className="text-gray-700">Content for card 2...</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-4">Card 3</h3>
                        <p className="text-gray-700">Content for card 3...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
