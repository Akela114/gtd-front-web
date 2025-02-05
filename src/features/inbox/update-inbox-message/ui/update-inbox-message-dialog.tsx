import type { InboxMessage } from "@/entities/inbox";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/ui/dialog";
import { type FC, type ReactNode, useState } from "react";
import { UpdateInboxMessageForm } from "./update-inbox-message-form";

interface UpdateInboxMessageDialogProps {
	dialogTriggerElement: ReactNode;
	inboxMessage: InboxMessage;
}

export const UpdateInboxMessageDialog: FC<UpdateInboxMessageDialogProps> = ({
	dialogTriggerElement,
	inboxMessage,
}) => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleSubmitSuccess = () => {
		setIsDialogOpen(false);
	};

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<DialogTrigger asChild>{dialogTriggerElement}</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Изменить сообщение</DialogTitle>
				</DialogHeader>
				<UpdateInboxMessageForm
					inboxMessage={inboxMessage}
					onSubmitSuccess={handleSubmitSuccess}
				/>
			</DialogContent>
		</Dialog>
	);
};
