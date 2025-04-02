import type { z } from "zod";

export const isKeyInSchema = <
	Schema extends z.ZodObject<T>,
	T extends z.ZodRawShape,
>(
	schema: Schema,
	value: unknown,
): value is keyof z.infer<Schema> => {
	return (
		typeof value === "string" &&
		Object.prototype.hasOwnProperty.call(schema.shape, value)
	);
};
