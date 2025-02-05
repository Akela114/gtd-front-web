import type { ToastData } from "@/shared/lib/hooks/use-toast-messages";

export const DELETE_INBOX_MESSAGE_TOASTS_DATA = {
	title: "Удаление сообщения",
	messages: {
		pending: "Удаляем сообщение...",
		success: "Сообщение успешно удалено!",
		error: "Не удалось удалить сообщение!",
	},
} satisfies ToastData;
