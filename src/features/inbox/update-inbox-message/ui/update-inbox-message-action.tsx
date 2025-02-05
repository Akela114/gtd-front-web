import type { InboxMessage } from "@/entities/inbox";
import type { FC } from "react";
import { UpdateInboxMessageButton } from "./update-inbox-message-button";
import { UpdateInboxMessageDialog } from "./update-inbox-message-dialog";

interface UpdateInboxMessageActionProps {
	inboxMessage: InboxMessage;
}

export const UpdateInboxMessageAction: FC<UpdateInboxMessageActionProps> = ({
	inboxMessage,
}) => {
	return (
		<UpdateInboxMessageDialog
			inboxMessage={inboxMessage}
			dialogTriggerElement={<UpdateInboxMessageButton />}
		/>
	);
};
