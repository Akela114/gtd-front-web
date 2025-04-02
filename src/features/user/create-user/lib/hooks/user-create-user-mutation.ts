import { type CreateUserDto, userApi } from "@/entities/user";
import { useMutation } from "@tanstack/react-query";

export const useCreateUserMutation = () =>
	useMutation({
		mutationFn: (data: CreateUserDto) => userApi.createUser(data),
	});
