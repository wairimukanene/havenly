import React from 'react';

const Services: React.FC = () => {
    // Sample photo URLs
    const servicePhotos = [
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+1",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+2",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+3",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+4",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+5",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+6",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+7",
        "https://via.placeholder.com/300/000000/FFFFFF?text=Service+8",
    ];

    return (
        <div className="bg-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Perfect wear</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" style={{columnCount: 4, columnGap: '1em'}}>
                    {servicePhotos.map((photoUrl, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-4" style={{display: 'inline-block', marginBottom: '1em'}}>
                            <img src={photoUrl} alt={`Service ${index+1}`} className="mx-auto mb-4 rounded-lg" />
                            <h3 className="text-xl font-bold mb-2">Service {index + 1}</h3>
                            <p className="text-gray-700">Description of service {index + 1}...</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
