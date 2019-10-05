import React from 'react'
import Axios from 'axios'

export default class Hotel extends React.Component{
state={
    hotel:[]
    ,cusines:['hotel'],
    address:"",
    liked:false,
    bookingFacility:false,
    bookingFor:1
}
    componentDidMount(){
        this.setState({
            hotel:this.props.history.location.state.hotel,
            cusines:this.props.history.location.state.hotel.cuisines.split(",",9),
            address:this.props.history.location.state.hotel.location.address
        }) 

        
    }

    renderCuisines = () => {
        return(
                this.state.cusines.map(element => 
                        <span style={{backgroundColor:'#3CB371',paddingLeft:20,paddingRight:20,fontSize:20,margin:7,borderRadius:50}}>{element}</span>    
                    )
            
            
        )
    }

    renderLike = ()=> {
        if(!this.state.liked){
            return(
                <img 
                onClick= {() => {
                   Axios.post("http://localhost:9090/fav/addFav?user="+0+"&restaurant="+this.state.hotel.id)
                   .then(res => {
                       if(res.status == 200){
                        this.setState({
                            liked:!this.state.liked
                            })
                       }
                       else{
                           alert("Something went wrong")
                       }
                   })
            }}

                style={{maxWidth:50,maxHeight:50,alignSelf:'start'}} src={require('../assets/like_before.png')}></img>                
            )
            
        }
        else{
            return(
                <img 
                onClick= {() => {this.setState({
                    liked:!this.state.liked
                })}}

                style={{maxWidth:50,maxHeight:50,alignSelf:'start'}} src={require('../assets/like_after.png')}></img>
            )
        }
       }
    renderBookingFacility = () => {
     if(this.state.bookingFacility){

     
        return(
            <div>
                <div>
                    <span style={{color:'orange'}}> For:</span>
                    <select id="bookingSelect" onChange={() => {
                        this.setState({bookingFor: parseInt(document.getElementById("bookingSelect").value)})
                        }} style={{padding:10,margin:20}}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                    <span style={{color:'orange'}}> People</span>

                </div>
                <div style={{marginTop:10}}> 
                        <span 
                        onClick={() => {
                         Axios.post("http://localhost:9090/book/addBooking?restId="+this.state.hotel.id+"&count="+this.state.bookingFor)
                         .then(res => {
                             alert(res.data)
                         })    
                        }}
                        style={{backgroundColor:'orange',alignSelf:'center',alignItems:'center',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,borderRadius:25}}
                        >Book</span>
                    </div>

                    <div style={{alignItems:'center',marginTop:40}}>
                        <img 
                        onClick={() => {this.props.history.push("/profile")}}
                            style={{maxWidth:50,maxHeight:50,alignSelf:'start'}} src={require('../assets/user.png')}></img>
                    </div>
            </div>
        )
    }}
    render(){

        return(
            <div style={{display:'inline-block',padding:100}}>
                <div>                    
                <img  style={{display:'inline-block',maxWidth:750,maxHeight:350}} src={this.state.hotel.featured_image} />
                <span style={{display:'inline-block',padding:20,alignItems:'center',color:'#3CB371',width:150}}>{this.state.address}</span>
                
                </div>
                <div>
                    <h2 style={{color:'orange'}}> {this.state.hotel.name} </h2>
                </div>
                <div>
                    {this.renderCuisines()}
                </div>
                <div style={{marginTop:30}}>
                    {this.renderLike()}
                </div>
                    <div 
                    style={{marginTop:30}}> 
                        <span 
                        onClick={() => {this.setState({bookingFacility:true})}}
                        style={{backgroundColor:'orange',alignSelf:'center',alignItems:'center',paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,borderRadius:25}}
                        >Book a Table</span>
                    </div>
                <div>
                    {this.renderBookingFacility()}     
                </div>    
            </div>
        )
    }
}