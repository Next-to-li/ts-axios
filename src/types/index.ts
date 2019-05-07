export type Method = 'get' | 'Get'
| 'delete' | 'Delete'
| 'head' | 'Head'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
export interface AxiosRequestConfig {
    url: string
    method?: string
    data?: any
    params?: any
}