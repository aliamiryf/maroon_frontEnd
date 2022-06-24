import {requestList} from "@/request/requestStore";
import * as url from "url";

export default ({$ajaxPost, $ajaxGet}, inject) => {
  inject('requestHandler', (val) => {
    let request = requestList[val.key].find(item => item.name === val.name)
    if (request){
      let url = request.url
      if (url){
        if (val.uslParams && Object.keys(val.uslParams) !== 0) {
          url = prepareUrl(request.url, val.uslParams)
          let requestMethod = requesting[request.method]
          let headers = prepareRequestDetails('header',request.defaultHeaders , val.header)
          let payload = prepareRequestDetails('payload',request.defaultPayload , val.payload)
          return requestMethod(url,headers,payload  )
        }
      }
    }
  })

  function prepareUrl(url, urlParams) {
    let keys = Object.keys(urlParams)
    let finalUrl = url;
    let temp = null
    keys.forEach((item)=>{
      finalUrl =  finalUrl.replace(`:${item}`,urlParams[item])
    })
    return finalUrl
  }

  function prepareRequestDetails(type , defaultDetails , details){
    let finaleDetails = details
    if (defaultDetails){
      Object.assign(finaleDetails , defaultDetails)
    }
    return finaleDetails
  }


  let requesting = {
    get : function (url,headers,payload = null){
      return $ajaxGet(url,headers).then((resp)=>{
        return resp;
      })
    },
    post : function (url,headers,payload){
      return $ajaxPost(url,headers,payload).then((resp)=>{
        return resp;
      })
    }
  }
}
