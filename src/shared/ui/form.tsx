import { Slot } from "@radix-ui/react-slot";
import {
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	useFormContext,
} from "react-hook-form";

import {
	type ComponentProps,
	createContext,
	forwardRef,
	useContext,
	useId,
} from "react";
import { cn } from "../lib/css-utils";
import { Label } from "./label";

const Form = FormProvider;

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
	{} as FormFieldContextValue,
);

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	);
};

const useFormField = () => {
	const fieldContext = useContext(FormFieldContext);
	const itemContext = useContext(FormItemContext);
	const { getFieldState, formState } = useFormContext();

	const fieldState = getFieldState(fieldContext.name, formState);

	if (!fieldContext) {
		throw new Error("useFormField should be used within <FormField>");
	}

	const { id } = itemContext;

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	};
};

type FormItemContextValue = {
	id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
	{} as FormItemContextValue,
);

const FormItem = ({ className, ...props }: ComponentProps<"div">) => {
	const id = useId();

	return (
		<FormItemContext.Provider value={{ id }}>
			<div className={cn("space-y-2", className)} {...props} />
		</FormItemContext.Provider>
	);
};

const FormLabel = forwardRef(
	({ className, ...props }: ComponentProps<typeof Label>) => {
		const { formItemId } = useFormField();

		return <Label className={cn(className)} htmlFor={formItemId} {...props} />;
	},
);

const FormControl = ({ ...props }: ComponentProps<typeof Slot>) => {
	const { error, formItemId, formDescriptionId, formMessageId } =
		useFormField();

	return (
		<Slot
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			{...props}
		/>
	);
};

const FormMessage = ({
	className,
	children,
	...props
}: ComponentProps<"p">) => {
	const { formDescriptionId, error, formMessageId } = useFormField();

	const messageContent = error ? String(error.message) : children;
	const messageId = error ? formMessageId : formDescriptionId;

	if (messageContent) {
		return (
			<p
				id={messageId}
				className={cn(
					"text-[0.8rem] leading-none",
					{
						"font-medium text-destructive": error,
						"text-muted-foreground": !error,
					},
					className,
				)}
				{...props}
			>
				{messageContent}
			</p>
		);
	}

	return null;
};

export {
	useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
	FormField,
};
