import React, { useState } from "react";
import background from "../assets/bg-sidebar-desktop.svg";

const Home = () => {
	const [user, setUser] = useState({
		name: " ",
		email: " ",
		phonenumber: " ",
	});
	const [error, setError] = useState({});

	const handleInput = (event) => {
		const { name, value } = event.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};
	const Validation = () => {
		const error = {};
		const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

		if (!user.name.trim()) {
			error.name = "This field is required";
		}
		if (!user.email.trim()) {
			error.email = "	This field is required";
		}
		if (!user.phonenumber.trim()) {
			error.phonenumber = "This field is required";
		}
		return error;
	};
	const addUser = (event) => {
		event.preventDefault();
		const errors = Validation();
		setError(errors)
	};

	return (
		<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-24 lg:flex-row">
			<div
				className="bg-cover bg-bottom lg:bg-center bg-no-repeat p-7 h-44 lg:h-full lg:rounded-lg lg:w-[300px] flex flex-row justify-center lg:justify-start lg:flex-col"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
					<div className="border rounded-full h-10 w-10 text-center flex justify-center items-center bg-blue-50 font-bold">
						1
					</div>
					<div className="hidden lg:block">
						<p className="text-sm font-thin text-gray-400">
							STEP 1
						</p>
						<p className="font-bold text-white ">YOUR INFO</p>
					</div>
				</div>
				<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
					<div className="border rounded-full border-white text-white h-10 w-10 text-center flex justify-center items-center font-bold">
						2
					</div>
					<div className="hidden lg:block">
						<p className="text-sm font-thin text-gray-400">
							STEP 2
						</p>
						<p className="font-bold text-white ">SELECT PLAN</p>
					</div>
				</div>
				<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
					<div className="border rounded-full h-10 w-10 text-center flex justify-center items-center border-white  text-white font-bold">
						3
					</div>
					<div className="hidden lg:block">
						<p className="text-sm font-thin text-gray-400">
							STEP 3
						</p>
						<p className="font-bold text-white ">ADD-ONS</p>
					</div>
				</div>
				<div className="flex gap-5 items-center py-3 mx-4 lg:mx-0">
					<div className="border rounded-full h-10 w-10 text-center flex justify-center items-center border-white  text-white font-bold">
						4
					</div>
					<div className="hidden lg:block">
						<p className="text-sm font-thin text-gray-400">
							STEP 4
						</p>
						<p className="font-bold text-white ">SUMMARY</p>
					</div>
				</div>
			</div>
			<div className="px-6 py-5 lg:px-0 lg:py-10">
				<h1 className="text-gray-800 font-bold text-4xl mb-3">
					Personal Info
				</h1>
				<p className="text-gray-400 mb-10">
					Please provide your name, email address and phone number.
				</p>
				<form action="" onSubmit={addUser}>
					<div className="flex flex-col gap-2 my-6">
						<div className="flex justify-between">
							<label htmlFor="fullname" className="text-gray-800">
								Name
							</label>
							{error.name && (
								<p className="text-red-500 font-bold">
									{error.name}
								</p>
							)}
						</div>
						<input
							type="text"
							placeholder="e.g Stephen King"
							id="fullname"
							name="name"
							className="border border-gray-400 outline-gray-400 px-2 h-12 rounded-lg"
							onChange={handleInput}
						/>
					</div>
					<div className="flex flex-col gap-2 my-6">
						<div className="flex justify-between">
							<label htmlFor="mail" className="text-gray-800">
								Email
							</label>
							{error.email && (
								<p className="text-red-500 font-bold">
									{error.email}
								</p>
							)}
						</div>
						<input
							type="email"
							placeholder="e.g Stephenking@lorem.com"
							id="mail"
							name="email"
							className="border border-gray-400 outline-gray-400 px-2 h-12 rounded-lg"
							onChange={handleInput}
						/>
					</div>
					<div className="flex flex-col  gap-2 my-6">
						<div className="flex justify-between">
							<label htmlFor="phonenumber" className="text-gray-800">
								Phone Number
							</label>
							{error.phonenumber && (
								<p className="text-red-500 font-bold">
									{error.phonenumber}
								</p>
							)}
						</div>
						<input
							type="number"
							placeholder="e.g +1 234 567 890"
							id="phonenumber"
							className="border border-gray-400 outline-gray-400 px-2 h-12 rounded-lg"
							onChange={handleInput}
						/>
					</div>
					<div className="flex justify-end lg:mt-28">
						<button className="bg-gray-800 text-white rounded-md py-3 px-6 w-40 my-4">
							Next Step
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
