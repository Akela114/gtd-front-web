import { apiInstance } from "@/shared/api/instance";
import type { InboxMessageDto } from "./types";

export const inboxApi = {
	getInboxMessages: () =>
		apiInstance.get<InboxMessageDto[]>("inbox-messages").json(),
};
