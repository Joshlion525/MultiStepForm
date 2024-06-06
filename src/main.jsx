import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ActiveStepProvider } from "./context/ActiveStepContext.jsx";
import SelectPlan from "./pages/SelectPlan.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/selectplan",
		element: <SelectPlan />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ActiveStepProvider>
			<RouterProvider router={router} />
		</ActiveStepProvider>
	</React.StrictMode>
);
