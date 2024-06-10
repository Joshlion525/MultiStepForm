import React from "react";
import SideNav from "../component/SideNav";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSubscription } from "../context/SubscriptionContext";

const AddOns = () => {
	const navigate = useNavigate();
	const { subscriptionType, setSelectedAddOn } = useSubscription();

	const [addons, setAddons] = useState({
		onlineServices: { selected: false, amount: 1 },
		largeStorage: { selected: false, amount: 2 },
		customizableProfile: { selected: false, amount: 2 },
	});
	const [error, setError] = useState("");

	const handleCheckbox = (e) => {
		const { name, checked } = e.target;
		setAddons((prev) => ({
			...prev,
			[name]: { ...prev[name], selected: checked },
		}));
		setError("");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const isSelected = Object.values(addons).some(
			(addOn) => addOn.selected
		);

		if (!isSelected) {
			setError("Please select at least Add-On before proceeding");
		} else {
			// const selectedAddOnData = Object.entries(addons)
			// 	.filter(([key, addOn]) => addOn.selected)
			// 	.map(([key, addOn]) => ({ name: key, amount: addOn.amount }));
            setSelectedAddOn(addons)
			console.log("Selected Add-Ons:", addons);
            navigate("/summary")
		}
	};
	return (
		<div className="bg-blue-50 min-h-screen font-Ubuntu lg:py-28 xl:py-36">
			<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-20 lg:flex-row">
				<SideNav />
				<div className="flex-1 px-6 py-5 lg:pr-10 lg:py-10">
					<div>
						<h1 className="text-gray-800 font-bold text-4xl mb-3">
							Pick add-ons
						</h1>
						<p className="text-gray-400 mb-10 text-lg">
							Add-ons help enchance your gaming experience.
						</p>
					</div>
					<form action="" onSubmit={handleSubmit}>
						<div
							className={`flex justify-between items-center border rounded-lg p-4 mb-5 ${
								addons.onlineServices.selected
									? "border-blue-400"
									: "border"
							}`}
						>
							<div className="flex gap-5 items-center">
								<input
									type="checkbox"
									name="onlineServices"
									id="onlineServices"
									className="w-4 h-4"
									checked={addons.onlineServices.selected}
									onChange={handleCheckbox}
								/>
								<div>
									<h1 className="text-gray-800 font-bold text-lg">
										Online service
									</h1>
									<p className="text-gray-400 text-sm">
										Access to multiplayer games
									</p>
								</div>
							</div>
							<p className="text-blue-900 font-semibold">
								{subscriptionType === "yearly"
									? "$10/yr"
									: "$1/mo"}
							</p>
						</div>
						<div
							className={`flex justify-between items-center border rounded-lg p-4 mb-5 ${
								addons.largeStorage.selected
									? "border-blue-400"
									: "border"
							}`}
						>
							<div className="flex gap-5 items-center">
								<input
									type="checkbox"
									name="largeStorage"
									id="largeStorge"
									className="w-4 h-4"
									checked={addons.largeStorage.selected}
									onChange={handleCheckbox}
								/>
								<div>
									<h1 className="text-gray-800 font-bold text-lg">
										Larger storage
									</h1>
									<p className="text-gray-400 text-sm">
										Extra 1TB of cloud service
									</p>
								</div>
							</div>
							<p className="text-blue-900 font-semibold">
								{subscriptionType === "yearly"
									? "$20/yr"
									: "$2/mo"}
							</p>
						</div>
						<div
							className={`flex justify-between items-center border rounded-lg p-4 mb-5 ${
								addons.customizableProfile.selected
									? "border-blue-400"
									: "border"
							}`}
						>
							<div className="flex gap-5 items-center">
								<input
									type="checkbox"
									name="customizableProfile"
									id="customizableProfile"
									className="w-4 h-4"
									checked={
										addons.customizableProfile.selected
									}
									onChange={handleCheckbox}
								/>
								<div>
									<h1 className="text-gray-800 font-bold text-lg">
										Customizable profile
									</h1>
									<p className="text-gray-400 text-sm">
										Custom theme on your profile
									</p>
								</div>
							</div>
							<p className="text-blue-900 font-semibold">
								{subscriptionType === "yearly"
									? "$20/yr"
									: "$2/mo"}
							</p>
						</div>
						{error && (
							<div className="text-red-500 mt-4">{error}</div>
						)}
						<div className="flex justify-between mt-24">
							<button
								className="text-gray-400 active:text-gray-950 font-bold"
								onClick={() => navigate("/selectplan")}
							>
								Go Back
							</button>
							<button
								type="submit"
								className="bg-gray-800 text-white rounded-md py-3 px-4 w-28 my-4 active:bg-blue-900"
							>
								Next Step
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddOns;
