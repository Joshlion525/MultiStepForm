import React from "react";
import SideNav from "../component/SideNav";
import { useNavigate } from "react-router-dom";


const AddOns = () => {
	const navigate = useNavigate();

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
					<form action="">
						<div className="flex justify-between items-center border rounded-lg p-4 mb-5">
							<div className="flex gap-5">
								<input type="checkbox" name="" id="" />
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
								+$1/mo
							</p>
						</div>
						<div className="flex justify-between items-center border rounded-lg p-4 mb-5">
							<div className="flex gap-5">
								<input type="checkbox" name="" id="" />
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
								+$2/mo
							</p>
						</div>
						<div className="flex justify-between items-center border rounded-lg p-4">
							<div className="flex gap-5">
								<input type="checkbox" name="" id="" />
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
								+$2/mo
							</p>
						</div>
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
