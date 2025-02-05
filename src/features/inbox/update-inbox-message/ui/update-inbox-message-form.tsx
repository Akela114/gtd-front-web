import type { InboxMessage, UpdateInboxMessageDto } from "@/entities/inbox";
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
import { z } from "zod";
import { useUpdateInboxMessageMutation } from "../lib/hooks/use-update-inbox-message-mutation";

interface UpdateInboxMessageFormProps {
	inboxMessage: InboxMessage;
	onSubmitSuccess?: () => void;
}

const formSchema = z.object({
	message: z.string().min(2),
}) satisfies z.ZodType<UpdateInboxMessageDto>;

export const UpdateInboxMessageForm: FC<UpdateInboxMessageFormProps> = ({
	inboxMessage,
	onSubmitSuccess,
}) => {
	const { mutateAsync } = useUpdateInboxMessageMutation(inboxMessage.id);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			message: inboxMessage.message ?? "",
		},
	});

	const submitForm = async (values: z.infer<typeof formSchema>) => {
		try {
			await mutateAsync(values);
			onSubmitSuccess?.();
		} catch {}
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
					name="message"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Сообщение</FormLabel>
							<FormControl>
								<FormFieldInput placeholder="Прочитать про..." {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isSubmitDisabled}>Подтвердить</Button>
			</form>
		</Form>
	);
};
