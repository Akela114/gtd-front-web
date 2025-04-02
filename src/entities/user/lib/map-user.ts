import type { UserDto } from "../api/types";
import type { User } from "../models/types";

export const mapUser = (user: UserDto): User => user;
