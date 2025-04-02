import { apiInstance } from "@/shared/api/instance";
import type { CreateUserDto, UserDto } from "./types";

export const userApi = {
	createUser: (data: CreateUserDto) =>
		apiInstance
			.post<UserDto>("users", {
				json: data,
			})
			.json(),
};
