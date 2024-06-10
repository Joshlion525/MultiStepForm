import React, { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();

export const useSubscription = () => {
	return useContext(SubscriptionContext);
};

export const SubscriptionProvider = ({ children }) => {
	const [subscriptionType, setSubscriptionType] = useState("monthly");
	const [selectedPlan, setSelectedPlan] = useState({
		plan: "",
		amount: 0,
	});
	const [selectedAddOn, setSelectedAddOn] = useState({});

	return (
		<SubscriptionContext.Provider
			value={{
				subscriptionType,
				setSubscriptionType,
				selectedPlan,
				setSelectedPlan,
				selectedAddOn,
				setSelectedAddOn,
			}}
		>
			{children}
		</SubscriptionContext.Provider>
	);
};
