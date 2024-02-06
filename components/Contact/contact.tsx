import React from 'react';

const Contact = () => {
    return (
        <div className="bg-gray-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
                <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                    {/* Image */}
                    <img src="https://via.placeholder.com/400" alt="Contact" className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2">
                    {/* Form */}
                    <form className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                        {/* Form fields go here */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                            <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
