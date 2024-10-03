import {useState} from 'react';
import {FaChevronUp} from 'react-icons/fa'; // Import chevron-up icon from react-icons

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(true); // State to manage sidebar open/close

    return (
        <div
            className={`h-screen top-[90px] bg-customGray text-black transition-all duration-300 ${isOpen ? 'w-[250px] p-4' : 'w-0 p-0'}`}>
            {/* Toggle button with chevron-up icon */}
            <button
                className="absolute top-[90px] left-[235px] transform transition-transform bg-white text-black p-2 rounded-full border border-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaChevronUp className={`transition-transform ${isOpen ? 'rotate-90' : '-rotate-90'}`}/>
            </button>

            {/* Sidebar content, hide content when closed */}
            {isOpen && (
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">Menu</h1>
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Overview</a>
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">My Library</a>
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Backtest</a>
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Live</a>
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Signal</a>
                </div>
            )}
        </div>
    );
}
