import { Toaster } from "@/shared/ui/toast";
import { Outlet } from "react-router";

export const baseLayout = (
	<>
		<main className="max-w-3xl mx-auto">
			<div className="p-6">
				<Outlet />
			</div>
		</main>
		<Toaster />
	</>
);
