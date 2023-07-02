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
      <div style={{float:"left",border:"1px solid",width:"85%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Vrindavan')}}>Vrindavan</div>
      <div style={{float:"left",border:"1px solid",width:"85%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Govardhan')}}>Govardhan</div>
      <div style={{float:"left",border:"1px solid",width:"85%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Mahavan')}}>Gokul-Mahavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Belvan')}}>Belvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Kamyavan')}}>Kamyavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Khadirvan')}}>Khadirvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Kokilavan')}}>Kokilavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Kumudvan')}}>Kumudvan</div>
      <div style={{float:"left",border:"1px solid",width:"38%",paddingLeft:"10px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Lohjanghanvan')}}>Lohjanghanvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Madhuvan')}}>Madhuvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Talvan')}}>Talvan</div>
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