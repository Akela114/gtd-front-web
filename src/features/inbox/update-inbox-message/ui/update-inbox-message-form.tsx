import type { InboxMessage } from "@/entities/inbox";
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
import { useUpdateInboxMessageMutation } from "../lib/hooks/use-update-inbox-message-mutation";
import { updateInboxMessageFormSchema } from "../lib/schemas/update-inbox-message-form-schema";
import { UPDATE_INBOX_MESSAGE_TOASTS_DATA } from "../lib/toasts-data";

interface UpdateInboxMessageFormProps {
	inboxMessage: InboxMessage;
	onSubmitSuccess?: () => void;
}

export const UpdateInboxMessageForm: FC<UpdateInboxMessageFormProps> = ({
	inboxMessage,
	onSubmitSuccess,
}) => {
	const { mutateAsync } = useUpdateInboxMessageMutation(inboxMessage.id);
	const mutateWithToasts = useCallbackWithToasts(
		mutateAsync,
		UPDATE_INBOX_MESSAGE_TOASTS_DATA,
	);

	const form = useForm<z.infer<typeof updateInboxMessageFormSchema>>({
		resolver: zodResolver(updateInboxMessageFormSchema),
		defaultValues: {
			message: inboxMessage.message ?? "",
		},
	});

	const submitForm = async (
		values: z.infer<typeof updateInboxMessageFormSchema>,
	) => {
		try {
			await mutateWithToasts(values);
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
								<FormFieldInput
									placeholder="Прочитать про..."
									{...field}
									autoFocus
								/>
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
