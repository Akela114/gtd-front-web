import { InboxMessageCard, inboxQueries } from "@/entities/inbox";
import { BaseListLayout } from "@/shared/ui/base-list-layout";
import { useQuery } from "@tanstack/react-query";

export const InboxMessagesList = () => {
	const { data } = useQuery(inboxQueries.inboxMessages());

	if (!data) return null;

	return (
		<BaseListLayout listTitle="Входящие">
			<div className="flex flex-col gap-2">
				{data.map((message) => (
					<InboxMessageCard inboxMessage={message} key={message.id} />
				))}
			</div>
		</BaseListLayout>
	);
};
