import type { ComponentProps, FC } from "react";
import { cn } from "../lib/css-utils";
import { useFormField } from "./form";

interface InputProps extends ComponentProps<"input"> {
	isError?: boolean;
}

export const Input: FC<InputProps> = (
	{ className, type, isError, autoComplete, ...props },
	ref,
) => {
	return (
		<input
			type={type}
			autoComplete={autoComplete ?? "off"}
			className={cn(
				"flex h-9 w-full border-b bg-transparent pb-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
				{
					"border-input": !isError,
					"border-destructive": isError,
				},
				className,
			)}
			ref={ref}
			{...props}
		/>
	);
};

export const FormFieldInput: FC<Omit<InputProps, "isError">> = (props) => {
	const { error } = useFormField();

	return <Input {...props} isError={Boolean(error)} />;
};
