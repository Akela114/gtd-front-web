import { format } from "date-fns";
import { ru } from "date-fns/locale";

export enum EFormatType {
	DATE = "dd.MM.yyyy",
	DATE_TIME = "dd.MM.yyyy HH:mm",
}

export const formatDate = (date: Date, formatString = EFormatType.DATE) =>
	format(date, formatString, {
		locale: ru,
	});
