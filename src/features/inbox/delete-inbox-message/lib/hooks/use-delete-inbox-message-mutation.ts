import {
	type InboxMessageId,
	inboxApi,
	inboxQueryKeysAndOptions,
} from "@/entities/inbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteInboxMessageMutation = (id: InboxMessageId) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: () => inboxApi.deleteInboxMessage(id),
		onSuccess: async () => {
			queryClient.invalidateQueries({
				queryKey: inboxQueryKeysAndOptions.inboxMessages().queryKey,
			});
		},
	});
};
