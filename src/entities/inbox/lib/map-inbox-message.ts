import type { InboxMessageDto } from "../api/types";
import type { InboxMessage, InboxMessageId } from "../models/types";

export const mapInboxMessage = (message: InboxMessageDto): InboxMessage => ({
	id: message.id as InboxMessageId,
	message: message.message,
	createdAt: new Date(message.createdAt),
	updatedAt: new Date(message.updatedAt),
});
