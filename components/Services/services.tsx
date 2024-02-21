"use client"
import React, { useState } from 'react';

const Services: React.FC = () => {
    // Sample photo URLs
    const servicePhotos = [
        "/02.jpeg",
        "/03.jpeg",
        "/06.jpeg",
        "/08.jpeg",
        "/10.jpeg",
        "/09.jpeg",
        "/08.jpeg",
        "/03.jpeg",
    ];

    // Sample hover photo URLs
    const hoverPhotos = [
        "/01.jpeg",
        "/04.jpeg",
        "/05.jpeg",
        "/07.jpeg",
        "/10.jpeg",
        "/11.jpeg",
        "/05.jpeg",
        "/08.jpeg",
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const textStyle = {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontStyle: 'normal',
        fontWeight: 400,
        color: 'rgb(0, 0, 0)',
        fontSize: '17px',
        lineHeight: '24px'
    };

    return (
        <div className="bg-gray-200 py-16" style={textStyle}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">Perfectly Loved Edition</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8" style={{ columnCount: 4, columnGap: '1em' }}>
                    {servicePhotos.map((photoUrl, index) => (
                        <div key={index} className="" style={{ display: 'inline-block', marginBottom: '1em' }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <img
                                src={hoveredIndex === index ? hoverPhotos[index] : photoUrl}
                                alt={`Service ${index + 1}`}
                                className="mx-auto mb-4 rounded-lg transform transition duration-500 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
