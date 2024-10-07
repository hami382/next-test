import {useState} from "react";

export default function FavoriteAssetName() {
    const [selectedAssets, setSelectedAssets] = useState([]);
    const [availableAssets, setAvailableAssets] = useState([
        {name: "Germany (+246)", selected: false, index: 0},
        {name: "Germany (+246)", selected: false, index: 1},
        {name: "Brazil (+46)", selected: false, index: 2},
        {name: "Brazil (+46)", selected: false, index: 3},
        {name: "Australia (+76)", selected: false, index: 4},
        {name: "Australia (+76)", selected: false, index: 5},
        {name: "Canada (+918)", selected: false, index: 6},
        {name: "Canada (+918)", selected: false, index: 7},
        {name: "Germany (+246)", selected: false, index: 8},
        {name: "Germany (+246)", selected: false, index: 9},
        {name: "Brazil (+46)", selected: false, index: 10},
        {name: "Brazil (+46)", selected: false, index: 11},
        {name: "Australia (+76)", selected: false, index: 12},
        {name: "Australia (+76)", selected: false, index: 13},
        {name: "Canada (+918)", selected: false, index: 14},
        {name: "Canada (+918)", selected: false, index: 15},
        {name: "Germany (+246)", selected: false, index: 16},
        {name: "Germany (+246)", selected: false, index: 17},
        {name: "Brazil (+46)", selected: false, index: 18},
        {name: "Brazil (+46)", selected: false, index: 19},
    ]);

    const assetTypes = ["USDT", "FDUSD", "USDC", "TUSD", "BNB", "BTC"];

    const addSelectedAssets = () => {
        const newSelected = availableAssets.filter(asset => asset.selected);
        const newAvailableAssets = availableAssets.filter(asset => !asset.selected);

        setSelectedAssets([...selectedAssets, ...newSelected.map(asset => ({...asset, selected: false}))]);
        setAvailableAssets(newAvailableAssets);
    };

    const toggleSelectInRightPanel = index => {
        const updatedAssets = [...selectedAssets];
        updatedAssets[index].selected = !updatedAssets[index].selected;
        setSelectedAssets(updatedAssets);
    };

    const returnSelectedAssets = () => {
        const toReturn = selectedAssets.filter(asset => asset.selected);
        const remainingInRightPanel = selectedAssets.filter(asset => !asset.selected);

        setAvailableAssets(
            [...availableAssets, ...toReturn.map(asset => ({...asset, selected: false}))]
                .sort((a, b) => a.index - b.index)
        );
        setSelectedAssets(remainingInRightPanel);
    };

    const toggleSelectAsset = index => {
        const updatedAssets = [...availableAssets];
        updatedAssets[index].selected = !updatedAssets[index].selected;
        setAvailableAssets(updatedAssets);
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Favorite Asset Name</h2>
            <p className="mt-1 text-gray-600">Please enter your current password to change your password</p>

            <div className="flex space-x-4 mt-4">
                {assetTypes.map((type, index) => (
                    <button
                        key={index}
                        className="ml-[240px] px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-customPurple"
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="mt-4">
                <input
                    type="text"
                    placeholder="Search Assets..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-customPurple"
                />
            </div>

            <div className="mt-4 flex justify-between">
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
                                    <span className="text-customPurple">✔</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-center mx-4 space-y-2">
                    <button
                        onClick={addSelectedAssets}
                        className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-blue-500"
                    >
                        ➡
                    </button>
                    <button
                        onClick={returnSelectedAssets}
                        className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-yellow-500"
                    >
                        ⬅
                    </button>
                </div>

                <div className="w-1/2 border p-4 rounded-md">
                    <div className="grid grid-cols-1 gap-4">
                        {selectedAssets.map((asset, index) => (
                            <div
                                key={index}
                                onClick={() => toggleSelectInRightPanel(index)}
                                className={`flex items-center justify-between px-4 py-2 border rounded-md cursor-pointer ${
                                    asset.selected ? "bg-purple-100" : ""
                                }`}
                            >
                                <span>{asset.name}</span>
                                {asset.selected && (
                                    <span className="text-customPurple">✔</span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
