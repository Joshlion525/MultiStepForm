import React from "react";
import SideNav from "../component/SideNav";
import Thanks from "../assets/icon-thank-you.svg";

const ThankYou = () => {
	return (
		<div className="bg-blue-50 min-h-screen font-Ubuntu lg:py-28 xl:py-36">
			<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-20 lg:flex-row">
				<SideNav />
				<div className="flex-1 px-6 py-5 lg:pr-10 lg:py-10">
					<div className="flex flex-col justify-center md:h-[600px]">
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
