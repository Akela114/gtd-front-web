import { checkBadRequestErrors } from "@/shared/lib/error-handling-utils";
import { isKeyInSchema } from "@/shared/lib/form-utils";
import { useCallbackWithToasts } from "@/shared/lib/hooks/use-toast-messages";
import { Button } from "@/shared/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/ui/form";
import { FormFieldInput } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { useCreateUserMutation } from "../lib/hooks/user-create-user-mutation";
import { createUserFormSchema } from "../lib/schemas/create-user-form-schema";
import { CREATE_USER_TOASTS_DATA } from "../lib/toasts-data";

export const CreateUserForm: FC = () => {
	const { mutateAsync } = useCreateUserMutation();

	const mutateWithToasts = useCallbackWithToasts(
		mutateAsync,
		CREATE_USER_TOASTS_DATA,
	);

	const form = useForm<z.infer<typeof createUserFormSchema>>({
		resolver: zodResolver(createUserFormSchema),
		defaultValues: {
			email: "",
			username: "",
			password: "",
		},
	});

	const submitForm = async (values: z.infer<typeof createUserFormSchema>) => {
		try {
			await mutateWithToasts(values);
		} catch (error) {
			const badRequestErrors = await checkBadRequestErrors(error);
			if (badRequestErrors) {
				for (const [key, value] of Object.entries(badRequestErrors)) {
					if (isKeyInSchema(createUserFormSchema, key)) {
						form.setError(key, { message: value }, { shouldFocus: true });
					}
				}
			}
		}
	};

	const isSubmitDisabled =
		!form.formState.isDirty ||
		(form.formState.isSubmitted && !form.formState.isValid) ||
		form.formState.isSubmitting;

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Имя пользователя</FormLabel>
							<FormControl>
								<FormFieldInput {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Электронная почта</FormLabel>
							<FormControl>
								<FormFieldInput placeholder="example@ex.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<FormFieldInput {...field} type="password" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isSubmitDisabled}>Зарегистрироваться</Button>
			</form>
		</Form>
	);
};
