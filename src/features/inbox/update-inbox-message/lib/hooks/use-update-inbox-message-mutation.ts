import {
	type InboxMessageId,
	type UpdateInboxMessageDto,
	inboxApi,
	inboxQueryKeysAndOptions,
} from "@/entities/inbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateInboxMessageMutation = (id: InboxMessageId) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: UpdateInboxMessageDto) =>
			inboxApi.updateInboxMessage(id, data),
		onSuccess: async () => {
			queryClient.invalidateQueries({
				queryKey: inboxQueryKeysAndOptions.inboxMessages().queryKey,
			});
		},
	});
};
