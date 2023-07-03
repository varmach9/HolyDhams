import React from 'react'
import { useNavigate } from 'react-router-dom';

const WestIndia = () => {
    
  const navigate = useNavigate();
  return (
    <div style={{marginTop:"100px"}}>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"50px",height:"80%",backgroundImage: `url(https://www.art-ma.com/wp-content/uploads/2020/07/MB0009_Entering-Dwaraka_WebHR-1.jpg)`,backgroundSize: '100% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#9681bc"}}>
        <div onClick={()=>{navigate()}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Dwaraka</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #4071a1), url(ayodhya.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#4071a1"}}>
        <div onClick={()=>{navigate()}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Ayodhya</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #d886ce), url(jaipur.jpg)`,backgroundSize: '100% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#d873c3"}}>
        <div onClick={()=>{navigate()}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Jaipur</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #775a12), url(https://i1.wp.com/taleguru.com/wp-content/uploads/2020/06/Kurukshetra-e1592634177930.jpg?fit=599%2C342&ssl=1)`,backgroundSize: '90% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#775a12"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Kurukshetra</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #0157fc), url(https://static.toiimg.com/thumb/msid-46918916,width=1200,height=900/46918916.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#0157fc"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Somnath</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #83735c), url(https://www.ujjaindarshan.com/images/main/ramghat.jpg)`,backgroundSize: '90% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#83735c"}}>
        <div onClick={()=>{navigate()}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Ujjain</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #798a74), url(https://upload.wikimedia.org/wikipedia/commons/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#798a74"}}>
        <div onClick={()=>{navigate()}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Varanasi</div>
      </div>
      <div style={{height:"20px"}}>

      </div>
    </div>
  )
}

export default WestIndia