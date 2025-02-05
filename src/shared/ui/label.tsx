import * as LabelPrimitive from "@radix-ui/react-label";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps, FC } from "react";
import { cn } from "../lib/css-utils";

const labelVariants = cva(
	"block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

type LabelProps = ComponentProps<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants>;

export const Label: FC<LabelProps> = ({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(labelVariants(), className)}
		{...props}
	/>
);
