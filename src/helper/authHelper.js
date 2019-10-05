import React from 'react';
import Axios from 'axios';
class Auth{
hasLoggedIn;
   constructor(){
       this.hasLoggedIn=false
   }
   doLogin(codedAuth,callback){
       Axios.get("http://localhost:9090/findMe",{headers:{"Authorization":"basic "+codedAuth}})
       .then(response => {
             if(response.data.status == 200){
                 this.hasLoggedIn=true
                 console.log("Logged in")
             }
             else{
               this.hasLoggedIn=false
                 console.log("Failed")
             }
             callback()
       })
   }
  isLoggedIn(){
       return this.hasLoggedIn
   }
}
export default new Auth()
