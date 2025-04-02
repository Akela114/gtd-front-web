import { CreateUserForm } from "@/features/user/create-user";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/shared/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import { TAB_CODES } from "../lib/tab-codes";

export const AuthorizationBlock = () => {
	return (
		<div>
			<Tabs
				defaultValue={TAB_CODES.signin}
				className="flex flex-col gap-4 mx-auto max-w-100"
			>
				<TabsList>
					<TabsTrigger value={TAB_CODES.signin}>Вход</TabsTrigger>
					<TabsTrigger value={TAB_CODES.signup}>Регистрация</TabsTrigger>
				</TabsList>
				<TabsContent value={TAB_CODES.signin}>
					<Card>
						<CardHeader>
							<CardTitle>Вход</CardTitle>
							<CardDescription>
								Введите данные, указанные при регистрации
							</CardDescription>
						</CardHeader>
						<CardContent>SIGNIN</CardContent>
					</Card>
				</TabsContent>
				<TabsContent value={TAB_CODES.signup}>
					<Card>
						<CardHeader>
							<CardTitle>Регистрация</CardTitle>
							<CardDescription>
								Введите данные для регистрации нового пользователя
							</CardDescription>
						</CardHeader>
						<CardContent>
							<CreateUserForm />
						</CardContent>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	);
};
