import { User } from "./user";
import { Response } from "./response"

export interface Auth {
    user: User,
    token: string
}

export type AuthResponse = Response<Auth>