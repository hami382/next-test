import {useState} from 'react';
import {FaSearch, FaBell, FaUserCircle} from 'react-icons/fa';

export default function Header() {
    // State to control the visibility of the search bar
    const [showSearch, setShowSearch] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            {/* Left side (Optional for logo or other items) */}
            <div></div>

            {/* Right-side icons */}
            <div className="flex items-center space-x-4">
                {/* Search Icon with Search Bar next to it */}
                <div className="flex items-center space-x-2">
                    {/* Search Bar that expands from left to right */}
                    <div
                        className={`flex transition-all duration-500 ease-in-out items-center border border-gray-300 rounded overflow-hidden ${showSearch ? 'w-48' : 'w-0'}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 w-full"
                            style={{height: '20px'}} // Match height with search icon
                        />
                    </div>

                    {/* Search Icon */}
                    <FaSearch
                        className="text-gray-500 cursor-pointer"
                        size={20}
                        onClick={() => setShowSearch(!showSearch)} // Toggle search bar
                    />
                </div>

                {/* Notification Icon */}
                <FaBell className="text-gray-500" size={20}/>

                {/* Profile Icon (CN) */}
                <FaUserCircle className="text-gray-500" size={28}/>
            </div>
        </nav>
    );
}
