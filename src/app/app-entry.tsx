import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { z } from "zod";
import { appQueryClient } from "./app-query-client";
import { appRouter } from "./app-router";
import { zodErrorMap } from "./lib/zod-error-map";

import "./css/global.css";

z.setErrorMap(zodErrorMap);

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
