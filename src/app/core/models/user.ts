
export interface User{
    name: string
    email: string
    image: string
    rol: Roles
    description: string
}
type Roles = "usuario" | "administrador";