import { UserData } from "./user-data"

export interface AuthResponse {
    success: boolean,
    data: {
        user: UserData,
        token: string
    },
    message?: string
}