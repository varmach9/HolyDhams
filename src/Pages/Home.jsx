import React from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const navigate = useNavigate();
  return (
    <div style={{marginTop:"100px"}}>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"50px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #9681bc), url(https://www.savaari.com/blog/wp-content/uploads/2022/02/indian-temple-g085a80a15_1920.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#9681bc"}}>
        <div onClick={()=>{navigate("/vraj")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Vraj Mandal</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #824215), url(https://www.deccanherald.com/sites/dh/files/articleimages/2023/04/23/tirati-temple-credit-pti-file-photo-1212285-1682263260.jpg)`,backgroundSize: '90% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#824215"}}>
        <div onClick={()=>{navigate("/southindia")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>South India</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:`${window.screen.width>600?"300px":"80px"}`,backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #394e6a), url(https://blog.railyatri.in/wp-content/uploads/2018/09/Char-Dham-Yatra-Route.png)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#394e6a"}}>
        <div onClick={()=>{navigate("/himalayas")}} style={{textAlign:"right",paddingTop:"10%",marginRight:"10px",color:"white",fontFamily:"revert",fontSize:"15px"}}>Himalayas & Char dham</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #39363d), url(https://i.pinimg.com/originals/bc/2e/31/bc2e3178e1b4cb6d9a825824fbee9507.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#39363d"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Jagannath Puri</div>
      </div>
      <div style={{border:"1px solid",width:"80%",marginLeft:"10%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #5788cb), url(mayapur.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#5788cb"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Nawadwip</div>
      </div>
      <div style={{height:"20px"}}>

      </div>
    </div>
  )
}

export default Home