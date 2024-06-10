import React, { useState } from "react";
import SideNav from "../component/SideNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		phonenumber: "",
	});
	const [error, setError] = useState({});
	const [activeStep, setActiveStep] = useState(null);

	const handleInput = (event) => {
		const { name, value } = event.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const validate = () => {
		const errors = {};
		const emailPattern = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

		if (!user.name.trim()) {
			errors.name = "This field is required";
		}
		if (!user.email.trim()) {
			errors.email = "This field is required";
		} else if (!emailPattern.test(user.email)) {
			errors.email = "Invalid email format";
		}
		if (!user.phonenumber.trim()) {
			errors.phonenumber = "This field is required";
		}
		return errors;
	};

	const addUser = (event) => {
		event.preventDefault();
		const errors = validate();
		setError(errors);
		if (Object.keys(errors).length === 0) {
			console.log("Form submitted", user);
			setUser({
				name: "",
				email: "",
				phonenumber: "",
			});
			setError({});
			navigate("/selectplan");
		}
	};

	return (
		<div className="max-w-[960px] md:h-[700px] mx-auto md:p-4 border rounded-lg bg-white shadow-lg flex flex-col lg:gap-24 lg:flex-row">
			<SideNav />
			<div className="px-6 py-5 lg:px-0 lg:py-10">
				<h1 className="text-gray-800 font-bold text-4xl mb-3">
					Personal Info
				</h1>
				<p className="text-gray-400 mb-10 text-lg">
					Please provide your name, email address, and phone number.
				</p>
				<form action="" onSubmit={addUser}>
					<div className="flex flex-col gap-2 my-6">
						<div className="flex justify-between">
							<label htmlFor="name" className="text-gray-800">
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
							id="name"
							name="name"
							className={`border outline-blue-500 px-2 h-12 rounded-lg ${
								error.name
									? "border-red-500"
									: "border-gray-400"
							}`}
							value={user.name}
							onChange={handleInput}
						/>
					</div>
					<div className="flex flex-col gap-2 my-6">
						<div className="flex justify-between">
							<label htmlFor="email" className="text-gray-800">
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
							id="email"
							name="email"
							className={`border outline-blue-500 px-2 h-12 rounded-lg ${
								error.email
									? "border-red-500"
									: "border-gray-400"
							}`}
							value={user.email}
							onChange={handleInput}
						/>
					</div>
					<div className="flex flex-col gap-2 my-6">
						<div className="flex justify-between">
							<label
								htmlFor="phonenumber"
								className="text-gray-800"
							>
								Phone Number
							</label>
							{error.phonenumber && (
								<p className="text-red-500 font-bold">
									{error.phonenumber}
								</p>
							)}
						</div>
						<input
							type="tel"
							placeholder="e.g +1 234 567 890"
							id="phonenumber"
							name="phonenumber"
							className={`border outline-blue-500 px-2 h-12 rounded-lg ${
								error.phonenumber
									? "border-red-500"
									: "border-gray-400"
							}`}
							value={user.phonenumber}
							onChange={handleInput}
						/>
					</div>
					<div className="flex justify-end lg:mt-28">
						<button className="bg-gray-800 text-white rounded-md py-3 px-4 w-28 my-4 active:bg-blue-900">
							Next Step
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Home;
