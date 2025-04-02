import { HTTPError } from "ky";
import { z } from "zod";

export const badRequestResponseSchema = z.object({
	errors: z.record(z.string(), z.string()),
});

export const checkBadRequestErrors = async (error: unknown) => {
	if (error instanceof HTTPError && error.response.status === 400) {
		const responseData = await error.response.json();
		const validatedResponseData =
			badRequestResponseSchema.safeParse(responseData);
		if (validatedResponseData.success) {
			return validatedResponseData.data.errors;
		}
	}
};
