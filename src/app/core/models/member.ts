import { Response } from "./response"

export interface Member{
    id?: number
    name: string
    image: string
    description?: string
    facebookUrl?: string
    linkedinUrl?: string
    created_at?: string
    updated_at?: string
    deleted_at?: string
    links?: string[]
}

export type MemberResponse = Response<Member>;