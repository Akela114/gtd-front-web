import { AuthPage } from "@/pages/auth-page";
import { MainPage } from "@/pages/main-page";
import { createBrowserRouter } from "react-router";
import { baseLayout } from "./layouts/base-layout";

export const appRouter = () =>
	createBrowserRouter([
		{
			element: baseLayout,
			children: [
				{
					path: "/",
					element: <AuthPage />,
				},
				{
					path: "/main",
					element: <MainPage />,
				},
			],
		},
	]);
