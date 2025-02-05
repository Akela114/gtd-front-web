export interface InboxMessageDto {
	id: string;
	message: string;
	createdAt: DateTimeString;
	updatedAt: DateTimeString;
}

export interface UpdateInboxMessageDto {
	message: string;
}
