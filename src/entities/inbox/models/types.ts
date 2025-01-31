export type InboxMessageId = Brand<Id, "InboxMessageId">;

export interface InboxMessage {
	id: InboxMessageId;
	message: string;
	createdAt: Date;
	updatedAt: Date;
}
