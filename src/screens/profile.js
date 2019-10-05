import React from 'react'
import Axios from 'axios'

export default class Profile extends React.Component{
state={
    favList:[],
    flag:false

}

renderHotels = () =>{
if(this.state.flag)
{


    return(
        this.state.favList.map(element =>
           <div
           key={element.id}
           style={{flexWrap:'wrap',alignItems:'start',Height:300,width:270,display:'inline-block',margin:15}}>
            <div style={{boxShadow:"17px 17px 5px #9E9E9E",marginBottom:20,border:"2px solid orange"}}>
            <img  style={{width:250,height:200,padding:10}} src={element.featured_image} />
        </div>
            <span style={{color:'orange',fontSize:17}}>{element.name}</span>
            HEEELOOO
            <div>
            <span style={{color:'#FFD700',fontStyle:'bold',fontSize:14}}>{element.location.locality}</span>
            </div>
         </div>
            )
            ) 
}}
    componentWillMount(){
        Axios.get("http://localhost:9090/fav/getFavs")
        .then(res => {
          const arr=[]
            res.data.forEach(element => {
                arr.push(element.rest_id)
            });

            const favHotel=[]
           arr.forEach(element => {
               Axios.get("https://developers.zomato.com/api/v2.1/restaurant?res_id="+element,{headers:{
                   "user-key":"553f1d0a16a11c8ac225b20d60d7b849",
               }})
               .then(res => {
                    favHotel.push(res.data)
                    this.setState({favList:favHotel,flag:true})
                    console.log(this.state.favList)
                    console.log(favHotel)
                })
           }) 
        })
    }
    render(){

        return(
            <div>
                 <div style={{alignItems:'center'}}>
                    <img 
                    onClick={() => {this.props.history.push("/")}}
                        style={{maxWidth:50,maxHeight:50,alignSelf:'start'}} src={require('../assets/user.png')}></img>
                <h4 style={{color:'black'}}> Click on profile image to return to home</h4>
                </div>
                <div>
                    {this.renderHotels()}
                </div>
            </div>
        )
    }
}