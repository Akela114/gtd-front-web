import { EFormatType, formatDate } from "@/shared/lib/date-utils";
import { BaseCard } from "@/shared/ui/base-card";
import type { FC, ReactNode } from "react";
import type { InboxMessage } from "../models/types";

interface InboxMessageCardProps {
	inboxMessage: InboxMessage;
	actions?: ReactNode;
}

export const InboxMessageCard: FC<InboxMessageCardProps> = ({
	inboxMessage,
	actions,
}) => {
	const formattedUpdatedAt = formatDate(
		inboxMessage.updatedAt,
		EFormatType.DATE_TIME,
	);

	return (
		<BaseCard className="p-6 flex justify-between gap-4">
			<div className="space-y-1">
				<div className="text-sm text-muted-foreground">
					{formattedUpdatedAt}
				</div>
				<div>{inboxMessage.message}</div>
			</div>
			{actions}
		</BaseCard>
	);
};
