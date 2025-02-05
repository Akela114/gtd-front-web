import { apiInstance } from "@/shared/api/instance";
import type { InboxMessageId } from "../models/types";
import type { InboxMessageDto, UpdateInboxMessageDto } from "./types";

export const inboxApi = {
	getInboxMessages: () =>
		apiInstance.get<InboxMessageDto[]>("inbox-messages").json(),
	updateInboxMessage: (id: InboxMessageId, data: UpdateInboxMessageDto) =>
		apiInstance
			.patch<InboxMessageDto>(`inbox-messages/${id}`, {
				json: data,
			})
			.json(),
	deleteInboxMessage: (id: InboxMessageId) =>
		apiInstance.delete<InboxMessageDto>(`inbox-messages/${id}`).json(),
};
