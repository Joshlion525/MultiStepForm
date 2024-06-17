import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSubscription } from "../context/SubscriptionContext";

const AddOns = () => {
	const navigate = useNavigate();
	const { subscriptionType, setSelectedAddOn, error, setError } =
		useSubscription();
    const isYearly = subscriptionType === "yearly";


	const [addons, setAddons] = useState({
		onlineServices: {
			name: "Online services",
			selected: false,
			amount: isYearly ? 10 : 1,
		},
		largeStorage: {
			name: "Large storage",
			selected: false,
			amount: isYearly ? 20 : 2,
		},
		customizableProfile: {
			name: "Customizable profile",
			selected: false,
			amount: isYearly ? 20 : 2,
		},
	});

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
			setSelectedAddOn(addons);
			console.log("Selected Add-Ons:", addons);
			navigate("/summary");
		}
	};
	return (
		<div className="bg-blue-50 min-h-screen font-Ubuntu lg:py-28 xl:py-36">
			<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-20 lg:flex-row">
				<main
					className="bg-cover bg-center md:bg-bottom lg:bg-center bg-no-repeat p-7 h-44 lg:h-full lg:rounded-lg lg:w-[300px] flex flex-row justify-center lg:justify-start lg:flex-col"
					
				>
					<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
						<div
							className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold text-white`}
						>
							1
						</div>
						<div className="hidden lg:block">
							<p className="text-sm font-thin text-gray-400">
								STEP 1
							</p>
							<p className="font-bold text-white">YOUR INFO</p>
						</div>
					</div>
					<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
						<div
							className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold text-white`}
						>
							2
						</div>
						<div className="hidden lg:block">
							<p className="text-sm font-thin text-gray-400">
								STEP 2
							</p>
							<p className="font-bold text-white">SELECT PLAN</p>
						</div>
					</div>
					<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
						<div
							className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold bg-blue-50`}
						>
							3
						</div>
						<div className="hidden lg:block">
							<p className="text-sm font-thin text-gray-400">
								STEP 3
							</p>
							<p className="font-bold text-white">ADD-ONS</p>
						</div>
					</div>
					<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
						<div
							className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold text-white`}
						>
							4
						</div>
						<div className="hidden lg:block">
							<p className="text-sm font-thin text-gray-400">
								STEP 4
							</p>
							<p className="font-bold text-white">SUMMARY</p>
						</div>
					</div>
				</main>
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
							className={`flex justify-between items-center border rounded-lg p-4 mb-5 hover:border-blue-400 ${
								addons.onlineServices.selected
									? "border-blue-400 bg-blue-50"
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
							className={`flex justify-between items-center border rounded-lg p-4 mb-5 hover:border-blue-400 ${
								addons.largeStorage.selected
									? "border-blue-400 bg-blue-50"
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
							className={`flex justify-between items-center border rounded-lg p-4 mb-5 hover:border-blue-400 ${
								addons.customizableProfile.selected
									? "border-blue-400 bg-blue-50"
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
