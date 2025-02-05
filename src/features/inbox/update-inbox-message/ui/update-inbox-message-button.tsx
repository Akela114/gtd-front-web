import { Button } from "@/shared/ui/button";
import { Pencil } from "lucide-react";
import type { ComponentProps, FC } from "react";

type UpdateInboxMessageActionProps = Omit<
	ComponentProps<typeof Button>,
	"size" | "variant"
>;

export const UpdateInboxMessageButton: FC<UpdateInboxMessageActionProps> = (
	props,
) => {
	return (
		<Button size="icon" variant="outline" {...props}>
			<Pencil />
		</Button>
	);
};
