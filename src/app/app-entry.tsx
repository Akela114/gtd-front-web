import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { appQueryClient } from "./app-query-client";
import { appRouter } from "./app-router";

import "./css/global.css";

const rootElement = document.getElementById("root");

if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<QueryClientProvider client={appQueryClient}>
				<RouterProvider router={appRouter()} />
			</QueryClientProvider>
		</StrictMode>,
	);
} else {
	console.error("#root element not found");
}
