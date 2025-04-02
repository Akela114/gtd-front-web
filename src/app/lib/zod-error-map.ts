import { formatNumberWithNoun } from "@/shared/lib/string-utils";
import type { z } from "zod";

export const zodErrorMap: z.ZodErrorMap = (issue, ctx) => {
	if (issue.code === "too_small") {
		return {
			message: `Минимальная длина - ${formatNumberWithNoun(issue.minimum, ["символ", "символа", "символов"])}`,
		};
	}

	if (issue.code === "too_big") {
		return {
			message: `Максимальная длина - ${formatNumberWithNoun(issue.maximum, ["символ", "символа", "символов"])}`,
		};
	}

	if (issue.code === "invalid_string") {
		return {
			message: "Недопустимое значение",
		};
	}

	return { message: ctx.defaultError };
};
