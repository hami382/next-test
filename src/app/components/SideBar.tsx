import {useState} from 'react';
import {FaChevronUp, FaFolder, FaChartLine, FaSignal} from 'react-icons/fa';
import {MdOutlineDashboard} from 'react-icons/md';
import {RiBroadcastLine} from 'react-icons/ri';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(true);
    const [isLibraryOpen, setIsLibraryOpen] = useState(false);
    const [isBacktestOpen, setIsBacktestOpen] = useState(false);
    const [isLiveOpen, setIsLiveOpen] = useState(false);
    const [isSignalOpen, setIsSignalOpen] = useState(false);

    return (
        <div
            className={`h-screen top-[90px] bg-customGray text-black transition-all duration-700 ${isOpen ? 'w-[250px] p-4' : 'w-0 p-0'}`}
        >
            <button
                className={`absolute top-[90px] transform transition-all  duration-700 bg-white text-black p-2 rounded-full border border-gray-200 
                ${isOpen ? 'left-[235px]' : 'left-0'}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaChevronUp className={`transition-transform duration-700 ${isOpen ? 'rotate-90' : '-rotate-90'}`}/>
            </button>

            {isOpen && (
                <div className="flex flex-col space-y-4">
                    <h1 className="text-2xl font-bold">Menu</h1>

                    <a href="#" className="text-black hover:bg-gray-200 p-2 rounded flex items-center">
                        <MdOutlineDashboard className="mr-2"/>
                        Overview
                    </a>

                    <a
                        href="#"
                        className="text-black hover:bg-gray-200 p-2 rounded flex items-center"
                        onClick={() => setIsLibraryOpen(!isLibraryOpen)}
                    >
                        <FaFolder className="mr-2"/>
                        My Library
                    </a>

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

                    <a
                        href="#"
                        className="text-black hover:bg-gray-200 p-2 rounded flex items-center"
                        onClick={() => setIsBacktestOpen(!isBacktestOpen)}
                    >
                        <FaChartLine className="mr-2"/>
                        Backtest
                    </a>

                    <div
                        className={`ml-6 mt-2 flex flex-col space-y-2 overflow-hidden duration-1000`}
                        style={{
                            maxHeight: isBacktestOpen ? "500px" : "0",
                        }}
                    >
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Bots</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Results</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">History</a>
                    </div>

                    <a
                        href="#"
                        className="text-black hover:bg-gray-200 p-2 rounded flex items-center"
                        onClick={() => setIsLiveOpen(!isLiveOpen)}
                    >
                        <RiBroadcastLine className="mr-2"/>
                        Live
                    </a>

                    <div
                        className={`ml-6 mt-2 flex flex-col space-y-2 overflow-hidden duration-1000`}
                        style={{
                            maxHeight: isLiveOpen ? "500px" : "0",
                        }}
                    >
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Trade Bots</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Open Orders</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Trade History</a>
                    </div>

                    <a
                        href="#"
                        className="text-black hover:bg-gray-200 p-2 rounded flex items-center"
                        onClick={() => setIsSignalOpen(!isSignalOpen)}
                    >
                        <FaSignal className="mr-2"/>
                        Signal
                    </a>

                    <div
                        className={`ml-6 mt-2 flex flex-col space-y-2 overflow-hidden duration-1000`}
                        style={{
                            maxHeight: isSignalOpen ? "500px" : "0",
                        }}
                    >
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Trade List</a>
                        <a href="#" className="text-black hover:bg-gray-200 p-2 rounded">Total Summery</a>
                    </div>
                </div>
            )}
        </div>
    );
}
