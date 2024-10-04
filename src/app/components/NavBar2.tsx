import {useState} from "react";

export default function NavBar2() {
    const [isPackageOpen, setIsPackageOpen] = useState(false);
    const [isSignalOpen, setIsSignalOpen] = useState(false);

    // Closes both Signal and My Package
    const closeSignalAndMyPackage = () => {
        setIsSignalOpen(false);
        setIsPackageOpen(false);
    };

    // Only closes Signal
    const closeSignal = () => {
        setIsSignalOpen(false);
    };

    return (
        <div>
            <nav className="bg-gray-100 shadow p-1 flex justify-start space-x-1">
                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200 ml-[40px]"
                   onClick={closeSignalAndMyPackage} // Close Signal and My Package on My Profile click
                >
                    My Profile
                </a>

                {/* My Package */}
                <a href="#"
                   className={`w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200 ${
                       isPackageOpen ? 'text-customPink bg-gray-200' : 'text-gray-700 hover:bg-gray-200'
                   }`}
                   onClick={() => {
                       setIsPackageOpen(!isPackageOpen);
                       closeSignal(); // Close Signal if My Package is toggled
                   }}
                >
                    My Package
                </a>

                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                   onClick={closeSignalAndMyPackage} // Close Signal and My Package on My Wallet click
                >
                    My Wallet
                </a>

                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                   onClick={closeSignalAndMyPackage} // Close Signal and My Package on Notification click
                >
                    Notification
                </a>

                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                   onClick={closeSignalAndMyPackage} // Close Signal and My Package on Affiliate click
                >
                    Affiliate
                </a>
            </nav>

            {/* Submenu for My Package */}
            {isPackageOpen && (
                <div className="bg-gray-100 shadow p-3 flex justify-start space-x-2 ml-[0px] mt-1">
                    <a href="#"
                       className="text-gray-700 hover:text-gray-900 w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                       onClick={closeSignal} // Close only Signal on Group Trading click
                    >
                        Group Trading
                    </a>

                    <a href="#"
                       className="text-gray-700 hover:text-gray-900 w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                       onClick={closeSignal} // Close only Signal on Live Trading click
                    >
                        Live Trading
                    </a>

                    <a href="#"
                       className="text-gray-700 hover:text-gray-900 w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                       onClick={closeSignal} // Close only Signal on Backtesting click
                    >
                        Backtesting
                    </a>

                    <a href="#"
                       className={`w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200 ${
                           isSignalOpen ? 'text-customPink bg-gray-200' : 'text-gray-700 hover:bg-gray-200'
                       }`}
                       onClick={() => setIsSignalOpen(!isSignalOpen)} // Toggle Signal page
                    >
                        Signal
                    </a>
                </div>
            )}

            {/* Signal Page Content */}
            {isSignalOpen && (
                <div className="bg-white shadow-lg p-4 mt-2 border rounded-md">
                    <h2 className="text-xl font-bold">Jackson Lee / Admin</h2>
                    <p className="text-gray-600">jackson.lee@email.com</p>
                    <p className="text-gray-600">Affiliate number: BC01001</p>
                </div>
            )}
        </div>
    );
}
