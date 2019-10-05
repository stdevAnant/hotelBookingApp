import React from 'react'
import Axios from 'axios'

export default class SearchScreen extends React.Component{
    state={
        query:"",
        hotelList:[]
    }
    renderHotels = () =>{
        return(
            this.state.hotelList.map(element =>
               <div
               key={element.restaurant.id}
               onClick = { () => {
                   this.props.history.push({
                       pathname:"/hotel",
                       state:{
                           hotel:element.restaurant
                       }
                   })
               }}
               style={{flexWrap:'wrap',alignItems:'start',Height:300,width:270,display:'inline-block',margin:15}}>
                <div style={{boxShadow:"17px 17px 5px #9E9E9E",marginBottom:20,border:"2px solid orange"}}>
                <img  style={{width:250,height:200,padding:10}} src={element.restaurant.featured_image} />
            </div>
                <span style={{color:'orange',fontSize:17}}>{element.restaurant.name}</span>
             
                <div>
                <span style={{color:'#FFD700',fontStyle:'bold',fontSize:14}}>{element.restaurant.location.locality}</span>
                </div>
             </div>
                )
                )
     
    }
  
    handleQuery = ()=>{
        this.setState({
            query:document.getElementById('queryInput').value
        })
        Axios.get("http://localhost:9090/searchHotels/"+this.props.history.location.state.city+"/"+this.state.query)
        .then(response=>{
            this.setState({
                hotelList:response.data.restaurants
            })
        })
    }
    render(){
        return(
            <div>
            <div style={{justifyContent:'flex-start'}}>
                <input id="queryInput" placeholder="search by query" onChange={this.handleQuery} style={{minWidth:500,padding:20}}/>
            </div>
            <div
            style={{alignItems:'start'}}>
             {
                 this.renderHotels()
             }
             </div>
            </div>
        )
    }
}