export interface LogInSuccess {
    success: boolean,
    data: {
            user: {  
                    id: number,
                    name: string,
                    email: string,
                    email_verified_at: string | null,  
                    password: string,
                    role_id: number,
                    remember_token: boolean | null,
                    updated_at: string,
                    created_at: string,
                    deleted_at: string,
                    group_id: number | null,
                    latitude: string | null,
                    longitude: string | null,
                    address: string | null,
                    prfile_image: string | null,                    
                    },
            token: string
            },
    message: string
}