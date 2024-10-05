import {useState} from "react";

export default function FavoriteTimeFrame() {
    const [selectedDay, setSelectedDay] = useState("SUN"); // پیش‌فرض روز
    const [startTime, setStartTime] = useState("09:00 AM"); // پیش‌فرض ساعت شروع
    const [endTime, setEndTime] = useState("03:00 PM"); // پیش‌فرض ساعت پایان

    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return (
        <div>
            <h2 className="text-xl font-bold">Favorite Time Frame</h2>
            <p className="text-gray-600">Please enter your current password to change your password</p>

            {/* Dates For Signals */}
            <div className="mt-4">
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

            {/* Start Time */}
            <div className="mt-4">
                <label className="block text-sm font-bold text-gray-700">Start Time</label>
                <input
                    type="text"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink"
                    placeholder="Start Time"
                />
            </div>

            {/* End Time */}
            <div className="mt-4">
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
    );
}
