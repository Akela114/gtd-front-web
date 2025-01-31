import type { ComponentProps, FC, ReactNode } from "react";
import { cn } from "../lib/css-utils";

interface BaseCardProps extends ComponentProps<"div"> {
	children: ReactNode;
}

export const BaseCard: FC<BaseCardProps> = ({ className, ...props }) => {
	return (
		<div
			className={cn(
				"rounded border border-border bg-card text-card-foreground shadow",
				className,
			)}
			{...props}
		/>
	);
};
