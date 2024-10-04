import {useState} from 'react';
import {FaSearch, FaBell, FaUserCircle} from 'react-icons/fa';

export default function Header() {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div></div>

            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div
                        className={`flex transition-all duration-500 ease-in-out items-center border border-gray-300 rounded overflow-hidden ${showSearch ? 'w-48' : 'w-0'}`}>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-2 w-full"
                            style={{height: '20px'}}
                        />
                    </div>

                    <FaSearch
                        className="text-gray-500 cursor-pointer"
                        size={20}
                        onClick={() => setShowSearch(!showSearch)}
                    />
                </div>

                <FaBell className="text-gray-500" size={20}/>

                <FaUserCircle className="text-gray-500" size={28}/>
            </div>
        </nav>
    );
}
