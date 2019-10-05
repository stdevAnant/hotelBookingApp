import React from 'react'
import base64 from 'base-64'
import auth  from '../helper/authHelper'
 
export default class LoginScreen extends React.Component{

    forwardIfLogin = (his) =>{
        console.log("LOGGED IN:"+auth.hasLoggedIn)
        if(auth.hasLoggedIn){
             his.push("/cities")
             
        }
        else{
            alert("Invalid Credentials")
        }
     }

    login(his){
        var user = document.getElementById("unInput").value
        var password = document.getElementById("pdInput").value
        var authString = base64.encode(user + ":" + password)
        console.log(authString)
         auth.doLogin(authString,() => this.forwardIfLogin(his))
     }
    render(){
        var his = this.props.history
        return(
            <div
            style={{alignSelf:'center',padding:10,justifyContent:'center',alignItems:'center',width:400,height:100,backgroundColor:'white'}}>
                <input id="unInput" placeholder="Username" type='text' style={{height:20,borderWidth:1,padding:5,borderColor:'orange'}} />
                <input id="pdInput" placeholder="password" type='password' style={{height:20,marginTop:15,padding:5,borderWidth:1,borderColor:'orange'}} />
                <button onClick={() => this.login(his)} style={{width:100,zIndex:10,color:'white',backgroundColor:'orange',borderRadius:25,height:30,padding:5,marginBottom:20}} >Login</button>
            </div>
        )
    }
}