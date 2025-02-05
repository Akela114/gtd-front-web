import { queryOptions } from "@tanstack/react-query";
import { mapInboxMessage } from "../lib/map-inbox-message";
import { inboxApi } from "./inbox-api";

export const inboxQueryKeysAndOptions = {
	all: () => ({ queryKey: ["inbox"] }),
	inboxMessages: () => {
		const queryKey = [...inboxQueryKeysAndOptions.all().queryKey, "messages"];
		return {
			queryKey,
			queryOptions: queryOptions({
				queryKey,
				queryFn: () => inboxApi.getInboxMessages(),
				select: (data) => data.map(mapInboxMessage),
			}),
		};
	},
};
