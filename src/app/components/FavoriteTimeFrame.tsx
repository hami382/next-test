import {useState} from "react";

export default function FavoriteTimeFrame() {
    const [selectedDay, setSelectedDay] = useState("Sunday");
    const [startTime, setStartTime] = useState("09:00 AM");
    const [endTime, setEndTime] = useState("03:00 PM");
    const [timeFrames, setTimeFrames] = useState([]);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const addTimeFrame = () => {
        setTimeFrames([...timeFrames, {day: selectedDay, start: startTime, end: endTime}]);
    };

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
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
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
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
                        placeholder="Start Time"
                    />
                </div>
                <div className="w-[175px]">
                    <label className="block text-sm font-bold text-gray-700">End Time</label>
                    <input
                        type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
                        placeholder="End Time"
                    />
                </div>
                <div className="flex items-end">
                    <button
                        onClick={addTimeFrame}
                        className="px-4 py-2 bg-customPurple text-white rounded-md shadow hover:bg-pink-600"
                    >
                        Add Time
                    </button>
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-lg font-bold">Selected Time Frames:</h3>
                <ul className="mt-2">
                    {timeFrames.map((frame, index) => (
                        <li key={index} className="mt-1 text-gray-700">
                            <span className="font-semibold">Day:</span> {frame.day},
                            <span className="font-semibold"> Start:</span> {frame.start},
                            <span className="font-semibold"> End:</span> {frame.end}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
