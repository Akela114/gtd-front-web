import { Button } from "@/shared/ui/button";
import { Pencil } from "lucide-react";
import type { ComponentProps, FC } from "react";

type UpdateInboxMessageTriggerProps = Omit<
	ComponentProps<typeof Button>,
	"size" | "variant"
>;

export const UpdateInboxMessageTrigger: FC<UpdateInboxMessageTriggerProps> = (
	props,
) => {
	return (
		<Button size="icon" variant="outline" {...props}>
			<Pencil />
		</Button>
	);
};
