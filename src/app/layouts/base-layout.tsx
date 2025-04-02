import { Toaster } from "@/shared/ui/toast";
import { Outlet } from "react-router";

export const baseLayout = (
	<>
		<div className="mx-auto flex flex-col min-h-screen">
			<header className="border-b border-border">
				<div className="w-full max-w-3xl px-6 mx-auto">HEADER</div>
			</header>
			<main className="flex-1 flex flex-col w-full max-w-3xl mx-auto p-6">
				<Outlet />
			</main>
		</div>
		<Toaster />
	</>
);
