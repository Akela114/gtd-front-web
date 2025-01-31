import type { FC } from "react";
import type { InboxMessage } from "../models/types";

interface InboxMessageCardProps {
	inboxMessage: InboxMessage;
}

export const InboxMessageCard: FC<InboxMessageCardProps> = ({
	inboxMessage,
}) => {
	return <div>{inboxMessage.message}</div>;
};
