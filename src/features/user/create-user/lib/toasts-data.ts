import type { ToastData } from "@/shared/lib/hooks/use-toast-messages";

export const CREATE_USER_TOASTS_DATA = {
	title: "Регистрация пользователя",
	messages: {
		pending: "Регистрируем пользователя...",
		success: "Пользователь успешно зарегистрирован!",
		error: "Не удалось зарегистрировать пользователя!",
	},
} satisfies ToastData;
