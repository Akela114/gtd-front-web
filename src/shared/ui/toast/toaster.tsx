import { ToastDescription } from "@radix-ui/react-toast";
import type { FC } from "react";
import {
	Toast,
	ToastClose,
	ToastProvider,
	ToastTitle,
	ToastViewport,
} from "./toast";
import { useToast } from "./use-toast";

export const Toaster: FC = () => {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => (
				<Toast key={id} {...props}>
					<div className="grid gap-1">
						{title && <ToastTitle>{title}</ToastTitle>}
						{description && <ToastDescription>{description}</ToastDescription>}
					</div>
					{action}
					<ToastClose />
				</Toast>
			))}
			<ToastViewport />
		</ToastProvider>
	);
};
