import { request } from "https";

export type Method = 'get' | 'GET'
    | 'delete' | 'Delete'
    | 'head' | 'HEAD'
    | 'options' | 'OPTIONS'
    | 'post' | 'POST'
    | 'put' | 'PUT'
    | 'patch' | 'PATCH'
export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    headers?: any
    params?: any
    responseType?: XMLHttpRequestResponseType
    timeOut?:number
}

export interface AxiosResponse {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}

export interface AxiosPromise extends Promise<AxiosResponse>{
}

export interface AxiosError extends Error{
    config: AxiosRequestConfig
    code?: string|null
    request?: any
    response?: AxiosResponse
}