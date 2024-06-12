import React from "react";
import background from "../assets/bg-sidebar-desktop.svg";
import Thanks from "../assets/icon-thank-you.svg";

const ThankYou = () => {
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
					<div className="flex flex-col justify-center md:h-[600px] py-20 lg:p-0">
						<div className="flex justify-center">
							<img src={Thanks} alt="" />
						</div>
						<div className="mt-2">
							<h1 className="text-3xl font-bold text-center my-5">
								Thank you!
							</h1>
							<p className="text-gray-400 text-lg text-center">
								Thanks for confirming your subscription! We hope
								you have fun using our platform. If you ever
								need support, please feel free to email us at
								support@loremgaming.com
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ThankYou;
