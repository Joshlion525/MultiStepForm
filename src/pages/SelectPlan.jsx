import React, { useState } from "react";
import SideNav from "../component/SideNav";
import Arcade from "../assets/icon-arcade.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";
import { useNavigate } from "react-router-dom";
import { useSubscription } from "../context/SubscriptionContext";

const SelectPlan = () => {
	const navigate = useNavigate();
	const {
		subscriptionType,
		setSubscriptionType,
		selectedPlan,
		setSelectedPlan,
	} = useSubscription();
	const [error, setError] = useState("");

	const handleRadioChange = (plan) => {
		let amount;
		if (plan === "arcade") {
			amount = subscriptionType === "yearly" ? 90 : 9;
		} else if (plan === "advanced") {
			amount = subscriptionType === "yearly" ? 120 : 12;
		} else if (plan === "pro") {
			amount = subscriptionType === "yearly" ? 150 : 15;
		}
		setSelectedPlan({ plan, amount });
		setError("");
	};

	const toggle = (e) => {
		e.preventDefault();
		const newSubscriptionType =
			subscriptionType === "monthly" ? "yearly" : "monthly";
		const newAmount =
			selectedPlan.plan === "arcade"
				? newSubscriptionType === "yearly"
					? 90
					: 9
				: selectedPlan.plan === "advanced"
				? newSubscriptionType === "yearly"
					? 120
					: 12
				: selectedPlan.plan === "pro"
				? newSubscriptionType === "yearly"
					? 150
					: 15
				: 0;
		setSubscriptionType(newSubscriptionType);
		setSelectedPlan((prevData) => ({
			...prevData,
			amount: newAmount,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!selectedPlan.plan) {
			setError("Please select a plan before proceeding.");
		} else {
			setError("");
			navigate("/addons");
			console.log(selectedPlan);
		}
	};

	return (
		<div className="bg-blue-50 min-h-screen font-Ubuntu lg:py-28 xl:py-36">
			<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-20 lg:flex-row">
				<SideNav />
				<div className="flex-1 px-6 py-5 lg:pr-10 lg:py-10">
					<div>
						<h1 className="text-gray-800 font-bold text-4xl mb-3">
							Select your plan
						</h1>
						<p className="text-gray-400 mb-10 text-lg">
							You have the option of monthly or yearly billing.
						</p>
					</div>
					<form action="" onSubmit={handleSubmit}>
						<div className="flex gap-5">
							<div
								className={`border p-4 h-fit w-full flex flex-col justify-between gap-16 rounded-md cursor-pointer ${
									selectedPlan.plan === "arcade"
										? "border-blue-400 bg-blue-50"
										: "border"
								}`}
								onClick={() => handleRadioChange("arcade")}
							>
								<div>
									<img src={Arcade} alt="Arcade Plan" />
								</div>
								<div>
									<h1 className="text-gray-800 font-semibold">
										Arcade
									</h1>
									<p className="text-gray-400">
										{subscriptionType === "yearly"
											? "$90/yr"
											: "$9/mo"}
									</p>
									{subscriptionType === "yearly" && (
										<p className="text-gray-800 text-sm">
											2 months free
										</p>
									)}
								</div>
							</div>
							<div
								className={`border p-4 h-fit w-full flex flex-col justify-between gap-16 rounded-md cursor-pointer ${
									selectedPlan.plan === "advanced"
										? "border-blue-400 bg-blue-50"
										: "border"
								}`}
								onClick={() => handleRadioChange("advanced")}
							>
								<div>
									<img src={Advanced} alt="Advanced Plan" />
								</div>
								<div>
									<h1 className="text-gray-800 font-semibold">
										Advanced
									</h1>
									<p className="text-gray-400">
										{subscriptionType === "yearly"
											? "$120/yr"
											: "$12/mo"}
									</p>
									{subscriptionType === "yearly" && (
										<p className="text-gray-800 text-sm ">
											2 months free
										</p>
									)}
								</div>
							</div>
							<div
								className={`border p-4 h-fit w-full flex flex-col justify-between gap-16 rounded-md cursor-pointer ${
									selectedPlan.plan === "pro"
										? "border-blue-400 bg-blue-50"
										: "border"
								}`}
								onClick={() => handleRadioChange("pro")}
							>
								<div>
									<img src={Pro} alt="Pro Plan" />
								</div>
								<div>
									<h1 className="text-gray-800 font-semibold">
										Pro
									</h1>
									<p className="text-gray-400">
										{subscriptionType === "yearly"
											? "$150/yr"
											: "$15/mo"}
									</p>
									{subscriptionType === "yearly" && (
										<p className="text-gray-800 text-sm ">
											2 months free
										</p>
									)}
								</div>
							</div>
						</div>
						{error && (
							<div className="text-red-500 mt-4">{error}</div>
						)}
						<div className="mt-10 py-3 flex justify-center rounded-md bg-gray-100">
							<h1 className="text-gray-800 font-semibold">
								Monthly
							</h1>
							<button
								type="button"
								onClick={toggle}
								className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer mx-5 ${
									subscriptionType === "yearly"
										? "bg-blue-900"
										: "bg-gray-900"
								}`}
							>
								<div
									className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
										subscriptionType === "yearly"
											? "translate-x-6"
											: ""
									}`}
								></div>
							</button>
							<h1 className="text-gray-800 font-semibold">
								Yearly
							</h1>
						</div>
						<div className="flex justify-between mt-24">
							<button
								className="text-gray-400 active:text-gray-950 font-bold"
								onClick={() => navigate("/")}
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

export default SelectPlan;
