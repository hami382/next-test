import {useState} from "react";
import SignalInfo from "./SignalInformation";

export default function ProfileBar() {
    const [isPackageOpen, setIsPackageOpen] = useState(false);
    const [isSignalOpen, setIsSignalOpen] = useState(false);

    const closeSignalAndMyPackage = () => {
        setIsSignalOpen(false);
        setIsPackageOpen(false);
    };

    const closeSignal = () => {
        setIsSignalOpen(false);
    };

    return (
        <div>
            <nav className="bg-gray-100 shadow p-1 flex justify-start space-x-1">
                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200 ml-[40px]"
                   onClick={closeSignalAndMyPackage}
                >
                    My Profile
                </a>

                <a href="#"
                   className={`w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200 ${
                       isPackageOpen ? 'text-customPurple bg-gray-200' : 'text-gray-700 hover:bg-gray-200'
                   }`}
                   onClick={() => {
                       setIsPackageOpen(!isPackageOpen);
                       closeSignal();
                   }}
                >
                    My Package
                </a>

                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                   onClick={closeSignalAndMyPackage}
                >
                    My Wallet
                </a>

                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                   onClick={closeSignalAndMyPackage}
                >
                    Notification
                </a>

                <a href="#"
                   className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                   onClick={closeSignalAndMyPackage}
                >
                    Affiliate
                </a>
            </nav>

            {isPackageOpen && (
                <div className="bg-gray-100 shadow p-3 flex justify-start space-x-2 ml-[0px] mt-1">
                    <a href="#"
                       className="text-gray-700 hover:text-gray-900 w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                       onClick={closeSignal}
                    >
                        Group Trading
                    </a>

                    <a href="#"
                       className="text-gray-700 hover:text-gray-900 w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                       onClick={closeSignal}
                    >
                        Live Trading
                    </a>

                    <a href="#"
                       className="text-gray-700 hover:text-gray-900 w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200"
                       onClick={closeSignal}
                    >
                        Backtesting
                    </a>

                    <a href="#"
                       className={`w-[150px] h-[28px] flex items-center justify-center hover:bg-gray-200 ${
                           isSignalOpen ? 'text-customPurple bg-gray-200' : 'text-gray-700 hover:bg-gray-200'
                       }`}
                       onClick={() => setIsSignalOpen(!isSignalOpen)}
                    >
                        Signal
                    </a>
                </div>
            )}

            {isSignalOpen && (
                <div className="bg-white shadow-lg p-4 mt-2 border rounded-md">
                    <h2 className="text-xl font-bold">Jackson Lee / Admin</h2>
                    <p className="text-gray-600">jackson.lee@email.com</p>
                    <p className="text-gray-600">Affiliate number: BC01001</p>
                    <SignalInfo/>
                </div>
            )}
        </div>
    );
}
