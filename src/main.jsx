import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectPlan from "./pages/SelectPlan.jsx";
import { SubscriptionProvider } from "./context/SubscriptionContext.jsx";
import AddOns from "./pages/AddOns.jsx";
import Summary from "./pages/Summary.jsx";
import ThankYou from "./pages/ThankYou.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/selectplan",
		element: <SelectPlan />,
	},
	{
		path: "/addons",
		element: <AddOns />,
	},
	{
		path: "/summary",
		element: <Summary />,
	},
	{
		path: "/thankyou",
		element: <ThankYou />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SubscriptionProvider>
				<RouterProvider router={router} />
		</SubscriptionProvider>
	</React.StrictMode>
);
