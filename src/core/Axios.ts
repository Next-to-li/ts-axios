import {AxiosPromise,AxiosRequestConfig,Method} from '../types'
import dispatchRequest from './dispatchRequest'

export default class Axios{
    request(config:AxiosRequestConfig):AxiosPromise{
        return dispatchRequest(config)
    }

    get(url:string,config?: AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithputData('get',url,config)
    }

    delete(url:string,config?: AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithputData('delete',url,config)
    }

    head(url:string,config?: AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithputData('head',url,config)
    }

    options(url:string,config?: AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithputData('options',url,config)
    }

    post(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithData('post',url,data,config)
    }

    put(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithData('put',url,data,config)
    }

    patch(url:string,data?:any,config?:AxiosRequestConfig):AxiosPromise{
        return this._requestMethodWithData('patch',url,data,config)
    }

    _requestMethodWithputData(method:Method,url:string,config?:AxiosRequestConfig){
        return this.request(Object.assign(config||{},{
            method:method,
            url
        }))
    }
    _requestMethodWithData(method:Method,url:string,data?:any,config?:AxiosRequestConfig){
        return this.request(Object.assign(config||{},{
            method:method,
            url,
            data
        }))
    }
}