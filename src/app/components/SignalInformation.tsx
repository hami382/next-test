import {useState} from "react";
import FavoriteAssetName from './FavoriteAssetName';
import FavoriteTimeFrame from "./FavoriteTimeFrame";
import MoneyManagement from './MoneyManagement';
import PartnerWithUs from './PartnerWithUs';

export default function SignalInfo() {
    const [isSettingOpen, setIsSettingOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg p-4 mt-2 border rounded-md">
            <h2 className="text-xl font-bold">Signal</h2>
            <p className="mt-1 text-gray-600">Update your account settings. Set your personal info and location.</p>

            <div className="mt-10">
                <div className="flex space-x-4 mt-2">
                    <a href="#" className="text-gray-700 hover:text-customPurple hover:bg-gray-200">Service</a>
                    <a
                        href="#"
                        className={`hover:bg-gray-200 ${
                            isSettingOpen ? 'text-customPurple bg-gray-200' : 'text-gray-700 hover:bg-gray-200'
                        }`}
                        onClick={() => setIsSettingOpen(!isSettingOpen)}
                    >
                        Setting
                    </a>
                    <a href="#" className="text-gray-700 hover:text-customPurple hover:bg-gray-200">Turnover</a>
                </div>
            </div>

            {isSettingOpen && (
                <div>
                    <div className="mt-10">
                        <PartnerWithUs/>
                    </div>
                    <div className="mt-10">
                        <FavoriteAssetName/>
                    </div>
                    <div className="mt-10">
                        <FavoriteTimeFrame/>
                    </div>
                    <div className="mt-10">
                        <MoneyManagement/>
                    </div>
                </div>
            )}
        </div>
    );
}
