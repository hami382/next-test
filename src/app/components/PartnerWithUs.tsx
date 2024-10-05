import React from 'react';

const PartnerWithUs = () => {
    return (
        <div>
            <h2 className="text-xl font-bold">Partner With Us</h2>
            <p className="mt-1 text-gray-600">Update your account settings. Set your personal info and location.</p>

            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                <div>
                    <label className="block text-sm font-bold text-gray-700">Package Name</label>
                    <select
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customPink focus:border-customPink sm:text-sm"
                    >
                        <option>Select</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700">Duration</label>
                    <select
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customPink focus:border-customPink sm:text-sm"
                    >
                        <option>Select</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700">Exchange</label>
                    <select
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customPink focus:border-customPink sm:text-sm"
                    >
                        <option>Select</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-bold text-gray-700">Trade Market</label>
                    <select
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-customPink focus:border-customPink sm:text-sm"
                    >
                        <option>Select</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default PartnerWithUs;
