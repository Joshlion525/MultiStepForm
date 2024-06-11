import React from "react";
import background from "../assets/bg-sidebar-desktop.svg";
import { useActiveStep } from "../context/ActiveStepContext";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
	const { activeStep, setActiveStep } = useActiveStep();
    const navigate = useNavigate();
	const handleStepClick = (step, route) => {
		setActiveStep(step);
        navigate(route)
	}
	return (
		<div
			className="bg-cover bg-bottom lg:bg-center bg-no-repeat p-7 h-44 lg:h-full lg:rounded-lg lg:w-[300px] flex flex-row justify-center lg:justify-start lg:flex-col"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div
				className="flex gap-5 items-center py-3 mx-4 lg:mx-0"
				onClick={() => handleStepClick(1, "/")}
			>
				<div
					to={"/"}
					className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold ${
						activeStep === 1 ? "bg-blue-50" : " text-white"
					}`}
				>
					1
				</div>
				<div className="hidden lg:block">
					<p className="text-sm font-thin text-gray-400">STEP 1</p>
					<p className="font-bold text-white">YOUR INFO</p>
				</div>
			</div>
			<div
				className="flex gap-5 items-center py-3 mx-4 lg:mx-0"
				onClick={() => handleStepClick(2, "/selectplan")}
			>
				<div
					to={"/selectplan"}
					className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold ${
						activeStep === 2 ? "bg-blue-50" : " text-white"
					}`}
				>
					2
				</div>
				<div className="hidden lg:block">
					<p className="text-sm font-thin text-gray-400">STEP 2</p>
					<p className="font-bold text-white">SELECT PLAN</p>
				</div>
			</div>
			<div
				className="flex gap-5 items-center py-3 mx-4 lg:mx-0"
				onClick={() => handleStepClick(3, "/addons")}
			>
				<div
					className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold ${
						activeStep === 3 ? "bg-blue-50" : " text-white"
					}`}
				>
					3
				</div>
				<div className="hidden lg:block">
					<p className="text-sm font-thin text-gray-400">STEP 3</p>
					<p className="font-bold text-white">ADD-ONS</p>
				</div>
			</div>
			<div
				className="flex gap-5 items-center py-3 mx-4 lg:mx-0"
				onClick={() => handleStepClick(4, "/summary")}
			>
				<div
					className={`border rounded-full h-10 w-10 text-center flex justify-center items-center font-bold ${
						activeStep === 4 ? "bg-blue-50" : " text-white"
					}`}
				>
					4
				</div>
				<div className="hidden lg:block">
					<p className="text-sm font-thin text-gray-400">STEP 4</p>
					<p className="font-bold text-white">SUMMARY</p>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
