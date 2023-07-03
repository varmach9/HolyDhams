import React, { useState } from 'react'
import "../../App.css"
import { Videos, Photos, More} from '../VrajMandalResources'

const Vrindavan = () => {
  
  const [page,setpage]=useState(1)
  return (
    <div>
      <div>Vrindavan</div>
      {page===1 && <div> about vrindavan</div>}
      {/* {page===2 && <div> <Lectures/></div>} */}
      {page===3 && <div> <Videos/></div>}
      {page===4 && <div> <Photos/></div>}
      {page===5 && <div> <More/></div>}
      
    </div>
  )
}

export default Vrindavan