import type { InboxMessage } from "@/entities/inbox";
import { useCallbackWithToasts } from "@/shared/lib/hooks/use-toast-messages";
import { Button } from "@/shared/ui/button";
import { Trash } from "lucide-react";
import type { ComponentProps, FC } from "react";
import { useDeleteInboxMessageMutation } from "../lib/hooks/use-delete-inbox-message-mutation";
import { DELETE_INBOX_MESSAGE_TOASTS_DATA } from "../lib/toasts-data";

type DeleteInboxMessageActionProps = Omit<
	ComponentProps<typeof Button>,
	"size" | "variant" | "onClick"
> & {
	inboxMessage: InboxMessage;
};

export const DeleteInboxMessageButton: FC<DeleteInboxMessageActionProps> = ({
	inboxMessage,
	...props
}) => {
	const { mutateAsync, isPending } = useDeleteInboxMessageMutation(
		inboxMessage.id,
	);
	const mutateWithToasts = useCallbackWithToasts(
		mutateAsync,
		DELETE_INBOX_MESSAGE_TOASTS_DATA,
	);

	return (
		<Button
			disabled={isPending}
			size="icon"
			variant="outline"
			onClick={() => mutateWithToasts()}
			{...props}
		>
			<Trash />
		</Button>
	);
};
