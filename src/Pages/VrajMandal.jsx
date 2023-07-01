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
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Vrindavan')}}>Vrindavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Govardhan')}}>Govardhan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Belvan')}}>Belvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Kamyavan')}}>Kamyavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Khadirvan')}}>Khadirvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Kokilavan')}}>Kokilavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Kumudvan')}}>Kumudvan</div>
      <div style={{float:"left",border:"1px solid",width:"38%",paddingLeft:"10px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Lohjanghanvan')}}>Lohjanghanvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Madhuvan')}}>Madhuvan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"10%",marginTop:"20px",height:"30px"}} onClick={()=>{navigate('/Mahavan')}}>Mahavan</div>
      <div style={{float:"left",border:"1px solid",width:"35%",paddingLeft:"20px",marginLeft:"0%",marginTop:"20px",height:"30px"}}  onClick={()=>{navigate('/Talvan')}}>Talvan</div>
      </div>}
      {page===2 && <div> <Lectures/></div>}
      {page===3 && <div> <Videos/></div>}
      {page===4 && <div> <More/></div>}
      </div>
      <div className='footer' style={{display:"flex"}}>
        <div onClick={()=>{setpage(3)}} style={{width:"25%",float:"left"}}>Videos</div>
        <div onClick={()=>{setpage(1)}} style={{width:"25%",float:"left",height:"20px"}}>Read</div>
        <div onClick={()=>{setpage(2)}} style={{width:"25%",float:"left"}}>Lectures</div>
        <div onClick={()=>{setpage(4)}} style={{width:"25%",float:"left"}}>More</div>
      </div>
    </div>
    
  )
}

export default VrajMandal