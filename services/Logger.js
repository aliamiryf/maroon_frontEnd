export  default  class Logger{
  constructor(path) {
    this.path = path
  }
  log(text){
    if (!process.env.production){
      console.log(text , this.path)
    }
  }
}
