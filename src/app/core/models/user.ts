// import { Response } from "./response"

// export interface User{
//     id?: number
//     name: string
//     email: string
//     email_verified_at?:	string
//     password: string
//     role_id: number
//     remember_token?: string
//     created_at?: string
//     updated_at?: string
//     deleted_at?: string
//     group_id?: number
//     latitude?: number
//     longitude?:	number
//     address?: string
//     profile_image?:	string
//     description?: string
// }
// export type UserResponse = Response<User>;


export interface User{
    name?: string;
    email:string,
    password:string,
    latitude?: number
    longitude?:	number
}