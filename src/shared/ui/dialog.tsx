import * as DialogPrimitive from "@radix-ui/react-dialog";

import { X } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { cn } from "../lib/css-utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay: FC<ComponentProps<typeof DialogPrimitive.Overlay>> = ({
	className,
	...props
}) => (
	<DialogPrimitive.Overlay
		className={cn(
			"fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
			className,
		)}
		{...props}
	/>
);

const DialogContent: FC<ComponentProps<typeof DialogPrimitive.Content>> = ({
	className,
	children,
	...props
}) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			className={cn(
				"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
				className,
			)}
			{...props}
		>
			{children}
		</DialogPrimitive.Content>
	</DialogPortal>
);

const DialogHeader: FC<ComponentProps<"div">> = ({
	className,
	children,
	...props
}) => (
	<div
		className={cn("flex gap-4 items-center justify-between", className)}
		{...props}
	>
		<div className="flex flex-col space-y-1.5 text-center sm:text-left">
			{children}
		</div>
		<DialogPrimitive.Close className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
			<X className="h-4 w-4" />
			<span className="sr-only">Close</span>
		</DialogPrimitive.Close>
	</div>
);

const DialogFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn(
			"flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
			className,
		)}
		{...props}
	/>
);

const DialogTitle: FC<ComponentProps<typeof DialogPrimitive.Title>> = ({
	className,
	...props
}) => (
	<DialogPrimitive.Title
		className={cn(
			"text-lg font-semibold leading-none tracking-tight",
			className,
		)}
		{...props}
	/>
);

const DialogDescription: FC<
	ComponentProps<typeof DialogPrimitive.Description>
> = ({ className, ...props }) => (
	<DialogPrimitive.Description
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
);

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogTrigger,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
