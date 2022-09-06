export interface Response<Data> {
    success: boolean,
    data: Data,
    message?: string
}