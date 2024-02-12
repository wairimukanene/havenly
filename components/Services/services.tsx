import React from 'react';

const Services: React.FC = () => {
    // Sample photo URLs
    const servicePhotos = [
        "/1.jpg",
        "/2.jpg",
        "/3.jpg",
        "/21.jpg",
        "/19.jpg",
        "/6.jpg",
        "/20.jpg",
        "/8.jpg",
    ];

    return (
        <div className="bg-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Fave Collections</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" style={{columnCount: 4, columnGap: '1em'}}>
                    {servicePhotos.map((photoUrl, index) => (
                        <div key={index} className="" style={{display: 'inline-block', marginBottom: '1em'}}>
                            <img src={photoUrl} alt={`Service ${index+1}`} className="mx-auto mb-4 rounded-lg transform transition duration-500 hover:scale-110" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
