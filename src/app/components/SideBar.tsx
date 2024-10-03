import {useState} from 'react';
import {FaChevronUp, FaFolder, FaChartLine, FaSignal} from 'react-icons/fa';
import {MdOutlineDashboard} from 'react-icons/md';
import {RiBroadcastLine} from 'react-icons/ri';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isLibraryOpen, setIsLibraryOpen] = useState(false);

    return (
        <div
            className={`h-screen top-[90px] bg-customGray text-black transition-all duration-700 ${isOpen ? 'w-[250px] p-4' : 'w-0 p-0'}`}
        >
            {/* Toggle button with chevron-up icon */}
            <button
                className={`absolute top-[90px] transform transition-all  duration-700 bg-white text-black p-2 rounded-full border border-gray-200 
                ${isOpen ? 'left-[235px]' : 'left-0'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaChevronUp className={`transition-transform duration-700 ${isOpen ? 'rotate-90' : '-rotate-90'}`}/>
            </button>

            {/* Sidebar content, hide content when closed */}
            {isOpen && (
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">Menu</h1>

                    {/* Overview */}
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded flex items-center">
                        <MdOutlineDashboard className="mr-2"/> {/* Add icon here */}
                        Overview
                    </a>

                    {/* My Library with sub-menu */}
                    <a
                        href="#"
                        className="text-black hover:bg-gray-200 p-2 rounded flex items-center"
                        onClick={() => setIsLibraryOpen(!isLibraryOpen)} // Toggle submenu
                    >
                        <FaFolder className="mr-2" /> {/* Add icon here */}
                        My Library
                    </a>

                    {/* Submenu with sliding animation */}
                    <div
                        className={`ml-6 mt-2 flex flex-col space-y-2 overflow-hidden duration-1000`}
                        style={{
                            maxHeight: isLibraryOpen ? "500px" : "0",
                        }}
                    >
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Profile</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Exchanges</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Notification</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Strategies</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Marketplace</a>
                    </div>

                    {/* Backtest */}
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded flex items-center">
                        <FaChartLine className="mr-2"/> {/* Add icon here */}
                        Backtest
                    </a>

                    {/* Live */}
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded flex items-center">
                        <RiBroadcastLine className="mr-2"/> {/* Add icon here */}
                        Live
                    </a>

                    {/* Signal */}
                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded flex items-center">
                        <FaSignal className="mr-2"/> {/* Add icon here */}
                        Signal
                    </a>
                </div>
            )}
        </div>
    );
}
