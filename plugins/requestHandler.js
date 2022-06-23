import {requestList} from "@/request/requestStore";
import * as url from "url";

export default ({$ajaxPost, $ajaxGet}, inject) => {
  inject('requestHandler', (val) => {
    let request = requestList[val.key].find(item => item.name === val.name)
    let url = request.url
    if (val.uslParams && Object.keys(val.uslParams) !== 0) {
      url = prepareUrl(request.url, val.uslParams)
    }
    console.log(url)
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
}
