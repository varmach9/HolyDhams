import React, { useState } from 'react'
import "../../App.css"
import { Videos, Photos, More, Lectures } from '../VrajMandalResources'

const Vrindavan = () => {
  
  const [page,setpage]=useState(1)
  return (
    <div>
      <div>Vrindavan</div>
      {page===1 && <div> about vrindavan</div>}
      {page===2 && <div> <Lectures/></div>}
      {page===3 && <div> <Videos/></div>}
      {page===4 && <div> <Photos/></div>}
      {page===5 && <div> <More/></div>}
      <div className='footer' style={{display:"flex"}}>
        <div onClick={()=>{setpage(4)}} style={{width:"20%",float:"left"}}>Photos</div>
        <div onClick={()=>{setpage(3)}} style={{width:"20%",float:"left"}}>Videos</div>
        <div onClick={()=>{setpage(1)}} style={{width:"20%",float:"left",height:"20px"}}>Read</div>
        <div onClick={()=>{setpage(2)}} style={{width:"20%",float:"left"}}>Lectures</div>
        <div onClick={()=>{setpage(5)}} style={{width:"20%",float:"left"}}>More</div>
      </div>
    </div>
  )
}

export default Vrindavan