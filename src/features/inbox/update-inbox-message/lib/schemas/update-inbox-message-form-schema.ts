import type { UpdateInboxMessageDto } from "@/entities/inbox";
import { z } from "zod";

export const updateInboxMessageFormSchema = z.object({
	message: z.string().min(2),
}) satisfies z.ZodType<UpdateInboxMessageDto>;
