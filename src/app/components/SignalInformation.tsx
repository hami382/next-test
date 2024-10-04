export default function SignalInfo() {
    return (
        <div className="bg-white shadow-lg p-4 mt-2 border rounded-md">
            <h2 className="text-xl font-bold">Signal</h2>
            <p className="text-gray-600">Update your account settings. Set your personal info and location.</p>

            <div className="mt-4">
                <p className="text-sm text-gray-500"></p>
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-700 hover:text-customPink">Service</a>
                    <a href="#" className="text-gray-700 hover:text-customPink">Setting</a>
                    <a href="#" className="text-gray-700 hover:text-customPink">Turnover</a>
                </div>
            </div>
        </div>
    );
}
