import { EFormatType, formatDate } from "@/shared/lib/date-utils";
import { BaseCard } from "@/shared/ui/base-card";
import type { FC } from "react";
import type { InboxMessage } from "../models/types";

interface InboxMessageCardProps {
	inboxMessage: InboxMessage;
}

export const InboxMessageCard: FC<InboxMessageCardProps> = ({
	inboxMessage,
}) => {
	const formattedUpdatedAt = formatDate(
		inboxMessage.updatedAt,
		EFormatType.DATE_TIME,
	);

	return (
		<BaseCard className="p-6 space-y-1">
			<div className="text-sm text-muted-foreground">{formattedUpdatedAt}</div>
			<div>{inboxMessage.message}</div>
		</BaseCard>
	);
};
