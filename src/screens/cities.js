import React from 'react'
export default class cities extends React.Component{
gotoCity = (citiName) =>{
   console.log(this.props.history)
   this.props.history.push({
       pathname:"/search",
       state:{
           "city":citiName
       }
   })
}
render(){
   return(
       <div>
                <div  style={{display:'inline-block',alignItems:"start",justifyContent:'space-between'}}>
                   <div onClick={() => this.gotoCity("3")} style={{display:'inline-block',boxShadow:"17px 17px 5px #9E9E9E",border:'1px orange solid',padding:10,width:170,margin:20,marginLeft:70,backgroundColor:'white'}}>
                           <img  style={{width:100,height:100}} src={require('../assets/gate-of-india.png')} />
                           <span style={{color:'cyan'}}>Mumbai</span>
                   </div>
                   <div onClick={() => this.gotoCity("7")} style={{display:'inline-block',boxShadow:"17px 17px 5px #9E9E9E",border:'1px orange solid',padding:10,width:170,margin:20,marginLeft:70,backgroundColor:'white'}}>
                           <img  style={{width:100,height:100}} src={require('../assets/autorickshaw.png')} />
                           <span style={{color:'yellow'}}>Chennai</span>
                   </div>
                   <div onClick={() => this.gotoCity("10")} style={{display:'inline-block',boxShadow:"17px 17px 5px #9E9E9E",border:'1px orange solid',padding:10,width:170,margin:20,marginLeft:70,backgroundColor:'white'}}>
                           <img  style={{width:120,height:100}} src={require('../assets/fortification.png')} />
                           <span style={{color:'red'}}>Jaipur</span>
                   </div>
               </div>
                       <div style={{alignItems:"start",justifyContent:'space-between'}}>
                       <div onClick={() => this.gotoCity("39")}  style={{display:'inline-block',boxShadow:"17px 17px 5px #9E9E9E",border:'1px orange solid',padding:10,width:170,margin:20,marginLeft:70,backgroundColor:'white'}}>
                           <img  style={{width:100,height:100}} src={require('../assets/hawa-mahal.png')} />
                           <span style={{color:'green'}}>Varanasi</span>
                   </div>
                   <div onClick={() => this.gotoCity("1")} style={{display:'inline-block',boxShadow:"17px 17px 5px #9E9E9E",border:'1px orange solid',padding:10,width:170,margin:20,marginLeft:70,backgroundColor:'white'}}>
                           <img  style={{width:120,height:100}} src={require('../assets/red-fort.png')} />
                           <span style={{color:'red'}}>Delhi</span>
                   </div>
                   <div onClick={() => this.gotoCity("34")} style={{display:'inline-block',boxShadow:"17px 17px 5px #9E9E9E",border:'1px orange solid',padding:10,width:170,margin:20,marginLeft:70,backgroundColor:'white'}}>
                           <img  style={{width:140,height:100}} src={require('../assets/taj-mahal.png')} />
                           <span style={{color:'grey'}}>Agra</span>
                   </div>
               </div> 
               
       </div>
   )
}
}
