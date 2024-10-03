export default function NavBar2() {
    return (
        <nav className="bg-gray-100 shadow p-1 flex justify-start space-x-2">
            {/* Tab Trigger with width and height */}
            <a href="#" className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200 ml-[40px]">My Profile</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200">My Package</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200">My Wallet</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200">Notification</a>
            <a href="#" className="text-gray-700 hover:text-gray-900 w-[112px] h-[28px] flex items-center justify-center hover:bg-gray-200">Affiliate</a>
        </nav>
    );
}
