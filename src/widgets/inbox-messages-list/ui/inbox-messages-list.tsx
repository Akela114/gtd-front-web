import { InboxMessageCard, inboxQueries } from "@/entities/inbox";
import { useQuery } from "@tanstack/react-query";

export const InboxMessagesList = () => {
	const { data } = useQuery(inboxQueries.inboxMessages());

	if (!data) return null;

	return (
		<div>
			{data.map((message) => (
				<InboxMessageCard inboxMessage={message} key={message.id} />
			))}
		</div>
	);
};
