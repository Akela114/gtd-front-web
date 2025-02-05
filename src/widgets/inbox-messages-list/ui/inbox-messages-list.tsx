import { InboxMessageCard, inboxQueryKeysAndOptions } from "@/entities/inbox";
import { UpdateInboxMessageAction } from "@/features/inbox/update-inbox-message";
import { BaseListLayout } from "@/shared/ui/base-list-layout";
import { useQuery } from "@tanstack/react-query";

export const InboxMessagesList = () => {
	const { data } = useQuery(
		inboxQueryKeysAndOptions.inboxMessages().queryOptions,
	);

	if (!data) return null;

	return (
		<BaseListLayout listTitle="Входящие">
			<div className="flex flex-col gap-2">
				{data.map((message) => (
					<InboxMessageCard
						inboxMessage={message}
						key={message.id}
						actions={<UpdateInboxMessageAction inboxMessage={message} />}
					/>
				))}
			</div>
		</BaseListLayout>
	);
};
