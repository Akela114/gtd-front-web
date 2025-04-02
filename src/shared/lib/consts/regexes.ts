export const REGEXES = {
	password: {
		value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
		description:
			"Минимальная длина значения - 8 символов, должно включать заглавную и сстрочную буквы, цифру",
	},
};
