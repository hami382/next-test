import {useState} from "react";

export default function FavoriteAssetName() {
    const [selectedAssets, setSelectedAssets] = useState([]);
    const [availableAssets, setAvailableAssets] = useState([
        {name: "Germany (+246)", selected: false},
        {name: "Germany (+246)", selected: false},
        {name: "Brazil (+46)", selected: false},
        {name: "Brazil (+46)", selected: false},
        {name: "Australia (+76)", selected: false},
        {name: "Australia (+76)", selected: false},
        {name: "Canada (+918)", selected: false},
        {name: "Canada (+918)", selected: false},
        {name: "Germany (+246)", selected: false},
        {name: "Germany (+246)", selected: false},
        {name: "Brazil (+46)", selected: false},
        {name: "Brazil (+46)", selected: false},
        {name: "Australia (+76)", selected: false},
        {name: "Australia (+76)", selected: false},
        {name: "Canada (+918)", selected: false},
        {name: "Canada (+918)", selected: false},
        {name: "Germany (+246)", selected: false},
        {name: "Germany (+246)", selected: false},
        {name: "Brazil (+46)", selected: false},
        {name: "Brazil (+46)", selected: false},
    ]);

    const assetTypes = ["USDT", "FDUSD", "USDC", "TUSD", "BNB", "BTC"];

    // Function to handle adding selected assets
    const addSelectedAssets = () => {
        const newSelected = availableAssets.filter(asset => asset.selected);
        setSelectedAssets([...selectedAssets, ...newSelected]);
        setAvailableAssets(
            availableAssets.map(asset => ({...asset, selected: false}))
        );
    };

    // Function to handle selecting/unselecting assets
    const toggleSelectAsset = index => {
        const updatedAssets = [...availableAssets];
        updatedAssets[index].selected = !updatedAssets[index].selected;
        setAvailableAssets(updatedAssets);
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Favorite Asset Name</h2>
            <p className="mt-1 text-gray-600">Please enter your password to change your password</p>

            {/* Asset type buttons */}
            <div className="flex space-x-4 mt-4">
                {assetTypes.map((type, index) => (
                    <button
                        key={index}
                        className="ml-[240px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-customPink"
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Search bar */}
            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Search Assets..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPink"
                />
            </div>

            {/* Asset selection section */}
            <div className="mt-4 flex justify-between">
                {/* Available assets list */}
                <div className="w-1/2 border p-4 rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {availableAssets.map((asset, index) => (
                            <div
                                key={index}
                                onClick={() => toggleSelectAsset(index)}
                                className={`flex items-center justify-between px-4 py-2 border rounded-md cursor-pointer ${
                                    asset.selected ? "bg-purple-100" : ""
                                }`}
                            >
                                <span>{asset.name}</span>
                                {asset.selected && (
                                    <span className="text-customPink">✔</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle section for action buttons */}
                <div className="flex flex-col justify-center mx-4">
                    <button
                        onClick={addSelectedAssets}
                        className="px-4 py-2 bg-customPink text-white rounded-md shadow"
                    >
                        &gt;&gt;
                    </button>
                </div>

                {/* Selected assets list */}
                <div className="w-1/2 border p-4 rounded-md">
                    <div className="grid grid-cols-1 gap-4">
                        {selectedAssets.map((asset, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between px-4 py-2 border rounded-md"
                            >
                                <span>{asset.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
