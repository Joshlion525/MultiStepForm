import React from "react";
import background from "../assets/bg-sidebar-desktop.svg";
import { useSubscription } from "../context/SubscriptionContext";
import { useNavigate } from "react-router-dom";


const Summary = () => {
	const { subscriptionType, selectedPlan, selectedAddOn } = useSubscription();
	const totalAmount = () => {
		let total = 0;
		const totalAddOn = Object.values(selectedAddOn)
			.filter((addOn) => addOn.selected)
			.reduce((total, addOn) => total + addOn.amount, 0);
		return total += totalAddOn + selectedPlan.amount
	};
	const navigate = useNavigate();


	return (
		<div className="bg-blue-50 min-h-screen font-Ubuntu lg:py-28 xl:py-36">
			<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-20 lg:flex-row">
				<div
					className="bg-cover bg-bottom lg:bg-center bg-no-repeat p-7 h-44 lg:h-full lg:rounded-lg lg:w-[300px] flex flex-row justify-center lg:justify-start lg:flex-col"
					style={{ backgroundImage: `url(${background})` }}
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
							className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold text-white`}
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
							className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold bg-blue-50`}
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
				</div>
				<div className="flex-1 px-6 py-5 lg:pr-10 lg:py-10">
					<div>
						<h1 className="text-gray-800 font-bold text-4xl mb-3">
							Finishing up
						</h1>
						<p className="text-gray-400 mb-10 text-lg">
							Double-check everything looks OK before confirming
						</p>
					</div>
					<div className="bg-gray-100 p-6 rounded-lg ">
						<div className="flex items-center justify-between pb-6 border-b-2">
							<div>
								<h1 className="text-gray-800 font-bold capitalize">
									{selectedPlan.plan}({subscriptionType})
								</h1>
								<p
									className="text-gray-400 underline cursor-pointer"
									onClick={() => navigate("/selectplan")}
								>
									change
								</p>
							</div>
							<p className="text-gray-800 font-bold text-lg">
								${selectedPlan.amount}/
								{subscriptionType === "yearly" ? "yr" : "mo"}
							</p>
						</div>
						<div className="">
							{Object.entries(selectedAddOn)
								.filter(([key, addOn]) => addOn.selected)
								.map(([key, addOn]) => (
									<div
										className="flex justify-between items-center mt-5"
										key={key}
									>
										<p className="text-gray-400">
											{addOn.name}
										</p>
										<p className="text-gray-600 font-semibold">
											+${addOn.amount}/
											{subscriptionType === "yearly"
												? "yr"
												: "mo"}
										</p>
									</div>
								))}
						</div>
					</div>
					<div className="p-6">
						<div className="flex justify-between items-center">
							<p className="text-gray-400">
								Total(per{" "}
								{subscriptionType === "yearly"
									? "year"
									: "month"}
								)
							</p>
							<p className="text-gray-600 font-semibold text-lg">
								+{totalAmount()}/
								{subscriptionType === "yearly" ? "yr" : "mo"}
							</p>
						</div>
					</div>
					<div className="flex justify-between mt-24">
						<button
							className="text-gray-400 active:text-gray-950 font-bold"
							onClick={() => navigate("/addons")}
						>
							Go Back
						</button>
						<button
							type="submit"
							className="bg-blue-600 text-white rounded-md py-3 px-4 w-28 my-4"
							onClick={() => navigate("/thankyou")}
						>
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Summary;
