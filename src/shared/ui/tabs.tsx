"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";
import { cn } from "../lib/css-utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = ({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.List>) => (
	<TabsPrimitive.List
		className={cn(
			"inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground w-full",
			className,
		)}
		{...props}
	/>
);

export const TabsTrigger = ({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.Trigger>) => (
	<TabsPrimitive.Trigger
		className={cn(
			"inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow flex-1",
			className,
		)}
		{...props}
	/>
);

export const TabsContent = ({
	className,
	...props
}: ComponentProps<typeof TabsPrimitive.Content>) => (
	<TabsPrimitive.Content
		className={cn(
			"mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
			className,
		)}
		{...props}
	/>
);
