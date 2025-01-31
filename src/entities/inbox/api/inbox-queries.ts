import { queryOptions } from "@tanstack/react-query";
import { mapInboxMessage } from "../lib/map-inbox-message";
import { inboxApi } from "./inbox-api";

export const inboxQueries = {
	all: () => ["inbox"],
	inboxMessages: () =>
		queryOptions({
			queryKey: [...inboxQueries.all(), "messages"],
			queryFn: () => inboxApi.getInboxMessages(),
			select: (data) => data.map(mapInboxMessage),
		}),
};
