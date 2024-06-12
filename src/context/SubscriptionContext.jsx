import React, { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export const useSubscription = () => {
	return useContext(SubscriptionContext);
};

export const SubscriptionProvider = ({ children }) => {
	const [user, setUser] = useState({
		name: "",
		email: "",
		phonenumber: "",
	});
	const [subscriptionType, setSubscriptionType] = useState("monthly");
	const [selectedPlan, setSelectedPlan] = useState({
		plan: "",
		amount: 0,
	});
	const [selectedAddOn, setSelectedAddOn] = useState({});
	const [error, setError] = useState("");

	return (
		<SubscriptionContext.Provider
			value={{
				user,
				setUser,
				subscriptionType,
				setSubscriptionType,
				selectedPlan,
				setSelectedPlan,
				selectedAddOn,
				setSelectedAddOn,
				error,
				setError,
			}}
		>
			{children}
		</SubscriptionContext.Provider>
	);
};
