import type { ComponentProps, FC } from "react";
import { cn } from "../lib/css-utils";

interface BaseListLayoutProps extends ComponentProps<"div"> {
	listTitle: string;
}

export const BaseListLayout: FC<BaseListLayoutProps> = ({
	listTitle,
	className,
	children,
	...props
}) => (
	<div className={cn("space-y-4", className)} {...props}>
		<div className="text-2xl font-semibold tracking-tight">{listTitle}</div>
		<div className="flex flex-col gap-2">{children}</div>
	</div>
);
