import {useState} from "react";

export default function FavoriteTimeFrame() {
    const [selectedDay, setSelectedDay] = useState("SUN");
    const [startTime, setStartTime] = useState("09:00 AM");
    const [endTime, setEndTime] = useState("03:00 PM");

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <div>
            <h2 className="text-xl font-bold">Favorite Time Frame</h2>
            <p className="mt-1 text-gray-600">Please enter your current password to change your password</p>

            <div className="flex space-x-4 mt-4">
                <div className="w-[175px]">
                    <label className="block text-sm font-bold text-gray-700">Dates For Signals</label>
                    <select
                        value={selectedDay}
                        onChange={(e) => setSelectedDay(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink"
                    >
                        {daysOfWeek.map((day, index) => (
                            <option key={index} value={day}>
                                {day}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-[175px]">
                    <label className="block text-sm font-bold text-gray-700">Start Time</label>
                    <input
                        type="text"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink"
                        placeholder="Start Time"
                    />
                </div>
                <div className="w-[175px]">
                    <label className="block text-sm font-bold text-gray-700">End Time</label>
                    <input
                        type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink"
                        placeholder="End Time"
                    />
                </div>
            </div>
        </div>
    );
}
