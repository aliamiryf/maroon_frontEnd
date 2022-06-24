import Logger from "@/services/Logger";
import Cookies from "@/services/Cookies";
export default {
  data(){
    return{

    }
  },
  computed:{
    Logger(){
      return new Logger(this.$route.name)
    },
    CookieHandler(){
      return new Cookies(this.$cookies)
    }
  }
}
