export interface User {
    id: number,
    name: string,
    email: string,
    email_verified_at?: string,
    password: string,
    role_id: number,
    remember_token?: boolean,
    updated_at: string,
    created_at: string,
    deleted_at?: string,
    group_id?: number,
    latitude?: string,
    longitude?: string,
    address?: string,
    prfile_image?: string,
    image?: string
    rol?: Roles
    description?: string
}
type Roles = "usuario" | "administrador";