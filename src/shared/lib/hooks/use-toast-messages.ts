import { useToast } from "@/shared/ui/toast";
import { useCallback } from "react";

export interface ToastMessages {
	pending?: string;
	success?: string;
	error?: string;
}

export interface ToastData {
	title: string;
	messages?: ToastMessages;
}

export const useCallbackWithToasts = <FParams, FResult>(
	callback: (params: FParams) => FResult,
	toastData: ToastData,
) => {
	const { toast } = useToast();

	const callbackWithToasts = useCallback(
		async (params: FParams) => {
			try {
				if (toastData.messages?.pending) {
					toast({
						title: toastData.title,
						description: toastData.messages.pending,
					});
				}
				const result = await callback(params);
				if (toastData.messages?.success) {
					toast({
						title: toastData.title,
						description: toastData.messages.success,
					});
					return result;
				}
				return result;
			} catch (error) {
				if (toastData.messages?.error) {
					toast({
						title: toastData.title,
						description: toastData.messages.error,
					});
				}
				throw error;
			}
		},
		[toast, toastData, callback],
	);

	return callbackWithToasts;
};
