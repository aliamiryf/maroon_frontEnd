export default class Cookies {
  constructor(services) {
    this.services = services
  }
  set(key,value,expireTime) {
    this.services.set(key,value,expireTime)
    return this.get(key)
  }
  get(key){
    return this.services.get(key)
  }
}
