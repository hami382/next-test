import {useState} from "react";

export default function MoneyManagement() {
    const [risk, setRisk] = useState("");
    const [reward, setReward] = useState("");
    const [fund, setFund] = useState("");

    return (
        <div>
            <h2 className="text-xl font-bold">Money Management</h2>
            <p className="mt-1 text-gray-600">Please enter your current password to change your password</p>

            <div className="flex space-x-4 mt-4">
                <div className="w-[414px]">
                    <label className="block text-sm font-bold text-gray-700">Risk</label>
                    <input
                        type="number"
                        value={risk}
                        onChange={(e) => setRisk(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
                        placeholder="Your Number"
                    />
                </div>

                <div className="w-[414px]">
                    <label className="ml-4 block text-sm font-bold text-gray-700">Reward</label>
                    <input
                        type="number"
                        value={reward}
                        onChange={(e) => setReward(e.target.value)}
                        className="ml-4 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
                        placeholder="Your Number"
                    />
                </div>
            </div>

            <div className="w-[414px]">
                <label className="mt-4 block text-sm font-bold text-gray-700">Fund for each Trade</label>
                <input
                    type="number"
                    value={fund}
                    onChange={(e) => setFund(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
                    placeholder="Your Number"
                />
            </div>

            <div className="mt-10 flex space-x-4">
                <button className="px-4 py-2 bg-customPurple text-white rounded-md shadow hover:bg-pink-600">
                    Pay Now
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300">
                    Partner With Us
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300">
                    Free Trial
                </button>
            </div>
        </div>
    );
}
