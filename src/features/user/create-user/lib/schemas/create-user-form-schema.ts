import type { CreateUserDto } from "@/entities/user";
import { REGEXES } from "@/shared/lib/consts/regexes";
import { z } from "zod";

export const createUserFormSchema = z.object({
	username: z.string().min(3).max(20),
	email: z.string().email(),
	password: z
		.string()
		.regex(REGEXES.password.value, REGEXES.password.description),
}) satisfies z.ZodType<CreateUserDto>;
