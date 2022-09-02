export interface SignInSuccess {
        success: boolean,
        data: {
                user: {  
                        name: string,
                        email: string,
                        password: string,
                        role_id: number,
                        updated_at: string,
                        created_at: string,
                        id: number
                        },
                token: string
                },
        message: string

}