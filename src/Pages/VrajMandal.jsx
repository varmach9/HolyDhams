import React, { useState } from 'react'
import "../App.css"
import { useNavigate } from 'react-router-dom';
import { Videos, Photos, More, Lectures } from './VrajMandalResources'
const VrajMandal = () => {
  const [page,setpage]=useState(1)
  const navigate = useNavigate();
  return (
    <div >
      
      <div className='body'>
      {page===1 && <div style={{margin:"10%"}}> 
      <div onClick={()=>{navigate('/Vrindavan')}} style={{border:"1px solid",width:"100%",marginTop:"80px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #a04c0d), url(https://krishnastore.com/images/cache/cat2-Krishna-Art-KrishnaxArtxPrints-360x188.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#a04c0d"}}>
        <div onClick={()=>{navigate("/vraj")}} style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Vrindavan</div>
      </div>
      <div onClick={()=>{navigate('/Govardhan')}} style={{border:"1px solid",width:"100%",marginTop:"20px",height:"80%",backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #8989a1), url(https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2022/10/18164937/govardhan-puja-1.jpg)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#8989a1"}}>
        <div style={{textAlign:"right",padding:"10%",color:"white",fontFamily:"revert"}}>Govardhan</div>
      </div>
      <div onClick={()=>{navigate('/Mahavan')}} style={{border:"1px solid",width:"100%",marginTop:"20px",height:`${window.screen.width>600?"300px":"80px"}`,backgroundImage: `linear-gradient(to right, rgba(0,0,0,0), #332b0f), url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM5arndPP9pqGj_ZfDBQq3wSI6LrflahEBZA&usqp=CAU)`,backgroundSize: '80% 100%',backgroundRepeat: 'no-repeat',backgroundColor:"#332b0f"}}>
        <div style={{textAlign:"right",paddingTop:"10%",marginRight:"10px",color:"white",fontFamily:"revert",fontSize:"15px"}}>Gokul (Mahavan)</div>
      </div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Belvan')}}>Belvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"15%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Kamyavan')}}>Kamyavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Khadirvan')}}>Khadirvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"15%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Kokilavan')}}>Kokilavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Kumudvan')}}>Kumudvan</div>
      <div style={{float:"left",border:"1px solid",width:"38%",paddingLeft:"10px",marginLeft:"15%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Lohjanghanvan')}}>Lohjanghanvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Madhuvan')}}>Madhuvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"15%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Talvan')}}>Talvan</div>
      </div>}
      {page===2 && <div> <Lectures/></div>}
      {page===3 && <div> <Videos/></div>}
      {page===4 && <div> <More/></div>}
      </div>
      <div className='footer' style={{display:"flex"}}>
      <div onClick={()=>{setpage(3)}} style={{width:"25%",float:"left"}}>
          <div>Videos</div>
          <div style={{height:"3px",backgroundColor:(page===3?"white":"")}}></div>
        </div>
        <div onClick={()=>{setpage(1)}} style={{width:"25%",float:"left",height:"20px"}}>
          <div>Read</div>
          <div style={{height:"3px",backgroundColor:(page===1?"white":"")}}></div>
        </div>
        <div onClick={()=>{setpage(2)}} style={{width:"25%",float:"left"}}>
          <div>Lectures</div>
          <div style={{height:"3px",backgroundColor:(page===2?"white":"")}}></div>
        </div>
        <div onClick={()=>{setpage(4)}} style={{width:"25%",float:"left"}}>
          <div>More</div>
          <div style={{height:"3px",width:"70%",marginLeft:"15px",backgroundColor:(page===4?"white":"")}}></div>
        </div>
      </div>
    </div>
    
  )
}

export default VrajMandal