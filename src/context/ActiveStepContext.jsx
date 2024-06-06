import React, { createContext, useState, useContext } from "react";

const ActiveStepContext = createContext();

export const useActiveStep = () => useContext(ActiveStepContext);

export const ActiveStepProvider = ({ children }) => {
	const [activeStep, setActiveStep] = useState(1);

	return (
		<ActiveStepContext.Provider value={{ activeStep, setActiveStep }}>
			{children}
		</ActiveStepContext.Provider>
	);
};
