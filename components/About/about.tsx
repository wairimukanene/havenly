import React from 'react';

const About: React.FC = () => {
    const style = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontStyle: 'normal',
        fontWeight: 400,
        color: 'rgb(0, 0, 0)',
        fontSize: '15px',
        lineHeight: '21px',
    };

    return (
        <div className="bg-gray-100 py-16" style={style}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Collections</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img className="object-cover" src="/03.jpeg" alt="Card 1" />
                        <h3 className="text-xl font-bold mb-4">Tshirt</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img className="object-cover" src="/10.jpeg" alt="Card 2" />
                        <h3 className="text-xl font-bold mb-4">Cap</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img className="object-cover" src="/06.jpeg" alt="Card 3" />
                        <h3 className="text-xl font-bold mb-4">Hoodie</h3>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <img className="object-cover" src="/11.jpeg" alt="Card 4" />
                        <h3 className="text-xl font-bold mb-4">Tote bag</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
