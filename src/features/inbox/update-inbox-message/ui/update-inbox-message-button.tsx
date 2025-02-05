import type { InboxMessage } from "@/entities/inbox";
import type { FC } from "react";
import { UpdateInboxMessageDialog } from "./update-inbox-message-dialog";
import { UpdateInboxMessageTrigger } from "./update-inbox-message-trigger";

interface UpdateInboxMessageButtonProps {
	inboxMessage: InboxMessage;
}

export const UpdateInboxMessageButton: FC<UpdateInboxMessageButtonProps> = ({
	inboxMessage,
}) => {
	return (
		<UpdateInboxMessageDialog
			inboxMessage={inboxMessage}
			dialogTriggerElement={<UpdateInboxMessageTrigger />}
		/>
	);
};
