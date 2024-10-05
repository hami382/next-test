import {useState} from "react";
import FavoriteAssetName from './FavoriteAssetName';
import FavoriteTimeFrame from "./FavoriteTimeFrame";

export default function SignalInfo() {
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg p-4 mt-2 border rounded-md">
            <h2 className="text-xl font-bold">Signal</h2>
            <p className="mt-1 text-gray-600">Update your account settings. Set your personal info and location.</p>

            <div className="mt-10">
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-700 hover:text-customPink">Service</a>
                    <a
                        href="#"
                        className="text-gray-700 hover:text-customPink"
                        onClick={() => setIsSettingOpen(!isSettingOpen)}
                    >
                        Setting
                    </a>
                    <a href="#" className="text-gray-700 hover:text-customPink">Turnover</a>
                </div>
            </div>

            {isSettingOpen && (
                <div className="mt-10">
                    <h2 className="text-xl font-bold">Partner With Us</h2>
                    <p className="mt-1 text-gray-600">Update your account settings. Set your personal info and
                        location.</p>

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
                    <div className="mt-10">
                        <FavoriteAssetName/>
                    </div>
                    <div className="mt-10">
                        <FavoriteTimeFrame/>
                    </div>
                </div>
            )}
        </div>
    );
}
