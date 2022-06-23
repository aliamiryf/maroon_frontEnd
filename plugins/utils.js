export default ({ app , $axios}, inject) => {
  inject('ajaxGet',(url,header)=>{
    return new Promise((resolve , reject) => {
      $axios.get(url , {
        headers:header,
      }).then(resp => {
        return resolve(resp)
      }).catch(er => {
        return reject(resolve)
      })
    })
  })
  inject('ajaxPost',(url,header,payload)=>{
    return new Promise((resolve , reject) => {
      $axios.post(url , {
        headers:header,
        body:payload
      }).then(resp => {
        return resolve(resp)
      }).catch(er => {
        return reject(resolve)
      })
    })
  })
}
