import type { ToastData } from "@/shared/lib/hooks/use-toast-messages";

export const UPDATE_INBOX_MESSAGE_TOASTS_DATA = {
	title: "Обновление сообщения",
	messages: {
		pending: "Обновляем сообщение...",
		success: "Сообщение успешно обновлено!",
		error: "Не удалось обновить сообщение!",
	},
} satisfies ToastData;
